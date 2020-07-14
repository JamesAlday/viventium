import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {
  @Input('comments') comments;
  @Output() deleted = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
		
  }

  deleteComment(id): void {
		this.deleted.emit(id);
	}

	editComment(id): void {
		this.edit.emit(id);
	}
}