import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart.dto';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [
  ]
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService: CartService) { }

  public items: Array<CartItem> = [];

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onRemoveItem(item:CartItem) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

}
