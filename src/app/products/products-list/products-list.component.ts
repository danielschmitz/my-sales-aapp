import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Product } from '../product.dto';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  products!: Product[];
  productObservable!: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  async ngOnInit() {
    this.productObservable = this.productService.getAll();
    this.products = await lastValueFrom(this.productObservable);
  }

}
