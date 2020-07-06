import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  constructor(public domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  comments = [
		{
			id: 1,
			title: "This is an item",
			text: `This is a description of the item, it might describe a bug/task/comment, it can also display <a href="http://​www.google.com">Links</a>`,
			tags: ["bug", "issue", "etc"]
		},
		{
			id: 2,
			title: "This is an item",
			text: `This is a description of the item, it might describe a bug/task/comment, it can also display <a href="http://​www.google.com">Links</a>`,
			tags: ["bug", "issue", "etc"]
		}
	];
}
