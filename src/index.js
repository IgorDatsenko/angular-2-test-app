import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {App2} from 'components/app-2';

@Component({
  selector: 'main'
})

@View({
  directives: [App2],
  template: `
    <app-2></app-2>
  `
})

class Main {

}

bootstrap(Main);
