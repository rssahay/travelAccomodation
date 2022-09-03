import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelstayService {

  constructor(private http : HttpClient) { }


  getListofHotels(){
   return this.http.get('assets/hotelSearch.Json')
  }
}
