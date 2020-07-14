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
		id: new FormControl(''),
		title: new FormControl('', Validators.required),
		comment: new FormControl('', Validators.required),
		tags: new FormControl('', Validators.required),
	});

	constructor(private dataService: DataService) { }

  ngOnInit(): void {
  	this.comments = this.dataService.comments;
  }

  submit(): void {
  	let tags = this.commentForm.controls['tags'].value;

  	if (typeof tags === 'string') {
  		tags = this.commentForm.controls['tags'].value.split(', ');
  	}

  	const newComment = {
  		id: this.commentForm.controls['id'].value || 0,
  		title: this.commentForm.controls['title'].value,
  		comment: this.commentForm.controls['comment'].value,
  		tags: tags
  	}

		if (newComment.id > 0) {
			//update
			let idx = this.comments.findIndex(el => el.id === newComment.id);
			console.log(idx);

			this.comments[idx] = newComment;
			this.comments = this.comments.slice();

			console.log(this.comments[idx]);
		} else {
			// new
			newComment.id = this.findNextId();
			newComment.tags = tags

			this.comments.push(newComment);	
		}
		

		this.commentForm.reset();
	}

	findNextId(): number {
		let maxId = this.comments[0].id || 0;

		for (let i = 1, len = this.comments.length; i < len; i++) {
			let val = this.comments[i].id;
			maxId = (val > maxId) ? val : maxId;
		}

		return maxId + 1;
	}

	deleteComment(id): void {
		this.comments = this.comments.filter(cmt => cmt.id !== id);
	}

	editComment(id): void {
		let comment = this.comments.filter(cmt => cmt.id === id)[0];
		console.log(comment);
		this.commentForm.setValue(comment);
	}
}
