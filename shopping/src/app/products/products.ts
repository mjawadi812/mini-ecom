import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import {ChangeDetectorRef} from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service'; 

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
  standalone: true
})
export class Products implements OnInit{
  products$: Observable<Product[]> | undefined;
  loading = true;
  error : string | null = null;
  constructor(
    private productService: ProductService,
    private cartService: CartService
    ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
  addToCart(p: any) {
    console.log('BEFORE addItem - cart items:', this.cartService.items);
    this.cartService.addItem(p);
    console.log('AFTER addItem - cart items:', this.cartService.items);
  }
}


export interface Product {
  id: number,
  name: string,
  price: number,
  description: string
}