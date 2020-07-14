import { Injectable } from '@angular/core';

import { Comment } from './comment';
import { COMMENTS } from './mock-comment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private _comments = COMMENTS;

  constructor() {
  	// this._comments = COMMENTS;
  }

  set comments(value) {
  	console.log(value);
  	// this._comments.push(newComment);
  	
  }

  get comments() {
  	return this._comments;
  }
}
