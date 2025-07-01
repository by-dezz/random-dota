import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Main } from "./pages/main/Main.tsx";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
