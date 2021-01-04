export interface reagent {
	name: string;
	desc: string;
	properties: ReagentProperty[];
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
		properties: [ReagentProperties.Hyd],
		rarity: Rarity.C
	},
	{
		name: "Pure Alcohol",
		desc: "Purified alcohol, used to fortify and enhance alchemical recipes.",
		properties: [ReagentProperties.For],
		rarity: Rarity.C
	},
	{
		name: "Lunestalk",
		desc: "A small green shoot that is tasty and grinds into a paste easily.",
		properties: [ReagentProperties.Vig, ReagentProperties.For, ReagentProperties.Hyd],
		rarity: Rarity.C
	},
	{
		name: "Verole",
		desc: "Verole is a succulent plant rich in moist sap and with thick, strong fibrous stalks ending in a mild barb.",
		properties: [ReagentProperties.Vig, ReagentProperties.Vig],
		rarity: Rarity.C
	},
	{
		name: "Oilayn",
		desc: "A plant with a bulbous tip on a purple stem.  It excretes a small amount of gummy paste which can be thickened by beating.",
		properties: [ReagentProperties.Vig, ReagentProperties.Oil, ReagentProperties.Exc],
		rarity: Rarity.C
	},
	{
		name: "Conga Leaf",
		desc: "A herb with tiny leaves.  When set alight, tufts of the green leaf let off a lot of smoke that has excellent anti-bacterial properties.",
		properties: [ReagentProperties.The, ReagentProperties.Exc, ReagentProperties.Oil],
		rarity: Rarity.C
	},
	{
		name: "Gandra",
		desc: "A small bush that produces purple-blue berries.  The berries can be dried, crushed and made into a tea.  Has a particularly pleasant sweet smell.",
		properties: [ReagentProperties.For, ReagentProperties.Exc, ReagentProperties.Sce],
		rarity: Rarity.C
	},
	{
		name: "Tarrakind",
		desc: "An exotic spice, known to raise the humours.  Also midly spicy and very tasty.",
		properties: [ReagentProperties.The, ReagentProperties.Vig, ReagentProperties.Exc],
		rarity: Rarity.C
	},
	{
		name: "Sansaveria",
		desc: "A small bush that flowers in spring.  Its leaves can be crushed to release a strong lemon-fresh scent.",
		properties: [ReagentProperties.For, ReagentProperties.Con, ReagentProperties.Poi],
		rarity: Rarity.C
	},
	{
		name: "Turnizin",
		desc: "A yellow flower that can be brewed into a fragrant tea that causes mild dizziness.  Sometimes used as a drug by the poor.  Has an earthy, pleasant smell.",
		properties: [ReagentProperties.Soo, ReagentProperties.Con, ReagentProperties.Poi],
		rarity: Rarity.C
	},
	{
		name: "Fellikus",
		desc: "A gnarled vine that produces purple berries.  The berries start hard and gritty, but dried and left alone they soften sweetly.  Grows best in drier climates.",
		properties: [ReagentProperties.Sce, ReagentProperties.Soo, ReagentProperties.Oil],
		rarity: Rarity.C
	},
	{
		name: "Restofelikus",
		desc: "A small, weedy plant that blooms multiple coloured flowers.  The smaller leaves can be ground into a powder that lowers blood pressure and anxiety.",
		properties: [ReagentProperties.For, ReagentProperties.Soo, ReagentProperties.Vig, ReagentProperties.Oil],
		rarity: Rarity.C
	},
	{
		name: "Blackweep",
		desc: "A bell-shaped flower that weeps a thick, sappy substance which grows over with mould.",
		properties: [ReagentProperties.Cor, ReagentProperties.Con, ReagentProperties.Sce],
		rarity: Rarity.U
	},
	{
		name: "Bubble-tipped Flamebrim",
		desc: "A red plant with bulbous, liquid filled tips that burst when lightly agitated as a defense mechanism.",
		properties: [ReagentProperties.Cor, ReagentProperties.Hyd, ReagentProperties.The],
		rarity: Rarity.U
	},
	{
		name: "Sapho",
		desc: "A deep purple herb that in volume can induce intense mania, dizziness and vomiting in subjects.  It is odourless and colourless, but dries to a distinct chalky purple.",
		properties: [ReagentProperties.Con, ReagentProperties.Exc, ReagentProperties.Poi],
		rarity: Rarity.U
	},
	{
		name: "Cushiin",
		desc: "A red leafy herb whose powdered form creates an itching, burning and sneezing sensation when ground and prepared correctly.",
		properties: [ReagentProperties.The, ReagentProperties.Poi, ReagentProperties.Cor],
		rarity: Rarity.U
	},
	{
		name: "Lampfthus",
		desc: "A rare, grey-green bulbous plant with large, grey-green flowers.  As a defensive mechanism, the dripping liquid that spills from its flowers rots nearby plants.  Because of this it doesn’t grow very fast or strong, but it rarely has competition.",
		properties: [ReagentProperties.Cor, ReagentProperties.Poi, ReagentProperties.Hyd],
		rarity: Rarity.U
	},
	{
		name: "Degandre",
		desc: "A small, woody herb with a terrible bitter taste.  When used in low concentration, it is famous for providing a numbing effect when ingested or applied to the skin.  However it becomes corrosive when too much is applied, or when reduced using alchemical processes.",
		properties: [ReagentProperties.Cor, ReagentProperties.Vig, ReagentProperties.The, ReagentProperties.Soo],
		rarity: Rarity.U
	},
	{
		name: "Currumin",
		desc: "A spice ground from bones of exotic magical creatures.  Tastes tangy.",
		properties: [ReagentProperties.Exc, ReagentProperties.The, ReagentProperties.Sce],
		rarity: Rarity.U
	},
	{
		name: "Moonlight Moss",
		desc: "An orange, mossy bush that grows in dry place in cracks and places hidden from weather.  Glows mildly in the moonlight.",
		properties: [ReagentProperties.Con, ReagentProperties.Exc, ReagentProperties.Exc],
		rarity: Rarity.U
	},
	{
		name: "Seekhale",
		desc: "Also: Seekhalish Flower.  A small shrub which blooms into vivid white and gold mottled flowers.  An Elvish traditional flower used in political (peace making, crownings, diplomacy etc) and education which represents Political Groups.  Has a pleasant aquine, woody, forest smell.",
		properties: [ReagentProperties.For, ReagentProperties.Soo, ReagentProperties.Sce, ReagentProperties.Oil, ReagentProperties.Hyd],
		rarity: Rarity.R
	},
	{
		name: "Fellandris",
		desc: "A bell-shaped flower that forms a waxen lining on the inside to attract insects.  While Fellandris is relatively common, a specimen with the crucial waxen lining is quite rare.",
		properties: [ReagentProperties.Oil, ReagentProperties.Sce, ReagentProperties.Soo, ReagentProperties.Con, ReagentProperties.Poi],
		rarity: Rarity.R
	},
	{
		name: "White Flohthinne",
		desc: "A beautiful plant with white stems and flowers, ending in a yellow centre.  Grows best in in soils of intensely rich nutrients, and as such is associated with death and bloodshed.",
		properties: [ReagentProperties.Vig, ReagentProperties.Vig, ReagentProperties.Vig, ReagentProperties.For, ReagentProperties.For],
		rarity: Rarity.R
	},
	{
		name: "Solomon Stone",
		desc: "A stone made by Alchemists past.  When used in recipes, reduces the DC by 1.",
		properties: [ReagentProperties.For, ReagentProperties.The, ReagentProperties.Hyd, ReagentProperties.Vig, ReagentProperties.Soo, ReagentProperties.Sce],
		rarity: Rarity.R
	},
	{
		name: "Solomon Salt",
		desc: "A powdery salt made by Alchemists past.  When used in recipes, reduces the DC by 1.",
		properties: [ReagentProperties.Con, ReagentProperties.Cor, ReagentProperties.Poi, ReagentProperties.Oil, ReagentProperties.Exc],
		rarity: Rarity.R
	}
]