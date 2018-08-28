import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params} from '@angular/router';
import { ForumsService } from '../../modules/forums/services/forums.service';


@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  private users : any[];
  private talkTo : string;
  constructor(private router : Router, private forumsService : ForumsService) { }

  ngOnInit() {
    this.users = this.forumsService.users;

  }

  close() {
    this.router.navigate([{outlets: {chat: null}}]);
    console.log(this);
  }
}
