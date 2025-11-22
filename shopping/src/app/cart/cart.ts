import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { Product } from '../products/products';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  items$ : Observable<Product[]>;
   constructor(private cartService: CartService) {
      this.items$ = this.cartService.items$;
          // Debug: log current items
      console.log('Cart initialized, current items:', this.cartService.items);
   }
   
   remove(item: Product): void {
    this.cartService.removeItem(item.id);
  }

  clear(): void {
    this.cartService.clearItems();
  }

  total(): number {
    return this.cartService.getTotal();
  }
}
