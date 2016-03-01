import {Auth, Client} from 'cx/google/core';

export function main() {
  describe('Core', function() {
    it('should export Auth and client via core', function () {
      expect(typeof Auth).toBe('function');
      expect(typeof Client).toBe('function');
    });
  });
}