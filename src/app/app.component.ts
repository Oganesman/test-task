import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'test';

	constructor(private ts: TranslateService) {
		this.ts.setDefaultLang('en')
		this.ts.use(localStorage.getItem('lang') || 'en')
	}
}
