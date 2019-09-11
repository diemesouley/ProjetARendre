import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Partenaire } from '../model/partenaire';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  private urlUser:string="http://127.0.0.1:8000/api/part/partenaires/1";
  private urlPart="http://localhost:8000/api/part/ajoutPartenaire";
  private endpoint="http://localhost:8000/api/part/ajoutPartenaire";
  constructor(private http:HttpClient) { }

  getPartenaires():Observable<Partenaire[]>{
    const headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log(headers)
    return this.http.get<Partenaire[]>(this.urlUser,{headers:headers});
  }

  partenaireFile(
    matricule:string,
    nomPartenaire:string,
    ninea:string,
    emailPartenaire:string,
    adressePartenaire:string,
    telephonePartenaire:string,
    status:string,
    username: string,
    password: string,
    matriculeUser: string,
    nomUser: string,
    prenomUser: string,
    emailUser: string,
    telephoneUser: string,
    adresseUser: string,
    statusUser: string,
    fileToUpload: File
    ) {
    const urlPart = 'http://localhost:8000/api/part/ajoutPartenaire';
    const formData: FormData = new FormData();
    
    formData.append('matricule', matricule);
    formData.append('nomPartenaire', nomPartenaire);
    formData.append('ninea', ninea);
    formData.append('emailPartenaire', emailPartenaire);
    formData.append('adressePartenaire', adressePartenaire);
    formData.append('telephonePartenaire', telephonePartenaire);
    formData.append('status', status);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('matriculeUser', matriculeUser);
    formData.append('nomUser', nomUser);
    formData.append('prenomUser', prenomUser);
    formData.append('emailUser', emailUser);
    formData.append('telephoneUser', telephoneUser);
    formData.append('adresseUser', adresseUser);
    formData.append('statusUser', statusUser);
    formData.append('imageName', fileToUpload, fileToUpload.name);
    return this.http.post(urlPart, formData);
  }

  AjouterPartenaire(partenaire: any){
    return this.http.post<any>(this.endpoint,partenaire);    
  }

}