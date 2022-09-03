import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotelstayService } from 'src/app/Services/hotelstay.service';

@Component({
  selector: 'app-hotelsearch',
  templateUrl: './hotelsearch.component.html',
  styleUrls: ['./hotelsearch.component.scss']
})
export class HotelsearchComponent implements OnInit {
  model:any;

  hotelSearch = new FormGroup({
    city : new FormControl(''),
    checkin: new FormControl(''),
    checkout : new FormControl('')

  })
  constructor(private hotelstayservice :HotelstayService) { }

  ngOnInit(): void {
  }


  searchHotels(){

    let userSelectedCheckinDate = new Date(this.hotelSearch.get('checkin')?.value).toLocaleDateString();
    let userSelectedCheckoutDate = new Date(this.hotelSearch.get('checkout')?.value).toLocaleDateString();

    console.log(userSelectedCheckinDate)

    this.hotelstayservice.getListofHotels().subscribe((listofHotels:any) => {
      console.log("resposne", listofHotels)
      let hotels = listofHotels.hotels
    // let display =   listofHotels.hotels.filter((el:any) => {
    //   return ((userSelectedCheckinDate >= el.checkInDate  &&  userSelectedCheckinDate <= el.checkoutDate) && (userSelectedCheckoutDate >= el.checkInDate &&  userSelectedCheckoutDate <= el.checkoutDate ))
    // })
      for(let item of hotels){
        if(((userSelectedCheckinDate  >=  new Date(item.checkInDate).toLocaleDateString())  &&  (userSelectedCheckinDate <= new Date(item.checkoutDate).toLocaleDateString()))
        )
        // && (userSelectedCheckoutDate >= new Date(item.checkInDate).toLocaleDateString()) && (userSelectedCheckoutDate <= new Date(item.checkoutDate).toLocaleDateString())
      {
        //(yourCheckout >= hotelcheckin &&  yourcheckout <= hotelcheckoutdate ))
        console.log("display", item)
      }
      }
   
    })

  }

}
