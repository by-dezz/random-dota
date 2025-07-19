import { createBrowserRouter } from "react-router";
import { Main } from "../pages/main/Main.tsx";
import { Root } from "./Root.tsx";
import { Empty } from "../pages/Empty.tsx";

export const router = createBrowserRouter([
	{
		path: "",
		element: <Root />,
		children: [
			{
				path: ":sid",
				element: <Main />,
			},
			{
				path: "",
				element: <Empty />,
			},
		],
	},
]);
