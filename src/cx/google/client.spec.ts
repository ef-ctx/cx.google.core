/// <reference path="../../../typings/tsd.d.ts" />

import {Client} from 'cx/google/client';
import {gapi} from 'mocks/test.mocks';

class ClientMock extends Client {
	static _add_script_tag(resolve, reject, preload_api) {
		this._api_has_loaded(resolve, reject, preload_api);
	}
}

export function main() {
	describe('Client', function () {
		beforeEach(function() {
      ClientMock._api_load_promise = null;
			spyOn(gapi.client, 'load').and.callThrough();
    });

    it('should add api script tag and resolve promise', function (done) {
      var success = false;

      ClientMock.bootstrap().then(function() {
				success = true;
				expect(success).toBe(true);
				done();
			});
    });

    it('should load api with name and version', function(done) {
      var success = false;

      ClientMock.bootstrap().then(function() {
				ClientMock.load('drive', 'v3').then(function() {
					expect(gapi.client.load).toHaveBeenCalled();
					done();
				});
			});
    });

    it('should pre load api with name and version', function(done) {
      var success = false;

			ClientMock.bootstrap('drive').then(function() {
				expect(gapi.client.load).toHaveBeenCalled();
				done();
			});
    });

    it('should reject load if api hasnt loaded', function(done) {
			var success = false;

      Client._script_loaded = false;
			ClientMock.load('drive', 'v3').catch(function(reason) {
				expect(reason).toBe('Google Apis has not been loaded');
				done();
			})
    });
	});
}