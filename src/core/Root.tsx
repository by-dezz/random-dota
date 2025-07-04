import { Outlet } from "react-router";
import Header from "./Header.tsx";
import { Box, Container, Stack } from "@mui/material";

export function Root() {
	return (
		<Stack spacing={1}>
			<Header />
			<Box>
				<Container maxWidth="lg">
					<Outlet />
				</Container>
			</Box>
		</Stack>
	);
}
