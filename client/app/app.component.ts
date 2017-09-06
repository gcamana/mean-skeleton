import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { MetadataService } from 'ng2-metadata';
require('./app.component.scss');

@Component({
	selector: 'mean-skeleton',
	template: '<router-outlet><router-outlet>',
})
export class AppComponent {
	constructor(
		private metadataService: MetadataService,
		private _router: Router
	) {
	}

	ngOnInit() {
		this._router.navigate(['/']);
	}
	ngAfterViewInit() {
	}
}
