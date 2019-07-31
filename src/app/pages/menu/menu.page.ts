import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { NavParams, ModalController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';
import { ModalOptions } from '@ionic/core';
import { ProductModalPage } from '../product-modal/product-modal.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menu: Categories[];
  cart: any[] = [];
  total: number;

  constructor(
    public router : Router,
    public navParams: NavParams,
    private menuService: MenuService,
    private modalCtrl: ModalController
  ) {
    
   }

  ngOnInit() {
    this.menuService.getMenu(this.navParams.get('restaurant')).subscribe(
      menu => {this.menu = menu['categories'];
    console.log(menu['categories'])}
    );
  }

  /**
  * Méthode qui prend les indexs des catégories et des produits 
  * qui rajoute l'objet désiré au panier. Elle incrémente le compteur de l'objet
  * et lance la donction de calcul du prix final. Elle ajoute la propriété quantity
  * qui n'est pas définie dans l'objet initial.
  * @param {number} catId
  * @param {number} productId
  */
_addToCart(catId, productId) {
  this.menu[catId].products[productId].quantity = 
  this.menu[catId].products[productId].quantity
  ? this.menu[catId].products[productId].quantity + 1
  : 1;

  this.cart.push(this.menu[catId].products[productId]);
  this._totalPrice();
}


/**
  * Méthode qui prend les indexs des catégories et des produits 
  * qui supprime l'objet désiré du panier. Elle décrémente le compteur de l'objet
  * et lance la fonction de calcul du prix final. Elle modifie la propriété quantity
  * en conséquence
  * @param {number} catId
  * @param {number} productId
  */
_deleteFromCart(catId, productId){
  this.menu[catId].products[productId].quantity = 
  this.menu[catId].products[productId].quantity === 0 
  ? 0 
  :this.menu[catId].products[productId].quantity - 1;

  const itemToRemove = this.cart.findIndex(item => 
    item.name === this.menu[catId].products[productId].name);
    if(this.cart[itemToRemove] && this.cart[itemToRemove].quantity >= 0) {
      this.cart.splice(itemToRemove, 1);
    }
    this.total -= this.menu[catId].products[productId].price;
    this._totalPrice();
  }

// redirige vers la page de paiments si le panier contient au moins un produit.
  _onOrder(){
    if(this.cart.length > 0) {

      this.router.navigate(['/payment',{cart: this.cart,
        total: this.total}]);

    }
  }

/**
  * Méthode qui prend l'index et la catégorie et d'un produit 
  * et ouvre une modale concernant le produit en question
  * en conséquence
  * @param {number} catId
  * @param {number} productId
  */
async _productModal(catId, productId) {


  const modal = await this.modalCtrl.create({
    component: ProductModalPage,
    componentProps: { product: this.menu[catId].products[productId] }
  });
  
  
 modal.present();
 modal.onWillDismiss()
  
}

/**
  * Méthode qui calcule le prix total du panier si le panier a au moins un élément.
  */
  _totalPrice(){
    this.total = this.cart.length > 0 ? this.cart
    .map(item => item.price)
    .reduce((a, b) => {
      return a+b;
    }) : '0';
  }

  /**
    * Prend l'index de la catégorie et ouvre ou la ferme le menu déroulant au click.
    * Ferme les autres menus déroulant si il y en a d'autre ouverts
    * la propriété open est automatiquement rajouté à l'objet en cours. Elle n'est pas
    * définie dans l'objet initial.
    * @param {number} i
    */
  _toggleCategory(i){
    this.menu[i].open = !this.menu[i].open;
    this.menu.forEach(item => {
      if(item !== this.menu[i]) {
        item.open = false;
      }
    });
  }

}
