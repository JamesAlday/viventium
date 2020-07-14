import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {
  public comments;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
		this.comments = this.dataService.getComments();		
  }

  updateComments(comment) {
  	this.comments = comment;
  }
}