import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TestComponent } from './test/test/test.component';
import { ErrorpageComponent } from './errorpage/errorpage/errorpage.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'test', component: TestComponent},
    {path: '**', component: ErrorpageComponent},
];
