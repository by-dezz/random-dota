export enum Method {
	Delete = "delete",
	Get = "get",
	Post = "post",
	Put = "put",
	Patch = "patch",
}

export interface IFetchOptions {
	method?: Method;
	headers?: Record<string, string>;
	body?: any;
	numAttempts?: number;
	signal?: AbortSignal;
	keepalive?: boolean;
}
