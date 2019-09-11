import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

  export class transactionService{
    private urlTransaction:string="http://localhost:8000/api/trans/retrait";
    constructor(private http:HttpClient, private route: Router) {

        

     }
  }