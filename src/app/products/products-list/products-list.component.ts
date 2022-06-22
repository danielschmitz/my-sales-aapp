import { _isTestEnvironment } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { lastValueFrom, Observable } from 'rxjs';
import { CartItem } from 'src/app/cart.dto';
import { CartService } from 'src/app/cart.service';
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
  searchForm!: UntypedFormGroup;

  constructor(
      private productService: ProductService,
      private cartServie: CartService,
      private fb: UntypedFormBuilder
    ) { }

  async ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });
    this.getAllProducts();
  }

  async getAllProducts(searchTerm: string = '') {
    this.productObservable = this.productService.getAll(searchTerm);
    this.products = await lastValueFrom(this.productObservable);
  }

  onSubmit() {
    this.getAllProducts(this.searchForm.value.searchTerm);
  }

  onAddToCart(item:Product) {
    const cartItem: CartItem = {
      idProduct: item.id,
      name: item.name,
      quantity: 1,
      unitPrice: item.unitPrice
    }
    this.cartServie.addItem(cartItem);
  }

}
