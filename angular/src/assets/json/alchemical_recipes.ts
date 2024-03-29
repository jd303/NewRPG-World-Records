import { ReagentProperties, ReagentProperty, reagent } from './alchemical_reagents';

export interface recipe {
	type: 'Potion' | 'Bomb' | 'Poison' | 'Salve' | 'Misc';
	name: string;
	desc: string;
	effects: string;
	reagents: reagent[];
	dc: number;
	time: string;
}

export const RecipeList: recipe[] = [
	{
		type: 'Potion',
		name: 'Vigor Tonic',
		desc: 'A Vigor Tonic is a small, lightly coloured solution that lasts a few months before settling into a sediment and becoming inert.',
		time: '60m',
		effects: 'When consumed, restores 5 Stamina.  When you use it, mark a Heal.',
		reagents: [ReagentProperties.Vig, ReagentProperties.Vig, ReagentProperties.Vig],
		dc: 2,
	},
	{
		type: 'Potion',
		name: 'Peptinne',
		desc: 'This thick solution creates a warmth in the stomach and lungs and puts pep in your step.',
		time: '90m',
		effects: 'When consumed, applies 3 temporary Stamina.',
		reagents: [ReagentProperties.Vig, ReagentProperties.The, ReagentProperties.Exc],
		dc: 2,
	},
	{
		type: 'Potion',
		name: 'Mediciner’s Solution',
		desc: 'A large, sipping solution that starts sweet and ends bitter.',
		time: '120m',
		effects: 'When consumed, heals 1 more Wound and 10 more Stamina during a long rest.',
		reagents: [ReagentProperties.Vig, ReagentProperties.For, ReagentProperties.For],
		dc: 3,
	},
	{
		type: 'Potion',
		name: 'Rapid Ameliorant',
		desc: "A combination of rare herbs and ingredients, this potion requires a large investment, but alchemists agree the results are short of magical.  Due to it's expense, this elixir is stored in strong, well stoppered flat flasks.",
		time: '120m',
		effects:
			'When consumed, the drinker heals a temporary Wound.  Replace a wound with a strikethrough to indicate that it is temporarily removed.  After 8 hours, the Wound returns unless healed using conventional or magical means.  Immediately after drinking, mark a Heal.',
		reagents: [
			ReagentProperties.Vig,
			ReagentProperties.Vig,
			ReagentProperties.For,
			ReagentProperties.For,
			ReagentProperties.Exc,
			ReagentProperties.Sce,
		],
		dc: 6,
	},
	{
		type: 'Potion',
		name: 'Counteractant',
		desc: 'Possibly worse than the toxin, at least according to the flavour, the Antitoxin causes immediate flushes of heat, intense sweats and weakness, but this soon passes.',
		time: '10m',
		effects:
			'When consumed, stops all effects of a non-magical poison, except Debilities applied by the poison, for 4 hours.',
		reagents: [ReagentProperties.Poi, ReagentProperties.Sce],
		dc: 2,
	},
	{
		type: 'Potion',
		name: 'Antitoxin',
		desc: 'Possibly worse than the toxin, at least according to the flavour, the Antitoxin causes immediate flushes of heat, intense sweats and weakness, but this soon passes.',
		time: '60m',
		effects:
			'When consumed, removes up to 4 Light Debilities and 1 Regular Debility applied by non-magical poisons and protects the user from poisons for 2 hours.  However the subject also marks a Heal.',
		reagents: [ReagentProperties.Poi, ReagentProperties.The, ReagentProperties.For],
		dc: 2,
	},
	{
		type: 'Potion',
		name: 'Red Blossom Cural',
		desc: 'A concentrated, sickly red potion in a large round container that seems to bubble thickly and intermittently.  Can alleviates and cure the effect of the Red Blossom Disease.',
		time: '8h',
		effects:
			'1 fifth of the potion taken five time over five days cures Red Blossom.  One fifth of the potion protects the imbiber from contracting it for 2 days, as well as making them unable to spread it.',
		reagents: [ReagentProperties.Poi, ReagentProperties.Cor, ReagentProperties.Soo, ReagentProperties.For],
		dc: 6,
	},
	{
		type: 'Potion',
		name: 'Smelling Salts',
		desc: 'This purply powder is only required in very small doses, and fizzes when exposed to air.',
		time: '60m',
		effects: 'When consumed, cures dizziness, charm, confusion, or restores 1 Debility affecting Int, Wis or Cha.',
		reagents: [ReagentProperties.Con, ReagentProperties.Soo, ReagentProperties.Exc],
		dc: 3,
	},
	{
		type: 'Bomb',
		name: "Alchemist's Fire",
		desc: 'Thin metal strands enforce this stoppered glass vial.  The red liquid inside bubbles midly, and combusts rapidly when exposed to air.',
		time: '120m',
		effects: 'Shatters in a 1sq radius, dealing 3 damage to all engulfed. Flammable items are set alight.',
		reagents: [ReagentProperties.The, ReagentProperties.The, ReagentProperties.Exc, ReagentProperties.Exc],
		dc: 4,
	},
	{
		type: 'Bomb',
		name: 'Smoke Philter',
		desc: 'This stoppered, round-bottomed vial is almost completely black, but small disturbances can be seen when you shake it.',
		time: '90m',
		effects:
			'Shatters in a 3sq radius, spilling thick smoke and obscuring vision through or into the area.  Visibility within is reduced to 1sq.',
		reagents: [ReagentProperties.The, ReagentProperties.Hyd, ReagentProperties.Cor],
		dc: 3,
	},
	{
		type: 'Bomb',
		name: 'Wretch Flume',
		desc: 'A glass tube protected from accidental shatter by wood.  The contents are grey and oily.',
		time: '120m',
		effects:
			'Shatters in a 1sq radius, spilling green noxious gas, choking and stinging the eyes of those in the area.  Those in the area suffer a STR and CON Light Debility and may become blinded.',
		reagents: [ReagentProperties.Cor, ReagentProperties.Exc, ReagentProperties.Hyd],
		dc: 4,
	},
	{
		type: 'Bomb',
		name: 'Acidic Wretch Flume',
		desc: 'A glass tube protected from accidental shatter by wood.  The contents are green and oily.',
		time: '120m',
		effects:
			'Shatters in a 1sq radius, spilling green noxious gas, choking and stinging the eyes of those in the area.  Those in the area take 2 damage, suffer a STR and CON Light Debility, and may become blinded.',
		reagents: [ReagentProperties.Cor, ReagentProperties.Exc, ReagentProperties.Hyd, ReagentProperties.For],
		dc: 4,
	},
	{
		type: 'Bomb',
		name: 'Acid Shatter',
		desc: "A fibrous sphere bound with two perpendicular seams that burst open when impacted.  Contains a liquid that heats it's container when agitated.",
		time: '180m',
		effects: 'Shatters in a 1sq radius, bursting out with acid and dealing 6 damage to all in the area.',
		reagents: [ReagentProperties.Cor, ReagentProperties.Cor, ReagentProperties.Cor, ReagentProperties.Hyd],
		dc: 5,
	},
	{
		type: 'Poison',
		name: 'Bloodboil',
		desc: 'Has a distinctive earthy smell when created, which abates as this oily pink liquid matures.',
		time: '120m',
		effects:
			'When introduced to the bloodstream by mouth or wound, inflicts a WIS and CON Debility, and deals 1 Stamina Damage per round for 12 rounds.',
		reagents: [ReagentProperties.Poi, ReagentProperties.The, ReagentProperties.Exc],
		dc: 4,
	},
	{
		type: 'Poison',
		name: 'Acid Tongue',
		desc: 'A thin green liquid that lets off a mild corrosive smoke until it matures.',
		time: '120m',
		effects:
			'When introduced to the bloodstream by mouth or wound, inflicts a INT and STR Debility, and deals 1 Stamina Damage per round for 12 rounds.',
		reagents: [ReagentProperties.Poi, ReagentProperties.Cor, ReagentProperties.Exc],
		dc: 4,
	},
	{
		type: 'Poison',
		name: 'Lotus Unction',
		desc: 'First created as an insert grey powder, then rendered active by adding to water or alcohol.',
		time: '120m',
		effects:
			'When introduced to the bloodstream by mouth or wound, inflicts an INT and WIS Debility, and causes a deep slumber that lasts for 4 hours and that takes affect between a few seconds and a few minutes.',
		reagents: [ReagentProperties.Poi, ReagentProperties.Soo, ReagentProperties.Hyd],
		dc: 4,
	},
	{
		type: 'Poison',
		name: 'Shroud of Grellen',
		desc: 'A perfectly clear, odourless liquid.  Reacts violently to certain alchemical solutions, agitating and shifting colours when mixed.',
		time: '240m',
		effects:
			"When introduced to the bloodstream by mouth or wound, inflicts 3 Debilities to all stats and intense weakness and dizziness.  If not cured within a number of hours equal to 8 times the subject's CON bonus (minimum 8), subject will die.",
		reagents: [
			ReagentProperties.Poi,
			ReagentProperties.Poi,
			ReagentProperties.Hyd,
			ReagentProperties.Hyd,
			ReagentProperties.For,
			ReagentProperties.For,
		],
		dc: 6,
	},
	{
		type: 'Potion',
		name: 'Stimpaste',
		desc: 'A smelly chewed glob of herb and reagent, applied to the skin.',
		time: '0m',
		effects: 'When consumed, restores 1 Stamina.  Does not counts as a Stamina Heal.',
		reagents: [ReagentProperties.Vig],
		dc: 1,
	},
	{
		type: 'Salve',
		name: "Sengir's Solvent",
		desc: 'Thin, clear, and smells strongly of alcohol.  Tingles on the skin, and emits fumes that sting the eyes.',
		time: '60m',
		effects: 'When applied to oily surfaces or liquids, dissolves them quickly.  Also dissolves some binding or sticky agents, such as spider webs and the emissions of certain creatures.',
		reagents: [ReagentProperties.Exc, ReagentProperties.Cor],
		dc: 3,
	},
	{
		type: 'Salve',
		name: 'Benumbing Poultice Paste',
		desc: "A thick, slurping pink paste that leaves it's scent and colour on the container it was stored in.",
		time: '60m',
		effects: "When applied onto the arms, legs and chest over 5 minutes, lets the user ignore 1 Stamina from each hit.  Lasts for 2 hours.  If applied to a target who sleeps for at least an hour of it's effect, allows the benefit of a full night's sleep in half the time.  Tranquilising effects might also be possible if more than 5 doses are applied.",
		reagents: [ReagentProperties.Poi, ReagentProperties.Sce, ReagentProperties.Soo],
		dc: 4,
	},
	{
		type: 'Salve',
		name: 'Bright Balm',
		desc: 'A runny, thick balm coloured with oily pinks and oranges.',
		time: '60m',
		effects:
			'When applied to the skin and clothing, reduces the effects of heat, fire and Radiant.  Any Stamina loss caused by Fire or Radient energy is reduced by 2 and any negatives applied to rolls due to fire are halved.  Lasts 2 hours.',
		reagents: [ReagentProperties.Vig, ReagentProperties.Oil, ReagentProperties.Hyd],
		dc: 3,
	},
	{
		type: 'Salve',
		name: 'Inert Emollient',
		desc: 'A thin yellow paste that seems to not absorb properly, leaving streaks of yellow when applied.',
		time: '60m',
		effects:
			'When applied to the skin and clothing, reduces the effects of lightning and acid.  Any Stamina loss caused by Lightning or Acid energy is reduced by 2.  Lasts 2 hours.',
		reagents: [ReagentProperties.Vig, ReagentProperties.Oil, ReagentProperties.Cor],
		dc: 3,
	},
	{
		type: 'Salve',
		name: 'Hearthpaste',
		desc: 'A salve with an oily yet pleasant odour, which tingles and warms flesh when applied.',
		time: '60m',
		effects:
			'When applied to the skin and clothing, reduces the effects of cold and wind.  Any Stamina loss caused by Sound or Wind energy is reduced by 2 and any negatives applied to rolls due to cold are halved.  Lasts 2 hours.',
		reagents: [ReagentProperties.Vig, ReagentProperties.Oil, ReagentProperties.The],
		dc: 3,
	},
	{
		type: 'Misc',
		name: 'Perception Poweder',
		desc: "Two vials.  One with a ruddy, thick granuled activator powder, flecked with sparkling motes.  One with a thin, grey base powder that seems to disappear when spread thinly.",
		time: '15m',
		effects: 'Used together, the powder can be spread in a cone, and the activating powder highlights invisible creatures or grants +1 to the Tracking Move.  Used separately, and the base powder can be applied in a cone - if then activated with the activating powder, shows any disturbances to the base powder.',
		reagents: [ReagentProperties.The, ReagentProperties.Oil],
		dc: 1,
	},
	{
		type: 'Misc',
		name: 'Torchburn',
		desc: "An oily black substance only distinguished from regular oil by it's thickness when undisturbed, and thinness when worked with.",
		time: '15m',
		effects:
			'Torches and lamps coated with Torchburn or using torchburn as their fuel burn twice as bright and for four times as long.',
		reagents: [ReagentProperties.The, ReagentProperties.Oil],
		dc: 1,
	},
	{
		type: 'Misc',
		name: 'Slicksalve',
		desc: 'A grey viscous and slippery oil that hardens then crumbles after a few hours after exposure to air.',
		time: '15m',
		effects:
			'Creates an excellent lubricant that improves any roll by +2 when using the Pick Locks, Pick Pockets, Engineer or Craft Moves, or when performing cleaning and repairing.',
		reagents: [ReagentProperties.Soo, ReagentProperties.Oil],
		dc: 1,
	},
	{
		type: 'Misc',
		name: 'Unscent',
		desc: 'A small fist-sized cage made from wood that contains a selection of herbs that give off an unnerring yet not distasteful scent.',
		time: '30m',
		effects: 'Animals are less likely to approach within 250m of this scent, unless desperate.  Lasts 8 hours.',
		reagents: [ReagentProperties.Sce, ReagentProperties.Poi],
		dc: 3,
	},
	{
		type: 'Misc',
		name: 'Enticent',
		desc: 'A small fist-sized cage made from wood that contains a selection of herbs that give off a smell not unlike wet animal.',
		time: '30m',
		effects:
			'When you create this, name an animal and perform an Animal Handling Move.  If you do not fail the Move, yournamed animals are attracted from 1km.  Lasts 8 hours.',
		reagents: [ReagentProperties.Vig],
		dc: 2,
	},
	{
		type: 'Misc',
		name: 'Tempigment',
		desc: '2 vials; one white thin liquid, and the other a thick sticky paste.  Mixed at any ratio and with a colourant producing a paint in a variety of colours.',
		time: '60m',
		effects:
			'Creates a hardy paint that fades and disappears within a specified time, up to 24 hours.  Has enough for 10 applications.',
		reagents: [ReagentProperties.Hyd, ReagentProperties.Oil],
		dc: 1,
	},
	{
		type: 'Misc',
		name: 'Perfume',
		desc: 'A decorative bottle of sweetly scented perfume, with a small decorative stopper to dab it on key areas.',
		time: '15m',
		effects: 'Smells lovely.',
		reagents: [ReagentProperties.Sce, ReagentProperties.Hyd],
		dc: 3,
	},
	{
		type: 'Misc',
		name: 'Purebase',
		desc: 'A vial of sparkling purity.  Catches the light and seems to sparkle more than clear liquid should.',
		time: '15m',
		effects: 'When added to any Alchemical Recipe, reduces the DC by 1.',
		reagents: [ReagentProperties.Hyd, ReagentProperties.For],
		dc: 2,
	},
];
