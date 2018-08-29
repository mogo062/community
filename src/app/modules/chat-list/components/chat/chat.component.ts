import { Component, ViewChild, ElementRef, OnInit, AfterViewChecked  } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  private user : string;
  private guest : string ;
  private messages : any[] ;
  private message : string = '';
  @ViewChild('scrollBox') private scrollBox: ElementRef;

  constructor(private route : ActivatedRoute, private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      this.messages = [];
      this.user = this.userService.getUser();
      this.guest = params['username'];
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  close() {
    this.router.navigate([{outlets: {chat: null}}]);
  }

  onKeyUp(event) {
    if( event.keyCode == 13 ){
      this.send();
    }
  }

  send(){
    this.addMessage(this.user, this.message, 'left');
    this.reply();
    this.message = '';
  }

  private addMessage(author, message, type) {
      this.messages.push({
        author: author,
        message: message,
        type: type
      });
      this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollBox.nativeElement.scrollTop = this.scrollBox.nativeElement.scrollHeight;
    } catch(err) {
      console.log(err);
    }
  }

  private reply(){
    setTimeout(() => {
      this.addMessage(this.guest, 'hhhhhhhh go ouut !', 'right');
    }, 2500);
  }

}
