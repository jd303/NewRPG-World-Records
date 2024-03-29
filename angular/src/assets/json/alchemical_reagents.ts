export interface reagent {
	name: string;
	desc: string;
	properties: ReagentProperty[];
	rarity: Rarity;
}

enum Rarity {
	C = 'Common',
	U = 'Uncommon',
	R = 'Rare',
}

export class ReagentProperty {
	code: 'string';
	name: 'string';
	colour: 'string';
	constructor(code, effect, colour) {
		this.code = code;
		this.name = effect;
		this.colour = colour;
	}
	get info(): any {
		return { code: this.code, name: this.name, colour: this.colour };
	}
}

export const ReagentProperties = {
	For: new ReagentProperty('For', 'Fortify', '#888').info,
	The: new ReagentProperty('The', 'Thermality', '#e69138').info,
	Hyd: new ReagentProperty('Hyd', 'Hydrant', '#3c78d8').info,
	Vig: new ReagentProperty('Vig', 'Vigour', '#6aa84f').info,
	Soo: new ReagentProperty('Soo', 'Soothe', '#a64d79').info,
	Exc: new ReagentProperty('Exc', 'Excite', '#f1c232').info,
	Con: new ReagentProperty('Con', 'Confusion', '#674ea7').info,
	Cor: new ReagentProperty('Cor', 'Corrode', '#b6d7a8').info,
	Poi: new ReagentProperty('Poi', 'Poison', '#cc0000').info,
	Oil: new ReagentProperty('Oil', 'Oil', '#111').info,
	Sce: new ReagentProperty('Sce', 'Scent', '#e2a2de').info,
};

