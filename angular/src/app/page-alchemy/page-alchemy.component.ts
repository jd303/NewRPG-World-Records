//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS
import { Component, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { recipe, RecipeList } from '../../assets/json/alchemical_recipes';
import { ReagentProperties, ReagentProperty, reagent, ReagentList }	from '../../assets/json/alchemical_reagents';

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
	@ViewChild('reagentFilterForm', {static: false}) reagentFilterForm: HTMLFormElement;

	// CORE 
	all_recipes: recipe[];
	recipes: recipe[];
	all_reagents: reagent[];
	reagent_properties: any;

	reagent_filters: any;

	////////////////////////////////////
	constructor() {
		this.all_recipes = RecipeList;
		this.recipes = this.all_recipes.filter(_ => true);
		this.reagent_properties = ReagentProperties;

		this.reagent_filters = {};
		Object.keys(this.reagent_properties).forEach(key => {
			this.reagent_filters[key] = 0;
		});
	}

	////////////////////////////////////
	updateReagentFilter(event) {
		if (event !== null) {
			let key = event.target.getAttribute('data-reagentfilterkey');
			this.reagent_filters[key] = parseInt(event.target.value);
		}

		if (!this.anyRecipeFiltersNonZero()) {
			return this.recipes = this.all_recipes.filter(_ => true);
		} else {
			let reagentProps = this.prepareReagentCounter();
			this.recipes = this.all_recipes.filter(this.filterRecipes.bind(this, reagentProps));
		}
		
	}

	////////////////////////////////////
	filterRecipes(recipeReagents, recipe) {
		this.resetReagentCounter(recipeReagents);
		let satisfiesReagents = true;
		
		recipe.reagents.forEach(reag => {
			recipeReagents[reag.code].count ++;
		});

		Object.keys(recipeReagents).forEach(propKey => {
			if (recipeReagents[propKey].count > this.reagent_filters[propKey]) {
				satisfiesReagents = false;
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

	////////////////////////////////////
	clearRecipeReagents() {
		Object.keys(this.reagent_filters).forEach(key => {
			this.reagent_filters[key] = 0;
			this.reagentFilterForm.nativeElement.reset();
		});
		this.updateReagentFilter(null);
	}

	////////////////////////////////////
	prepareReagentCounter() {
		return JSON.parse(JSON.stringify(this.reagent_properties));
	}

	////////////////////////////////////
	resetReagentCounter(reagentCounter) {
		Object.keys(reagentCounter).forEach(key => {
			reagentCounter[key].count = 0;
		});
	}

	////////////////////////////////////
	anyRecipeFiltersNonZero() {
		let val: number = 0;
		Object.keys(this.reagent_filters).forEach(key => {
			val += this.reagent_filters[key];
		});

		return val > 0;
	}
}