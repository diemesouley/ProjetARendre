import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';

@Component({
  selector: 'app-partenaire-list',
  templateUrl: './partenaire-list.component.html',
  styleUrls: ['./partenaire-list.component.scss']
})
export class PartenaireListComponent implements OnInit {

  partenaires=[];
  constructor(private partenaireService:PartenaireService) { }

  ngOnInit() {
    
    this.partenaireService.getPartenaires()
    .subscribe(res =>  {
        this.partenaires = res      
      err => console.log(err)},
    );
  }
  
}