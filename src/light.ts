import {Component, Input} from 'angular2/core';

@Component({
    selector: 'light',
    template: ` 
      <div class="circle {{onOff ? color : ''}}"></div>
    `
})
export class Light {
  
  @Input()
  public color: Color = Color.Green;
  @Input('isOn')
  public onOff: boolean = true;

}

export enum Color {
  Green = "green",  
  Yellow = "yellow", 
  Red = "red"
};