import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAll(discontinued: Boolean = false): Observable<Product[]> {
    return this.http.get<Product[]>(environment.api + 'products?_expand=category&_expand=supplier');
  }

  public getById(id: Number): Observable<Product> {
    return this.http.get<Product>(environment.api + 'products/' + id);
  }

  public save(product: Product): Observable<Product> {
    if (product.id) return this.http.put<Product>(environment.api + 'products/' + product.id, product);

    return this.http.post<Product>(environment.api + 'products', product);
  }

  public delete(id?: number): Observable<Product> {
    return this.http.delete<Product>(environment.api + 'products/' + id);
  }

  public create(): Observable<Product> {
    return of<Product>({
      id: 0,
      unitPrice: 1.00,
      unitsInStock: 100,
      name: '',
      category: undefined,
      supplier: undefined,
      discontinued: false
    });
  }

}
