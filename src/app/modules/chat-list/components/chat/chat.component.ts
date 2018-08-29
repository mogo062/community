import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private user : string;
  private guest : string ;
  private messages : any[] ;
  private message : string = '';

  constructor(private route : ActivatedRoute, private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      this.messages = [];
      this.user = this.userService.getUser();
      this.guest = params['username'];
    });
  }

  onKeyUp(event) {

  }

  close() {
    this.router.navigate([{outlets: {chat: null}}]);
  }

}
