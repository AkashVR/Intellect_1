import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { userclass } from '../login/login.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  reguser: userclass = new userclass();
  p: any;
  url = 'http://localhost:8000/reguser';
  constructor(public http: HttpClient) {}

  ngOnInit() {}

  register() {
    this.http.post<any>(this.url, this.reguser).subscribe((x) => {
      this.p = x;
    })
    this.reguser = new userclass();
  }
}
