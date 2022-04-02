import {Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../dto/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item!: Item;
  inCart = 0;

  constructor(private cartService: CartService,
              private itemService: ItemService,
              private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.loadItem();
  }

  loadInCartQty(){
    this.inCart = this.cartService.getQtyInCart(this.item.code);
  }

  loadItem(){
    const itemCode = this.activeRoute.snapshot.paramMap.get('code');

    if (itemCode){
      this.itemService.getItem(itemCode).subscribe(item => {
        this.item = item;
        this.loadInCartQty();
      }, error => {
        this.router.navigateByUrl('/home');
      })
    }else{
      this.router.navigateByUrl('/home');
    }
  }

  updateCart(increment: boolean) {
    increment ? this.inCart++ : this.inCart--;
    this.cartService.updateCart(this.item, this.inCart);
  }

}
