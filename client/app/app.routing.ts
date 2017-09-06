import { PageNotFound } from './pageNotFound/pageNotFound';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';

import { AccountListComponent } from './account-list/account-list.component';

export const routing = RouterModule.forRoot(
	[
		{
			path: '',
			component: HomePage,
			data: {
				metadata: {
					title: 'Mean Skeleton - Welcome',
					description: 'Have you seen my rubber duckie?'
				}
			}
		},
		{
			path: 'account-list',
			component: AccountListComponent,
			data: {
				metadata: {
					title: 'Mean Skeleton - List',
					description: 'Have you seen my rubber duckie?'
				}
			}
		},
		{
			path: '**',
			component: PageNotFound,
			data: {
				metadata: {
					title: 'Mean Skeleton - Page Not Found'
				}
			}
		}
	],
	// { enableTracing: (process.env.NODE_ENV === 'production') ? false : true }
);
