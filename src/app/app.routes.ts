import { Routes } from '@angular/router';
import { CafeComponent } from './cafe/cafe.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import {HeroComponent} from "./hero/hero.component";

export const routes: Routes = [
   { path: "cafe", component: CafeComponent },
   { path: "cart", component: CartComponent },
   { path: "hero", component: HeroComponent},
   { path: "", component: ShopComponent },
   { path: "shop", redirectTo: "", pathMatch: "full" }
 ];
