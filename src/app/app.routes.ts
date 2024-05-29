import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { NonfoundComponent } from './nonfound/nonfound.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

export const routes: Routes = [
   {path : "", redirectTo : "/home", pathMatch : 'full'},
    {path : "home",  component : HomepageComponent},
    {path : "about", component : AboutpageComponent},
    {path : "contact", component : ContactpageComponent},
    {path :  "services", component : ServicesComponent},
    {path  : "products", component : ProductsComponent},
    {path : "add-product", component : AddproductsComponent},
    {path : "**", component : NonfoundComponent}
];
