interface perk_def {
	category:	string;
	name:		string;
	desc:		string | string[];
}

export const perks: perk_def[] = [
	{
		category: "combat",
		name: "Combat Tactics",
		desc: "You may use the Investigate Move rapidly during combat or in tense situations, and when you do, you gain +1 to your roll."
	},
	{
		category: "combat",
		name: "Eye for weaponry",
		desc: "You may use the Knowledge move during combat or in a tense situation to determine what the SR or DR of a creature is."
	},
	{
		category: "combat",
		name: "Multi-weapon fighting",
		desc: "If you fight with two weapons, you may add +1 COMB to each of the attacks you declare."
	},
	{
		category: "combat",
		name: "Shield Bash",
		desc: "You may use your Shield as weapon, and as a second weapon for the purposes of multiple weapon fighting.  If you beat the Total DC for Hack and Slash when using your shield as a weapon, you may also push opponents up to one size category larger than you straight back 5 foot."
	},
	{
		category: "combat",
		name: "Racial Hatred [Type]",
		desc: "+1 COMB when fighting against your hated Race and +1 when performing Moves from Untrained, Combat and Ranged skills when someone of your hated race is a primary target."
	},
	{
		category: "combat",
		name: "Heightened Awareness",
		desc: "When fighting invisible creatures they no longer gain a bonus to DR against you."
	},
	{
		category: "combat",
		name: "Forceful Fighting",
		desc: "When landing a successful attack during Hack and Slash, you can expend 1 Stamina to deal 2 additional damage to your opponent."
	},
	{
		category: "combat",
		name: "Frenzy",
		desc: "When you kill an opponent, you may move up to 1.5 metres and make an additional attack at half your total COMB.  This may occur once per turn."
	},
	{
		category: "combat",
		name: "Thrill of the kill",
		desc: "The first time you down a creature per battle and you have less than perfect Stamina, regain up to 2 Stamina."
	},
	{
		category: "combat",
		name: "Last defense",
		desc: "You can negate all the damage from an attack, but your shield, weapon or armour (your choice) becomes useless and provides no benefit until the end of the battle."
	},
	{
		category: "combat",
		name: "Pit fighter",
		desc: "When dividing your COMB across 3 or more targets, gain +3 COMB.  When dividing it amongst 2 targets, gain +1 COMB."
	},
	{
		category: "combat",
		name: "Rage",
		desc: "When you or a friend are attacked or when someone acts against your morals, you may enter a rage.  Gain 3 temporary Stamina Points and any physical damage you do is increased by 1.  When you stop using Combat Moves, lose any of the three Stamina you gained plus 1 additional Stamina."
	},
	{
		category: "combat",
		name: "Human Shield",
		desc: "When engaged with 3 or more creatures, you gain +1 DR."
	},
	{
		category: "combat",
		name: "Sunder",
		desc: "When beating the Total DC using the Trip/Disarm or Grapple skills, you may instead attempt to damage your opponents armour or weapons.  The opponent’s SR or DR (your choice) permanently drops by one."
	},
	{
		category: "combat",
		name: "Gritted Teeth",
		desc: "Any time you would take a stamina damage, you may reduce it by up to 2 stamina by taking a Light Debility to a stat of the DM’s choice.  This does not work if you have 6 or more debilities."
	},
	{
		category: "combat",
		name: "Lead the Charge",
		desc: "When you lead a charge into battle, your allies gain +1 COMB and Damage on their next turn."
	},
	{
		category: "combat",
		name: "Dissed Advantage",
		desc: "Being disadvantaged provides only half the penalties to DR and rolls."
	},
	{
		category: "combat",
		name: "Staunch Defender",
		desc: "When you use the Defend Move and fail or only Partially Succeed, you may pay a Stamina to convert it to a Partial Success (failure) or a Total Success (Partial Success)."
	},
	{
		category: "combat",
		name: "Setup Strike",
		desc: "When you successfully hit a target with a Combat or Ranged Combat move, nominate an ally.  Their next attack against your target gains +2 COMB."
	},
	{
		category: "combat",
		name: "Speed over Strength",
		desc: "You may use your DEX bonus instead of STR when using the Hack and Slash, Trip/Disarm and Grapple Moves, and when calculating bonus damage when using Hack and Slash."
	},
	{
		category: "combat",
		name: "Zen Deflection",
		desc: "At the start of each turn of combat you may gain +1 DR for each 3 COMB you sacrifice, until the start of your next turn.  You cannot use this if you are wearing Heavy Armour."
	},
	{
		category: "combat",
		name: "Zen flow",
		desc: "While you wear no armour, have an Acrobatics skill of 5 or higher, a COMB of 5 or higher, and a DEX bonus of 2 or higher, you gain 2 DR that acts as armour."
	},
	{
		category: "combat",
		name: "Channelled Strike",
		desc: "If you have the Innate Magic Source, in combat you may remove 1 Stamina to deal an additional damage to each target you hit this round.  You can choose to use this effect after you have rolled to see if you hit."
	},
	{
		category: "combat",
		name: "Deflect Arrows",
		desc: "If the DM hits you with a simple ranged attack that you could see coming and you have 5 points in the Acrobatics Skill or a DEX bonus of 3, you may attempt to Defy Danger against the ranged attack.  However your options are: * Reduce any damage by 2 Stamina or 1 Wound (this may be taken multiple times).  * Shrug off all damage but you are now Disadvantaged."
	},
	{
		category: "combat",
		name: "Retreating Shot",
		desc: "If you retreat at least 15 feet from a creature and use Volley but spare 3 RANG, you gain +1 DR against it until the start of your next turn."
	},
	{
		category: "combat",
		name: "Intimidating Approach",
		desc: "Once per combat, you may make a Provoke/Intimidate Move at a creature you have moved to engage in combat with a +3 bonus.  If you succeed, one of the effects can be: until their next turn this creature cannot move away and suffers from -2 damage."
	},
	{
		category: "combat",
		name: "Intimidating Flight",
		desc: "Once per combat, when retreating from combat or focussing on another target you may make a Provoke/Intimidate Move at your disengaged creature with a +3 bonus.  If you succeed, one of the effects can be: this creature cannot approach within 5 feet of you."
	},
	{
		category: "combat",
		name: "Roaring Defense",
		desc: "Once per combat, If an opponent attacks you and fails to deal any Stamina or Wound damage, you may make Provoke/Intimidate Move at them with a +3 bonus."
	},
	{
		category: "combat",
		name: "Pulled Punch",
		desc: "Once per combat, if you fail to hit with a Hack or Slash you may immediately make a Provoke/Intimidate Move against them with a +3 bonus."
	},
	{
		category: "combat",
		name: "Warning Shot",
		desc: "Once per combat, if you fail to hit your intended target, you may immediately make a Provoke/Intimidate Move against them with a +3 bonus."
	},
	{
		category: "combat",
		name: "Disarming Opportunist",
		desc: "Once per combat, if you fail to Disarm an opponent, you may immediately describe and resolve a Grapple."
	},
	{
		category: "combat",
		name: "Grappling Opportunist",
		desc: "Once per combat, if you successfully Grapple an opponent you may immediately describe and resolve a Backstab."
	},
	{
		category: "combat",
		name: "Watch for an opening",
		desc: "When you successfully use the Defend skill, one of the options you may choose become: * You may immediately describe and resolve a Grapple or Trip/Disarm Move."
	},
	{
		category: "combat",
		name: "Follow up",
		desc: "After making a successful Trip/Disarm or Ranged Trip/Disarm you may immediately describe and resolve a Hack and Slash or Volley Move at a -2 Penalty."
	},
	{
		category: "combat",
		name: "Melee Opportunist",
		desc: "You gain +2 when resolving Trip/Disarm and Ranged Trip/Disarm Moves against an opponent that one of your allies is also engaged with."
	},
	{
		category: "combat",
		name: "Exposed Weakpoint",
		desc: "Once per combat you may describe and resolve a Backstab Move with a +2 bonus on creatures who are moved unwillingly by a Move."
	},
	{
		category: "combat",
		name: "Charge",
		desc: "When you engage a creature at least 15 foot from you, you deal +2 damage on all hits this round."
	},
	{
		category: "combat",
		name: "Charging Manoeuvre",
		desc: "When you engage a creature at least 15 foot from you, you gain +1 to rolls for the Trip/Disarm and Grapple Moves.  If you succeed, you may also move your target into an unoccupied adjacent square and you may follow even if it exceeds your movement."
	},
	{
		category: "combat",
		name: "Charging Volley",
		desc: "If you move at least 15 foot towards the target of your Volley, Multishot, Ranged Trip/Disarm or Called Shot, you deal +2 damage this round."
	},
	{
		category: "combat",
		name: "Important Call",
		desc: "If you only move in a turn, studying your target, you make resolve the Called Shot move on your next turn at a +3 bonus."
	},
	{
		category: "combat",
		name: "Inspired Shot",
		desc: "If you beat the Total DC when using Volley resolve damage on that taret, then you may describe and resolve a new Multishot Move against any other targets."
	},
	{
		category: "combat",
		name: "Combat Dancer",
		desc: "As part of another action, you may use the Physical Deception skill in combat to produce a deceptive action.  If you beat the Partial DC (your chosen DC must equal or exceed the opponent's SR, DR or MR (DM's choice)), you may reduce their DR, SR or MR by 1 (your choice) until the end of their next turn. They may not be easily fooled next time."
	},
	{
		category: "combat",
		name: "Combat Acrobat",
		desc: "As part of your movement, you may leap over other combatants with no disadvantage to resolving any Acrobatics Move that may be necessary."
	},
	{
		category: "combat",
		name: "Wall leap",
		desc: "As part of your movement, if you move at least 15 feet, you may run against and jump off walls, including leaping around combatants with no fear of danger.  You gain +2 damage for your first attack when you do this."
	},



	{
		category: "magic",
		name: "Cantrips",
		desc: "When casting a spell with a combined DC of 0, you do not need to roll and cannot burn out due to it’s casting."
	},
	{
		category: "magic",
		name: "Advanced Cantrips",
		desc: "When casting a spell with a combined DC of 1/15 of your MAG skill, you do not need to roll and cannot burn out due to it’s casting.  You must have Cantrips to use this Perk."
	},
	{
		category: "magic",
		name: "Silver Strands",
		desc: "You can reach more deeply into creatures to heal them, you may heal creatures of Stamina one more time than they could normally be healed."
	},
	{
		category: "magic",
		name: "Wal",
		desc: "Ignore any burnout received from the first spell cast after a Short or Long Rest."
	},
	{
		category: "magic",
		name: "One with the flow",
		desc: "Your second source does not incur a -2 MAG."
	},
	{
		category: "magic",
		name: "Subconscious magics",
		desc: "When entering a state of Sleep, Stun or other Unciousness, you can attempt to maintain any concentration spells by resolving the Cast a Spell Move for each of the spells, at the original DC of the spells."
	},
	{
		category: "magic",
		name: "Signed Magics",
		desc: "Your signature spells gain +3 MAG instead of +2."
	},
	{
		category: "magic",
		name: "Undeath Detection",
		desc: "If you have the Granted or Life Source, when using the Detect Magic Move, you may replace the word Magic with “Undead” or “Death”."
	},
	{
		category: "magic",
		name: "Planar Detection",
		desc: "When using the Detect Magic Move, you may replace the word Magic with “Planar energies”."
	},
	{
		category: "magic",
		name: "Life Detection",
		desc: "If you have the Life or Yearns Source, when you use the Detect Magic Move, you may replace the word Magic with “Life”."
	},
	{
		category: "magic",
		name: "Combat Wits",
		desc: "You may use the Detect Magic Move rapidly during combat or in tense situations, and when you do, you gain +1.  You may also ask the question: “What source do magic users have access to?”"
	},
	{
		category: "magic",
		name: "Permanent Magics",
		desc: "A Spell Effect and Shape that you’ve successfully cast no longer has a maximum duration.  You cannot cast another spell that has a duration while this Spell Effect lingers.  The spell will still end if you go to sleep, stop concentrating, if your shape is no longer satisfied (such as a Single Visible Target no longer being visible) or are knocked unconscious, and it still takes up a concentration slot.  You may not apply this to a spell effect that has an Instant duration.  You may not apply this perk to a Spell Effect and Shape Combination that is higher than 1/5th of your total MAG points.  For example, if you have 10 MAG points, you may apply this to a Spell Effect and Shape with a maximum DC combination of 2."
	},
	{
		category: "magic",
		name: "Lay on Hands",
		desc: "Once per day when you use the Knowledge: Medicine Move on a subject, you may spend a Stamina to also heal them of 4 stamina if you pass the Partial DC.  This requires the Granted or Yearns source."
	},
	{
		category: "magic",
		name: "Ritualistic Casting",
		desc: "For each 6 minutes you spend casting a spell, you cast your spell with +1 MAG.  This benefit can not raise the maximum DC you can attempt to cast."
	},
	{
		category: "magic",
		name: "Freedom of Form",
		desc: "You feel comfortable in many skins, and your shapeshifting lasts an amount of time equal to three times your SKILL in Shapeshifting.  Instead of waiting the same amount of time spent in a form between new forms, you only need to wait half the amount of time spent."
	},
	{
		category: "magic",
		name: "Shed Damage",
		desc: "When receiving Stamina or Wound damage and you are in a different form provided by Shapeshifting, you may negate the damage by shifting back to your original form.  This uses a healing attempt for either Stamina or Wounds, depending on the damage negated."
	},
	{
		category: "magic",
		name: "Powerful Pain",
		desc: "When you lose Stamina from an external source, the next spell effect you cast within 30 seconds gains +2 MAG.  When you instead lose a Wound, the next spell gains +3 MAG and the Maximum DC you can cast is raised by 2."
	},
	{
		category: "magic",
		name: "True Life Source",
		desc: "When using the Life Source and choosing a Wound as payment, multiply the numerical values of the spell, including effects, duration, range and shape size by 1.5 (rounding down)."
	},
	{
		category: "magic",
		name: "Ancient Ways",
		desc: "You may use your WIS instead of INT as you bonus for the Cast a Spell, Counterspell and Detect Magic skills, and when resolving a Defy Danger move using the Source Variant."
	},
	{
		category: "magic",
		name: "Renewing Source",
		desc: "When you take a short rest, you regain 12 Burnout points instead of just 10."
	},
	{
		category: "magic",
		name: "Arcane Aptitude",
		desc: "Once per combat you may enhance your spell by also describing and resolving a Grapple or Provoke/Intimdate Move on up to one target."
	},
	{
		category: "magic",
		name: "Charging Shift",
		desc: "When you engage a creature at least 15 foot from you, you may also describe and resolve the Shapeshifting Move.  If you succeed, you gain +2 to COMB and +2 to DAM for your first attack."
	},
	{
		category: "combat",
		name: "Magical Rage",
		desc: "When you or a friend are attacked or when someone acts against your morals, you may enter a rage.  Gain 1 temporary Unburnout, your maximum DC of spell you can cast is 1 higher, and any magical damage you do is increased by 1.  When you stop using spells, lose the Unburnout if it was unused and you trigger a burnout effect of DC 2."
	},



	{
		category: "general",
		name: "Interrogator",
		desc: "When you resolve a Persuasion/Intimidation Move using threats of impending violence as leverage, you may use +STR instead of +CHA"
	},
	{
		category: "general",
		name: "Ancient Wisdom",
		desc: "When using the Knowledge Move, you may use your Wisdom modifier, instead of Intelligence"
	},
	{
		category: "general",
		name: "Sure footed",
		desc: "If the DM describes a situation that disadvantages you because of terrain, such as being slowed or being off balance, you may ask them: “How does my sure-footed perk affect this?”"
	},
	{
		category: "general",
		name: "Camouflage",
		desc: "If you’ve successfully resolved a Stealth Move and can use leaves, dust, or other environmental factors to keep you hidden, you cannot be spotted until you move or are touched."
	},
	{
		category: "general",
		name: "Light Sleeper",
		desc: "You need 2 hours less sleep per night, and any ability that regenerates during rest requires 2 hours less (minimum of 1 hour)."
	},
	{
		category: "general",
		name: "Fast Healing",
		desc: "When regaining Stamina, you regain an additional 1."
	},
	{
		category: "general",
		name: "Lucky",
		desc: "Once per long rest you may reroll one roll.  You may take either result.  You may choose to use this skill even after determining the success or failure of the initial roll."
	},
	{
		category: "general",
		name: "Advanced Armour training",
		desc: "Wearing any armour for long periods does not tire you.  You can put on and take off armour much faster than most.  You may swim in Leather or Chainmail with no consequences."
	},
	{
		category: "general",
		name: "Quick like the wind",
		desc: "When not wearing any armour and you have at least a +1 Wisdom modifier, you gain 1 Defensive Rating equivalent to Light Armour use."
	},
	{
		category: "general",
		name: "Empathy",
		desc: "When you use the Investigate Move against a sentient creature, gain +2."
	},
	{
		category: "general",
		name: "Swift",
		desc: "When you describe Defy Danger based on your movement, gain +2 when resolving the Move."
	},
	{
		category: "general",
		name: "Danger seeker",
		desc: "When you are below half your Wounds or below a third of your Stamina, all rolls gain +1."
	},
	{
		category: "general",
		name: "Mindful",
		desc: "When a spell or effect attacks your mind or sense ask your DM how the Mindful Perk alters the effect.  You will gain a mild benefit to the source."
	},
	{
		category: "general",
		name: "Hearty",
		desc: "When a spell or effect attacks your health and wellbeing ask your DM how the Hearty Perk alters the effect.  You will gain a mild benefit to the source."
	},
	{
		category: "general",
		name: "Logical",
		desc: "You may use INT instead of WIS when resolving the Investigation and Suvival Moves."
	},
	{
		category: "general",
		name: "Devoted Servant",
		desc: "When you use the Persuasion/Intimidation Move, you may use shared alignment, your devotion to a god, or your authority to satisfy the thing that the subject wants."
	},
	{
		category: "general",
		name: "Healer",
		desc: "When performing a Long Rest, you can forgo a full rest yourself to tend to up to 10 others.  You regain half your stamina, but each of the others regains an additional 4.  Alternatively your wounded can instead regain a wound if you can provide 3gp of medicinal herbs each."
	},
	{
		category: "general",
		name: "Convincing",
		desc: "When you successfully Parley with someone, you gain +2 to all rolls when communicating with, convincing or intimidating them, for the next 8 hours."
	},
	{
		category: "general",
		name: "Fleet of Foot",
		desc: "Your base speed is increased by 1"
	},




	{
		category: "profession",
		name: "Inspiring Creation",
		desc: [
			"If you have a Source, you can inspire allies who see or hear one of your creations with courage.  If you beat the Total DC, add the below bonuses.  If you only beat the Partial DC, halve the effects (round down).  You may only create this effect in this way once per 10 minutes.  Your creation grants it’s benefits for a variable time, depending on the type of creation.  The effect of your creation takes up a concentration slot, as if you were maintaining a spell.",
			"Effects: Allies gain +2 Temporary Stamina and gain +1 Resistance to Fear effects.  The stamina bonus does not count towards magical Stamina healing limits.",
			"Creations:",
			"Performance: You perform poetry, music, or a rousing speech.  Use your performance skill to check against the DC.  The effects last 5 minutes.",
			"Cooking: You take 30 minutes to cook something from ingredients you have. Use your Alchemy skill to check against the DC.  The effects last 30 minutes.  You can create enough food or drink for 4 people to feel the effects.",
			"Crafting / Art: You spend days or weeks painting, sculpting, woodcarving or crafting something of wonderful inspiration.  Use your Art / Craft skill to check against the DC.  People who take a minute to regard your work gain the effects for 5 minutes.  Any time you create a new work with these effects, any previous work no longer provides the effects."
		]
	},
	{
		category: "profession",
		name: "Uplifting Performance",
		desc: [
			"If you have a Source, you can inspire allies who see or hear one of your creations with ferocity.  If you beat the Total DC, add the below bonuses.  If you only beat the Partial DC, halve the effects (round down).  You may only create this effect in this way once per 10 minutes.  Your creation grants it’s benefits for a variable time, depending on the type of creation\.  The effect of your creation takes up a concentration slot, as if you were maintaining a spell.",
			"Allies gain +2 COMB, +2 RANG and gain +2 to the Defy Danger Move.",
			"Creations:",
			"Performance: You perform poetry, music, or a rousing speech.  Use your performance skill to check against the DC.  The effects last 5 minutes.",
			"Cooking: You take 30 minutes to cook something from ingredients you have. Use your Alchemy skill to check against the DC.  The effects last 30 minutes.  You can create enough food or drink for 4 people to feel the effects.",
			"Crafting / Art: You spend days or weeks painting, sculpting, woodcarving or crafting something of wonderful inspiration.  Use your Art / Craft skill to check against the DC.  People who take a minute to regard your work gain the effects for 5 minutes.  Any time you create a new work with these effects, any previous work no longer provides the effects."
		]
	},
	{
		category: "profession",
		name: "Sympathetic Performance",
		desc: [
			"If you have a Source, you can inspire allies who see or hear one of your creations with sympathy.  If you beat the Total DC, add the below bonuses.  If you only beat the Partial DC, halve the effects (round down).  You may only create this effect in this way once per 10 minutes.  Your creation grants it’s benefits for a variable time, depending on the type of creation\.  The effect of your creation takes up a concentration slot, as if you were maintaining a spell.",
			"Allies gain +1 DR and gain +2 COMB when using the Defense skill.",
			"Creations:",
			"Performance: You perform poetry, music, or a rousing speech.  Use your performance skill to check against the DC.  The effects last 5 minutes.",
			"Cooking: You take 30 minutes to cook something from ingredients you have. Use your Alchemy skill to check against the DC.  The effects last 30 minutes.  You can create enough food or drink for 4 people to feel the effects.",
			"Crafting / Art: You spend days or weeks painting, sculpting, woodcarving or crafting something of wonderful inspiration.  Use your Art / Craft skill to check against the DC.  People who take a minute to regard your work gain the effects for 5 minutes.  Any time you create a new work with these effects, any previous work no longer provides the effects."
		]			
	},
	{
		category: "profession",
		name: "Animal Companion",
		desc: "When you’ve had the chance to befriend an animal and spend some time with it, it may decide that you’re a worthy companion and travel with you, if you can provide it with a better life than it currently has.  When befriended, it will act loyally to you and can be trained up to the capacity of it’s intelligence.  You can describe an Animal Handling move to give your companion single word commands, such as attack, fetch, or stay (DC 2).  It is unable to perform actions outside it’s nature, such as combat for a squirrel or staying calm in a marketplace for a wolf."
	},
	{
		category: "profession",
		name: "Animal Selection",
		desc: "[Requires Animal Companion] Your animal companions are truly special, and your training with them has been especially effective.  When you describe the way that you perform an Animal Handling move at DC 3, your animal can act against its nature, such as a mole comfortably living above ground, or an eagle swooping into combat.  Your commands may also be up to 4 words long, such as “attack when safe”, or “sit on that touchplate”."
	},
	{
		category: "profession",
		name: "Animal Kinship",
		desc: "[Requires Animal Selection] You and your animal companion have an unbreakable bond.  You can describe an Animal Handling move at DC 4 to give your companion commands up to 7 words, such as ”Get the Prince back to safety”.  When it performs this command it gains +1 to all rolls."
	},
	{
		category: "profession",
		name: "Animal Loyalty",
		desc: "[Requires Animal Companion] Your animal companion can use the Defend skill (with a COMB equal to 3 times its SR) when you are it’s target."
	},
	{
	category: "special",
		name: "Specialty Skill",
		desc: [
			"This perks is assigned to races and characters at the DMs discretion.",
			"You have a skill specialty that you’ve favoured since you were a child.  Perhaps you were a great climber, or could persuade people of your ideas.  Choose a skill on the Trained Skills or the Untrained Skills page.  You gain 5 points to your chosen Specialty Skill, and the maximum number of points you can place into it is 5 higher than normal."
		]
	}
]