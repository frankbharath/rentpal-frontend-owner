import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService implements Resolve <Promise<any>> {

  private uri:string;

  constructor(private httpClient: HttpClient) { 
    this.uri=environment.server;
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.httpClient.post(this.uri+"/employee/message", { title: 'Angular POST Request Example' }).toPromise();
  }
}
