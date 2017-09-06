import { Component, Renderer } from "@angular/core";

require('./home.page.scss');
let LOGO = require('./../../assets/img/home/logo.svg');
let PRESS01 = require('./../../assets/img/home/press-01.jpg');
let PRESS02 = require('./../../assets/img/home/press-02.jpg');
let IPHONE = require('./../../assets/img/home/iphone.png');

@Component({
	selector: 'home-page',
	template: require('./home.page.html')
})
export class HomePage {
	logo = LOGO;
	press01 = PRESS01;
	press02 = PRESS02;
	iphone = IPHONE;

	constructor(
		private _renderer: Renderer
	) { }

	ngAfterViewInit() {
		this._handlerNavBar();
	}

	private _handlerNavBar() {
		this._renderer.listenGlobal('window', 'scroll', () => {
			let menu: any = document.getElementsByClassName('navbar')[0];
			let body = document.querySelector('body');

			var doc = document.documentElement;
			var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
			if (top > 90) {
				if (!this._hasClass(menu, 'open'))
					menu.classList.add('open');
			} else {
				if (this._hasClass(menu, 'open'))
					menu.classList.remove('open');
			}
		})
	}
	private _hasClass(element: any, className: string) {
		return element.classList.contains(className);
	}

}

