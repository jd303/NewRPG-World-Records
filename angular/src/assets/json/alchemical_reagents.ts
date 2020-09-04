export interface reagent {
	name: string;
	desc: string;
	effects: ReagentEffects[];
	rarity: Rarity;
}

enum Rarity {
	C = "Common",
	U = "Uncommon",
	R = "Rare"
}

export enum ReagentEffects {
	Bas = "Base",
	The = "Thermality",
	Hyd = "Hydrant",
	Sta = "Stamina",
	Soo = "Soothe",
	Exc = "Excite",
	Con = "Confusion",
	Cor = "Corrode",
	Poi = "Poison",
	Oil = "Oil",
	Sce = "Scent"
} 

export const alchemical_reagents: reagent[] = [
	{
		name: "RECIPE",
		desc: "DESC",
		effects: [ReagentEffects.Sta],
		rarity: Rarity.C
	}
]