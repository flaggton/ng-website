import { Component, inject } from '@angular/core';
import { AssetsService } from '../../shared/services/assets.service';

@Component({
  selector: 'app-ultramarines',
  standalone: true,
  imports: [],
  templateUrl: './ultramarines.component.html',
  styleUrl: './ultramarines.component.scss'
})
export class UltramarinesComponent {

  public imageurl: string = "/images/ultramarines.jpg";

  public assetsService: AssetsService = inject(AssetsService);

  constructor() {

  }

}

