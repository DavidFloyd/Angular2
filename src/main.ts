//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import {TrafficControllerService} from './TrafficControllerService';

bootstrap(App, [TrafficControllerService])
  .catch(err => console.error(err));