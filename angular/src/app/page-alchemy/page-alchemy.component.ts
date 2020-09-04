//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS
import { Component, ViewChildren, QueryList }	from '@angular/core';
import { recipe, alchemical_recipes }			from '../../assets/json/alchemical_recipes';
import { reagent, alchemical_reagents }			from '../../assets/json/alchemical_reagents';

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE COMPONENT
@Component({
	selector: 'app-page-alchemy',
	templateUrl: './page-alchemy.component.html',
	styleUrls: ['./page-alchemy.component.scss']
})

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
export class PageAlchemyComponent {

	// CHILDREN
	@ViewChildren('toggle') toggles: QueryList<any>; 

	// CORE 
	all_recipes: recipe[];
	recipes: recipe[];
	all_reagents: reagent[];
	reagents: reagent[];

	////////////////////////////////////
	constructor() {
		this.all_recipes = alchemical_recipes;
		this.recipes = this.all_recipes.filter(this.filterRecipes.bind(this));
	}

	////////////////////////////////////
	updateSources(event) {
		this.recipes = this.all_recipes.filter(this.filterRecipes.bind(this));
	}

	////////////////////////////////////
	filterRecipes(recipe) {
		let hasSource = true;
		
		return hasSource;
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
	getShapeValue(shape) {
		if (shape.value == null) return "-";
		else return shape.value;
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
}