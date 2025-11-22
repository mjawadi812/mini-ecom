import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../products/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
   private itemSubjects = new BehaviorSubject<Product[]>([]);
   items$: Observable<Product[]> = this.itemSubjects.asObservable();

  get items() : Product[]{
    return this.itemSubjects.value;
  }

   addItem(item: Product) {
      const updated = [...this.itemSubjects.value, item];
      this.itemSubjects.next(updated);
   }

   clearItems(){
    this.itemSubjects.next([]); 
   }

   removeItem(id: number) {
      const updated = this.itemSubjects.value.filter(item => item.id !== id);
      this.itemSubjects.next(updated);
   }

   getTotal(): number {
      return this.itemSubjects.value.reduce((sum, item) => (item.price || 0) + sum , 0);
   }
}
