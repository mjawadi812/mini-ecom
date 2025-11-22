import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs';
import { Product } from './products';
import {delay} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Phone', price: 699, description: 'A cool smartphone' },
    { id: 2, name: 'Headphones', price: 59, description: 'Noise-cancelling' },
    { id: 3, name: 'Laptop', price: 1299, description: 'Lightweight and fast' }
  ];

  private api = 'http://localhost:8080/api/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api).pipe(
      catchError(err => {
        console.error('Product fetch failed', err);
        return throwError(() => new Error('Failed to load products'));
      })
    );
  }

  getProductById(id: number) : Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id)).pipe(delay(500));
  }
}
