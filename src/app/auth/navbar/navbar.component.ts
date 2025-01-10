import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/service/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user?: string="";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem("USER_NAME")?.toString();
  }

  //call logout
  logout(): void {
    this.authService.logOutRemoveItems();

}
}


  constructor() { }

  ngOnInit(): void {
  }

}
