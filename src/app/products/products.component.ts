import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [HttpClientModule],
})
export class ProductsComponent {
  Products: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }[] = [];

  constructor(
    private AllProducts: ProductserviceService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:9197/AllProducts').subscribe(
      (data) => {
        console.log('Local Server Data : ', data);
        this.AllProducts.StoreProducts(data as any);
        this.Products = this.AllProducts.AllProducts;
      },
      (error) => {
        console.error('Error: ', error);
      }
    );

    // this.Products = this.AllProducts.AllProducts;
    console.log('Products After Initialization : ', this.Products);
  }

  handleShowDetails(id: number) {
    this.router.navigate([`/products/${id}`]);
  }
}
