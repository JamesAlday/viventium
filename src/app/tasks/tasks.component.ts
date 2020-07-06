import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

	tasks = [
		{
			id: 1,
			title: "This is an item",
			text: "This is a description of the item, it might describe a bug/task/comment, it can also display <a href=”​www.google.com”​ >Links</a>",
			tags: ["bug", "issue", "etc"]
		}
	];

	commentForm = new FormGroup({
		comment: new FormControl('', Validators.required)
	})

	submit() {
		alert(JSON.stringify(this.commentForm.value));
		this.commentForm.reset();
	}

	constructor() { }

  ngOnInit(): void {
  }

}
