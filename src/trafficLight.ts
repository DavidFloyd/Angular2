import {Component, Input} from 'angular2/core';
import {Light, Color} from './light';


@Component({
    selector: 'traffic-light',
    template: ` 
      <light [color]="topColor" [isOn]="selectedColor === topColor"> </light>
      <light [color]="middleColor" [isOn]="selectedColor === middleColor"> </light>
      <light [color]="bottomColor" [isOn]="selectedColor === bottomColor"> </light>
    `,
    directives: [Light]
})
export class TrafficLight {
  
    selectedColor : Color = Color.Red;
    topColor : Color = Color.Red;
    middleColor : Color = Color.Yellow;
    bottomColor : Color = Color.Green;
    
    @Input('color')
    set setColor(color){
      this.selectedColor = color;
    }
    
}