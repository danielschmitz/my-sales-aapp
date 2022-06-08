import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  searchForm!: FormGroup;

  constructor(
      private productService: ProductService, 
      private fb: FormBuilder
    ) { }

  async ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });
    this.getAllProducts();
  }

  async getAllProducts(searchTerm: string = '') {
    this.productObservable = this.productService.getAll(false, searchTerm);
    this.products = await lastValueFrom(this.productObservable);
  }

  onSubmit() {
    this.getAllProducts(this.searchForm.value.searchTerm);
  }

}
