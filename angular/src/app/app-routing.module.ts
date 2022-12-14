//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS
import { NgModule }					from '@angular/core';
import { Routes, RouterModule }		from '@angular/router';


//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  PAGE IMPORTS
import { PageMainComponent }			from './page-main/page-main.component';
import { PageSpellEffectsComponent }	from './page-spelleffects/page-spelleffects.component';
import { PagePsionicEffectsComponent }	from './page-psioniceffects/page-psioniceffects.component';
import { PagePerksComponent } 			from './page-perks/page-perks.component';
import { PageAlchemyComponent } 		from './page-alchemy/page-alchemy.component';
import { PageAlchemyReagentsComponent } from './page-alchemyreagents/page-alchemyreagents.component';

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE ROUTES
const routes: Routes = [
	{ path: '',					component: PageMainComponent },
	{ path: 'home',				component: PageMainComponent },
	{ path: 'spelleffects', 	component: PageSpellEffectsComponent },
	{ path: 'psionics', 		component: PagePsionicEffectsComponent },
	{ path: 'perks', 			component: PagePerksComponent },
	{ path: 'alchemy', 			component: PageAlchemyComponent },
	{ path: 'alchemyreagents', 	component: PageAlchemyReagentsComponent },
];

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE MODULE
@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
export class AppRoutingModule { }