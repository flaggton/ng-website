import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor() {

  }
  public getImageUrl(imageUrl: string): string {
    return "/images/" + imageUrl;
  }
}
