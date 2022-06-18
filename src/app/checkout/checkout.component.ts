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

  ngOnInit(): void {
  }

  get items() {
    return this.cartService.getItems()
  }

  onRemoveItem(item:CartItem) {
    console.log("remove");
    this.cartService.removeItem(item);
  }

}
