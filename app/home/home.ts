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
	list: Object[]

	constructor() {
		this.cards = [];
		this.list = [];
	}

	ngOnInit() {
		this.initCards();
		this.initList();
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
		const test3 = {title: 'card  Title', 
						link: {
							name: 'link name', 
							url: 'content/images/flag_ca.png'
						}, 
						image: 'content/images/flag_ca.png', 
						text: 'this is the third card displaying the canadian flag !'};
		this.cards.push(test1, test2, test3);
	}

	initList(){
		const item1 = {
			name: "Canada",
			url: "blabla",
			active:false
		};
		const item2 = {
			name: "Québec",
			url: "blabla",
			active:true
		};

		this.list.push(item1, item2);
	}
}