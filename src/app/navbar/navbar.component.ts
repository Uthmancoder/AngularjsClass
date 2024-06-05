import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  CartItems: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }[] = [];

  productLength: number = 0;

  constructor(
    private http: HttpClient,
    private ProductStore: ProductserviceService
  ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:9197/CartItems').subscribe((data) => {
      console.log('Data : ', data);
      this.ProductStore.StoreCartItems(data as any);
      this.CartItems = this.ProductStore.CartItems;
      this.productLength = this.CartItems.length;
    });
  }
}
