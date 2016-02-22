declare class GoogleAuth {}

declare module gapi {
	export function load(name: string, version: any, callback?:any): any;
}

declare module gapi.auth2 {
	export function init(params: any): GoogleAuth;
}

