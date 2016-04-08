exports.config = {

	/**
	 * server configurations
	 */
	host: '0.0.0.0',
	port: 4444,

	/**
	 * specify test files
	 */
	specs: [],
	exclude: [],

	/**
	 * capabilities
	 */
	capabilities: [{
		browserName: 'phantomjs'
	}, {
		browserName: 'chrome'
	}, {
		browserName: 'firefox'
	}],

	/**
	 * test configurations
	 */
	logLevel: 'verbose',
	coloredLogs: true,
	screenshotPath: 'shots',
	waitforTimeout: 10000,
	framework: 'cucumber',

	reporters: ['dot'],
	reporterOptions: {
		outputDir: './'
	},

	cucumberOpts: {
		timeout : 10000
	}
};