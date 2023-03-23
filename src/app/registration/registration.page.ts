import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  
})
export class RegistrationPage implements OnInit {
  user:any = {}

  constructor(private usersApi:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    alert("registration" + JSON.stringify(this.user))
    
    this.usersApi.create(this.user).subscribe((result) => {
      alert("registration successfully completed" + JSON.stringify(result))
     this.router.navigate(['login'])
    })

  }

}


