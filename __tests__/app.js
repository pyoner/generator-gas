'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-gas:app', () => {
	beforeAll(() => {
		return helpers
      .run(path.join(__dirname, '../generators/app'))
			.withPrompts({
        appName: 'test-app',
        githubUsername: 'fossamagna',
        transpiler: 'babel'
      });
	});

	it('creates files', () => {
		assert.file([
      '.babelrc',
      '.gitignore',
      'package.json',
      '.clasp.json',
      '.eslintrc.json',
      'README.md',
      'src/index.js',
      'src/hello.js'
    ]);
	});
});
