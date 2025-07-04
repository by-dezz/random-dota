import { ItemsEnum } from "./items.ts";

// export const EXCLUDABLE_ITEMS = new Set([
// 	ItemsEnum.PHASE_BOOTS,
// 	ItemsEnum.POWER_TREADS,
// 	ItemsEnum.TRANQUIL_BOOTS,
// 	ItemsEnum.ARCANE_BOOTS,
// 	ItemsEnum.BOOTS_OF_TRAVEL,
//
// ])
//
export const EXCLUDES = {
	[ItemsEnum.PHASE_BOOTS]: new Set([
		ItemsEnum.POWER_TREADS,
		ItemsEnum.TRANQUIL_BOOTS,
		ItemsEnum.ARCANE_BOOTS,
		ItemsEnum.BOOTS_OF_TRAVEL,
		ItemsEnum.GUARDIAN_GREAVES,
		ItemsEnum.BOOTS_OF_BEARING,
		ItemsEnum.BOOTS_OF_SPEED,
	]),
	[ItemsEnum.POWER_TREADS]: new Set([
		ItemsEnum.PHASE_BOOTS,
		ItemsEnum.TRANQUIL_BOOTS,
		ItemsEnum.ARCANE_BOOTS,
		ItemsEnum.BOOTS_OF_TRAVEL,
		ItemsEnum.GUARDIAN_GREAVES,
		ItemsEnum.BOOTS_OF_BEARING,
		ItemsEnum.BOOTS_OF_SPEED,
	]),
	[ItemsEnum.TRANQUIL_BOOTS]: new Set([
		ItemsEnum.POWER_TREADS,
		ItemsEnum.PHASE_BOOTS,
		ItemsEnum.ARCANE_BOOTS,
		ItemsEnum.BOOTS_OF_TRAVEL,
		ItemsEnum.GUARDIAN_GREAVES,
		ItemsEnum.BOOTS_OF_BEARING,
		ItemsEnum.BOOTS_OF_SPEED,
	]),
	[ItemsEnum.ARCANE_BOOTS]: new Set([
		ItemsEnum.POWER_TREADS,
		ItemsEnum.TRANQUIL_BOOTS,
		ItemsEnum.BOOTS_OF_TRAVEL,
		ItemsEnum.PHASE_BOOTS,
		ItemsEnum.GUARDIAN_GREAVES,
		ItemsEnum.BOOTS_OF_BEARING,
		ItemsEnum.BOOTS_OF_SPEED,

		ItemsEnum.RING_OF_BASILIUS,
	]),
	[ItemsEnum.BOOTS_OF_TRAVEL]: new Set([
		ItemsEnum.POWER_TREADS,
		ItemsEnum.TRANQUIL_BOOTS,
		ItemsEnum.ARCANE_BOOTS,
		ItemsEnum.PHASE_BOOTS,
		ItemsEnum.GUARDIAN_GREAVES,
		ItemsEnum.BOOTS_OF_BEARING,
		ItemsEnum.BOOTS_OF_SPEED,
	]),

	[ItemsEnum.GUARDIAN_GREAVES]: new Set([
		ItemsEnum.ARCANE_BOOTS,
		ItemsEnum.MEKANSM,
		ItemsEnum.BUCKLER,

		ItemsEnum.POWER_TREADS,
		ItemsEnum.TRANQUIL_BOOTS,
		ItemsEnum.PHASE_BOOTS,
		ItemsEnum.BOOTS_OF_TRAVEL,
		ItemsEnum.BOOTS_OF_BEARING,
		ItemsEnum.BOOTS_OF_SPEED,
	]),

	[ItemsEnum.BOOTS_OF_BEARING]: new Set([
		ItemsEnum.DRUM_OF_ENDURANCE,
		ItemsEnum.TRANQUIL_BOOTS,

		ItemsEnum.POWER_TREADS,
		ItemsEnum.ARCANE_BOOTS,
		ItemsEnum.PHASE_BOOTS,
		ItemsEnum.BOOTS_OF_TRAVEL,
		ItemsEnum.GUARDIAN_GREAVES,
		ItemsEnum.BOOTS_OF_SPEED,
	]),

	[ItemsEnum.HARPOON]: new Set([ItemsEnum.ECHO_SABRE]),
	[ItemsEnum.MJOLLNIR]: new Set([ItemsEnum.MAELSTROM]),
	[ItemsEnum.KHANDA]: new Set([ItemsEnum.PHYLACTERY]),

	[ItemsEnum.HEAVENS_HALBERD]: new Set([ItemsEnum.VANGUARD]),
	[ItemsEnum.SANGE_AND_YASHA]: new Set([ItemsEnum.YASHA, ItemsEnum.SANGE]),
	[ItemsEnum.KAYA_AND_SANGE]: new Set([ItemsEnum.KAYA, ItemsEnum.SANGE]),
	[ItemsEnum.YASHA_AND_KAYA]: new Set([ItemsEnum.YASHA, ItemsEnum.KAYA]),

	// TODO
	// [ItemsEnum.OVERWHELMING_BLINK]: new Set([])
	// [ItemsEnum.OVERWHELMING_BLINK]: new Set([])
	// [ItemsEnum.OVERWHELMING_BLINK]: new Set([])

	[ItemsEnum.REVENANTS_BROOCH]: new Set([ItemsEnum.CRYSTALYS]),
	[ItemsEnum.PARASMA]: new Set([ItemsEnum.WITCH_BLADE]),
	[ItemsEnum.ABYSSAL_BLADE]: new Set([ItemsEnum.SKULL_BASHER, ItemsEnum.SANGE]),
	[ItemsEnum.SILVER_EDGE]: new Set([ItemsEnum.SHADOW_BLADE]),
	[ItemsEnum.DAEDALUS]: new Set([ItemsEnum.CRYSTALYS]),
	[ItemsEnum.DISPERSER]: new Set([ItemsEnum.DIFFUSAL_BLADE]),
	[ItemsEnum.BLOODTHORN]: new Set([ItemsEnum.ORCHID_MALEVOLENCE]),

	[ItemsEnum.METEOR_HAMMER]: new Set([ItemsEnum.KAYA]),
	[ItemsEnum.GLEIPNIR]: new Set([ItemsEnum.ROD_OF_ATOS]),
	[ItemsEnum.ETHEREAL_BLADE]: new Set([ItemsEnum.AETHER_LENS]),
	[ItemsEnum.WIND_WAKER]: new Set([ItemsEnum.EULS_SCEPTER_OF_DIVINITY]),
	[ItemsEnum.OCTARINE_CORE]: new Set([ItemsEnum.SOUL_BOOSTER]),
	[ItemsEnum.BLOODSTONE]: new Set([ItemsEnum.SOUL_BOOSTER]),

	[ItemsEnum.CRIMSON_GUARD]: new Set([ItemsEnum.VANGUARD]),
	[ItemsEnum.HELM_OF_THE_OVERLORD]: new Set([ItemsEnum.HELM_OF_THE_DOMINATOR]),
	[ItemsEnum.LOTUS_ORB]: new Set([ItemsEnum.PERSEVERANCE]),
	[ItemsEnum.LINKENS_SPHERE]: new Set([ItemsEnum.PERSEVERANCE]),
	[ItemsEnum.ASSAULT_CUIRASS]: new Set([ItemsEnum.BUCKLER]),

	[ItemsEnum.HOLY_LOCKET]: new Set([ItemsEnum.MAGIC_WAND]),
	[ItemsEnum.SPIRIT_VESSEL]: new Set([ItemsEnum.URN_OF_SHADOWS]),
	[ItemsEnum.SOLAR_CREST]: new Set([ItemsEnum.PAVISE]),
	[ItemsEnum.MEKANSM]: new Set([ItemsEnum.HEADDRESS]),
	[ItemsEnum.VLADMIRS_OFFERING]: new Set([
		ItemsEnum.BUCKLER,
		ItemsEnum.RING_OF_BASILIUS,
	]),
	[ItemsEnum.PIPE_OF_INSIGHT]: new Set([ItemsEnum.RING_OF_BASILIUS]),

	[ItemsEnum.HURRICANE_PIKE]: new Set([
		ItemsEnum.FORCE_STAFF,
		ItemsEnum.DRAGON_LANCE,
	]),
};

export const CAN_STUCK = new Set([
	ItemsEnum.BLOOD_GRENADE,
	ItemsEnum.HEALING_SALVE,
	ItemsEnum.ENCHANTED_MANGO,
	ItemsEnum.FAERIE_FIRE,
	ItemsEnum.TANGO,
	ItemsEnum.TOWN_PORTAL_SCROLL,
	ItemsEnum.DAEDALUS,
	ItemsEnum.OBSERVER_WARD,
	ItemsEnum.SENTRY_WARD,
	ItemsEnum.SMOKE_OF_DECEIT,
	ItemsEnum.DIVINE_RAPIER,
	ItemsEnum.BRACER,
	ItemsEnum.WRAITH_BAND,
	ItemsEnum.NULL_TALISMAN,
	ItemsEnum.HEART_OF_TARRASQUE,
]);
