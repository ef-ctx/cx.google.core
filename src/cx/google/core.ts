/// <reference path="../../../typings/tsd.d.ts" />

import {Client} from 'cx/google/client';
import {Auth} from 'cx/google/auth';

export {Client} from 'cx/google/client';
export {Auth} from 'cx/google/auth';

window['cx'] = window['cx'] || {};
window['cx']['google'] = window['cx']['google'] || {};
window['cx']['google'].client = Client;
window['cx']['google'].Auth = Auth;