/**
 * Ref:
 *   - https://eslint.org/docs/user-guide/configuring
 */
module.exports = {
	root: true,
	extends: '@react-native-community',

	// Enable additional rules
	rules: {
		// Turn off Prettier
		'prettier/prettier': 0,

		// Use TAB for indentation
		indent: ['error', 'tab', {
//			ignoreComments: true,
			SwitchCase: 1
		}],

		// Use yoda style
		yoda: ['error', 'always'],
		
		'comma-dangle': ['error', 'never'],
		'comma-spacing': [2, {'before': false, 'after': true}],
		'key-spacing': ['error', {'beforeColon': false}],
		'no-lonely-if': 'error',
		'default-param-last': ['error'],
		'no-var': 'error',
		'prefer-const': 'error',
		'no-duplicate-imports': ['error', {'includeExports': true}],
		'rest-spread-spacing': ['error', 'never'],
		'arrow-spacing': 'error',
		'arrow-body-style': ['error', 'as-needed'],
		'template-curly-spacing': ['error', 'never']
	}
};
