import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loguser: clientclass = new clientclass();
  p: any;
  url = 'http://localhost:8000/loguser';
  constructor(public http: HttpClient,public route:Router) {}

  ngOnInit() {}

  login() {
    this.http.post<any>(this.url, this.loguser).subscribe((x) => {
      if ("sucess") {
        this.route.navigate(['/mainscreen']);
      }
    })
    
  }
}

export class userclass {
  name: string | any;
  age: string | any;
  password: string | any;
  email:string|any;
}
export class clientclass {
  name: string | any;
  // age: string | any;
  password: string | any;
}
