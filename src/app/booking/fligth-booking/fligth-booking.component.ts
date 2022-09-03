import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fligth-booking',
  templateUrl: './fligth-booking.component.html',
  styleUrls: ['./fligth-booking.component.scss']
})
export class FligthBookingComponent implements OnInit {

  constructor() { }

  flightSearch = new FormGroup({

  })

  ngOnInit(): void {
  }

  searchFlights(){
    
  }

}
