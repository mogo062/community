import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username : string = '';
  private password : string = '';
  private return : string = '';
  constructor(private userService : UserService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.return = params['return'] || '/forums';
      if(!this.userService.isGuest()){
        this.go();
      }
    });
  }

  login() {
    if (this.username && this.password ) {
      this.userService.login(this.username);
      this.go();
    }
  }

  go() {
    this.router.navigateByUrl(this.return);
  }

}
