import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavigationComponent } from "./shared/navigation/navigation.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DashboardComponent, NavigationComponent]
})
export class AppComponent {
  title = 'ng-website';
}
