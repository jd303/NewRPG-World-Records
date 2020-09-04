interface effect_def { dc:number; repeatable:boolean, effect:string; }
interface spell_effect_def {
	name: string;
	desc: string;
	save: string;
	time: string;
	modifiers: effect_def[];
	talent: string;
	min: number;
}

export const psionics_effects: spell_effect_def[] = [

	////////////////////////////////////
	////// KINETICS
	{
		name: "Concussion",
		desc: "While active, you perceive kinetic movement as subtle colours.  Once per round as an action you can shape these kinetics as 2 damage to a creature you can see.  Concussion Damage is reduced by the recipient's DR to a minimum of 1.",
		save: "DR",
		time: "Inst",
		modifiers: [
			{ dc:0.5, repeatable:true, effect:"Add 1 Damage." },
			{ dc:0.5, repeatable:true, effect:"Your power affects an additional target." }
		],
		talent: "psychokinesis",
		min: 1
	},
	{
		name: "Slow",
		desc: "While active, once per round one creature you perceive moves 1sq less.",
		save: "STR",
		time: "20s",
		modifiers: [
			{ dc:0.5, repeatable:true, effect:"Reduce movement by an additional 1sq" },
			{ dc:1, repeatable:true, effect:"Add another Medium or smaller target" },
			{ dc:2, repeatable:true, effect:"Add another Large target" },
			{ dc:2, repeatable:true, effect:"Add another Huge target" }
		],
		talent: "psychokinesis",
		min: 2
	},
	{
		name: "Inertial Shield",
		desc: "While active, one Physical, Fire, Sonic, Wind or Laceration attack on you incurs 1 less Stamina Loss - however this Power then ends.",
		save: "STR",
		time: "60s",
		modifiers: [
			{ dc:0.5, repeatable:true, effect:"Add a target that this Power can protect" },
			{ dc:0.5, repeatable:true, effect:"Increase the Stamina Loss protection by 1." },
			{ dc:0.5, repeatable:true, effect:"Increase the number of attacks this applies to by 1 - this power now ends once all attacks have been protected." },
			{ dc:3, repeatable:true, effect:"Add a Wound to the Protection effect - such that a single protection can prevent both the Wound(s) and Stamina." }
		],
		talent: "psychokinesis",
		min: 3
	},
	{
		name: "Inertial Wall",
		desc: "While active, your DR against Physical attacks is increased by 1.",
		save: "STR",
		time: "30s",
		modifiers: [
			{ dc:4, repeatable:false, effect:"You create a small wall (6sq wide).  Physical projectiles cannot pass through and creatures take 5 - SR rounds to force their way through." }
		],
		talent: "psychokinesis",
		min: 3
	},
	{
		name: "Stop",
		desc: "While active, one creature or projectile stops for an instant, giving its target the opportunity to use Defy Danger against it.",
		save: "STR",
		time: "20s",
		modifiers: [
			{ dc:3, repeatable:false, effect:"Your Medium or smaller target stops completely, halving armoured target's DR and completely removing the DR of unarmoured targets.  If flying, it falls from the air." },
			{ dc:5, repeatable:false, effect:"Your Large target stops completely, halving armoured target's DR and completely removing the DR of unarmoured targets.  If flying, it falls from the air." },
			{ dc:8, repeatable:false, effect:"Your Huge target stops completely, halving armoured target's DR and completely removing the DR of unarmoured targets.  If flying, it falls from the air." }
		],
		talent: "psychokinesis",
		min: 4
	},
	{
		name: "Move Self",
		desc: "While active, you can move Telekinetically at 1sq per round in any direction.  You cannot move more than 5m above a surface.",
		save: null,
		time: "10m",
		modifiers: [
			{ dc:0.5, repeatable: true, effect:"Increase your movement by 1sq" }
		],
		talent: "psychokinesis",
		min: 5
	},
	{
		name: "Move Other",
		desc: "While active, you can shift one Medium or smaller target 1sq/r per round, optionally dealing 0 damage if they hit another target (to both targets).  You cannot perform fine movements like writing.",
		save: "STR",
		time: "30s",
		modifiers: [
			{ dc:0.5, repeatable:true, effect:"Increase the movement of targets by 1sq/r and optional DAM by 1/2" },
			{ dc:0.25, repeatable:true, effect:"Increase the duration by 30s" },
			{ dc:1, repeatable:true, effect:"Add a Medium or smaller target" },
			{ dc:2, repeatable:true, effect:"Add a Large target" },
			{ dc:2, repeatable:true, effect:"Add a Huge target" }
		],
		talent: "psychokinesis",
		min: 6
	},
	{
		name: "Manoeuvre",
		desc: "While active, you can perform a remote manoeuvre that requires careful movement, such as Trip, Lockpick or writing.  You must still roll against your SKILL for the attempted Move.  Your roll may be disadvantaged, such as lockpicking being harder with no audio clues.  You cannot use more than 2 of your SKILL for this manoeuvre.",
		save: "VARS",
		time: "Inst",
		modifiers: [
			{ dc:0.5, repeatable:true, effect:"+2 to the maximum SKILL you can use." }
		],
		talent: "psychokinesis",
		min: 7
	},
	{
		name: "Puppet",
		desc: "You make a small, inconsequential movement to a creature, such as wiggling their ears.",
		save: "STR",
		time: "30s",
		modifiers: [
			{ dc:4, repeatable:false, effect:"You can choose the result of their movement or action each round." },
			{ dc:5, repeatable:false, effect:"You can completely control the movement and physical actions of your target.  You cannot make them draw on their Source or Psionics." },
		],
		talent: "psychokinesis",
		min: 8
	},

	////////////////////////////////////
	////// CLAIRSENTIENCE
	{
		name: "Future Sight",
		desc: "While active, you gain +1 to the Defy Danger skill.",
		save: null,
		time: "1h",
		modifiers: [
			{ dc:2, repeatable:false, effect:"You may reroll a roll, even after working out if it succeeded or not - however this power then ends." },
			{ dc:3, repeatable:false, effect:"Your Defy Danger bonus increases to +3, and you may use it against regular attacks - however this power then ends." },
			{ dc:4, repeatable:false, effect:"You are warned by your potential failures - you gain +3 to any skill roll - however this power then ends." },
			{ dc:8, repeatable:false, effect:"You look into the future, catching faint glimpses and images of a subject you are aware of - however this power then ends." }
		],
		talent: "clairsentience",
		min: 1
	},
	{
		name: "Past Sight",
		desc: "While active, you can get inklings of how your surroundings have changed in the recent past, such as if creatures or objects have been removed from the location.",
		save: null,
		time: "10m",
		modifiers: [
			{ dc:3, repeatable:false, effect:"When you touch an item, you can determine who has touched it in the last week." },
			{ dc:4, repeatable:false, effect:"You you regard your surrounding, you can determine who has been in the area in the last 2 days." },
			{ dc:5, repeatable:false, effect:"When you touch a creature, you can surface terrible memories and memories of pain.  The creature takes 4 damage (reduced by their MR) and is dazed for 3 rounds (reducing their DR and MR by 2)." }
		],
		talent: "clairsentience",
		min: 2
	},
	{
		name: "Detection",
		desc: "While active, you senses are heightened with psionic power, you gain +1 the to Investigate / Perception Skill.",
		save: null,
		time: "2m",
		modifiers: [
			{ dc:1, repeatable:false, effect:"You can detect the general presence of current and lingering Psionic energies, can discern the talent that generated them, and may be able to discern their use." },
			{ dc:2, repeatable:false, effect:"You can detect the general presence of creatures, items and energies originating not of this world, or displaced by magical or psionic means." },
			{ dc:2, repeatable:false, effect:"You can detect the general presence of instinctual thoughts, such as those from animals and dumn beasts." },
			{ dc:3, repeatable:false, effect:"You can detect the general presence of thoughts of intelligent creatures." },
			{ dc:3, repeatable:false, effect:"You can detect clairvoyance and remote viewing on yourself or those near you." },
			{ dc:3, repeatable:false, effect:"You can disrupt clairvoyance and remote viewing on yourself and those near you - this effect lingers for 1 hour and can extend past the normal power's duration." },
		],
		talent: "clairsentience",
		min: 3
	},
	{
		name: "Remote Viewing",
		desc: "While active, you can see (but not hear) a willing and friendly target that you've met, or an area that you've visited within 5km.  If targeting a person and they are not within distance, the power fails.  If the power fails because of the target saving by WIS / MR, you know whether they are within the distance regardless.",
		save: "WIS",
		time: "5m",
		modifiers: [
			{ dc:0.5, repeatable:true, effect:"You extend the distance by 1km" },
			{ dc:0.5, repeatable:true, effect:"You extend the duration by 5m" },
			{ dc:1, repeatable:false, effect:"You can also hear your target and their near surroundings." },
			{ dc:2, repeatable:false, effect:"You do not have to have met the target, but need an adequate description of them." },
			{ dc:2, repeatable:false, effect:"Your target does not have to be willing and friendly." }
		],
		talent: "clairsentience",
		min: 4
	},

	////////////////////////////////////
	////// TELEPATHY
	{
		name: "Charm",
		desc: "While active, you seem more affable to those around you, and gain +1 to the Persuade and Physical Deception skills.",
		save: "WIS",
		time: "5m",
		modifiers: [
			{ dc:1, repeatable:false, effect:"You can modify the charm effect to be negative, adding +1 to Intimidate and the Provoke/Intimate Combat Skill." },
			{ dc:2, repeatable:false, effect:"Your modifier raises to +3 - however using this successfully ends this power." },
			{ dc:3, repeatable:false, effect:"Your modifier raises to +3." }
		],
		talent: "telepathy",
		min: 1
	},
	{
		name: "Communication",
		desc: "While active, you can send (but not receive) single word messages to friendly targets you have met within 1km. After each word you cannot speak for 30 seconds.",
		save: "WIS",
		time: "10m",
		modifiers: [
			{ dc:0.5, repeatable:true, effect:"You can extend the distance by 1km" },
			{ dc:0.5, repeatable:true, effect:"You can extend the duration by 10m" },
			{ dc:1, repeatable:false, effect:"Your target can communicate back with you" },
			{ dc:1, repeatable:false, effect:"You (and your target if they can communicate back) can speak freely, rather than in single words." },
			{ dc:2, repeatable:false, effect:"You do not have to have met the target, but need an adequate description of them." },
			{ dc:2, repeatable:false, effect:"Your target does not have to be willing and friendly." },
			{ dc:4, repeatable:false, effect:"You and your target can understand each other's language, even if you do not speak it." }
		],
		talent: "telepathy",
		min: 2
	},
	{
		name: "Mind Reading",
		desc: "While active, you gain +1 to COMB against a single target.  You can switch targets freely once per round.",
		save: "WIS",
		time: "5m",
		modifiers: [
			{ dc:1, repeatable:false, effect:"You can detect your target's mood and drives" },
			{ dc:3, repeatable:false, effect:"You can subtly detect abstract thoughts of your target.  You can ask about their intentions, needs and drives, and also gain +3 to the Persuade, Intimidate, Physical Deception, Stealth and Performance skills." },
			{ dc:4, repeatable:false, effect:"By studying an intelligent target for a few minutes, you read their surface thoughts, but they can tell and can leave your sight to break the effect." }
		],
		talent: "telepathy",
		min: 3
	},
	{
		name: "Sensory Override",
		desc: "While active, you gain +1 Stealth against one target.",
		save: "WIS",
		time: "5m",
		modifiers: [
			{ dc:0.5, repeatable:true, effect:"Your power affects an additional target." },
			{ dc:0.5, repeatable:true, effect:"An ally gains the same benefit(s) that you do." },
			{ dc:1, repeatable:false, effect:"Your target(s) becomes blind." },
			{ dc:1, repeatable:false, effect:"Your target(s) becomes deaf." },
			{ dc:2, repeatable:false, effect:"Your target(s) cannot perceive you by any non-magical or non-psionic sense." }
		],
		talent: "telepathy",
		min: 4
	},
	{
		name: "Suggestion",
		desc: "While active, you do not need something the target wants when using Persuade, and can drop a target's MR by 1. You can switch targets freely once per round.",
		save: "WIS",
		time: "2m",
		modifiers: [
			{ dc:2, repeatable:false, effect:"Your target performs an action they were likely to do with a different tool or method, such as switching to a melee weapon instead of a bow." },
			{ dc:4, repeatable:false, effect:"Your target performs an action that you suggest that poses them no danger, if they are capable of it, such as casting a healing spell on you - however this ends the power." },
			{ dc:6, repeatable:false, effect:"Your target performs an action that you suggest, if they are capable of it, such as attacking an ally - however this ends the power." }
		],
		talent: "telepathy",
		min: 5
	},
	{
		name: "Emotion",
		desc: "While active, you can mildly agitate or calm a visible target.  Has the effect of a coffee or a deep breath. You can switch targets freely once per round.",
		save: "WIS",
		time: "2m",
		modifiers: [
			{ dc:1, repeatable:true, effect:"Your power affects an additional target." },
			{ dc:2, repeatable:false, effect:"You modify your target(s) mood to one of your choosing, such as calmed, angry and joyous; as long as the change would not endanger the target(s)." },
			{ dc:4, repeatable:false, effect:"Your forcefully anger your target(s), driving them to anger and violence." }
		],
		talent: "telepathy",
		min: 6
	},
	{
		name: "Aversion / Fascination",
		desc: "While active, people will prefer to deal with your allies than you.",
		save: "WIS",
		time: "5m",
		modifiers: [
			{ dc:2, repeatable:false, effect:"Your target prefers to engage with or deal with a target of your choosing." },
			{ dc:2, repeatable:false, effect:"Your target prefers to not engage with or deal with a target of your choosing." },
			{ dc:3, repeatable:false, effect:"Your target has an aversion to something they hold.  However if it is very dear to them they may get a bonus to their save." },
			{ dc:4, repeatable:false, effect:"Your target has a strong attraction to an item or person of your choice.  While there will be no romantic feelings, your target will want to be near or hold the attraction." }
		],
		talent: "telepathy",
		min: 7
	},
	{
		name: "Memory Alteration",
		desc: "While active, one target that you can see's memory plays tricks on them, and they may not remember all the details of your encounter",
		save: "WIS",
		time: "5m",
		modifiers: [
			{ dc:2, repeatable:false, effect:"You temporarily alter one memory that you know your target has, however the true memory will return after the power ends and they will be aware of the deception." },
			{ dc:4, repeatable:false, effect:"You permanently alter one memory that you know your target has.  If something defies their false memory, such as being told the truth, the true memory will be reinstated." },
			{ dc:6, repeatable:false, effect:"You implant a memory into a target of your choosing.  They will believe this to be true unless irrefutable found to be false." }
		],
		talent: "telepathy",
		min: 8
	},
	{
		name: "Brain Lock",
		desc: "While active, targets within 1sq of you deal 1 less damage.",
		save: "WIS",
		time: "5m",
		modifiers: [
			{ dc:6, repeatable:false, effect:"Your target stands prone and unmoving losing all DR and MR - however this ends the power and the effect lasts for 1 round." }
		],
		talent: "telepathy",
		min: 9
	},

	////////////////////////////////////
	////// PSYCHOMETABOLISM
	{
		name: "Buff",
		desc: "While active, you gain +1 Dam when using unarmed combat and thrown weapons.",
		save: null,
		time: "1h",
		modifiers: [
			{ dc:1, repeatable:false, effect:"You gain a +1 bonus to either STR, CON or DEX." },
			{ dc:2, repeatable:false, effect:"You gain a +2 bonus to either STR, CON or DEX." }
		],
		talent: "psychometabolism",
		min: 1
	},
	{
		name: "Senses",
		desc: "While active, you senses are heightened with psionic power and you gain +1 the to Investigate / Perception skill and can see in lower light than normal.",
		save: null,
		time: "1h",
		modifiers: [
			{ dc:2, repeatable:false, effect:"Your sight is increased and you can see three as far, and can see in near-total darkness" },
			{ dc:2, repeatable:false, effect:"Your hearing is increased and you can hear three times as far, and can perhaps hear even through walls" },
			{ dc:2, repeatable:false, effect:"Your smell and taste is increased and you smell three times as far, and can see even detect subtle poisons, some traps and impurities." },
			{ dc:3, repeatable:false, effect:"You get tremor sense, and can see even in total darkness, and can detect movement through stone and other hard substances." }
		],
		talent: "psychometabolism",
		min: 2
	},
	{
		name: "Metabolise",
		desc: "While active, your psionics take place of sustenance and you need only eat one quarter as much as normal.",
		save: null,
		time: "8h",
		modifiers: [
			{ dc:1, repeatable:false, effect:"When sleeping, you remove twice the number of Light Debilities as normal." },
			{ dc:2, repeatable:false, effect:"Energies that effect you deal 2 less damage, and you can stand extreme heat and cold much easier." },
			{ dc:2, repeatable:false, effect:"When receiving a debility that saves against CON, your CON bonus is treated as 2 higher.  Has no effect on debilities already received." },
			{ dc:3, repeatable:false, effect:"When sleeping, you remove twice the number of Light Debilities and Debilities as normal." }
		],
		talent: "psychometabolism",
		min: 3
	},
	{
		name: "Swift",
		desc: "While active, your gain +1 to your movement speed.",
		save: null,
		time: "10m",
		modifiers: [
			{ dc:1, repeatable:false, effect:"You also gain +2 to Athletics rolls." },
			{ dc:2, repeatable:false, effect:"You also gain +2 to Defy Danger when using Wits or Dex to describe your Move." },
			{ dc:3, repeatable:false, effect:"Your movement speed is instead +2 and you also gain +1 DR." }
		],
		talent: "psychometabolism",
		min: 4
	},
	{
		name: "Chi Control",
		desc: "While active, you can hold your breath for twice as long.",
		save: null,
		time: "8h",
		modifiers: [
			{ dc:1, repeatable:false, effect:"While sleeping, you regain an additional 4 Stamina" },
			{ dc:2, repeatable:false, effect:"While sleeping, you regain an additional 1 Wound" },
			{ dc:3, repeatable:false, effect:"You immediately regain 5 Stamina and mark a Stamina Heal on your character sheet - however this power ends." },
			{ dc:5, repeatable:false, effect:"You immediately regain 1 Wound or 8 Stamina and mark a Stamina or Wound Heal on your character sheet - however this power ends." }
		],
		talent: "psychometabolism",
		min: 6
	}
]