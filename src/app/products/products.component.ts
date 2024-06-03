import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  // providers : [ProductserviceService]
})
export class ProductsComponent {

  Products : {id : number, name : string, price : number, description : string, image : string, category : string}[] = []

  constructor(private AllProducts : ProductserviceService, private router : Router){}




  ngOnInit(): void {
     this.Products = this.AllProducts.AllProducts
     console.log("Products After Initialization : ", this.Products)

  }

  handleShowDetails(id : number){
 this.router.navigate([`/products/${id}`])
  }


}
