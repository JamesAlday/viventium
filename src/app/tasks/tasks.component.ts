import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
	commentForm = new FormGroup({
		comment: new FormControl('', Validators.required)
	});

	constructor() { }

  ngOnInit(): void {
  	// this.commentForm.valueChanges.subscribe(newComment => console.log(newComment));
  }

  submit(): void {
		alert(JSON.stringify(this.commentForm.value));

		this.commentForm.reset();
	}
}
