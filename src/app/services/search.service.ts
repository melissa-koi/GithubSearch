import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  public getProfile(searchQuery) :Observable<any>{
    const url = `https://api.github.com/users/${searchQuery}`
    return this.http.get<any>(url)
  }

  public getRepos(searchQuery) :Observable<any[]>{
    const url = `https://api.github.com/users/${searchQuery}/repos`
    return this.http.get<any[]>(url)
  }
  
}
