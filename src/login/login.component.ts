import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

    loginUser() {
     this._auth.loginUser(this.loginUserData)
     .subscribe(
      res => {
        let jwt = res.body;
        this._auth .saveToken(jwt);
        this._router.navigate(['/userList'])

      },
       err => console.log(err)
     )
    }
    isAdmin(){
      return this._auth.isAdmin();
    }
}
