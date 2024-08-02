import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { AssetsService } from '../../shared/services/assets.service';

@Component({
  selector: 'app-ultramarines',
  standalone: true,
  imports: [],
  templateUrl: './ultramarines.component.html',
  styleUrl: './ultramarines.component.scss'
})
export class UltramarinesComponent implements OnInit {

  public imageurl: string = "/images/ultramarines.jpg";


  public names: string[] = [];


  // public assetsService: AssetsService = inject(AssetsService);

  constructor(public assetsService: AssetsService) {
    // this.names.push("Peter", "Paul", "Peryte");
  }
  ngOnInit(): void {
    this.names.push("Peter", "Paul", "Peryte");
  }

}

