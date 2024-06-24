import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { NonfoundComponent } from './nonfound/nonfound.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDescriptionComponent },
  { path: 'add-product', component: AddproductsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: NonfoundComponent },
];
