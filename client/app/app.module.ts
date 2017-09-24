import './../polyfills';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { PageNotFound } from './pageNotFound/pageNotFound';
import { HomePage } from './home/home.page';
import { MetadataModule } from 'ng2-metadata';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { CommonService } from './common/common.service';

@NgModule({
	imports: [
		BrowserModule,
		routing,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		MetadataModule.forRoot(),
		Ng2PageScrollModule.forRoot(),
		BrowserAnimationsModule
	],
	declarations: [
		AppComponent,
		AccountListComponent,
		PageNotFound,
		HomePage
	],
	providers: [
		CommonService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
function newFunction() {
	BrowserAnimationsModule;
}

