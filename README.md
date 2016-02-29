# cx.google.core
[![Build Status](https://travis-ci.org/ef-ctx/cx.google.core.svg?branch=master)](https://travis-ci.org/ef-ctx/cx.google.core)


Provides a wrapper around Google Client JSApi.


## Getting Started

This part describes how to load the cx.google.* modules and bootstrap a angular 1.x application.
Add **cx.google.core** to you project.

Via npm:

```bash
$ npm install --save cx.google.core
```

`cx.google.core` uses SystemJS as module loader. This means that we need to do a few things with our AngularJS application to get it to load in the correct order.

#### 1. Add these modules to your html `(index.html)`

```html
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script src="node_modules/systemjs/dist/system.js"></script>
<script src="node_modules/cx.google.core/bundles/cx.google.core.js"></script>
```

#### 2. Prevent angular from manually bootstrap the application. Remove any `ng-app` directive from you page.

#### 3. Tell `SystemJS` about `cx/google/core`.

```html
<script>
System.config({
  packages: {
    'cx/google/core': {
      defaultExtension: 'js',
    }
  }
});
</script>
```

#### 4. Load cx.google.core and cx.google.drive then manually bootstrap your application.

```html
<script>
  Promise.all([
    System.import('cx/google/core')
  ])
    .then(function (modules) {
      var core = modules[0]; // the cx.google.core module.
      core.Client.bootstrap(); // Load the google api client.

      angular.element(document).ready(function() {
          angular.bootstrap(document, ['cx.google.drive.example']);
      });
    });
</script>
```

### Example use with a angular 1.x service to that consumes `cx.google.*` 

Check if a user is authorized or not. If not logg them in.

```javascript

angular.module('ng.cx.google.core', [
])

.service('google', [
  '$window',
  function ($window) {
   'use strict';

   this.Auth = $window.cx.google.Auth;
   this.client = $window.cx.google.client;
  }
]);

angular.module('myApp', [
  'ng.cx.google.core'
])

.controller('MainCtrl', [
  'Auth',
  function (Auth) {
    'use strict';
    // Read here how to create your clientId https://developers.google.com/drive/v3/web/quickstart/js
    var _auth = new Auth('YOUR_CLIENT_ID');

    _auth.checkAuth()
      .then(loggedIn)
      .catch(notLoggedIn);

    function loggedIn() {
      console.log('Logged in');
    }

    function notLoggedIn() {
      console.log('not logged in');
      // Let's authorize user.
      _auth.authorize()
        .then(loggedIn)
    }
  }
])


## Contributing

We'd love for you to contribute to our source code and to make it even better than it is today!

Make sure you read the [Contributing Guide](CONTRIBUTING.md) first.


## Developing

Clone this repository, install the dependencies and simply run `gulp`.

```
$ npm install -g gulp
$ npm install
$ gulp
```

To view example (after above commands have run)

```
$ npm start 
```

## [MIT License](LICENSE)

[Copyright (c) 2015 EF CTX](https://raw.githubusercontent.com/EFEducationFirstMobile/oss/master/LICENSE)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.