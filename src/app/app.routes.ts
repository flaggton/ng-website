import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TestComponent } from './test/test/test.component';
import { ErrorpageComponent } from './errorpage/errorpage/errorpage.component';
import { UltramarinesComponent } from './ultramarines/ultramarines/ultramarines.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'test', component: TestComponent},
    {path: 'ultramarines', component: UltramarinesComponent},
    {path: '**', component: ErrorpageComponent},
];
