/**
 * Ref:
 *   - https://eslint.org/docs/user-guide/configuring
 */
module.exports = {
	root: true,
	extends: '@react-native-community',

	// Enable additional rules
	rules: {
		// Use TAB for indentation
		indent: ['error', 'tab', {
//			ignoreComments: true,
			SwitchCase: 1
		}],

		'comma-dangle': ["error", "never"],

		// Use yoda style
		yoda: ['error', 'always'],
		'prettier/prettier': 0,
	}
};
