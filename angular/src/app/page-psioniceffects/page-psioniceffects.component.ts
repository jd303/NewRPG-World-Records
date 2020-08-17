//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS
import { Component, ViewChildren, QueryList }	from '@angular/core';
import { psionics_effects }						from '../../assets/json/psionics_effects';

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE COMPONENT
@Component({
	selector: 'app-page-psioniceffects',
	templateUrl: './page-psioniceffects.component.html',
	styleUrls: ['./page-psioniceffects.component.scss']
})

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
export class PagePsionicEffectsComponent {

	// CHILDREN
	@ViewChildren('toggle') toggles: QueryList<any>; 

	// CORE 
	psionic_shapes:any[] = [ { name:"Caster (CST)", checked:true }, { name:"Touch (TCH)", checked:true }, { name:"One Visible (SVT)", checked:false }, { name:"Cone (CNE)", checked:false }, { name:"Circle from you (AUR)", checked:false }, { name:"Sphere/Cube (VOL)", checked:false }, { name:"Wall (WLL)", checked:false }, { name:"Beam (BEM)", checked:false }, { name:"One Target on Plane (PLN)", checked:false } ];
	all_psionics_effects: any[];
	psionics_effects: any[];
	showing = {
		kinetics: 			true,
		clairsentience:		true,
		telepathy:			true,
		psychometabolism:	true,
		metapsionics:		true
	}

	////////////////////////////////////
	constructor() {
		this.all_psionics_effects = psionics_effects;
		this.psionics_effects = this.all_psionics_effects.filter(this.filter.bind(this));
	}

	////////////////////////////////////
	updateSources(event) {
		this.psionics_effects = this.all_psionics_effects.filter(this.filter.bind(this));
	}

	////////////////////////////////////
	filter(psionic_effect) {
		let hasSource = false;
		Object.keys(this.showing).forEach(key => {
			if (this.showing[key] && psionic_effect.talent == key) {
				hasSource = true;
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