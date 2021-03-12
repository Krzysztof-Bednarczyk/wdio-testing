const { config } = require('./wdio.shared.conf');

exports.config = {

    ...config,

    ...{
        capabilities: [{

            /*
             * maxInstances can get overwritten per capability. So if you have an in-house Selenium
             * grid with only 5 firefox instances available you can make sure that not more than
             * 5 instances get started at a time.
             */
            maxInstances: 5,
            //
            browserName: 'chrome',
            acceptInsecureCerts: true,
            /*
             * If outputDir is provided WebdriverIO can capture driver session logs
             * it is possible to configure which logTypes to include/exclude.
             * excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
             * excludeDriverLogs: ['bugreport', 'server'],
             */
        },
        {
            maxInstances: 5,
            //
            browserName: 'firefox',
            acceptInsecureCerts: true,
        },
        {
            maxInstances: 5,
            //
            browserName: 'MicrosoftEdge',
            acceptInsecureCerts: true,
        },
        {
            maxInstances: 5,
            //
            browserName: 'IE',
            acceptInsecureCerts: true,
        },
        {
            os: 'OS X',
            os_version: 'Catalina',
            browserName: 'Safari',
            browser_version: '13.0',
            'browserstack.local': 'false',
        },
        {
            os_version: '11',
            device: 'iPhone 8 Plus',
            real_mobile: 'true',
            browserName: 'iPhone',
        }],

        services: ['browserstack'],
        user: process.env.BROWSERSTACK_USERNAME,
        key: process.env.BROWSERSTACK_ACCESS_KEY,
        browserstackLocal: true,
    },

};
