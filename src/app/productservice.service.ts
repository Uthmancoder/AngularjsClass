import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  AllProducts = [
    {
      id : 1,
      name : "Men's T-Shirt",
      price : 20000,
      description : "Product 1 Description",
      image : "https://i.ebayimg.com/images/g/Bh4AAOSwBSdkLmHv/s-l960.webp",
      category : "Men's Wear"
    },
    {
      id : 2,
      name : "Women's Skirt",
      price : 20000,
      description : "Product 1 Description",
      image : "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/3480152/1.jpg?4073",
      category : "Men's Wear"
    },
    {
      id : 3,
      name : "Men's T-Shirt",
      price : 20000,
      description : "Product 1 Description",
      image : "https://i.ebayimg.com/images/g/tKoAAOSw2fRkKpt6/s-l960.webp",
      category : "Men's Suit"
    },
    {
      id : 4,
      name : "Womeen's skirt",
      price : 2500,
      description : "Product 1 Description",
      image : "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/0423452/1.jpg?4899",
      category : "Men's Wear"
    },
    {
      id : 5,
      name : "Men's T-Shirt",
      price : 20000,
      description : "Product 1 Description",
      image : "https://i.ebayimg.com/images/g/Bh4AAOSwBSdkLmHv/s-l960.webp",
      category : "Men's Wear"
    }
  ]


  AddProduct(id : number, name : string, price : number, description : string, image : string, category : string){
    this.AllProducts.push({
      id : id,
      name : name,
      price : price,
      description : description,
      image : image,
      category : category
    })
  }

  constructor() { }
}
