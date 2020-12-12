import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/login.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  public login(event: Event, loginType: string){ 
    event.stopImmediatePropagation();
    window.location.href=this.loginService.socialLogin(loginType);
  }

}
