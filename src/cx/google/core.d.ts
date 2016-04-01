declare module 'cx/google/core' {
  export class Client {
    static _script_loaded: boolean;
    static _api_load_promise: Promise<any>;
    static bootstrap(preload_api?: string): Promise<any>;
    static load(name: string, version: string): Promise<{}>;
    static _add_script_tag(resolve: any, reject: any, preload_api: string): void;
    static _api_has_loaded(resolve: any, reject: any, preload_api: string): void;
  }

  export class Auth {
    scopes: Array<string>;
    clientId: string;
    private _googleAuth;
    private _hook;
    constructor(clientId: string, scopes?: Array<string>);
    authorize(): Promise<{}>;
    checkAuth(): Promise<{}>;
    signOut(): Promise<{}>;
    private _wait(fn);
  }
}
