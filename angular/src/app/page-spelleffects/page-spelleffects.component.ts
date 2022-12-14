//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS
import { Component, ViewChildren, QueryList }	from '@angular/core';
import { spell_effects }						from '../../assets/json/spell_effects';

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE COMPONENT
@Component({
  selector: 'app-page-spelleffects',
  templateUrl: './page-spelleffects.component.html',
  styleUrls: ['./page-spelleffects.component.scss']
})

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
export class PageSpellEffectsComponent {

	// CHILDREN
	@ViewChildren('toggle') toggles: QueryList<any>; 

	// CORE 
	spell_shapes:any[] = [ { name:"Caster (CST)", checked:true }, { name:"Touch (TCH)", checked:true }, { name:"One Visible (SVT)", checked:false }, { name:"Cone (CNE)", checked:false }, { name:"Circle from you (AUR)", checked:false }, { name:"Sphere/Cube (VOL)", checked:false }, { name:"Wall (WLL)", checked:false }, { name:"Beam (BEM)", checked:false }, { name:"One Target on Plane (PLN)", checked:false } ];
	all_spell_effects: any[];
	spell_effects: any[];
	showing = {
		innate: 	true,
		flow:		true,
		tapped:		true,
		life:		true,
		yearns:		true,
		granted:	true
	}

	////////////////////////////////////
	constructor() {
		this.all_spell_effects = spell_effects;
		this.spell_effects = this.all_spell_effects.filter(this.filter.bind(this));
	}

	////////////////////////////////////
	updateSources(event) {
		this.spell_effects = this.all_spell_effects.filter(this.filter.bind(this));
	}

	////////////////////////////////////
	filter(spell_effect) {
		let hasSource = false;
		Object.keys(this.showing).forEach(key => {
			if (this.showing[key]) {
				if (!hasSource && spell_effect.sources[key]) hasSource = true;
			}
		});
		return hasSource;
	}

	////////////////////////////////////
	toggleDisplayClass(id, forceOn = null, forceOff = null) {
		console.log(id);
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
	flipToggles(state) {
		if (state === true) {
			this.toggles.forEach(toggl => {
				let el = toggl.nativeElement;
				el.checked = true;
				el.setAttribute('checked', 'checked');
				this.toggleDisplayClass('se'+el.getAttribute('data-index'), true);
			});
		} else {
			this.toggles.forEach(toggl => {
				let el = toggl.nativeElement;
				el.checked = false;
				el.removeAttribute('checked');
				this.toggleDisplayClass('se'+el.getAttribute('data-index'), false, false);
			});
		}
	}
}