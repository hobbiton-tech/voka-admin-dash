import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';

import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { WidgetModule } from '../shared/widgets/widget.module';
import { UiModule } from './ui/ui.module';
import { AppsModule } from './apps/apps.module';
import { OtherModule } from './other/other.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AgentsModule } from './agents/agents.module';
import { ReportsModule } from './reports/reports.module';
import { MobilePaymentsModule } from './mobile-payments/mobile-payments.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    // NgApexchartsModule,
    FlatpickrModule.forRoot(),
    UIModule,
    // WidgetModule,
    PagesRoutingModule,
    // UiModule,
    // AppsModule,
    // OtherModule,
    TransactionsModule,
    AgentsModule,
    ReportsModule,
    MobilePaymentsModule,
  ],
})
export class PagesModule {}
