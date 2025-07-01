import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Rand from "rand-seed";
import { HeroesEnum } from "../../stuff/heroes.ts";
import {
	BootsSection,
	ConsumablesEnum,
	ItemsSections,
} from "../../stuff/items.ts";
import { ItemName, Stuff } from "./schema.ts";
import { ITEMS_ICONS } from "../../assets";

export function Main() {
	const [stuff, setStuff] = useState<Stuff>();
	useEffect(() => {
		const uuid = uuidv4();
		console.log(uuid);
		const generator = new Rand(uuid);
		setStuff({
			hero: getRandomThing(generator, Object.values(HeroesEnum)),
			boots: getRandomThing(generator, Object.values(BootsSection)),
			consumables: [
				getRandomThing(generator, Object.values(ConsumablesEnum)),
				getRandomThing(generator, Object.values(ConsumablesEnum)),
				getRandomThing(generator, Object.values(ConsumablesEnum)),
			],
			accessories: [
				getRandomThing(generator, Object.values(ConsumablesEnum)),
				getRandomThing(generator, Object.values(ConsumablesEnum)),
			],
			items: [
				rollItem(generator),
				rollItem(generator),
				rollItem(generator),
				rollItem(generator),
				rollItem(generator),
			],
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

	return <img src={content} alt={name} />;
}

function getRandomThing(generator: Rand, list: any[]): ItemName {
	return list[Math.floor(generator.next() * list.length)] as ItemName;
}

function rollItem(generator: Rand): ItemName {
	const section = getRandomThing(generator, Object.values(ItemsSections));
	return getRandomThing(generator, Object.values(section));
}
