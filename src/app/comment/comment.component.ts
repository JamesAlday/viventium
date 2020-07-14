import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {
  @Input('comments') comments;

  constructor() {}

  ngOnInit(): void {
		
  }

  // updateComments(comment) {
  // 	this.comments = comment;
  // }
}