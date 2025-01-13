import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  loginForm!: FormGroup;  //!-nver nullable orundefined, if ? -v.versa
  isSubmitted: boolean = false; //to check whther it is true/false, when clicking login
  error: string = '';

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    //Create Reactive Form
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required]], //validations can be given here required,....
      password: ['',[Validators.required]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  //Functionality
  loginCredentials(): void {
    //setting value for isSubmitted
    this.isSubmitted = true;

    //checking form, if it is INVALID
    if(this.loginForm.invalid) {
      this.toastr.error('Please enter UserName and Password', 'EMS v2024')
      this.error = "Please enter UserName and Password"
      return;
    }

    //Checking form, if it is VALID
    if(this.loginForm.valid) {
      this.error= '';
      console.log(this.loginForm.value);

      //Checking Login credentials
      this.authService.loginVerify(this.loginForm.value)
      .subscribe((response) => {
        console.log(response.roleId);

        //Based on Role, need to redirect
        if(response == null) {
          this.error = "Invalid User Name and Password"
        }

        if(response.roleId === 1) {
          console.log("Administartor");
          //localstorage 
          
          localStorage.setItem('USER_NAME', response.uName);
          localStorage.setItem('ACCESS_ROLE', response.roleId.toString());
          localStorage.setItem('JWT_TOKEN', response.token);
          this.router.navigate(['staffs/list']);
        }
        else if(response.roleId === 2){
          console.log("Receptionist");
          
          localStorage.setItem('USER_NAME', response.uName);
          localStorage.setItem('ACCESS_ROLE', response.roleId.toString());
          localStorage.setItem('JWT_TOKEN', response.token);
          this.router.navigate(['receptionist']);
        }
else if(response.roleId === 3){
            console.log("Doctor");
           
            localStorage.setItem('USER_NAME', response.uName);
            localStorage.setItem('ACCESS_ROLE', response.roleId.toString());
            localStorage.setItem('JWT_TOKEN', response.token);
            this.router.navigate(['auth/docdash']);
          }
else if(response.roleId === 4){
          console.log("Pharmasist");
          
          localStorage.setItem('USER_NAME', response.uName);
          localStorage.setItem('ACCESS_ROLE', response.roleId.toString());
          localStorage.setItem('JWT_TOKEN', response.token);
          this.router.navigate(['auth/pharmacist']);
        }
else if(response.roleId === 5){
          console.log("LabTechnician");
          
          localStorage.setItem('USER_NAME', response.uName);
          localStorage.setItem('ACCESS_ROLE', response.roleId.toString());
          localStorage.setItem('JWT_TOKEN', response.token);
          this.router.navigate(['auth/labtechnician']);
        }


        else {
          this.error = "Sorry! Invalid credentials not allowed to the system"
        }
      },
      (error) => {
        console.log(error);
        this.error = "Invalid User Name and Password";
      });

    }
  };

}
