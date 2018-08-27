import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ForumsService } from '../../services/forums.service';
import { Forum,Thread } from '../../services/data';

@Component({
  selector: 'thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  private forum : Forum;
  private thread : Thread;

  constructor(private route: ActivatedRoute, private router : Router,private forumsService : ForumsService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      let forum = this.route.snapshot.parent.params['forum_alias'];
      console.log(forum);
      if(! forum ) this.router.navigate(['/not-found']);


      this.thread = this.forumsService.thread(forum, params['thread_alias']);
      if(! this.thread ) this.router.navigate(['/not-found']);

    });
  }

}
