import {Component} from 'angular2/core';

@Component({
	selector: 'nav-bar',
	templateUrl: 'app/components/nav-bar/nav-bar.component.html',
	providers: []

})

export class NavBarComponent {
	
	navItems: Object[];


	constructor() {
		this.navItems = [];
	}

	ngOnInit() {
		this.setItems();
	}

	setItems() {
		this.navItems.push({name: "Home", url: "/", active: false});
		this.navItems.push({name: "Gallery", url: "/Gallery", active: false});
		this.navItems.push({name: "FR->QC", url: "/FRQC", active: false});
	}

	activate(navItem) {
		this.setItems;
		navItem.activate = true;
	}

}