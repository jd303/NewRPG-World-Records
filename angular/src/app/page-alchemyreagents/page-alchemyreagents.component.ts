//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS
import { Component, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { recipe, RecipeList } from '../../assets/json/alchemical_recipes';
import { ReagentProperties, ReagentProperty, reagent, ReagentList }	from '../../assets/json/alchemical_reagents';

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE COMPONENT
@Component({
	selector: 'app-page-alchemyreagents',
	templateUrl: './page-alchemyreagents.component.html',
	styleUrls: ['./page-alchemyreagents.component.scss']
})

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
export class PageAlchemyReagentsComponent {

	// CHILDREN
	@ViewChildren('toggle') toggles: QueryList<any>;
	@ViewChild('toggleForm', {static:false }) toggleForm: HTMLFormElement;

	// CORE
	all_reagents: reagent[];
	reagents: reagent[];
	reagent_properties: any;
	
	reagentPropertiesToggle = {}

	////////////////////////////////////
	constructor() {
		this.reagent_properties = ReagentProperties;
		Object.keys(this.reagent_properties).forEach(key => {
			this.reagentPropertiesToggle[key] = { code:this.reagent_properties[key].code, name:this.reagent_properties[key].name, colour:this.reagent_properties[key].colour, toggled:true };
		});

		this.all_reagents = ReagentList;
		this.reagents = this.all_reagents.filter(this.filterReagents.bind(this));
	}

	////////////////////////////////////
	updateReagentToggles() {
		this.reagents = this.all_reagents.filter(this.filterReagents.bind(this));
	}

	////////////////////////////////////
	filterReagents(reagent) {
		let satisfiesReagents = false;
		Object.keys(this.reagentPropertiesToggle).forEach(key => {
			if (this.reagentPropertiesToggle[key].toggled && reagent.properties.find(prop => prop.code == this.reagentPropertiesToggle[key].code)) {
				satisfiesReagents = true;
				return;
			}
		});

		return satisfiesReagents;
	}

	////////////////////////////////////
	toggleDisplayClass(id, forceOn = null, forceOff = null) {
		if (forceOn === true) document.getElementById(id).classList.remove("hidden");
		else if (forceOff === false) document.getElementById(id).classList.add("hidden");
		else {
			document.getElementById(id).classList.toggle("hidden");
		}
	}

	////////////////////////////////////
	flipToggles(which, state) {
		if (state === true) {
			this.toggles.forEach(toggl => {
				if ((toggl.nativeElement as HTMLElement).getAttribute('data-type') != which) return;
				let el = toggl.nativeElement;
				el.checked = true;
				el.setAttribute('checked', 'checked');
				this.toggleDisplayClass('se'+el.getAttribute('data-index'), true);
			});
		} else {
			this.toggles.forEach(toggl => {
				if ((toggl.nativeElement as HTMLElement).getAttribute('data-type') != which) return;
				let el = toggl.nativeElement;
				el.checked = false;
				el.removeAttribute('checked');
				this.toggleDisplayClass('se'+el.getAttribute('data-index'), false, false);
			});
		}
	}

	//////////////////////////////
	clearReagentFilter() {
		this.toggleForm.nativeElement.reset();
		this.updateReagentToggles();
	}
}