import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  public getProfile(searchQuery) :Observable<any>{
    const url = `https://api.github.com/users/${searchQuery}?access_token=${environment.apiKey}`
    return this.http.get<any>(url)
  }

  public getRepos(searchQuery) :Observable<any[]>{
    const url = `https://api.github.com/users/${searchQuery}/repos?access_token=${environment.apiKey}`
    return this.http.get<any[]>(url)
  }
  

  // public handleErrors(error:HttpErrorResponse) {
  //   let errorMessage:string;
  //   if(error.error instanceof ErrorEvent) {
  //     //client side error
  //     errorMessage = `MESSAGE : ${error.error.message}`;
  //   }
  //   //server side error
  //   else{
  //     errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`
  //   }
  //   return throwError(errorMessage);
  // }

}
