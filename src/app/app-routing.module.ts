import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ItemComponent} from "./item/item.component";
import {CartComponent} from "./cart/cart.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'items/:code',
        component: ItemComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/main/home'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main/home'
  },
  {
    path: '**',
    redirectTo: '/main/home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
