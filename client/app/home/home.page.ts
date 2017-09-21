import {
	Component,
	Renderer,
	trigger,
	state,
	style,
	transition,
	animate
} from "@angular/core";

import * as anime from 'animejs';

require('./home.page.scss');

// let LOGO = require('./../../assets/img/home/logo.svg');
// let PRESS01 = require('./../../assets/img/home/press-01.jpg');
// let PRESS02 = require('./../../assets/img/home/press-02.jpg');
// let IPHONE = require('./../../assets/img/home/iphone.png');

@Component({
	selector: 'home-page',
	template: require('./home.page.html'),
	animations: [
		trigger('divHeader', [
			state('normal', style({
				// 'background':'red'
			})),
			state('fixed', style({
				// 'background':'blue'
			})),
			transition('normal => fixed', animate(1500))
		])
	]
})
export class HomePage {
	// logo = LOGO;
	// press01 = PRESS01;
	// press02 = PRESS02;
	// iphone = IPHONE;
	state: string;

	loaded;
	isActive: boolean;
	enterTimeout: any;
	DOM = {};

	constructor(
		private _renderer: Renderer
	) {
		this.onAnimate();
	}

	ngAfterViewInit() {
		this._handlerNavBar();
		this._animatePage();
	}

	private _handlerNavBar() {
		this._renderer.listenGlobal('window', 'scroll', () => {
			let menu: any = document.querySelector('.navbar');
			let body = document.querySelector('body');

			var doc = document.documentElement;
			var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
			if (top > 70) {
				this.navigateIn();
				this.headerOut();
				setTimeout(() => {
					if (!this._hasClass(menu, 'light-color')) {
						menu.classList.add('light-color');
						menu.classList.add('navbar-fixed-top');
					}
				}, 1500);
			} else {
				this.headerIn();
				if (!this._hasClass(menu, 'light-color')) {
					menu.classList.remove('light-color');
				}
			}
		})
	}

	private _hasClass(element: any, className: string) {
		return element.classList.contains(className);
	}

	private _animatePage() {
		this.DOM['intro'] = document.querySelector('.content--intro');
		this.DOM['shape'] = this.DOM["intro"].querySelector('svg.shape');
		this.DOM['logo'] = document.querySelector('svg.csMixtura')
		this.DOM['path'] = this.DOM["shape"].querySelector('path');
		this.DOM['header'] = document.querySelector('.navbar');
	}


	onAnimate() {
		this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
	}
	animationStarted(event) {
		console.log(event);
	}

	animationEnded(event) {
		console.log(event);
	}

	headerOut() {
		anime({
			targets: this.DOM["header"],
			duration: 400,
			easing: 'easeInOutSine',
			translateY: '-80px'
		})
	}

	headerIn() {
		anime({
			targets: this.DOM["header"],
			duration: 400,
			easing: 'easeInOutSine',
			translateY: '0px'
		})
	}

	navigateIn() {
		if (this.loaded) return;
		this.loaded = true;

		anime({
			targets: this.DOM["intro"],
			duration: 1500,
			easing: 'easeInOutSine',
			translateY: '-200vh'
		});

		anime({
			targets: this.DOM["path"],
			duration: 1500,
			easing: 'easeInOutSine',
			d: this.DOM["path"].getAttribute('pathdata:id')
		});
	}

}

