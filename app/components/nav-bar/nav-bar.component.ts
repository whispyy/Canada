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
		this.activate(0);
	}

	setItems() {
		this.navItems.push({name: "Home", url: "/", active: false});
		this.navItems.push({name: "Gallery", url: "/Gallery", active: false});
		this.navItems.push({name: "FR->QC", url: "/FRQC", active: false});
	}

	activate(index) {
		if (this.navItems.length > index && index > -1) {
			// reset all active item
			this.navItems.forEach(function(el){
				el.active = false;
			});
			// set the selected one.
			this.navItems[index].active = true;
		}
	}

}