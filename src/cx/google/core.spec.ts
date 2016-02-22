/// <reference path="../../../typings/tsd.d.ts" />

import {core} from './core';

export function main() {
  describe('Core', function() {
    it('should export Auth and client via core', function () {
      expect(typeof core.Auth).toBe('function');
      expect(typeof core.Client).toBe('function');
    });
  });
}