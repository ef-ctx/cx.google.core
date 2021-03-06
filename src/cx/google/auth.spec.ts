import {Auth} from 'cx/google/auth';
import {Client} from 'cx/google/client';
import {gapi} from 'mocks/test.mocks';

export function main() {
  describe('Auth', function() {
    var CLIENT_ID = '42';

    beforeEach(function() {
        spyOn(gapi.auth2, 'init').and.callThrough();

        Client._add_script_tag = function(resolve, reject) {
            resolve();
				}
    });

		it('should assign clientId and scopes', function(done) {
      var scopes = ['scope1'];
      var client = new Auth(CLIENT_ID, scopes);

      Client.load().then(() => {
				expect(client.clientId).toBe(CLIENT_ID);
	      expect(client.scopes).toBe(scopes);
	      expect(gapi.auth2.init).toHaveBeenCalled();
				done();
    	});
		});

    it('should assign default scopes', function() {
			var client = new Auth(CLIENT_ID);

			expect(client.clientId).toBe(CLIENT_ID);
			expect(client.scopes).toEqual(['profile', 'https://www.googleapis.com/auth/drive']);
    });

    it('should call signIn on _googleAuth and resolve promise', function(done) {
			var client = new Auth(CLIENT_ID),
				success = false;

        client.authorize().then(function () {
          success = true;
          expect(success).toBe(true);

          done();
        }, function (reason) {
          expect(success).toBe(true);
          done();
        });
    });

    it('should signout and resolve promise', function(done) {
			var client = new Auth(CLIENT_ID),
				success = false;

			client.signOut().then(function() {
				success = true;

				expect(success).toBe(true);

				done();
			}, function(reason) {
				expect(success).toBe(true);
				done();
			});
    });

    it('should call isSignedIn.get and resolve promise', function(done) {
			var client = new Auth(CLIENT_ID),
				success = false;

        client.checkAuth().then(function() {
            success = true;
            expect(success).toBe(true);

            done();
        }, function() {
            expect(success).toBe(true);
            done();
        });
    });
	});
}