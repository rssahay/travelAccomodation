import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogexampleComponent } from 'src/app/core/dialogexample/dialogexample.component';
import { LoginComponent } from 'src/app/core/login/login.component';
import { VaccationService } from 'src/app/Services/vaccation.service';

@Component({
  selector: 'app-holidaypackage-search',
  templateUrl: './holidaypackage-search.component.html',
  styleUrls: ['./holidaypackage-search.component.scss']
})
export class HolidaypackageSearchComponent implements OnInit {

  vaccationRecords: any

  vaccationFormSearch = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required)
  })
  constructor(private vaccationService: VaccationService,private route:Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  searchPackages() {
    if (this.vaccationFormSearch.status == "INVALID") {
      alert("Please enter From and To detination..!!")
    }
    let origin: string = this.vaccationFormSearch.get('from')?.value;
    origin = origin.toLowerCase()
    let destination: string = this.vaccationFormSearch.get('to')?.value;
    destination = destination.toLowerCase();
    this.vaccationService.getVaccationRecords().subscribe((response: any) => {
      this.vaccationRecords = response.packages
      this.vaccationRecords = response.packages.filter((el: any) => {
        let _temporigin: string = el.from
        let _tempdestination: string = el.to
        return ((_temporigin.toLowerCase() == origin) && (_tempdestination.toLowerCase() == destination))
      })
      if(this.vaccationRecords.length == 0){
        alert('No records found')
      }
    })

  }


  bookethePackage(){
    this.route.navigateByUrl('/package/vaccationBooking');

  
  }

}
