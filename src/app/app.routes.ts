import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TestComponent } from './test/test/test.component';
import { ErrorpageComponent } from './errorpage/errorpage/errorpage.component';
import { UltramarinesComponent } from './ultramarines/ultramarines/ultramarines.component';
import { DarkAngelsComponent } from './dark-angels/dark-angels/dark-angels.component';
import { BloodAngelsComponent } from './blood-angels/blood-angels.component';
import { ImperialFistsComponent } from './imperial-fists/imperial-fists.component';
import { IronHandsComponent } from './iron-hands/iron-hands.component';
import { RavenGuardComponent } from './raven-guard/raven-guard.component';
import { SalamandersComponent } from './salamanders/salamanders.component';
import { SpaceWolvesComponent } from './space-wolves/space-wolves.component';
import { WhiteScarsComponent } from './white-scars/white-scars.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'ultramarines', component: UltramarinesComponent},
    {path: 'dark-angels', component: DarkAngelsComponent},
    {path: 'blood-angels', component: BloodAngelsComponent},
    {path: 'imperial-fists', component: ImperialFistsComponent},
    {path: 'iron-hands', component: IronHandsComponent},
    {path: 'raven-guard', component: RavenGuardComponent},
    {path: 'salamanders', component: SalamandersComponent},
    {path: 'space-wolves', component: SpaceWolvesComponent},
    {path: 'white-scars', component: WhiteScarsComponent},
    {path: 'test', component: TestComponent},
    {path: '**', component: ErrorpageComponent},
];
