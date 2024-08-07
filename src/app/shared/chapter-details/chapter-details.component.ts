import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-chapter-details',
  standalone: true,
  imports: [],
  templateUrl: './chapter-details.component.html',
  styleUrl: './chapter-details.component.scss'
})
export class ChapterDetailsComponent {

    @Input() 
    public imageUrl: string = "";

    @Input()
    public text: string = "";
}
