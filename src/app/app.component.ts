import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
 
  email:string="";
  password:string="";
  reg_email:string="";
  reg_password:string="";
  reg_confirm_password:string="";
   
  ngOnInit(){

  }

  
 

  register(){
    

  }

  login(){

  }

 
}
