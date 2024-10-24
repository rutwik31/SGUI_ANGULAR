import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://localhost:44359/api/Item'; // Base URL

  constructor(private http: HttpClient) {}

  // Method to add a new item
  addItem(item: { item_name: string; item_description: string }): Observable<any> {
    //return this.http.post<string>(`${this.apiUrl}/AddItem`, item,{ responseType: 'text' as 'json' });
    const url = `${this.apiUrl}/AddItem`;
    let itemAddRequest = {ItemName : item.item_name,ItemDescription : item.item_description};
    return this.http.post(url,itemAddRequest,{responseType: 'json'});
  }
  // getItemDetails(): Observable<any> {
  //   //return this.http.post<string>(`${this.apiUrl}/AddItem`, item,{ responseType: 'text' as 'json' });
  //   const url = `${this.apiUrl}/GetItemDetails`;
  //   return this.http.get(url,{responseType: 'json'});
  // }
  getItemDetails(): Observable<any> {
    const url = `${this.apiUrl}/GetItemDetails`;
    return this.http.get(url);
  }
}
