import {bootstrap}    from 'angular2/platform/browser';
import {MaterializeModule} from "angular2-materialize";

import {AppComponent} from './app.component';



// components
import {CardComponent} from './components/card/card.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component'

@NgModule({
  imports: [
    //... 
    MaterializeModule,
  ],
  //... 
})

bootstrap(AppComponent);

bootstrap(CardComponent);
bootstrap(NavBarComponent);
