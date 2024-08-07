import { Component } from '@angular/core';
import { ChapterDetailsComponent } from "../shared/chapter-details/chapter-details.component";
import { ChapterDetailsDashboardComponent } from "../shared/chapter-details-dashboard/chapter-details-dashboard.component";

@Component({
  selector: 'app-blood-angels',
  standalone: true,
  imports: [ChapterDetailsComponent, ChapterDetailsDashboardComponent],
  templateUrl: './blood-angels.component.html',
  styleUrl: './blood-angels.component.scss'
})
export class BloodAngelsComponent {

}
