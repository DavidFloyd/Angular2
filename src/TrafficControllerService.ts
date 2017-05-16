import {Injectable} from 'angular2/core';
import {Color} from './light';

@Injectable()
export class TrafficControllerService {
  
  // First value is for even light numbers, second is for odd light numbers
  //            Light 0
  // Light 3               Light 1
  //            Light 2
  lightColors : Array<Color> = [Color.Red, Color.Green];
  
  constructor() {
    setInterval(() => {
      if (this.lightColors[0] == Color.Green) {
        this.switchToRed(0).then(() => this.lightColors[1] = Color.Green);
      } else {
        this.switchToRed(1).then(() => this.lightColors[0] = Color.Green);
      }
    }, 4000);
  }
  
  private switchToRed(index) {
    this.lightColors[index] = Color.Yellow;
    return new Promise<>(resolve => {
      setTimeout(() => {
        this.lightColors[index] = Color.Red;
        resolve();
      }, 1000);
    });
  }
  
  public getLightColor(position : Integer) : Color {
    return this.lightColors[position % 2];
  }
}