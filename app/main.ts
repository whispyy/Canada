import {bootstrap}    from 'angular2/platform/browser';
import {MaterializeModule} from "angular2-materialize";

import {AppComponent} from './app.component';


@NgModule({
  imports: [
    //... 
    MaterializeModule,
  ],
  //... 
})

bootstrap(AppComponent);
