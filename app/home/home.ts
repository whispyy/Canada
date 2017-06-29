import {Component, Output} from 'angular2/core';

// components
import {CardComponent} from '../components/card/card.component';
import {NavBarComponent} from '../components/nav-bar/nav-bar.component';
import {ListComponent} from '../components/list/list.component';

@Component({
	selector: 'home',
	templateUrl: 'app/home/home.html',
	styleUrls: ['app/home/home.css'],
	directives: [CardComponent, NavBarComponent, ListComponent],
	providers: []

})

export class Home {

	cards: Object[]

	constructor() {
		this.cards = [];
	}

	ngOnInit() {
		this.initCards();
	}

	initCards(){
		const test1 = {title: 'card 1 Title', 
						link: {
							name: 'link name', 
							url: 'content/images/flag_ca.png'
						}, 
						image: 'content/images/flag_ca.png', 
						text: 'this is the first card displaying the canadian flag !'};
		const test2 = {title: 'card 2 Title', 
						link: {
							name: 'link name', 
							url: 'content/images/flag_ca.png'
						}, 
						image: 'content/images/flag_ca.png', 
						text: 'this is the second card displaying the canadian flag !'};
		this.cards.push(test1, test2);
	}
}