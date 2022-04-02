import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../dto/item";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly ITEM_SERVICE_API = `${environment.baseAPI}/items`;

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Array<Item>>{
    return this.http.get<Array<Item>>(this.ITEM_SERVICE_API).pipe(
      map(items => items.map(convertToItem)));
  }

  getItem(code: string): Observable<Item> {
    return this.http.get<Item>(`${this.ITEM_SERVICE_API}?code=${code}`).pipe(map(convertToItem));
  }
}

function convertToItem(item: any): Item{
  switch (item.rating as any){
    case "SECOND":
      item.rating = 2;
      break;
    case "THIRD":
      item.rating = 3;
      break;
    case "FOURTH":
      item.rating = 4;
      break;
    case "FIFTH":
      item.rating = 5;
      break;
    default:
      item.rating = 1;
  }

  item.price = (item as any).unitPrice;
  return item;
}
