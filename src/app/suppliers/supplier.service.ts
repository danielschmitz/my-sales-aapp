import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supplier } from './supplier.dto';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(environment.api + 'supplier');
  }

  public save(Supplier: Supplier): Observable<Supplier> {
    if (Supplier.id) return this.http.put<Supplier>(environment.api + 'supplier/' + Supplier.id, Supplier);

    return this.http.post<Supplier>(environment.api + 'supplier', Supplier);
  }

  public delete(id: number) {
    return this.http.delete(environment.api + 'supplier/' + id);
  }
}
