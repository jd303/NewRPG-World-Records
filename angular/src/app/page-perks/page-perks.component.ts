//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS
import { Component, ChangeDetectorRef, ViewChildren, QueryList }	from '@angular/core';
import { perks }													from '../../assets/json/perks';

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE COMPONENT
@Component({
	selector: 'app-page-perks',
	templateUrl: './page-perks.component.html',
	styleUrls: ['./page-perks.component.scss']
})

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
export class PagePerksComponent {

	// CHILDREN
	@ViewChildren('toggle') toggles: QueryList<any>; 

	// CORE
	categories: string[] = [];
	all_perks: any[];
	showing = {
		combat: true,
		magic: true,
		profession: true,
		general: true,
		special: true,
	}

	////////////////////////////////////
	constructor(private changeDetector:ChangeDetectorRef) {
		perks.forEach(i => { if (this.categories.indexOf(i.category) == -1) this.categories.push(i.category); });
		this.all_perks = perks;
	}

	////////////////////////////////////
	perksByCategory(categoryName) {
		return this.all_perks.filter(i => i.category == categoryName);
	}

	////////////////////////////////////
	updateShowing(category) {
		this.showing[category] = !this.showing[category];
		this.changeDetector.detectChanges();
	}

	////////////////////////////////////
	prepareDesc(desc) {
		if (Array.isArray(desc)) {
			let html = "";
			desc.forEach(d => html += "<div>"+d+"</div>");
			return html;
		} else {
			return desc;
		}
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
	flipToggles(state) {
		if (state === true) {
			this.toggles.forEach(toggl => {
				let el = toggl.nativeElement;
				el.checked = true;
				el.setAttribute('checked', 'checked');
				this.toggleDisplayClass('perk'+el.getAttribute('data-index'), true);
			});
		} else {
			this.toggles.forEach(toggl => {
				let el = toggl.nativeElement;
				el.checked = false;
				el.removeAttribute('checked');
				this.toggleDisplayClass('perk'+el.getAttribute('data-index'), false, false);
			});
		}
	}
}