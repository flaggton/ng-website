import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor() {

  }
  public getImageUrl(): string {
    return "/images/ultramarines.jpg";
  }
}
