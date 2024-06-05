import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  AllProducts: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }[] = [];

  StoreProducts(
    data: {
      id: number;
      name: string;
      price: number;
      description: string;
      image: string;
      category: string;
    }[]
  ) {
    this.AllProducts = data;
  }

  AddProduct(
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
    category: string
  ) {
    this.AllProducts.push({
      id: id,
      name: name,
      price: price,
      description: description,
      image: image,
      category: category,
    });
  }

  CartItems: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }[] = [];

  StoreCartItems(
    data: {
      id: number;
      name: string;
      price: number;
      description: string;
      image: string;
      category: string;
    }[]
  ) {
    this.CartItems = data;
  }
}
