import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http : HttpClient) { }

  getMenu(resto){
    return this.http.get(`../assets/${resto}.json`).subscribe(menu => {
      console.log(menu);
    });
  }
}
