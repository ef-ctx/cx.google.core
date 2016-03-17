const PREFERRED_VERSION = {
	'drive': 'v3'
}

export class Client {
  static _api_load_promise: Promise<any>;

  static load(name?: string, version?: string): Promise<any> {
    if (!this._api_load_promise) {
      this._api_load_promise = new Promise((resolve, reject) => this._add_script_tag(resolve, reject));
    }

    if (name) {
        return this._load_api(name, version);
    }

    return this._api_load_promise;
	}

  static _load_api(name?: string, version?: string): Promise<any> {
    if (!version && PREFERRED_VERSION.hasOwnProperty(name)) {
        version = PREFERRED_VERSION[name];
    }

    return this._api_load_promise.then(() => {
        return new Promise((resolve, reject) => gapi.client.load(name, version, resolve))
    });
  }

	static _add_script_tag(resolve, reject) {
		var _elem = document.createElement('script'),
			_readyCallbackName = '__gapi__callback',
			_document = window.document,
			_node = _document.getElementsByTagName('script')[0];

		/**
		  On a side note: It's impossible to decypher what google js-api to load.
			`https://apis.google.com/js/api:client.js`
			or
			`https://apis.google.com/js/api/client.js`
			or
			`https://apis.google.com/js/api/platform.js`
		 */

		_elem.setAttribute('src', 'https://apis.google.com/js/api:client.js?onload=' + _readyCallbackName);
		_elem.async = true;

		window[_readyCallbackName] = () => {
			gapi.load('auth2', () => resolve());
		}

		if (_node) {
			_node.parentNode.insertBefore(_elem, _node);
		} else {
			(_document.head || _document.body || _document.documentElement).appendChild(_elem);
		}
  }
}