import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';

@Component({
  selector: 'app-enregistrer-part',
  templateUrl: './enregistrer-part.component.html',
  styleUrls: ['./enregistrer-part.component.scss']
})
export class EnregistrerPartComponent implements OnInit {
  
  imageUrl: string = "/assets/img/son.png";
  fileToUpload: File = null;
  
 
  constructor(private _part: PartenaireService) {

   }
  ngOnInit() {

  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  AjouterPartenaire(){

    this._part.AjouterPartenaire(this.fileToUpload)
    .subscribe(
      res =>{
        console.log(res),
        error =>console.log('Error',error);
      }
    );
  }

  OnSubmit(matricule,nomPartenaire,ninea,emailPartenaire,adressePartenaire,telephonePartenaire,status,username,password,matriculeUser,nomUser,prenomUser,emailUser,telephoneUser,adresseUser,statusUser,Image)
    {
    this._part.partenaireFile(
      matricule.value,
      nomPartenaire.value,
      ninea.value,
      emailPartenaire.value,
      adressePartenaire.value,
      telephonePartenaire.value,
      status.value,
      username.value,
      password.value,
      matriculeUser.value,
      nomUser.value,
      prenomUser.value,
      emailUser.value,
      telephoneUser.value,
      adresseUser.value,
      statusUser.value,
     this.fileToUpload).subscribe(
        data => { 
          matricule.value         = null;
          nomPartenaire.value    = null;
          ninea.value              = null;
          emailPartenaire.value           = null;
          adressePartenaire.value       = null;
          telephonePartenaire.value          = null;
          status.value          = null;
          username.value = null;
          password.value = null;
          matriculeUser.value = null;
          nomUser.value = null;
          prenomUser.value = null;
          emailUser.value = null;
          telephoneUser.value = null;
          adresseUser.value = null;
          statusUser.value = null;
          Image.value            = null;
          this.imageUrl = "/assets/img/son.png";
        }
        
      );
  }
}