export const ReagentList: reagent[] = [
	{
		name: 'Pure Water',
		desc: 'Water purified through careful manipulation.',
		properties: [ReagentProperties.Hyd],
		rarity: Rarity.C,
	},
	{
		name: 'Pure Alcohol',
		desc: 'Purified alcohol, used to fortify and enhance alchemical recipes.',
		properties: [ReagentProperties.For],
		rarity: Rarity.C,
	},
	{
		name: 'Starkth Nettle',
		desc: 'Long thin shoots that clumb in large numbers.  Older shoots die at the base, and can be collected and crushed into flakes.  Grows in grassy areas.',
		properties: [ReagentProperties.The],
		rarity: Rarity.C,
	},
	{
		name: 'Eastern Silverbarb',
		desc: 'A shrub with long green and grey ferrugated leaves.  Its sap is thin and lightly tacky.  Grows commonly in the East of the Civil Holds.',
		properties: [ReagentProperties.Vig],
		rarity: Rarity.C,
	},
	{
		name: 'Western Silverbarb',
		desc: 'A shrub with long green and grey ferrugated leaves.  Its sap is thick and tacky.  Grows commonly in the West of the Civil Holds.',
		properties: [ReagentProperties.Exc],
		rarity: Rarity.C,
	},
	{
		name: 'Gillyweed',
		desc: 'A small grass that grows in dryer climates. Has a sickly yellow-green colour and the leaves always appear dry.',
		properties: [ReagentProperties.Con],
		rarity: Rarity.C,
	},
	{
		name: 'Palomile',
		desc: 'A medium sized bush whose rich green leaves can be dried into a slightly sweet, soothing tea.  Grows in temperate, hilly areas.',
		properties: [ReagentProperties.Soo],
		rarity: Rarity.C,
	},
	{
		name: 'Lunestalk',
		desc: "Also called Dryad's Guide, lunestalk is a small leafy grass with a large stalk which smells and tastes terrible, but which blooms twice per year.  Grows in grass and woodlands.",
		properties: [ReagentProperties.Oil],
		rarity: Rarity.C,
	},
	{
		name: 'Kahinder',
		desc: 'The lure of the bright red berries of this bush is dangerous, as ingestion usually incites vomiting shortly after.  Grows in temperate climates.',
		properties: [ReagentProperties.Cor],
		rarity: Rarity.C,
	},
	{
		name: 'Sourleaf',
		desc: 'A medium sized tree.  The underside of the leaves have a waxen protective coating which can be scraped off.  Grows commonly.',
		properties: [ReagentProperties.Poi],
		rarity: Rarity.C,
	},
	{
		name: 'Swamp Fungus',
		desc: 'A wilted mushroom with purple and yellow splotches on the underside.  When broken, emits a neutral scent that travels far.  Grows near water sources.',
		properties: [ReagentProperties.Sce],
		rarity: Rarity.C,
	},
	{
		name: 'Lunestalk',
		desc: 'A small green shoot that is tasty and grinds into a paste easily.  Grows near water sources.',
		properties: [ReagentProperties.Vig, ReagentProperties.For, ReagentProperties.Hyd],
		rarity: Rarity.C,
	},
	{
		name: 'Verole',
		desc: 'Verole is a succulent plant rich in moist sap and with thick, strong fibrous stalks ending in a mild barb.  Grows in forested areas.',
		properties: [ReagentProperties.Vig, ReagentProperties.Vig],
		rarity: Rarity.C,
	},
	{
		name: 'Oilayn',
		desc: 'A plant with a bulbous tip on a purple stem.  It excretes a small amount of gummy paste which can be thickened by beating.  Grows sparesely in plains and tundras.',
		properties: [ReagentProperties.Vig, ReagentProperties.Oil, ReagentProperties.Exc],
		rarity: Rarity.C,
	},
	{
		name: 'Conga Leaf',
		desc: 'A tree with large leaves, and smaller herb-like leaves that grow around the trunk up high.  When set alight, tufts of the small leaf let off a lot of smoke that has excellent anti-bacterial properties.  Grows in temperate climates.',
		properties: [ReagentProperties.The, ReagentProperties.Exc, ReagentProperties.Oil],
		rarity: Rarity.C,
	},
	{
		name: 'Gandra',
		desc: 'A small bush that produces purple-blue berries.  The berries can be dried, crushed and made into a tea.  Has a particularly pleasant sweet smell.  Grows in rocky areas.',
		properties: [ReagentProperties.For, ReagentProperties.Exc, ReagentProperties.Sce],
		rarity: Rarity.C,
	},
	{
		name: 'Tarrakind',
		desc: 'An exotic spice, known to raise the humours.  Also midly spicy and very tasty.  Grows in arid climates.',
		properties: [ReagentProperties.The, ReagentProperties.Vig, ReagentProperties.Exc],
		rarity: Rarity.C,
	},
	{
		name: 'Sansaveria',
		desc: 'A small bush that flowers in spring.  Its leaves can be crushed to release a strong lemon-fresh scent.  Grows commonly.',
		properties: [ReagentProperties.For, ReagentProperties.Con, ReagentProperties.Poi],
		rarity: Rarity.C,
	},
	{
		name: 'Turnizin',
		desc: 'A yellow flower that can be brewed into a fragrant tea that causes mild dizziness.  Sometimes used as a drug by the poor.  Has an earthy, pleasant smell.  Grows in low-light areas.',
		properties: [ReagentProperties.Soo, ReagentProperties.Con, ReagentProperties.Poi],
		rarity: Rarity.C,
	},
	{
		name: 'Fellikus',
		desc: 'A gnarled vine that produces purple berries.  The berries start hard and gritty, but dried and left alone they soften sweetly.  Grows best in drier climates.',
		properties: [ReagentProperties.Sce, ReagentProperties.Soo, ReagentProperties.Oil],
		rarity: Rarity.C,
	},
	{
		name: 'Restofelikus',
		desc: 'A small, weedy plant that blooms multiple coloured flowers.  The smaller leaves can be ground into a powder that lowers blood pressure and anxiety.',
		properties: [ReagentProperties.For, ReagentProperties.Soo, ReagentProperties.Vig, ReagentProperties.Oil],
		rarity: Rarity.C,
	},
	{
		name: 'Blackweep',
		desc: 'A bell-shaped flower that weeps a thick, sappy substance which grows over with mould.  Grows in caves and dank environments.  Extremely rare specimens that have aged and not been pruned can grow silky, transparent pods containing concentrated sap.',
		properties: [ReagentProperties.Cor, ReagentProperties.Con, ReagentProperties.Sce],
		rarity: Rarity.U,
	},
	{
		name: 'Bubble-tipped Flamebrim',
		desc: 'A red plant with bulbous, liquid filled tips that burst when lightly agitated as a defense mechanism.  Grows in arid evnvironments.',
		properties: [ReagentProperties.Cor, ReagentProperties.Hyd, ReagentProperties.The],
		rarity: Rarity.U,
	},
	{
		name: 'Sapho',
		desc: 'A deep purple herb that in volume can induce intense mania, dizziness and vomiting in subjects.  It is odourless and colourless, but dries to a distinct chalky purple.  Grows in cold, elevated environments.',
		properties: [ReagentProperties.Con, ReagentProperties.Exc, ReagentProperties.Poi],
		rarity: Rarity.U,
	},
	{
		name: 'Cushiin',
		desc: 'A red leafy herb whose powdered form creates an itching, burning and sneezing sensation when ground and prepared correctly.  Grows in grass and woodlands.',
		properties: [ReagentProperties.The, ReagentProperties.Poi, ReagentProperties.Cor],
		rarity: Rarity.U,
	},
	{
		name: 'Lampfthus',
		desc: 'An uncommon, grey-green bulbous plant with large, grey-green flowers.  As a defensive mechanism, the dripping liquid that spills from its flowers rots nearby plants.  Because of this it doesn’t grow very fast or strong, but it rarely has competition.  Grows on forest floors.',
		properties: [ReagentProperties.Cor, ReagentProperties.Poi, ReagentProperties.Hyd],
		rarity: Rarity.U,
	},
	{
		name: 'Degandre',
		desc: 'A small, woody herb with a terrible bitter taste.  When used in low concentration, it is famous for providing a numbing effect when ingested or applied to the skin.  However it becomes corrosive when too much is applied, or when reduced using alchemical processes.  Grows in woodland areas.',
		properties: [ReagentProperties.Cor, ReagentProperties.Vig, ReagentProperties.The, ReagentProperties.Soo],
		rarity: Rarity.U,
	},
	{
		name: 'Currumin',
		desc: 'A spice ground from bones of exotic creatures.  Tastes tangy.',
		properties: [ReagentProperties.Exc, ReagentProperties.The, ReagentProperties.Sce],
		rarity: Rarity.U,
	},
	{
		name: 'Moonlight Moss',
		desc: 'An orange, mossy bush that grows in dry places, between cracks and rocks and other places hidden from weather.  Glows mildly in the moonlight.',
		properties: [ReagentProperties.Con, ReagentProperties.Exc, ReagentProperties.Exc],
		rarity: Rarity.U,
	},
	{
		name: 'Deludian Stempod',
		desc: "A rare plant with one long-stalked tuber and a shorter crown that it emerges from.  Grows best in high altitudes, as the pod releases it's spores on the wind to propagate.  Despite providing confusion effects alchemically, some have experienced periods of intense, singular focus after breathing the spores directly.",
		properties: [ReagentProperties.Con, ReagentProperties.Con],
		rarity: Rarity.R,
	},
	{
		name: "Old Crone's Warning",
		desc: 'A small grassy bush about 10cm tall, which flowers small pink and red 5 petalled flowers once per season.  Small propagating seeds grow underneath these flowers then, which are taken as food by insects.  If handled carefully, this makes for an excellent, if expensive, cleaning fluid.',
		properties: [ReagentProperties.Cor, ReagentProperties.Cor],
		rarity: Rarity.R,
	},
	{
		name: 'Servine Aldorus',
		desc: 'A variant of the common and mundane vine Aldorus, but far more wet, and looks as if it is in decomposition at all times.  Lives parasitially on large trees high off the ground.  Exudes a pungent odour when moved, and rubbing on the chest or inhaling the fumes opens airways and makes the heart beat faster.',
		properties: [ReagentProperties.Exc, ReagentProperties.Exc],
		rarity: Rarity.R,
	},
	{
		name: 'Variegated Lungstem',
		desc: 'A hardy plant with long leaves of various greens that grow from a single central root system.  Grows between 5 and 30cm in diameter.  The leaves trap impurities in the air and filter them down to the soil which usually poisons the soil, meaning the Lungstem only thrives in places of purity.',
		properties: [ReagentProperties.For, ReagentProperties.For],
		rarity: Rarity.R,
	},
	{
		name: 'Pigmoss',
		desc: 'A rich green lichen that grows on the cooler side of trees, burrowing deep into the wood and trapping water for long periods.  Has such a foul taste that causes immediate vomiting, however some have mastered getting to the water without the taste.',
		properties: [ReagentProperties.Hyd, ReagentProperties.Hyd],
		rarity: Rarity.R,
	},
	{
		name: 'Purple-green Algae',
		desc: 'Growing in the center of large, still water sources, the algae releases an oily substance to keep it afloat, but which over time chokes the waterway.  If left to cure, the oil has also been known to reduce the scent of anything it covers or is cooked with.',
		properties: [ReagentProperties.Oil, ReagentProperties.Oil],
		rarity: Rarity.R,
	},
	{
		name: 'Yellow Whither',
		desc: "A woody tree like a bonsai, but nowhere near as beautiful.  The sap and bark each are poisonous, though the toxins are slightly different.  Teas made from the bark can lower the drinker's constitution",
		properties: [ReagentProperties.Poi, ReagentProperties.Poi],
		rarity: Rarity.R,
	},
	{
		name: 'Richland Sweetbloom',
		desc: 'A gorgeous tall flowering bush.  Rich green leaves and bright, wide white flowers all give off a powerful sweet smell.  It is also very edible and very tasty, and because of this is a favourite of animals and usually eaten as soon as they bloom.',
		properties: [ReagentProperties.Sce, ReagentProperties.Sce],
		rarity: Rarity.R,
	},
	{
		name: 'Weatherblossom',
		desc: 'Also known as Fortunetell, they say this plant can tell the future, but the truth is that its leaves and flower slighty changes colour and position, predictably, based on the weather.  Sadly however, it triggers many allergies and exacerbates health conditions.',
		properties: [ReagentProperties.Soo, ReagentProperties.Soo],
		rarity: Rarity.R,
	},
	{
		name: 'Hardy Shade Whitfern',
		desc: 'A plain looking fern; the only unique property is a whitening a the center of the plant.  If the waxy gritty spores of the fern tips are eaten directly, can reduce body temperature and incite mild apathy.',
		properties: [ReagentProperties.The, ReagentProperties.The],
		rarity: Rarity.R,
	},
	{
		name: 'Drakaea',
		desc: 'A rich, yellow and red, hammer-shaped orchid that releases a pheremone that attracts and confuses insects.',
		properties: [ReagentProperties.Vig, ReagentProperties.Vig],
		rarity: Rarity.R,
	},
	{
		name: 'Fallisroot',
		desc: 'A gnarled greyish root, which smells of pepper and smoke.  Once it grows past 6cms it is relatively useless.  It is also considered illegal, as it incites rage and adrenal responses in consumers when prepared properly.  Grows commonly, but finding a good young sample is rare.',
		properties: [ReagentProperties.For, ReagentProperties.Exc, ReagentProperties.Vig],
		rarity: Rarity.R,
	},
	{
		name: 'Seekhale',
		desc: 'Also: Seekhalish Flower.  A small shrub which blooms into vivid white and gold mottled flowers.  An Elvish traditional flower used in political (peace making, crownings, diplomacy etc) and education which represents Political Groups.  Has a pleasant aquine, woody, forest smell.  Grows in deep forests near Eppelmore.',
		properties: [
			ReagentProperties.For,
			ReagentProperties.Soo,
			ReagentProperties.Sce,
			ReagentProperties.Oil,
			ReagentProperties.Hyd,
		],
		rarity: Rarity.R,
	},
	{
		name: 'Fellandris',
		desc: 'A bell-shaped flower that forms a waxen lining on the inside to attract insects.  While Fellandris is relatively common, a specimen with the crucial waxen lining is quite rare.  Grows in low-light wet environments.',
		properties: [
			ReagentProperties.Oil,
			ReagentProperties.Sce,
			ReagentProperties.Soo,
			ReagentProperties.Con,
			ReagentProperties.Poi,
		],
		rarity: Rarity.R,
	},
	{
		name: 'White Flohthinne',
		desc: 'A beautiful plant with white stems and flowers, ending in a yellow centre.  Grows best in in soils of intensely rich nutrients, and as such is associated with death and bloodshed.',
		properties: [
			ReagentProperties.Vig,
			ReagentProperties.Vig,
			ReagentProperties.Vig,
			ReagentProperties.For,
			ReagentProperties.For,
		],
		rarity: Rarity.R,
	},
	{
		name: 'Solomon Stone',
		desc: 'A stone made by Alchemists past.  When used in recipes, reduces the DC by 1.',
		properties: [
			ReagentProperties.For,
			ReagentProperties.The,
			ReagentProperties.Hyd,
			ReagentProperties.Vig,
			ReagentProperties.Soo,
			ReagentProperties.Sce,
		],
		rarity: Rarity.R,
	},
	{
		name: 'Solomon Salt',
		desc: 'A powdery salt made by Alchemists past.  When used in recipes, reduces the DC by 1.',
		properties: [
			ReagentProperties.Con,
			ReagentProperties.Cor,
			ReagentProperties.Poi,
			ReagentProperties.Oil,
			ReagentProperties.Exc,
		],
		rarity: Rarity.R,
	},
];
