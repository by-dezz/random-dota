import { useEffect, useState } from "react";
import "./App.css";
import { createTheme, Stack, ThemeProvider, Typography } from "@mui/material";
import { ConsumablesEnum, BootsSection, ItemsSections } from "./stuff/items.ts";
import { HeroesEnum } from "./stuff/heroes.ts";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	const [stuff, setStuff] = useState<Record<string, any>>();
	useEffect(() => {
		setStuff({
			hero: getRandomThing(Object.values(HeroesEnum)),
			boots: getRandomThing(Object.values(BootsSection)),
			consumables: [
				getRandomThing(Object.values(ConsumablesEnum)),
				getRandomThing(Object.values(ConsumablesEnum)),
				getRandomThing(Object.values(ConsumablesEnum)),
			],
			accessories: [
				getRandomThing(Object.values(ConsumablesEnum)),
				getRandomThing(Object.values(ConsumablesEnum)),
			],
			items: [rollItem(), rollItem(), rollItem(), rollItem(), rollItem()],
		});
	}, []);
	return (
		<ThemeProvider theme={darkTheme}>
			{stuff ? (
				<Stack>
					<Stack spacing={1} direction={"row"}>
						<Typography>Герой</Typography>
						<Typography>{stuff.hero}</Typography>
					</Stack>

					<Stack spacing={1} direction={"row"}>
						<Typography>Расходник</Typography>
						<Typography>{stuff.consumables[0]}</Typography>
					</Stack>

					<Stack spacing={1} direction={"row"}>
						<Typography>Расходник</Typography>
						<Typography>{stuff.consumables[1]}</Typography>
					</Stack>

					<Stack spacing={1} direction={"row"}>
						<Typography>Ботинок</Typography>
						<Typography>{stuff.boots}</Typography>
					</Stack>

					<Stack spacing={1} direction={"row"}>
						<Typography>Аксессуар</Typography>
						<Typography>{stuff.accessories[0]}</Typography>
					</Stack>

					<Stack spacing={1} direction={"row"}>
						<Typography>Аксессуар</Typography>
						<Typography>{stuff.accessories[1]}</Typography>
					</Stack>

					<Stack spacing={1} direction={"row"}>
						<Typography>Предмет</Typography>
						<Typography>{stuff.items[0]}</Typography>
					</Stack>

					<Stack spacing={1} direction={"row"}>
						<Typography>Предмет</Typography>
						<Typography>{stuff.items[1]}</Typography>
					</Stack>

					<Stack spacing={1} direction={"row"}>
						<Typography>Предмет</Typography>
						<Typography>{stuff.items[2]}</Typography>
					</Stack>

					<Stack spacing={1} direction={"row"}>
						<Typography>Предмет</Typography>
						<Typography>{stuff.items[3]}</Typography>
					</Stack>

					<Stack spacing={1} direction={"row"}>
						<Typography>Предмет</Typography>
						<Typography>{stuff.items[4]}</Typography>
					</Stack>
				</Stack>
			) : null}
		</ThemeProvider>
	);
}

function getRandomThing(list: any[]) {
	return list[Math.floor(Math.random() * list.length)];
}

function rollItem() {
	const section = getRandomThing(Object.values(ItemsSections));
	return getRandomThing(Object.values(section));
}

export default App;
