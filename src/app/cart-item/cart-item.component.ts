import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../dto/item";
import {CartService} from "../service/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  item!: Item;
  inCart = 0;

  constructor(private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadInCartQty();
  }

  loadInCartQty(){
    this.inCart = this.cartService.getQtyInCart(this.item.code);
  }

  updateCart(increment: boolean) {
    increment ? this.inCart++ : this.inCart--;
    this.cartService.updateCart(this.item, this.inCart);
  }

  navigateToItem() {
    this.router.navigate(['/items', this.item.code])
  }
}
