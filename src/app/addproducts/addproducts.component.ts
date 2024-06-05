import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproducts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css',
  // providers : [ProductserviceService]
})
export class AddproductsComponent {
  name: string = '';
  id: number = 0;
  price: number = 0;
  description: string = '';
  image: string = '';
  category: string = '';
  productForm: any;

  constructor(
    private AllProduct: ProductserviceService,
    private router: Router,
    private http: HttpClient
  ) {}

  handleSelectImage(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      this.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  handleSubmit() {
    this.http
      .post('http://localhost:9197/AllProducts', {
        id: this.id,
        name: this.name,
        price: this.price,
        description: this.description,
        image: this.image,
        category: this.category,
      })
      .subscribe(
        (data) => {
          console.log('Data : ', data);
          alert('Product Added Successfully');
          this.router.navigate(['/products']);
        },
        (error) => {
          console.error('Error : ', error);
        }
      );
    // this.AllProduct.AddProduct(this.id, this.name, this.price, this.description, this.image, this.category)
    // console.log("All Products After Adding :", this.AllProduct.AllProducts)
    // alert("Product Added Successfuly")
    // this.router.navigate(['/products'])
  }
}
