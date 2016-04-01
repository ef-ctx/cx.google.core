var config = {
	'dist': 'dist/',
	'output': 'build/',
	'vendor': {
		'js': [
			'node_modules/systemjs/dist/system-polyfills.src.js',
			'node_modules/systemjs/dist/system.src.js',
			'node_modules/es6-promise/dist/es6-promise.js'
		]
	},
	'src': {
		'distTs': [
	      'src/*.ts',
	      'src/**/*.ts',
	      '!src/**/*.spec.ts',
	      '!src/mocks/*.ts',
	    ],
	    'ts': [
	      'src/*.ts',
	      'src/**/*.ts',
	    ],
	    'typings': [
	      'typings/browser.d.ts',
		  'google.external.d.ts'
	    ]
	},
	'typescript': {
		'inputPath': 'cx/google/core',
		'systemConfig': 'src/system.config.js',
		'tsconfig': './src/tsconfig.json',
		'declaration': './src/cx/google/core.d.ts'
	},
	'test': {
	    'mocks': [
	      'mocks/*.ts'
	    ],
		'js': [
			{
				pattern: 'build/**/*.js',
				included: false,
				watched: false
			}
		]
	}
};

module.exports = config;
