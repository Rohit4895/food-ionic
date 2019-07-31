import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' }
  // { path: 'confirmation', loadChildren: './pages/confirmation/confirmation.module#ConfirmationPageModule' },
  // { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  // { path: 'product-modal', loadChildren: './pages/product-modal/product-modal.module#ProductModalPageModule' },
  // { path: 'payment', loadChildren: './pages/payment/payment.module#PaymentPageModule' },
  // { path: 'orders', loadChildren: './pages/orders/orders.module#OrdersPageModule' },
  // { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
