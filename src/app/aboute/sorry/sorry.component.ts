import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sorry',
	templateUrl: './sorry.component.html',
	styleUrls: ['./sorry.component.scss']
})
export class SorryComponent implements OnInit {

	public sorry: string = 'Sorry but your page not found'
	lang;
	constructor() { }

	ngOnInit(): void {
		this.lang = localStorage.getItem('lang') || 'en'
	}

	changeLang(e: any) {
		localStorage.setItem('lang', e.value)
		window.location.reload()
	}

}
