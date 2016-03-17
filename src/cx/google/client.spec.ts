import {Client} from 'cx/google/client';
import {gapi} from 'mocks/test.mocks';

class ClientMock extends Client {
	static _add_script_tag(resolve, reject) {
    resolve();
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

      ClientMock.load().then(function() {
				success = true;
				expect(success).toBe(true);
				done();
			});
    });

    it('should load api with name and version', function(done) {
      var success = false;

      ClientMock.load().then(function() {
				ClientMock.load('drive', 'v3').then(function() {
					expect(gapi.client.load).toHaveBeenCalled();
					done();
				});
			});
    });

    it('should pre load api with name and version', function(done) {
      var success = false;

			ClientMock.load('drive').then(function() {
				expect(gapi.client.load).toHaveBeenCalled();
				done();
			});
    });
	});
}