import {Component} from 'angular2/core';

// components
import {CardComponent} from '../components/card/card.component';
import {NavBarComponent} from '../components/nav-bar/nav-bar.component';

@Component({
	selector: 'home',
	templateUrl: 'app/home/home.html',
	styleUrls: ['app/home/home.css'],
	directives: [CardComponent, NavBarComponent],
	providers: []

})

export class Home {
	
	constructor() {}
}