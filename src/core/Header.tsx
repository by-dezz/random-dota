import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { getSid } from "../stuff/random.ts";

export default function Header() {
	const navigate = useNavigate();
	const { sid } = useParams();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					{sid ? (
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Sid: {sid}
						</Typography>
					) : (
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
					)}
					<Button color="inherit" onClick={() => navigate(`/${getSid()}`)}>
						New Random
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
