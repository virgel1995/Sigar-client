module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		"react/no-unescaped-entities": "off",
		"react/display-name": "off",
		"react/prop-types": "off",
		"react/jsx-filename-extension": "off",
		"react/jsx-no-useless-fragment": "off",
		"eqeqeq": "off",
		"no-console": "off",
		"quotes": "off",
		"arrow-body-style": "off",
		"import/no-cycle": "off",
		"react/destructuring-assignment": "off",
		"prefer-destructuring": "off",
		"react/function-component-definition": "off",
		"import/order": "off",
		"import/no-duplicates": "off",
		"spaced-comment": "off",
		"import/no-mutable-exports": "off",
		"import/newline-after-import":"off",
		"operator-linebreak": "off",
		"object-curly-newline": "off",
		"prefer-template": "off",
		"object-shorthand": "off",
		"no-underscore-dangle": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-one-expression-per-line": "off",
		"react/no-array-index-key": "off",
		"no-plusplus": "off",
		"react/jsx-no-target-blank": "off",
		"no-use-before-define": "off",
		"no-shadow": "off",
		"prefer-const": "off",
		"no-unused-vars": "off",
		"comma-dangle": "off",
		"react/jsx-props-no-multi-spaces": "off",
		"no-multi-spaces": "off",
		"react/jsx-curly-brace-presence": "off",
		"react/jsx-indent": "off",
		"no-trailing-spaces": "off",
		"react/no-array-index-key": "off",
"react/jsx-no-constructed-context-values":"off",
		"no-unused-expressions": "off",
		"consistent-return":"off",
"react/no-children-prop":"off",
		"no-nested-ternary":"off",
		"no-param-reassign":"off"

	}
};
