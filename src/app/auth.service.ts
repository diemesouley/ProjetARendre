import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

  jwt:string;
  username:string;
  roles:Array<string>;
  private _loginUrl = "http://localhost:8000/api/login_check";
  private _registerUrl = "http://localhost:8000/api/register";
  
  constructor(private http: HttpClient, private route:Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user,{observe:'response'})
  }

  loggedIn() {
    return !!localStorage.getItem('token') 
  }

  getToken() {
    return localStorage.getItem('token')
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt['token']);
    this.jwt=jwt['token'];
    this.parseJWT();

  }
  parseJWT(){
    let jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.obj;
    this.roles=objJWT.roles;
  }
  isAdmin(){
    return this.roles.indexOf('Super_Admin')>=0;

  }
  isAuthenticated(){
    return this.roles && this.isAdmin();
  }

  userFile(
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
    const endpoint = 'http://localhost:8000/api/uti/ajoutUser';
    const formData: FormData = new FormData();
    
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

    return this.http.post(endpoint, formData);
  }

  logOut() {
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

}
