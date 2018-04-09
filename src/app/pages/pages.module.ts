import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// NG2 - CHART
import { ChartsModule } from 'ng2-charts';

// MODULOS
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

// RUTAS
import { PAGES_ROUTES } from './pages.route';

// COMPONENTES
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
	declarations: [
		DashboardComponent,
	    Graficas1Component,
	    ProgressComponent,
	    PagesComponent,
	    IncrementadorComponent,
	    GraficoDonaComponent,
	    AccountSettingsComponent,
	    PromesasComponent,
	    RxjsComponent
	],
	exports: [
		DashboardComponent,
	    Graficas1Component,
	    ProgressComponent,
	    PagesComponent
	],
	imports: [
		SharedModule,
		PAGES_ROUTES,
		FormsModule,
		ChartsModule
	]
})

export class PagesModule { }