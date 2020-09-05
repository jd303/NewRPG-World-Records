export interface reagent {
	name: string;
	desc: string;
	effects: ReagentProperty[];
	rarity: Rarity;
}

enum Rarity {
	C = "Common",
	U = "Uncommon",
	R = "Rare"
}

export class ReagentProperty {
	code: "string";
	name: "string";
	colour: "string";
	constructor(code, effect, colour) { this.code = code; this.name = effect; this.colour = colour; }
	get info(): any {
		return { code:this.code, name:this.name, colour:this.colour };
	}
}

export const ReagentProperties = {
	For: new ReagentProperty("For", "Fortify", "#888").info,
	The: new ReagentProperty("The", "Thermality", "#e69138").info,
	Hyd: new ReagentProperty("Hyd", "Hydrant", "#3c78d8").info,
	Vig: new ReagentProperty("Vig", "Vigour", "#6aa84f").info,
	Soo: new ReagentProperty("Soo", "Soothe", "#a64d79").info,
	Exc: new ReagentProperty("Exc", "Excite", "#f1c232").info,
	Con: new ReagentProperty("Con", "Confusion", "#674ea7").info,
	Cor: new ReagentProperty("Cor", "Corrode", "#b6d7a8").info,
	Poi: new ReagentProperty("Poi", "Poison", "#cc0000").info,
	Oil: new ReagentProperty("Oil", "Oil", "#111").info,
	Sce: new ReagentProperty("Sce", "Scent", "#e2a2de").info
}

export const ReagentList: reagent[] = [
	{
		name: "Pure Water",
		desc: "Water purified through careful manipulation.",
		effects: [ReagentProperties.Hyd],
		rarity: Rarity.C
	},
	{
		name: "RECIPE",
		desc: "DESC",
		effects: [ReagentProperties.Vig],
		rarity: Rarity.C
	}
]