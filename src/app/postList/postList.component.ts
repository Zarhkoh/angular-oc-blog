import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postList',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css']
})
export class PostListComponent implements OnInit {
  
  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postCreationDate : Date;
  @Input() loveIts : number;

  onAddLove() {
    this.loveIts = this.loveIts + 1
  }

  onRemoveLove() {
    this.loveIts = this.loveIts - 1
  }
  constructor() { 
  }

  ngOnInit() {
  }

}
