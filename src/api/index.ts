import { IFetchOptions, Method } from "./types.ts";

const API_BASE = "http://localhost:8000";

export class CustomError extends Error {
	status: number;
	constructor(message: string, status: number) {
		super(message);
		this.status = status;
	}
}

const checkStatus = async (response: Response) => {
	if (response.ok) {
		return Promise.resolve(response);
	}
	if (response.status >= 400 && response.status < 500) {
		const error = await response.json();
		throw new CustomError(error.message, response.status);
	}
	const error = await response.text();
	throw new CustomError(error || response.statusText, response.status);
};

const parseJSON = async (response: Response) => {
	if (response.status === 204) {
		return undefined;
	}
	const result = await response.text();
	try {
		return JSON.parse(result);
	} catch {
		return result;
	}
};

export async function enhancedFetch(
	url: string,
	options: IFetchOptions = { method: Method.Get },
) {
	try {
		const res = await fetch(`${API_BASE}${url}`, options)
			.then(checkStatus)
			.then(parseJSON);
		return res;
	} catch (error) {
		console.error(`Error fetching ${url}:`, error);
		return undefined;
	}
}
