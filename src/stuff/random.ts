import { v4 as uuidv4 } from "uuid";

export function getSid() {
	return uuidv4();
}
