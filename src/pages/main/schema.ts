import { ItemsEnum } from "../../stuff/items.ts";

export type ItemName = ItemsEnum;

export type Stuff = {
	hero: string;
	boots: ItemName;
	consumables: ItemName[];
	accessories: ItemName[];
	items: ItemName[];
};
