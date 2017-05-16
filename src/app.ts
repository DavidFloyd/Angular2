import {Component} from 'angular2/core';
import {TrafficLight} from './trafficLight';
import {TrafficControllerService} from './TrafficControllerService';


@Component({
    selector: 'my-app',
    template: ` 
      <traffic-light [color]="service.getLightColor(0)"> </traffic-light>
      <traffic-light [color]="service.getLightColor(1)"> </traffic-light>
    `,
    directives: [TrafficLight]
})
export class App {
  
  currentColor: String = "green";
  
  constructor(private service : TrafficControllerService) {
    
  }
}
