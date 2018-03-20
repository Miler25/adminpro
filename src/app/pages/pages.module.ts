import { NgModule } from '@angular/core';

// MODULOS
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

// RUTAS
import { PAGES_ROUTES } from './pages.route';

@NgModule({
	declarations: [
		DashboardComponent,
	    Graficas1Component,
	    ProgressComponent,
	    PagesComponent
	],
	exports: [
		DashboardComponent,
	    Graficas1Component,
	    ProgressComponent,
	    PagesComponent
	],
	imports: [
		SharedModule,
		PAGES_ROUTES
	]
})

export class PagesModule { }