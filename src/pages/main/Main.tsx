import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Rand from "rand-seed";
import { HeroesEnum } from "../../stuff/heroes.ts";
import {
	BootsSection,
	ConsumablesSection,
	AccessoriesSection,
	ItemsSections,
	ItemsEnum,
} from "../../stuff/items.ts";
import { ItemName, Stuff } from "./schema.ts";
import { ITEMS_ICONS } from "../../assets";
import { CAN_STUCK } from "../../stuff/rules.ts";

export function Main() {
	const [stuff, setStuff] = useState<Stuff>();
	useEffect(() => {
		const uuid = uuidv4();
		console.log(uuid);

		const generator = new Rand(uuid);
		const randomizedItems = new Set<ItemName>();

		const boots = randomChoose(generator, Object.values(BootsSection));
		randomizedItems.add(boots);

		const consumables: ItemName[] = [];
		for (let i = 0; i < 3; i++) {
			const item = getRandomThing(
				generator,
				Object.values(ConsumablesSection),
				randomizedItems,
			);
			consumables.push(item);
			randomizedItems.add(item);
		}

		const accessories: ItemName[] = [];
		for (let i = 0; i < 2; i++) {
			const item = getRandomThing(
				generator,
				Object.values(AccessoriesSection),
				randomizedItems,
			);
			accessories.push(item);
			randomizedItems.add(item);
		}

		const items: ItemName[] = [];
		for (let i = 0; i < 5; i++) {
			const item = rollItem(generator, randomizedItems);
			items.push(item);
			randomizedItems.add(item);
		}

		setStuff({
			hero: randomChoose(generator, Object.values(HeroesEnum)),
			boots: boots,
			consumables: consumables,
			accessories: accessories,
			items: items,
		});
	}, []);

	if (!stuff) {
		return null;
	}

	return (
		<Box>
			<Stack>
				<Stack spacing={1} direction={"row"}>
					<Typography>Герой</Typography>
					<Typography>{stuff.hero}</Typography>
				</Stack>

				<Stack spacing={1} direction={"row"}>
					<Typography>Расходник</Typography>
					<Typography>{stuff.consumables[0]}</Typography>
					<ItemCard name={stuff.consumables[0]} />
				</Stack>

				<Stack spacing={1} direction={"row"}>
					<Typography>Расходник</Typography>
					<Typography>{stuff.consumables[1]}</Typography>
					<ItemCard name={stuff.consumables[1]} />
				</Stack>

				<Stack spacing={1} direction={"row"}>
					<Typography>Ботинок</Typography>
					<Typography>{stuff.boots}</Typography>
					<ItemCard name={stuff.boots} />
				</Stack>

				<Stack spacing={1} direction={"row"}>
					<Typography>Аксессуар</Typography>
					<Typography>{stuff.accessories[0]}</Typography>
					<ItemCard name={stuff.accessories[0]} />
				</Stack>

				<Stack spacing={1} direction={"row"}>
					<Typography>Аксессуар</Typography>
					<Typography>{stuff.accessories[1]}</Typography>
					<ItemCard name={stuff.accessories[1]} />
				</Stack>

				<Stack spacing={1} direction={"row"}>
					<Typography>Предмет</Typography>
					<Typography>{stuff.items[0]}</Typography>
					<ItemCard name={stuff.items[0]} />
				</Stack>

				<Stack spacing={1} direction={"row"}>
					<Typography>Предмет</Typography>
					<Typography>{stuff.items[1]}</Typography>
					<ItemCard name={stuff.items[1]} />
				</Stack>

				<Stack spacing={1} direction={"row"}>
					<Typography>Предмет</Typography>
					<Typography>{stuff.items[2]}</Typography>
					<ItemCard name={stuff.items[2]} />
				</Stack>

				<Stack spacing={1} direction={"row"}>
					<Typography>Предмет</Typography>
					<Typography>{stuff.items[3]}</Typography>
					<ItemCard name={stuff.items[3]} />
				</Stack>

				<Stack spacing={1} direction={"row"}>
					<Typography>Предмет</Typography>
					<Typography>{stuff.items[4]}</Typography>
					<ItemCard name={stuff.items[4]} />
				</Stack>
			</Stack>
		</Box>
	);
}

function ItemCard({ name }: { name: ItemName }) {
	const content = useMemo(() => {
		return ITEMS_ICONS[name];
	}, [name]);

	return <img src={content} alt={name.toString()} />;
}

function getRandomThing(
	generator: Rand,
	list: ItemsEnum[],
	randomizedItems: Set<ItemName>,
): ItemName {
	let item: ItemName | undefined;
	do {
		item = randomChoose(generator, list);
		if (randomizedItems.has(item) && !CAN_STUCK.has(item)) {
			item = undefined; // Skip if already picked and not allowed to be stuck
		}
	} while (!item);

	return item;
}

function randomChoose<T>(generator: Rand, list: T[]): T {
	return list[Math.floor(generator.next() * list.length)];
}

function rollItem(generator: Rand, randomizedItems: Set<ItemName>): ItemName {
	const section = randomChoose(generator, Object.values(ItemsSections));
	return getRandomThing(generator, Object.values(section), randomizedItems);
}
//
// function canGetItem(name: ItemName): boolean {
// 	return ITEMS_ICONS[name] !== undefined;
// }
