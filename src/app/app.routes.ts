import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { NonfoundComponent } from './nonfound/nonfound.component';

export const routes: Routes = [

    {path : "",  component : HomepageComponent},
    {path : "about", component : AboutpageComponent},
    {path : "contact", component : ContactpageComponent},
    {path : "**", component : NonfoundComponent}
];
