import { Router } from '@angular/router';
import { Username } from '../../../../giffs-app/src/app/gifs/interfaces/gifs.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];

  signupObj: any = {
    userName: '',    
    password: ''
  }

  loginObj: any = {
    userName: '',    
    password: ''
  } 


  constructor(private router: Router) { }

  ngOnInit(): void {
    const localData= localStorage.getItem('signUpUsers');
    if (localData != null) this.signupUsers = JSON.parse(localData);    
  }

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',      
      password: ''
    }
  }

  onLogin(){
    const UserExist = this.signupUsers.find(m => 
      m.userName == this.loginObj.userName 
      && 
      m.password == this.loginObj.password
    );

    if (UserExist != undefined) {      
      this.router.navigate(['dashboard']);      
    }else{
      alert("Login no válido")
    }
  }
}
