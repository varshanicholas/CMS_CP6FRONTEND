import { Injectable } from '@angular/core';
import { Userregistration } from '../model/userregistration';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  //Verify username and password
  public loginVerify(userregistration: Userregistration) {
    console.log("In service");
  //call webAPI for checking Username and password
  return this.httpClient.get<Userregistration>(environment.apiUrl
    +'Logins/' + userregistration.username + '/' + userregistration.password);
}
public logOutRemoveItems(){

localStorage.removeItem("USER_NAME");
localStorage.removeItem("ACCESS_ROLE");
localStorage.removeItem("JWT_TOKEN");

this.router.navigate(['auth/login']);


}

}
