import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.css'
})
export class ProductDescriptionComponent {
  productId : string | null = "";
  SingleProduct : any;

  constructor(private activeRoute : ActivatedRoute, private  ReceivedProduct : ProductserviceService){}

  ngOnInit(): void {
     this.productId = this.activeRoute.snapshot.paramMap.get('id')
    //  console.log("Received Id : ", this.productId)
    this.SingleProduct =   this.ReceivedProduct.AllProducts.find((product)=>product.id === Number(this.productId))
    console.log("Received Product : ", this.SingleProduct)
  }

}
