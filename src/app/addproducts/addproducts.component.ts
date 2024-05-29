import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-addproducts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css',
  // providers : [ProductserviceService]
})
export class AddproductsComponent {
  name : string = "";
  id : number = 0;
  price : number = 0;
  description : string = "";
  image : string = "";
  category : string = "";

  constructor(private AllProduct : ProductserviceService){}

  handleSelectImage(event :any){
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.onloadend = ()=>{
      this.image = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  handleSubmit(){
    this.AllProduct.AddProduct(this.id, this.name, this.price, this.description, this.image, this.category)
    console.log("All Products After Adding :", this.AllProduct.AllProducts)
  }

}
