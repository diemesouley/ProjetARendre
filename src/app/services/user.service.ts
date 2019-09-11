import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlUser:string="http://127.0.0.1:8000/api/uti/userLister/13";
  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    const headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    //console.log(headers)
    return this.http.get<User[]>(this.urlUser,{headers:headers});
  }

}