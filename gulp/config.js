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
    'distTypings': [
      'src/cx/google/*.d.ts'
    ],
    'ts': [
      'src/*.ts',
      'src/**/*.ts',
    ],
    'typings': [
      'typings/tsd.d.ts'
    ]
	},
	'typescript': {
		'inputPath': 'cx/google/core',
		'systemConfig': 'src/system.config.js',
		'tsconfig': './src/tsconfig.json'
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