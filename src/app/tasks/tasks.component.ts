import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
	public comments;

	commentForm = new FormGroup({
		title: new FormControl('', Validators.required),
		comment: new FormControl('', Validators.required),
		tags: new FormControl('', Validators.required),
	});

	constructor(private dataService: DataService) { }

  ngOnInit(): void {
  	// this.commentForm.valueChanges.subscribe(newComment => console.log(newComment));
  	this.comments = this.dataService.comments;
  }

  submit(): void {
		// alert(JSON.stringify(this.commentForm.value));
		const title = this.commentForm.controls['title'].value;
		const message = this.commentForm.controls['comment'].value;
		const tags = this.commentForm.controls['tags'].value.split(', ');

		this.comments.push({
			id: this.comments.length,
			title: title,
			text: message,
			tags: tags
		});

		this.commentForm.reset();
	}
}
