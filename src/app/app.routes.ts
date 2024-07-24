import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TestComponent } from './test/test/test.component';
import { ErrorpageComponent } from './errorpage/errorpage/errorpage.component';
import { UltramarinesComponent } from './ultramarines/ultramarines/ultramarines.component';
import { DarkAngelsComponent } from './dark-angels/dark-angels/dark-angels.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'ultramarines', component: UltramarinesComponent},
    {path: 'dark-angels', component: DarkAngelsComponent},
    {path: 'test', component: TestComponent},
    {path: '**', component: ErrorpageComponent},
];
