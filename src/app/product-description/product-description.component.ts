import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.css',
})
export class ProductDescriptionComponent {
  productId: string | null = '';
  SingleProduct: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private ReceivedProduct: ProductserviceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.paramMap.get('id');
    //  console.log("Received Id : ", this.productId)
    this.SingleProduct = this.ReceivedProduct.AllProducts.find(
      (product) => Number(product.id) === Number(this.productId)
    );
    console.log('Received Product : ', this.SingleProduct);
  }

  handleAddToCart(id: number) {
    console.log('Id : ', id);
    console.log('Single Product : ', this.SingleProduct);
    this.http
      .post('http://localhost:9197/CartItems', this.SingleProduct)
      .subscribe((data) => {
        console.log('Data : ', data);
        alert('Product Added to Cart Successfully');
      });
  }
}
