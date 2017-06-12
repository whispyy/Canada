import {Component} from 'angular2/core';

// views
import {Home} from './home/home';

@Component({
    selector: 'my-app',
    template: '<home></home>',
    directives:[Home]
})

export class AppComponent {
}
