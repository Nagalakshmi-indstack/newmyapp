import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userApi : UserService) { }

  ngOnInit(): void {
//this.getUserList()
  }

  getUserList(){
    // this.userApi.read().subscribe((result) => {

    //   alert(JSON.stringify(result))
    // })
  }
}

