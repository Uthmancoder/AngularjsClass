import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { AppRoutingModule } from './app.routing.module';
import { ProductserviceService } from './productservice.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    AppRoutingModule,
    HttpClientModule,
    LayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductserviceService],
})
export class AppComponent {
  title = 'newProject';
}
