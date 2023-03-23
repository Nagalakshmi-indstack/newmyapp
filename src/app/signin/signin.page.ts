import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  user: any = {}
  constructor(private userApi: UserService, private router: Router) { }

  ngOnInit(): void {
  }
login(){
  //alert(JSON.stringify(this.user))
  this.userApi.login(this.user).subscribe((result: any) => {
    if(result.id)
    {
      this.router.navigate(["/home"])
    }
else{
    alert(result.message)
} 
  })
  
}
}