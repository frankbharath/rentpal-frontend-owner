import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements Resolve <Promise<any>>{
  private uri:string;

  constructor(private httpClient: HttpClient) { 
    this.uri=environment.server;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.httpClient.post(this.uri+"/api/check",{}).toPromise();
  }
}
