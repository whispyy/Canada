import {Component, Input} from 'angular2/core';

@Component({
	selector: 'list',
	templateUrl: 'app/components/list/list.component.html',
	providers: []

})

export class ListComponent {

	@Input()
	items: Object[]

	constructor () {
		this.items = [];
	}

	ngOnInit () {
		this.initList(this.items);
	}

	initList(items: Object[]) {
		this.items = items;
	}
}

// const items = [
// 	{
// 		name: "item name",
// 		url: "item.url",
//		active: false,
// 	}
// ]