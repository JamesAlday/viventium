import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
	constructor(protected sanitizer: DomSanitizer) {}

	public transform(value: any, type: string): any {
		const sanitized = this.sanitizer.bypassSecurityTrustHtml(value);
		console.log(sanitized);
		return sanitized;
		// return angular.bypassSecurityTrustHtml(sanitized);
	}
}