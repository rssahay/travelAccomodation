import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccationService {

  constructor(private http: HttpClient) {

   
   }

   getVaccationRecords(){
    return this.http.get('assets/holidayPackage.json')
  }
}
