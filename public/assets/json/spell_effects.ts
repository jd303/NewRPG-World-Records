import { ɵNgStyleImpl } from '@angular/common';

interface shape_def  { cst:number; tch:number; svt:number; cne:number; aur:number; vol:number; wll:number; bem:number; pln:number; }
interface effect_def { dc:number; effect:string; }
interface source_def { innate:boolean, flow:boolean, tapped:boolean, life:boolean, yearns:boolean, granted:boolean }
interface spell_effect_def {
	name: string;
	desc: string;
	save: string;
	time: string;
	shapes: shape_def;
	effects: effect_def[];
	sources: source_def;
}

export const spell_effects: spell_effect_def[] = [
	{
		name: "Create Energy: Fire",
		desc: "Create fire in the shape you’ve chosen, dealing damage and catching flammable items alight.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Create Energy: Acid",
		desc: "Create acid in the shape you’ve chosen, dealing damage and corroding surfaces and items.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Create Energy: Necrotic",
		desc: "Create necrotic energy in the shape you’ve chosen, dealing damage and decaying life and perferting sanctity.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:false, flow:false, tapped:false, life:true, yearns:false, granted:true }
	},
	{
		name: "Create Energy: Lightning",
		desc: "Create lighting in the shape you’ve chosen, dealing damage and/or spreading to other targets in water or connected by conductive material.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Create Energy: Cold",
		desc: "Create lighting in the shape you’ve chosen, dealing damage and/or spreading to other targets in water or connected by conductive material.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:false, flow:true, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Create Energy: Sound",
		desc: "Create sound in the shape you’ve chosen, dealing damage and potentially deafening creatures.",
		save: "CON",
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:true, flow:true, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Create Energy: Radiant",
		desc: "Create sound in the shape you’ve chosen, dealing damage and potentially deafening creatures.",
		save: "CON",
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:false, flow:false, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Create Energy: Laceration",
		desc: "Create kinetic lacerations in the shape you’ve chosen, dealing damage and/or shredding materials.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Create Energy: Arcane",
		desc: "Create arcane energy in the shape you’ve chosen, dealing damage and/or creating entropic effects.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:true, flow:true, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Create Energy: Wind",
		desc: "Create wind in the shape you’ve chosen, dealing damage and/or pushing subjects around.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Create Energy: Poison",
		desc: "Create poison in the shape you’ve chosen, dealing damage and/or diseasing and sickening targets.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:2, pln:null },
		effects: [
			{ dc:0, effect:"1 Damage or minor effect" },
			{ dc:1, effect:"2 Damage or minor effect" },
			{ dc:2, effect:"4 Damage and minor effect" },
			{ dc:3, effect:"6 Damage and moderate effect" },
			{ dc:4, effect:"8 Damage and major effect" },
			{ dc:5, effect:"10 Damage and major effect" }
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},

	{
		name: "Imbue Item: Fire",
		desc: "Embed fire into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Imbue Item: Acid",
		desc: "Embed acid into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Imbue Item: Necrotic",
		desc: "Embed necrotic into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:false, flow:false, tapped:false, life:true, yearns:false, granted:true }
	},
	{
		name: "Imbue Item: Lightning",
		desc: "Embed lightning into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Imbue Item: Cold",
		desc: "Embed cold into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:false, flow:true, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Imbue Item: Sound",
		desc: "Embed sound into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: "CON",
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:true, flow:true, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Imbue Item: Radiant",
		desc: "Embed radiant into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: "CON",
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:false, flow:false, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Imbue Item: Laceration",
		desc: "Embed lacerations into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Imbue Item: Arcane",
		desc: "Embed arcane into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:true, flow:true, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Imbue Item: Wind",
		desc: "Embed wind into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Imbue Item: Poison",
		desc: "Embed poison into an item or weapon, which expends itself on a creature or entities that satisfies a trigger, (e.g. touch, wounded by, a noise was made, or approached within a few meters).  Cannot satisfy specific creature types or people, and needn’t damage the triggerer.",
		save: null,
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"1 damage + minor effect" },
			{ dc:3, effect:"2 damage + minor effect" },
			{ dc:4, effect:"3 damage + moderate effect" },
			{ dc:5, effect:"4 damage + moderate effect" }
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},

	{
		name: "Suppress Energy: Fire",
		desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
		save: null,
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:2, wll:2, bem:1, pln:null },
		effects: [
			{ dc:0, effect:"Reduce effects" },
			{ dc:1, effect:"Reduce damage by 1" },
			{ dc:2, effect:"Reduce damage by 2" },
			{ dc:3, effect:"Reduce damage by 3" },
			{ dc:4, effect:"Reduce damage by 4" },
			{ dc:5, effect:"Reduce damage by 5" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Suppress Energy: Acid",
		desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
		save: null,
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:2, wll:2, bem:1, pln:null },
		effects: [
			{ dc:0, effect:"Reduce effects" },
			{ dc:1, effect:"Reduce damage by 1" },
			{ dc:2, effect:"Reduce damage by 2" },
			{ dc:3, effect:"Reduce damage by 3" },
			{ dc:4, effect:"Reduce damage by 4" },
			{ dc:5, effect:"Reduce damage by 5" },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Suppress Energy: Necrotic",
		desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
		save: null,
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:2, wll:2, bem:1, pln:null },
		effects: [
			{ dc:0, effect:"Reduce effects" },
			{ dc:1, effect:"Reduce damage by 1" },
			{ dc:2, effect:"Reduce damage by 2" },
			{ dc:3, effect:"Reduce damage by 3" },
			{ dc:4, effect:"Reduce damage by 4" },
			{ dc:5, effect:"Reduce damage by 5" },
		],
		sources: { innate:false, flow:false, tapped:false, life:true, yearns:false, granted:true }
	},
	{
		name: "Suppress Energy: Lightning",
		desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
		save: null,
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:2, wll:2, bem:1, pln:null },
		effects: [
			{ dc:0, effect:"Reduce effects" },
			{ dc:1, effect:"Reduce damage by 1" },
			{ dc:2, effect:"Reduce damage by 2" },
			{ dc:3, effect:"Reduce damage by 3" },
			{ dc:4, effect:"Reduce damage by 4" },
			{ dc:5, effect:"Reduce damage by 5" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Suppress Energy: Cold",
		desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
		save: null,
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:2, wll:2, bem:1, pln:null },
		effects: [
			{ dc:0, effect:"Reduce effects" },
			{ dc:1, effect:"Reduce damage by 1" },
			{ dc:2, effect:"Reduce damage by 2" },
			{ dc:3, effect:"Reduce damage by 3" },
			{ dc:4, effect:"Reduce damage by 4" },
			{ dc:5, effect:"Reduce damage by 5" },
		],
		sources: { innate:false, flow:true, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Suppress Energy: Sound",
		desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
		save: "CON",
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:2, wll:2, bem:1, pln:null },
		effects: [
			{ dc:0, effect:"Reduce effects" },
			{ dc:1, effect:"Reduce damage by 1" },
			{ dc:2, effect:"Reduce damage by 2" },
			{ dc:3, effect:"Reduce damage by 3" },
			{ dc:4, effect:"Reduce damage by 4" },
			{ dc:5, effect:"Reduce damage by 5" },
		],
		sources: { innate:true, flow:true, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Suppress Energy: Radiant",
		desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
		save: "CON",
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:2, wll:2, bem:1, pln:null },
		effects: [
			{ dc:0, effect:"Reduce effects" },
			{ dc:1, effect:"Reduce damage by 1" },
			{ dc:2, effect:"Reduce damage by 2" },
			{ dc:3, effect:"Reduce damage by 3" },
			{ dc:4, effect:"Reduce damage by 4" },
			{ dc:5, effect:"Reduce damage by 5" },
		],
		sources: { innate:false, flow:false, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Suppress Energy: Laceration",
		desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
		save: null,
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:2, wll:2, bem:1, pln:null },
		effects: [
			{ dc:0, effect:"Reduce effects" },
			{ dc:1, effect:"Reduce damage by 1" },
			{ dc:2, effect:"Reduce damage by 2" },
			{ dc:3, effect:"Reduce damage by 3" },
			{ dc:4, effect:"Reduce damage by 4" },
			{ dc:5, effect:"Reduce damage by 5" },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Suppress Energy: Arcane",
		desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
		save: null,
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:2, wll:2, bem:1, pln:null },
		effects: [
			{ dc:0, effect:"Reduce effects" },
			{ dc:1, effect:"Reduce damage by 1" },
			{ dc:2, effect:"Reduce damage by 2" },
			{ dc:3, effect:"Reduce damage by 3" },
			{ dc:4, effect:"Reduce damage by 4" },
			{ dc:5, effect:"Reduce damage by 5" },
		],
		sources: { innate:true, flow:true, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Suppress Energy: Wind",
		desc: "You use your magics to suppress energies, or to even harness it for your own gains.  When reducing damage using this spell effect, your reaction to that energy is also similarly reduced, such as a 1 damage reduction to cold making snowy conditions less uncomfortable.  When merely reducing effects, any narrative effects of the energy (such as fire catching) will be reduced or delayed.",
		save: null,
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:2, wll:2, bem:1, pln:null },
		effects: [
			{ dc:0, effect:"Reduce effects" },
			{ dc:1, effect:"Reduce damage by 1" },
			{ dc:2, effect:"Reduce damage by 2" },
			{ dc:3, effect:"Reduce damage by 3" },
			{ dc:4, effect:"Reduce damage by 4" },
			{ dc:5, effect:"Reduce damage by 5" },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:true, granted:true }
	},
	
	{
		name: "Destroy Matter",
		desc: "Destroy matter and life, disintegrating it’s fundamental makeup.  Applying this effect to life-based matter may be a slow effect, requiring concentration and withering it away over time.",
		save: "CON",	
		time: "Moments",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:null, vol:null, wll:null, bem:2, pln:null },
		effects: [
			{ dc:2, effect:"You destroy non-life matter" }, { dc:5, effect:"You destroy living matter" },
		],
		sources: { innate:false, flow:true, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Death",
		desc: "Using terrible magics, you can disconnect the life force from a host body, immediately killing it.  More powerful creatures may be able to resist this effect, but will be terribly weakened regardless.",
		save: "WIS",	
		time: "Instant",
		shapes: { cst:null, tch:2, svt:3, cne:5, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:5, effect:"Target(s) die" },
		],
		sources: { innate:false, flow:true, tapped:false, life:true, yearns:false, granted:true }
	},
	{
		name: "Heal Stamina",
		desc: "Restore stamina to a target.  Targets can have their Stamina  healed a number of times per day equal to 3 + CON (minimum 1).  Any Stamina above the user’s maximum Stamina is applied as temporary Stamina points.",
		save: null,	
		time: "Instant",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:2, bem:2, pln:null },
		effects: [
			{ dc:1, effect:"Restore 2 Stamina" },
			{ dc:2, effect:"Restore 4 Stamina" },
			{ dc:3, effect:"Restore 6 Stamina" },
			{ dc:4, effect:"Restore 8 Stamina" },
			{ dc:5, effect:"Restore 10 Stamina" },
		],
		sources: { innate:true, flow:false, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Heal Wounds",
		desc: "Restore Wounds to a target.  Targets can have their wounds healed equal to their CON (minimum 1)",
		save: null,	
		time: "Instant",
		shapes: { cst:0, tch:0, svt:null, cne:null, aur:3, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:3, effect:"Restore 1 Wound" },
			{ dc:4, effect:"Restore 2 Wounds" },
			{ dc:5, effect:"Restore 3 Wounds" },
		],
		sources: { innate:true, flow:false, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Restoration",
		desc: "Remove or suppress a reduction in a statistic, speed, or skill.",
		save: null,	
		time: "Instant",
		shapes: { cst:0, tch:0, svt:null, cne:null, aur:3, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"No malady has no effect this turn." },
			{ dc:2, effect:"The malady goes dormant for the spell duration." },
			{ dc:4, effect:"Remove the malady." },
		],
		sources: { innate:true, flow:false, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Purification",
		desc: "Remove a mental effect, curse, poison or disease.",
		save: null,	
		time: "Instant",
		shapes: { cst:0, tch:0, svt:null, cne:null, aur:3, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"No malady has no effect this turn." },
			{ dc:2, effect:"The malady goes dormant for the spell duration." },
			{ dc:4, effect:"Remove the malady." },
		],
		sources: { innate:true, flow:false, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Preservation",
		desc: "Slow down the decay of life, delay plant life decay, or place a dying creature in suspended loss of life.  Also prevents the creation of undeath.",
		save: null,	
		time: "2 Hours",
		shapes: { cst:0, tch:0, svt:null, cne:null, aur:1, vol:1, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Halve the decay or bleeding." },
			{ dc:3, effect:"Suspend the decay or bleeding out." },
		],
		sources: { innate:false, flow:false, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Transmute Flesh",
		desc: "You temporarily change the properties and structural makeup of flesh.",
		save: "CON",	
		time: "10DC Mins",
		shapes: { cst:0, tch:0, svt:0, cne:null, aur:3, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"Visual effect only" },
			{ dc:1, effect:"Spider climb" },
			{ dc:1, effect:"Limb weapons / shield" },
			{ dc:2, effect:"Gaseous Form / etherealness" },
			{ dc:2, effect:"Flesh to stone, Stone to Flesh" },
			{ dc:3, effect:"Travel through stone wood, solid matter" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Polymorph",
		desc: "You change the entire form of your target to that of another living creature.  Intellect is unaffected but physical stats are those of the new form.  Unwilling targets gain standard resistances.",
		save: "CON",	
		time: "1 Hour",
		shapes: { cst:0, tch:1, svt:2, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:3, effect:"Change to a creature up to challenge 2" },
			{ dc:4, effect:"Change to a creature up to challenge 4" },
			{ dc:5, effect:"Change to a creature up to challenge 6" },
		],
		sources: { innate:true, flow:true, tapped:false, life:false, yearns:true, granted:false }
	},
	{
		name: "Animate Dead",
		desc: "You animate a nearby corpse to serve you and follow your mental commands.  A corpse, fresh or ancient, must be nearby to be animated.",
		save: null,	
		time: "20DC Mins",
		shapes: { cst:null, tch:null, svt:null, cne:0, aur:0, vol:0, wll:null, bem:null, pln:null },
		effects: [
			{ dc:3, effect:"Undead up to Challenge Rating 4" },
			{ dc:4, effect:"Undead up to Challenge Rating 5" },
			{ dc:5, effect:"Undead up to Challenge Rating 6" },
		],
		sources: { innate:false, flow:false, tapped:false, life:true, yearns:false, granted:true }
	},
	{
		name: "Animate Object",
		desc: "You animate an object to serve your commands.  The object cannot fly, but can balance on any surface it wishes, and can propel itself like a jump up to 2 meters.  It can use itself to attack by bashing or taking advantage of it’s sharp edges. If the object is broken or damaged greatly, the spell ends.  It can perform tasks that do not require dexterity or intelligence for you.",
		save: null,	
		time: "10DC Mins",
		shapes: { cst:null, tch:0, svt:0, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Object up to 1 foot" },
			{ dc:2, effect:"Object up to 2 foot, 1 Damage" },
			{ dc:3, effect:"Object up to 3 foot, 2 Damage" },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:false, granted:false }
	},
	{
		name: "Revulsion: Undead",
		desc: "You create a zone where the strength of Undeath and the Undead is diminished.",
		save: "CHA",	
		time: "1DC Minute",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:2, vol:1, wll:1, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
			{ dc:4, effect:"The effect or entity is completely blocked." },
		],
		sources: { innate:false, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Revulsion: Alignment",
		desc: "You create a zone where the strength of a chosen alignment (evil, good, neutral) is diminished.",
		save: "CHA",	
		time: "1DC Minute",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:2, vol:1, wll:1, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
			{ dc:4, effect:"The effect or entity is completely blocked." },
		],
		sources: { innate:false, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Revulsion: Creature Type",
		desc: "You create a zone where the strength of a chosen Creature Type (animals, fey, elementals, demons) is diminished.",
		save: "CHA",	
		time: "1DC Minute",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:2, vol:1, wll:1, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
			{ dc:4, effect:"The effect or entity is completely blocked." },
		],
		sources: { innate:false, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Revulsion: Magic",
		desc: "You create a zone where the strength of Magic is diminished.",
		save: "CHA",	
		time: "1DC Minute",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:2, vol:1, wll:1, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
			{ dc:4, effect:"The effect or entity is completely blocked." },
		],
		sources: { innate:false, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Revulsion: Divination",
		desc: "You create a zone where the strength of Divination is diminished.",
		save: "CHA",	
		time: "1DC Minute",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:2, vol:1, wll:1, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
			{ dc:4, effect:"The effect or entity is completely blocked." },
		],
		sources: { innate:false, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Revulsion: Teleportation",
		desc: "You create a zone where the strength of teleportation, time manipulation and speed effects is diminished.",
		save: "CHA",	
		time: "1DC Minute",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:2, vol:1, wll:1, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Damage is halved, repulsed creatures are slowed and weakened, and magic effects behave erratically." },
			{ dc:4, effect:"The effect or entity is completely blocked." },
		],
		sources: { innate:false, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Scry",
		desc: "You gaze on a target remotely, seeing and hearing their activity. The difficulty changes depending on your familiarity with the target.	When casting this on an item you can see, the duration raises to 8 hours, and you can see and hear from that item as if you were there.",
		save: null,	
		time: "10 Mins",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:2 },
		effects: [
			{ dc:1, effect:"Cast on item only (lasts 30 mins)" },
			{ dc:2, effect:"You’ve met this entity." },
			{ dc:3, effect:"You know a great deal about this entity, but haven’t met." },
			{ dc:4, effect:"You’ve neither met nor know much about this entity" },
		],
		sources: { innate:false, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Illusion",
		desc: "You create illusory sights and sounds that don’t exist, or alter the perception of a target.",
		save: "INT",	
		time: "3DC Mins",
		shapes: { cst:0, tch:1, svt:1, cne:null, aur:2, vol:3, wll:2, bem:2, pln:4 },
		effects: [
			{ dc:0, effect:"Create a sound or sight that you’ve experienced before" },
			{ dc:1, effect:"Create sights and sounds that you’ve experienced before" },
			{ dc:2, effect:"You create mirror images of yourself" },
			{ dc:3, effect:"Creatures or objects become invisible, or take on visual or audio properties (altered voice, altered appearance)." },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:false, granted:false }
	},
	{
		name: "Teleport Self",
		desc: "You move yourself from one place to somewhere you can either see or have visited before.",
		save: null,	
		time: "Instant",
		shapes: { cst:0, tch:null, svt:null, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Travel up to 50 meters" },
			{ dc:3, effect:"Travel up to 1 kilometer" },
			{ dc:4, effect:"Travel to a space marked by Teleport Destination" },
			{ dc:5, effect:"Travel up to 500km" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:false, granted:false }
	},
	{
		name: "Teleport Destination",
		desc: "You mark a location you currently occupy as a teleport destination.  You may only have 1 destination marked.",
		save: null,	
		time: "1 Year",
		shapes: { cst:0, tch:null, svt:null, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"Place a Teleport Destination" },
		],
		sources: { innate:true, flow:true, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Teleportal",
		desc: "You create a portal that can move willing creatures from one place to somewhere you can either see or have visited before.",
		save: null,	
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:1, pln:null },
		effects: [
			{ dc:2, effect:"Travel up to 50 meters" },
			{ dc:3, effect:"Travel up to 1 kilometer" },
			{ dc:4, effect:"Travel to a space marked by Teleport Destination" },
			{ dc:5, effect:"Travel up to 500km" },
		],
		sources: { innate:false, flow:true, tapped:true, life:false, yearns:false, granted:true }
	},
	{
		name: "Baleful Teleportation",
		desc: "You forcefully teleport one or more creatures from their current location to elsewhere.",
		save: "WIS",	
		time: "Instant",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Travel up to 5 meters" },
			{ dc:3, effect:"Travel up to 50 metres" },
			{ dc:4, effect:"Travel up to 250 metres" },
			{ dc:5, effect:"Travel up to 1 kilometre" },
		],
		sources: { innate:false, flow:true, tapped:true, life:false, yearns:false, granted:false }
	},
	{
		name: "Planar Portal",
		desc: "You create a portal that can move willing creatures from one place to another plane of existence.",
		save: null,	
		time: "Varies",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:1, pln:null },
		effects: [
			{ dc:4, effect:"You travel to a random place on a plane that you’ve visited before." },
			{ dc:5, effect:"You travel to a random place on a plane that you know a lot about." },
		],
		sources: { innate:false, flow:false, tapped:false, life:false, yearns:true, granted:true }
	},
	{
		name: "Lock / Seal",
		desc: "You seal tight a container or door so that mundane methods cannot open it.  You can also create a passcode which, when spoken, allows the door to open.",
		save: null,	
		time: "24 Hours",
		shapes: { cst:null, tch:0, svt:null, cne:null, aur:null, vol:null, wll:null, bem:1, pln:null },
		effects: [
			{ dc:1, effect:"Create a lock." },
			{ dc:2, effect:"Create a lock with a passcode." },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:false, granted:false }
	},
	{
		name: "Unlock / Unseal",
		desc: "You unseal a container that has been sealed with a mundane lock or magical seal.",
		save: null,	
		time: "Instant",
		shapes: { cst:null, tch:0, svt:null, cne:null, aur:null, vol:null, wll:null, bem:1, pln:null },
		effects: [
			{ dc:1, effect:"Unseal simple mundane locks" },
			{ dc:2, effect:"Unseal moderate mundane locks" },
			{ dc:3, effect:"Unseal superior mundane locks" },
			{ dc:0, effect:"Beat the spell’s DC to unseal magical locks" },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:false, granted:false }
	},
	{
		name: "Conjure Mundane Item",
		desc: "You call forth a mundane item such as a weapon, rope, food or a torch to your hands.  The DM will decide the DC of the spell based on the item.",
		save: null,	
		time: "1 Hour",
		shapes: { cst:0, tch:0, svt:null, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"Conjure an item" },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:true, granted:false }
	},
	{
		name: "Conjure Magical Servant",
		desc: "You call forth a sentient magical servant in a shape you choose to perform simple to moderate tasks for you.  Higher DCs grant additional abilities which stack with previous DCs.",
		save: null,	
		time: "30 Mins",
		shapes: { cst:null, tch:null, svt:0, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"Small, agile." },
			{ dc:0, effect:"Medium, 1 Damage. Spider climb." },
			{ dc:0, effect:"Medium, 2 Damage." },
			{ dc:0, effect:"Large, 3 Damage. Flying." },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:false, granted:false }
	},
	{
		name: "Conjure Animals / Swarms",
		desc: "You call forth animals or a swarms.  They can be directed to go places, and can be given basic commands such as defend, attack.",
		save: null,	
		time: "Varies",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:null, vol:0, wll:0, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"5 Small animals or Small Swarm" },
			{ dc:2, effect:"2 Medium animals or medium swarm" },
			{ dc:3, effect:"1 Large animal or swarm" },
			{ dc:4, effect:"4 Medium or 2 large animals" },
		],
		sources: { innate:false, flow:true, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Conjure Magical Beings",
		desc: "You call forth Fey, Elementals, Abberations or Monstrosities to fight for you.  If you lose concentration they may turn on you.  You can summon multiple creatures up to a set Challenge Rating based on the DC.",
		save: null,	
		time: "10 Mins",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:0, vol:0, wll:0, bem:null, pln:null },
		effects: [
			{ dc:3, effect:"Summon up to CR 4 creatures." },
			{ dc:4, effect:"Summon up to CR 5 creatures." },
			{ dc:5, effect:"Summon up to CR 6 creatures." },
		],
		sources: { innate:false, flow:false, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Conjure Fog / Mist",
		desc: "You conjure a rolling fog that streams out from your shaped magics.  As long as you maintain the spell, the fog gets bigger.  Visibility is limited to 5 metres in the fog.",
		save: null,	
		time: "20 Mins",
		shapes: { cst:null, tch:null, svt:null, cne:0, aur:null, vol:0, wll:0, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Conjure Fog" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Conjure Mass",
		desc: "You call forth creeping vines and webs to constrict movement or oils and debris to disrupt footage.",
		save: null,	
		time: "1 Min",
		shapes: { cst:null, tch:null, svt:null, cne:0, aur:null, vol:0, wll:0, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Conjure Oils and Debris" },
			{ dc:2, effect:"Conjure Vines or Webs" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Conjure Large Inanimate",
		desc: "You conjure large, inanimate, mundane and non-damaging items such as furniture, sculptures or even a dwelling.  The total mass and volume cannot exceed 20’ square.",
		save: null,	
		time: "12 Hours",
		shapes: { cst:null, tch:0, svt:null, cne:null, aur:null, vol:0, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Conjure items and objects" },
			{ dc:3, effect:"Conjure a dwelling" },
			{ dc:4, effect:"Conjure both" },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:false, granted:false }
	},
	{
		name: "Banish",
		desc: "You banish a creature or item that has been conjured, or return to it’s starting location a creature that has teleported in the last 5 minutes.",
		save: "CHA",	
		time: "Instant",
		shapes: { cst:null, tch:0, svt:null, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Banish a creature or item" },
		],
		sources: { innate:false, flow:true, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Divine: Purpose",
		desc: "Through magical means you can divine the present and future of a situation.  Use the Discern Realities Move as if passing the Total DC.  Your DM will answer your questions with responses not achievable using mundane means.",
		save: null,	
		time: "Instant",
		shapes: { cst:0, tch:null, svt:null, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:5, effect:"Divine Purpose" },
		],
		sources: { innate:true, flow:false, tapped:false, life:false, yearns:true, granted:true }
	},
	{
		name: "Divine: Item Location",
		desc: "Through magical means, you can divine the location of an item, if it is still within 50 km of you.",
		save: null,	
		time: "Instant",
		shapes: { cst:0, tch:null, svt:null, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"You’ve touched this item before." },
			{ dc:3, effect:"You’ve only seen this item before" },
			{ dc:4, effect:"You know of this item." },
		],
		sources: { innate:true, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Divine: Intention",
		desc: "Through magical means you divine the alignment and 1-3 words describing a target you can see's intentions for the near future.",
		save: null,	
		time: "Instant",
		shapes: { cst:0, tch:null, svt:null, cne:null, aur:0, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Divine Intention" },
		],
		sources: { innate:true, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Divine: Illusion",
		desc: "Through magical means you, or you and other willing creatures see through magical illusions and invisibility.",
		save: null,	
		time: "1 Minute",
		shapes: { cst:0, tch:null, svt:null, cne:null, aur:2, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Divine Illusions" },
		],
		sources: { innate:true, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Divine: The Near Future",
		desc: "Through magical means, you, or you and other creatures can see the immediate future 1 second before it happens.  You gain +1 DR, require one more point to be disadvantaged and cannot be surprised.",
		save: null,	
		time: "1 Min",
		shapes: { cst:0, tch:null, svt:null, cne:null, aur:2, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Divine the near future" },
		],
		sources: { innate:true, flow:false, tapped:false, life:false, yearns:true, granted:true }
	},
	{
		name: "Divine: The Truth",
		desc: "Through magical means you know when a creature speaks a lie, or the purpose and means to use an item.",
		save: null,	
		time: "5 Mins",
		shapes: { cst:null, tch:0, svt:0, cne:2, aur:2, vol:2, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Divine the spoken truth." },
			{ dc:3, effect:"Divine the purpose of an item." },
		],
		sources: { innate:true, flow:false, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Detect Poisons and Diseases",
		desc: "You detect the existence of poisons, diseases and plagues in creatures, water sources or the area around you within sight.",
		save: null,	
		time: "5 Mins",
		shapes: { cst:null, tch:null, svt:null, cne:0, aur:1, vol:0, wll:0, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Detect Poisons and Diseases" },
		],
		sources: { innate:true, flow:false, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Detect Traps",
		desc: "You detect the existence of traps and machinery in the around you within sight.",
		save: null,	
		time: "5 Mins",
		shapes: { cst:null, tch:null, svt:null, cne:0, aur:1, vol:0, wll:0, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Detect Traps and machinery" },
		],
		sources: { innate:false, flow:true, tapped:true, life:false, yearns:false, granted:false }
	},
	{
		name: "Weaken",
		desc: "You sap the strength of your target(s), lowering it’s combat damage and lifting capacity.",
		save: "STR",	
		time: "2DC Mins",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"-1 STR" },
			{ dc:2, effect:"-2 STR" },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Clumsy",
		desc: "You sap the dexterity and nimbleness of your target(s), lowering their dexterity and Defensive Rating.",
		save: "DEX",	
		time: "2DC Mins",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"-1 DEX" },
			{ dc:2, effect:"-2 DEX" },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Sickly",
		desc: "You sap the constitution and heartiness of your target(s), lowering their constitution and hit points.",
		save: "CON",	
		time: "2DC Mins",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"-1 CON" },
			{ dc:2, effect:"-2 CON" },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Feeblemind",
		desc: "You sap the smarts and focus of your target(s), lowering their intelligence.",
		save: "INT",	
		time: "2DC Mins",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"-1 INT" },
			{ dc:2, effect:"-2 INT" },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Witless",
		desc: "You sap the wits and intuition of your target(s), lowering their wisdom.",
		save: "WIS",	
		time: "2DC Mins",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"-1 WIS" },
			{ dc:2, effect:"-2 WIS" },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Charmless",
		desc: "You sap the presence of your target(s), lowering their charisma.",
		save: "CHA",	
		time: "2DC Mins",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"-1 CHA" },
			{ dc:2, effect:"-2 CHA" },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Blindness / Deafness",
		desc: "You disconnect your target’s senses from their cognition, making them temporarily blind or deaf.",
		save: "CON",	
		time: "2DC Mins",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Your target becomes blind." },
			{ dc:2, effect:"Your target becomes deaf" },
		],
		sources: { innate:false, flow:false, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Plague",
		desc: "You infuse a creature, water source or conducive entity with a disease that you know.  If cast at a creature, the speed at which the disease affects the target is based on the DC of the effect.",
		save: "CON",	
		time: "Varies",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Your target is infected." },
			{ dc:3, effect:"A creature is affected and the disease is advanced" },
		],
		sources: { innate:false, flow:false, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Sleep",
		desc: "You trigger mental chemicals and signals and force your targets into a magical sleep.  The higher the DC, the better the sleep.",
		save: "CHA",	
		time: "DC Hours",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Light sleep, basic noises wake." },
			{ dc:2, effect:"Deep sleep, only loud noises or jostling wakes." },
			{ dc:5, effect:"Attacking won’t wake subject." },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Slow",
		desc: "You create a slight time distortion, slowing targeted creatures.  As part of the slow effect, targets fall at a safe speed.",
		save: "STR",	
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"-1 DR, slowed" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Haste",
		desc: "You create a slight time distortion, hastening targeted creatures.  As part of the haste effect, targets fall faster, taking twice falling damage.",
		save: "STR",	
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"+1 DR, hastened" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Armour",
		desc: "You create a field of armour around you or your subjects’ bodies.  You gain a new DR, which superceded any armour you are wearing if lower than the spell’s DR.",
		save: null,	
		time: "10 Mins",
		shapes: { cst:0, tch:1, svt:1, cne:null, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"+1 DR, +1 Defend" },
			{ dc:2, effect:"+1 DR, +2 Defend, +1 Defy Danger" },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Magical Deflection",
		desc: "You create an enchantment around you or your subjects’ bodies, deflecting  and disrupting magics that target you.",
		save: null,	
		time: "10 Mins",
		shapes: { cst:0, tch:1, svt:1, cne:null, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"-1 Magic Damage, +1 Defy Danger" },
			{ dc:3, effect:"-2 Magic Damage, +2 Defy Danger" },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Blur",
		desc: "You create a distortion of light around you, blurring your vision and hiding your whereabouts.  You gain +1 DR (and +2 against Ranged attacks) and attackers need one more point to gain advantage on you.  Your identity is also kept secret during the spell’s effect.",
		save: null,	
		time: "10 Mins",
		shapes: { cst:0, tch:1, svt:1, cne:null, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Blur" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:false, granted:false }
	},
	{
		name: "Enlarge",
		desc: "You twist the molecules of your target, growing in size and stature.  Each size category the target increases grants them +1 STR, CON and maximum Stamina (doesn’t count as stamina healing), but -1 DR.",
		save: "STR",	
		time: "2 Mins",
		shapes: { cst:0, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"+1 Size category" },
			{ dc:3, effect:"+2 Size category" },
		],
		sources: { innate:true, flow:true, tapped:false, life:true, yearns:true, granted:false }
	},
	{
		name: "Reduce",
		desc: "You twist the molecules of your target, reducing their size and stature.  Each size category they lose decreases STR, CON and maximum Stamina by 1, but grants them an additional DR.",
		save: "STR",	
		time: "2 Mins",
		shapes: { cst:0, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"-1 Size category" },
			{ dc:3, effect:"-2 Size category" },
		],
		sources: { innate:true, flow:true, tapped:false, life:true, yearns:true, granted:false }
	},
	{
		name: "Buff: Strength",
		desc: "You raise the ferocity of a creature, granting it strength and power.",
		save: null,	
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"+1 STR" },
			{ dc:2, effect:"+2 STR" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Buff: Dexterity",
		desc: "You raise the nimbleness of a creature, granting it dexterity and alacrity.",
		save: null,	
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"+1 DEX" },
			{ dc:2, effect:"+2 DEX" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Buff: Constitution",
		desc: "You raise the heartiness of a creature, granting it constitution and wellbeing.",
		save: null,	
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"+1 CON" },
			{ dc:2, effect:"+2 CON" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Buff: Intelligence",
		desc: "You raise the sharpness of a creature’s mind, granting it intelligence and wits.",
		save: null,	
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"+1 INT" },
			{ dc:2, effect:"+2 INT" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Buff: Wisdom",
		desc: "You raise the intuition of a creature, granting it wisdom and experience.",
		save: null,	
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"+1 WIS" },
			{ dc:2, effect:"+2 WIS" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Buff: Charisma",
		desc: "You raise the force of character of a creature, granting it charisma and presence.",
		save: null,	
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"+1 CHA" },
			{ dc:2, effect:"+2 CHA" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Buff: Combat skill",
		desc: "You raise the reaction time and focus of a creature, granting if combat skill and agility.",
		save: null,	
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"+1 COMB" },
			{ dc:2, effect:"+2 COMB" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Buff: Combat Damage",
		desc: "Your subject’s swings and hacks take on more force and vigour, dealing more damage to their targets.",
		save: null,	
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"+1 DAM" },
			{ dc:2, effect:"+2 DAM" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Buff: Skills",
		desc: "Your subject looks inside and finds recollects more about their skills than they could even imagine.  All untrained and trained skills are performed better.",
		save: null,	
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"+1 SKILL" },
			{ dc:2, effect:"+2 SKILL" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Magical senses",
		desc: "You use magic to enhance the stimulations entering your target’s senses, granting them increased sight, hearing, touch, taste or smell.",
		save: null,	
		time: "20 Mins",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Enhance one sense." },
			{ dc:2, effect:"Enhance up to 5 senses." },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Terrain modification",
		desc: "Your magics flow through the very lands around you, changing them to your whim. Casting this spell requires concentration and can take 1-10 minutes per DC of the spell, depending on the complexity of the change.  You can target roughly 30’ cube per DC of the spell.",
		save: null,	
		time: "Varies",
		shapes: { cst:null, tch:null, svt:null, cne:0, aur:0, vol:0, wll:0, bem:0, pln:null },
		effects: [
			{ dc:1, effect:"Minor shift / movement of terrain" },
			{ dc:2, effect:"Shape earth and plantlife" },
			{ dc:3, effect:"Shape stone" },
		],
		sources: { innate:false, flow:true, tapped:false, life:false, yearns:true, granted:true }
	},
	{
		name: "Tremors",
		desc: "Your magic causes intense tremors in the surrounding area.  The DC of the spell raises the effect that you can cause.",
		save: "DEX",	
		time: "30 Secs",
		shapes: { cst:null, tch:null, svt:null, cne:0, aur:0, vol:0, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Slight tremors, rattling" },
			{ dc:3, effect:"An earthquake causing 3 damage and unsafe terrain" },
			{ dc:6, effect:"A mighty earthquake causing 8 damage and damaging structures" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Plant Growth",
		desc: "You infuse plants and greenlife around you with magics that immediately promote growth.  Plantlife within range grows noticeably while you concentrate.  Your magics can promote growth to roughly 3 months of normal growth.  Plants providing food or resources will sprout more readily.",
		save: null,	
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:null, cne:0, aur:1, vol:0, wll:null, bem:0, pln:null },
		effects: [
			{ dc:1, effect:"3 Months growth takes 1 hour of concentration" },
			{ dc:2, effect:"3 Months growth takes 20 minutes of concentration" },
		],
		sources: { innate:false, flow:false, tapped:false, life:false, yearns:true, granted:false }
	},
	{
		name: "Fear / Revulsion",
		desc: "Your magics create illusory images in your subject(s), causing them to either fear or be revulsed by a creature or item that both you and they can see. Creatures forced to fight against a feared get -5 COMB and can only attack their feared target.",
		save: "WIS",	
		time: "5 Mins",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"The subject fears the subject and will not willingly approach." },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Fascination",
		desc: "Your magics create a feeling of fascination in a subject for a creature or item that both you and they can see.  The target is drawn to it or to watch it, or if in combat, suffers -1 DR against other attackers.  If enthralled, the DR doubles.",
		save: "WIS",	
		time: "5 Mins",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Fascination in a creature or item." },
			{ dc:3, effect:"Enthrallment in a creature or item." },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:false, granted:true }
	},
	{
		name: "Calm",
		desc: "Your magics slow the heartbeat, adrenaline and thoughts of your subject(s), calming them down and removing all fear.  Targets in combat may not stop attacking, but will be more likely to converse rationally.  Targets in a rage are thrust out of their rage.",
		save: "WIS",	
		time: "5 Mins",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Calm your target(s)" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Anger",
		desc: "Your magics raise the heartbeat, adrenaline and irrational thoughts of your subject(s), angering them.  Targets are more likely to engage in combat and make foolish decisions, and are immune to fear.",
		save: "WIS",	
		time: "5 Mins",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:1, effect:"Enrage your target(s)" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Rationality",
		desc: "Your subject(s) emotions are immediately flushed from their minds.  They are unable to experience empathy, and any emotional effects and fear are removed.",
		save: "WIS",	
		time: "2 Mins",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Subjects experience no emotions" },
		],
		sources: { innate:false, flow:false, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Charm",
		desc: "The subject(s) of your magic look upon you favourably, as your magic plays with their opinions of you.  You are treated as if you were good friends, even if you have never met.  People who are already antagonistic or mistrustful of you may only have their opinion slightly raised.",
		save: "CHA",	
		time: "5 Mins",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"Amicable: +1 on CHA rolls" },
			{ dc:1, effect:"Somewhat friendly: +2 on CHA rolls" },
			{ dc:2, effect:"Friends: +3 on CHA rolls" },
		],
		sources: { innate:true, flow:true, tapped:false, life:true, yearns:true, granted:true }
	},
	{
		name: "Confusion",
		desc: "You befuddle your subject(s), causing them to misunderstand where they are, who their friends are, and what they were doing.  Creatures have a 50% change to take their action, and a 50% chance of taking a random action.",
		save: "INT",	
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:null, pln:null },
		effects: [
			{ dc:3, effect:"Confuse your subject(s)" },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:true, granted:false }
	},
	{
		name: "Insanity",
		desc: "You create images of such nightmarishness that your subject(s) experience temporary insanity.  Subjects will randomly flee, attack wildly, run into danger, or fall to the ground gibbering.  Repeatedly casting this spell on a target may make the effects permanent...",
		save: "WIS",	
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:2, aur:3, vol:3, wll:3, bem:null, pln:null },
		effects: [
			{ dc:4, effect:"Cause insanity in a sentient creature" },
		],
		sources: { innate:false, flow:true, tapped:true, life:true, yearns:false, granted:true }
	},
	{
		name: "Fly",
		desc: "You wrap your subject(s) in magical winds, holding them aloft and able to fly.  The DC determines how fast you can fly.",
		save: null,	
		time: "2DC Mins",
		shapes: { cst:0, tch:0, svt:0, cne:null, aur:3, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"0 Feet per second, weightless" },
			{ dc:1, effect:"1/2 foot per second" },
			{ dc:2, effect:"5 feet per second" },
			{ dc:3, effect:"25 feet per second" },
			{ dc:4, effect:"60 feet per second" },
		],
		sources: { innate:true, flow:true, tapped:true, life:false, yearns:true, granted:false }
	},
	{
		name: "Hold",
		desc: "You use your magics to create a warped gravity field, pinning your targets to the ground, unable to move but able to defend themselves from their position.  Effects that try to move them are likely to fail.  Flying creatures are immediately brought down, taking falling damage.",
		save: "STR",	
		time: "1 Min",
		shapes: { cst:0, tch:0, svt:1, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"Hold willing creatures." },
			{ dc:2, effect:"Hold a small creature" },
			{ dc:3, effect:"Hold a medium creature" },
			{ dc:4, effect:"Hold a large creature" },
			{ dc:5, effect:"Hold a Huge creature" },
		],
		sources: { innate:false, flow:false, tapped:false, life:false, yearns:false, granted:false }
	},
	{
		name: "Command",
		desc: "You issue a verbal command up to 5 words to a subject, and your magics make it painful, distasteful, or unappealing not to comply.  The target will automatically resist if the command given is wholly against their nature, and may find creative ways to comply otherwise.",
		save: "CHA",	
		time: "1 Min",
		shapes: { cst:null, tch:0, svt:1, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:3, effect:"Command the same race" },
			{ dc:4, effect:"Command any sentient race" },
			{ dc:6, effect:"Command any sentient race for 7 days" },
		],
		sources: { innate:false, flow:true, tapped:false, life:false, yearns:false, granted:true }
	},
	{
		name: "Comprehension",
		desc: "You look upon a subject, and their intentions speak loudly to you.  The target(s) of the spell can understand written and spoken languages of sentient creatures, animals and even plantlife, and gain +3 SKILL when using Persuasion / Intimidation, Performance, or Animal Handling for your target.",
		save: null,	
		time: "5 Mins",
		shapes: { cst:0, tch:0, svt:0, cne:2, aur:3, vol:3, wll:null, bem:null, pln:null },
		effects: [
			{ dc:2, effect:"Comprehend a single creature or artistic / written work." },
			{ dc:3, effect:"Comprehend all visible creatures or artistic / written works." },
		],
		sources: { innate:true, flow:true, tapped:false, life:false, yearns:true, granted:true }
	},
	{
		name: "Messaging",
		desc: "You send thought off into the ether, which whispers themselves into the subconscious of your intended target. You must have met this person to target them with this spell.",
		save: null,	
		time: "Varies",
		shapes: { cst:null, tch:0, svt:0, cne:null, aur:null, vol:null, wll:null, bem:null, pln:2 },
		effects: [
			{ dc:1, effect:"You can send 20 words to a target" },
			{ dc:2, effect:"You can converse with target for 30 seconds" },
			{ dc:3, effect:"You can converse with target for 5 minutes" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Dream",
		desc: "You invade the dreams of your target, and can communicate with the most intense of visuals.  Optionally, you can also disrupt their rest, reducing their stamina and placing debuffs on each of their stats for the day.  You must have met the creature to target them with this effect.",
		save: "WIS",	
		time: "4 Hours",
		shapes: { cst:null, tch:null, svt:0, cne:null, aur:null, vol:3, wll:null, bem:null, pln:2 },
		effects: [
			{ dc:2, effect:"You invade the subjects’ dreams." },
			{ dc:3, effect:"You invade their dreams and disrupt their sleep" },
		],
		sources: { innate:false, flow:false, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Commune with the Dead",
		desc: "You cast your minds to the place where the dead’s thoughts are buried.  You open a dialogue with a dead sentient entity whose remains you can see or touch.  The dead are not required to answer, or answer truthfully.",
		save: null,	
		time: "5 mins",
		shapes: { cst:null, tch:0, svt:0, cne:1, aur:1, vol:1, wll:null, bem:null, pln:2 },
		effects: [
			{ dc:2, effect:"You may ask 2 questions" },
			{ dc:4, effect:"You may discuss with the dead for 5 minutes" },
		],
		sources: { innate:false, flow:false, tapped:false, life:false, yearns:false, granted:true }
	},
	{
		name: "Minor wonder",
		desc: "You perform a little minor wonder, such as creating a little light, sound, issuing 1 kg of force at an object, making a small plant sprout, guessing someone’s age, or making an item less than 10 cm invisible or change colour.",
		save: null,	
		time: "Varies",
		shapes: { cst:null, tch:0, svt:0, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"You create a little wonder" },
			{ dc:1, effect:"Your subjects can walk on water" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	},
	{
		name: "Possess body",
		desc: "You upheave the entire ego of a creature, swapping bodies.  You are barely disoriented, though your subject may be.  You retain your mental stats and skills, but gain their physical stats and vice versa.  Bodies do not swap Magical Sources, with the exception of Granted.",
		save: "CHA",	
		time: "Varies",
		shapes: { cst:null, tch:0, svt:0, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:3, effect:"Lasts 30 seconds." },
			{ dc:4, effect:"Lasts 15 minutes" },
			{ dc:5, effect:"Lasts 1 day" },
			{ dc:7, effect:"Permanent" },
		],
		sources: { innate:false, flow:true, tapped:false, life:true, yearns:true, granted:false }
	},
	{
		name: "Mend / Refresh",
		desc: "You coax an item or a handful of small items to remember when they weren’t damaged, worn, or spoiled.  You restore them to a better condition, such as fixing a cracked cup or purifying naturally spoiled water.",
		save: null,	
		time: "Instant",
		shapes: { cst:null, tch:0, svt:0, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"Minor mending" },
			{ dc:1, effect:"Mend and refresh as if new" },
		],
		sources: { innate:false, flow:true, tapped:true, life:false, yearns:true, granted:true }
	},
	{
		name: "Time Stop",
		desc: "You create an area around you in which time itself dares not to flow.  Anything in the range of the spell excluding yourself is outside of time, but cannot be hurt directly.  Enterprising casters will find ways of setting up damage for their victims.",
		save: null,	
		time: "20 Secs",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:0, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:6, effect:"Stop time" },
		],
		sources: { innate:false, flow:true, tapped:false, life:false, yearns:false, granted:true }
	},
	{
		name: "Endure elements",
		desc: "You create an effect to endure elements around you.  The DC you choose determines the abilities you receive using this spell effect, as you gain the effect of each DC up to the one you choose.",
		save: null,	
		time: "20DC Mins",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"Ignore temperatures 5 to 45 degrees" },
			{ dc:1, effect:"Water breathing" },
			{ dc:2, effect:"Elemental effects and damage reduced, such as not catching fire" },
			{ dc:3, effect:"Poison resistance" },
		],
		sources: { innate:true, flow:true, tapped:true, life:true, yearns:true, granted:true }
	}
	/*{
		name: "Template",
		desc: "Template_desc",
		save: null,	
		time: "Varies",
		shapes: { cst:null, tch:null, svt:null, cne:null, aur:null, vol:null, wll:null, bem:null, pln:null },
		effects: [
			{ dc:0, effect:"effect" },
		],
		sources: { innate:false, flow:false, tapped:false, life:false, yearns:false, granted:false }
	}*/
]