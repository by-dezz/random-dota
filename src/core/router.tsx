import { createBrowserRouter } from "react-router";
import { Main } from "../pages/main/Main.tsx";
import { Root } from "./Root.tsx";

export const router = createBrowserRouter([
	{
		path: "",
		element: <Root />,
		children: [
			{
				path: ":sid",
				element: <Main />,
			},
		],
	},
]);
