import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cart-item-model';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  existsCart(): boolean {
    return localStorage.getItem('cart') != null;
  }

  setCart(cart: CartItemModel[]) : void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): CartItemModel[] {
  //if(localStorage.getItem('cart') !== null) {
    return JSON.parse(localStorage.getItem('cart') || '{}');
  /*} else {
    return new CartItemModel(new Product(1, 'Error', 'Error', 0, ''));
  }*/

  }

  clear(): void {
    localStorage.removeItem('cart');
  }
}
