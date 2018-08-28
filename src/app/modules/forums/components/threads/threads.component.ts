import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ForumsService } from '../../services/forums.service';
import { Thread } from '../../services/data';

@Component({
  selector: 'threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  private threads : Thread[];
  constructor(private route: ActivatedRoute, private router : Router, private forumsService : ForumsService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      this.threads = this.forumsService.threads(params['forum_alias']);
      
      if(! this.threads ) this.router.navigate(['/not-found']);
    });

  }

}
