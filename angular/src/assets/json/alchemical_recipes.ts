import { ReagentEffects } from "./alchemical_reagents";

export interface recipe {
	name: string;
	desc: string;
	effects: string;
	reagents: ReagentEffects[];
	dc: number;
	time: string;
	superb_effects?: string;
}

export const alchemical_recipes: recipe[] = [
	{
		name: "Vigor Tonic",
		desc: "A Vigor Tonic is a small, lightly coloured solution that lasts a few months before settling into a sediment and becoming inert.",
		time: "5 Min",
		effects: "When consumed, restores 1d6+1 Stamina.",
		reagents: [ReagentEffects.Sta, ReagentEffects.Sta, ReagentEffects.Sta],
		dc: 3,
		superb_effects: "When consumed, restores 2d6+2 Stamina.",
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	},
	{
		name: "RECIPE",
		desc: "DESC",
		time: "1 Min",
		effects: "",
		reagents: [ReagentEffects.Sta],
		dc: 0,
		superb_effects: null
	}
]