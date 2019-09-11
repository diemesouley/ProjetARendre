import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  imageUrl: string = "/assets/img/son.png";
  fileToUpload: File = null;
  constructor(private authService: AuthService) { }

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

  // Ajout utilisateur  

  OnSubmit(username, password,matriculeUser,nomUser,prenomUser,emailUser,telephoneUser,adresseUser,statusUser,Image){
    this.authService.userFile(
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
          username.value         = null;
          password.value    = null;
          matriculeUser.value              = null;
          nomUser.value           = null;
          prenomUser.value       = null;
          emailUser.value          = null;
          telephoneUser.value          = null;
          adresseUser.value          = null;
          statusUser.value          = null;
          Image.value            = null;
          this.imageUrl = "/assets/img/son.png";
        }
        
      );
  }
}
