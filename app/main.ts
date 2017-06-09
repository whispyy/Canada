import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';

// views
import {Home} from './home/home';

// components
import {CardComponent} from './components/card/card.component';
import {NavComponent} from './components/nav/nav.component'

bootstrap(AppComponent);
bootstrap(Home);
