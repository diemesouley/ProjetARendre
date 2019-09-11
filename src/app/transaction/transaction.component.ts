import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private authService: AuthService) { } 

  ngOnInit() {
  }

  OnSubmit(montant,date,statusTransaction,commEtat,commSys,commExp,commRecept,nomTransaction,dateRetrait,codeTransaction){
    
  }

}
