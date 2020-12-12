import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private uri:string;
  constructor() { 
    this.uri=environment.server;
  }
  socialLogin(id:string){
    if(id=='fb'){
      return this.uri+environment.oauth.fb;
    }else{
      return this.uri+environment.oauth.google;
    }
  }
}
