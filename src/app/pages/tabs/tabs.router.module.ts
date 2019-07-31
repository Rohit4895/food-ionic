import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: 'src/app/pages/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: 'src/app/pages/menu/menu.module#MenuPageModule'
          }
        ]
      },
      {
        path: 'confirmation',
        children: [
          {
            path: '',
            loadChildren: 'src/app/pages/confirmation/confirmation.module#ConfirmationPageModule'
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: 'src/app/pages/orders/orders.module#OrdersPageModule'
          }
        ]
      },
      {
        path: 'payment',
        children: [
          {
            path: '',
            loadChildren: 'src/app/pages/payment/payment.module#PaymentPageModule'
          }
        ]
      },
      {
        path: 'product-modal',
        children: [
          {
            path: '',
            loadChildren: 'src/app/pages/product-modal/product-modal.module#ProductModalPageModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: 'src/app/pages/settings/settings.module#SettingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
