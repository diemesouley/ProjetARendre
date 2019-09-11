import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ang-Auth';

  constructor(private _auth: AuthService) {}


  isAdmin(){
    return this._auth.isAdmin();
  }
  isAuthenticated(){
    return this._auth.isAuthenticated();
  }
  logOut(){
    return this._auth.logOut();
  }
}
