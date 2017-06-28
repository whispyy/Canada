import {Component, Input} from 'angular2/core';

@Component({
	selector: 'card',
	templateUrl: 'app/components/card/card-component.html',
	providers: []

})

export class CardComponent {
	
	@Input()
	item: Object;

	constructor() {
		this.item = {};
	}

	ngOnInit() {
		this.initCard(this.item);
	}

	initCard(item: Object) {
		this.item = item;
	}
}

// Example of object :
//
// item {
// 	title: String,
// 	image: String,
// 	link : {
// 		name: String,
// 		url: String
// 	},
// 	text: String
// }