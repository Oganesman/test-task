import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeComponent } from './aboute/college/college.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


const routes: Routes = [
	{ path: '', component: CollegeComponent },
	{ path: "**", redirectTo: "/notfound" }
];

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	 HttpClientModule,
	 RouterModule.forRoot(routes),
	 TranslateModule.forRoot({
		loader: {
			 provide: TranslateLoader,
			 useFactory: HttpLoaderFactory,
			 deps: [HttpClient]
		}
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
