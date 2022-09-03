import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  checkAuthentication():string | null{
   return  sessionStorage.getItem('loggedInuser')
  }

  getUSerDetails(){
    return this.http.get('assets/userDetails.json');
  }
}
