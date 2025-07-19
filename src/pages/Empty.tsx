import { useEffect } from "react";
import { getSid } from "../stuff/random.ts";
import { useNavigate } from "react-router";

export function Empty() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate(`/${getSid()}`);
	});

	return null;
}
