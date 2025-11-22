import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import {Products} from './products/products';
import { Cart } from './cart/cart';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'products', component: Products, canActivate: [authGuard] },
    { path: 'cart', component: Cart, canActivate: [authGuard]}
];
