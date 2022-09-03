import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userDetails = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  constructor(public router: Router, private authservice: AuthService, public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  SubmitUserDetails() {
    //   this.router.navigateByUrl([/layout])
    let username = this.userDetails.get('userName')?.value;
    let password = this.userDetails.get('password')?.value;

    this.authservice.getUSerDetails().subscribe((response: any) => {
      let userdetails: any[] = response.users;

      let userFound = userdetails.find(el => {
        return el.username == username && el.password == password;
      })

      if (userFound) {
        sessionStorage.setItem('loggedInuser', 'true')
        this.dialog.closeAll();
      } else {
        alert('Please Enter correct username and password !')
        sessionStorage.setItem('loggedInuser', 'false')
      }
    })
  }

}
