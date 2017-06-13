import {Component, Input} from 'angular2/core';

@Component({
	selector: 'nav-bar',
	templateUrl: 'app/components/nav-bar/nav-bar.component.html',
	providers: []

})

export class NavBarComponent {
	
	navItems: Object[];

	@Input()
	active: number;

	constructor() {
		this.navItems = [];
		this.active;
	}

	ngOnInit() {
		this.setItems();
		this.activate(this.active);
		this.initMobile();
	}

	initMobile() {
		$('.button-collapse').sideNav({
          menuWidth: 300, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true // Choose whether you can drag to open on touch screens
        });
	}

	setItems() {
		this.navItems.push({name: "Home", url: "/", active: false});
		this.navItems.push({name: "Gallery", url: "/Gallery", active: false});
		this.navItems.push({name: "FR->QC", url: "/FRQC", active: false});
	}

	activate(index: number) {
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