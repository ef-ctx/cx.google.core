/// <reference path="../../../typings/tsd.d.ts" />

import {Client} from './client';
import {Auth} from './auth';

export {Client} from './client';
export {Auth} from './auth';

window['cx'] = window['cx'] || {};
window['cx']['google'] = window['cx']['google'] || {};
window['cx']['google'].client = Client;
window['cx']['google'].Auth = Auth;