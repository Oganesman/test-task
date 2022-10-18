import { Component, OnInit } from '@angular/core';
import { AboutInterface } from '../interface/about.interface';


@Component({
	selector: 'app-college',
	templateUrl: './college.component.html',
	styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {

	public college?: AboutInterface = {
		id: 123,
		name: 'Oganes',
		photo: 'Photo',
		about: 'Aboute me',
		media_type: 666,
		vimeo_video_id: 228,
	}
	lang;

	constructor() { }

	ngOnInit(): void {
		this.lang = localStorage.getItem('lang') || 'en'
	}


	changeLang(e: any) {
		console.log(e.value);
		localStorage.setItem('lang', e.value)
		window.location.reload()
	}
}
