import { Component } from '@angular/core';
import { ChapterDetailsComponent } from "../chapter-details/chapter-details.component";

@Component({
  selector: 'app-chapter-details-dashboard',
  standalone: true,
  imports: [ChapterDetailsComponent],
  templateUrl: './chapter-details-dashboard.component.html',
  styleUrl: './chapter-details-dashboard.component.scss'
})
export class ChapterDetailsDashboardComponent {

}
