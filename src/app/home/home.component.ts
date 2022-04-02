import {Component, OnInit} from '@angular/core';
import {Item} from "../dto/item";
import {ItemService} from "../service/item.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Array<Item> = [];
  onError = false;

  constructor(private itemService: ItemService,
              private toastrService: ToastrService) {

  }

  ngOnInit(): void {
    this.loadAllItems();
  }

  loadAllItems() {
    this.onError = false;
    this.itemService.getAllItems().subscribe(values => {
        this.items = values;
      },
      error => {
        console.error(error);
        this.toastrService.error(error.message, "Failed to fetch data", {
          positionClass: 'toast-center-center',
          progressBar: true
        }).onHidden.subscribe(val => this.onError = true);
      });
  }

}

