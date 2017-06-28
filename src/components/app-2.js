import {Component, View} from 'angular2/core';

@Component({
  selector: 'app-2'
})

@View({
  templateUrl: 'app-2.html'
})

export class App2 {

  constructor() {
    console.info('App2 Component Mounted Successfully');
  }

}
