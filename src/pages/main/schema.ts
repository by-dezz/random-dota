import {
	AccessoriesEnum,
	ArmorEnum,
	ArtifactsEnum,
	ConsumablesEnum,
	MagicalEnum,
	SupportEnum,
	WeaponsEnum,
} from "../../stuff/items.ts";

export type ItemName = keyof typeof ArtifactsEnum &
	keyof typeof WeaponsEnum &
	keyof typeof ArmorEnum &
	keyof typeof AccessoriesEnum &
	keyof typeof SupportEnum &
	keyof typeof MagicalEnum &
	keyof typeof ConsumablesEnum;

export type Stuff = {
	hero: string;
	boots: ItemName;
	consumables: [ItemName, ItemName, ItemName];
	accessories: [ItemName, ItemName];
	items: [ItemName, ItemName, ItemName, ItemName, ItemName];
};
