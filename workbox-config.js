module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,html,jpg,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};