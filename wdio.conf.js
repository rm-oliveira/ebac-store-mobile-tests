export const config = {
    //runner: 'local',
    //port: 4723,  

    user: 'oauth-rayanemoliveira22-88bba',
    key: '32e1a0d7-10c2-418e-b6b7-287773cb88f3',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    region: 'us-west-1',
    baseUrl: 'https://oauth-rayanemoliveira22-88bba:32e1a0d7-10c2-418e-b6b7-287773cb88f3@ondemand.us-west-1.saucelabs.com:443/wd/hub',

    specs: [
        './test/specs/register.test.js'
    ],
    maxInstances: 1,
    capabilities: [
        // {
        // platformName: 'Android',
        // 'appium:deviceName': 'Ebac',
        // 'appium:platformVersion': '12.0',
        // 'appium:automationName': 'UiAutomator2',
        // 'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        // 'appium:appWaitActivity': '.MainActivity',
        // 'appium:disableIdLocatorAutocompletion': true,
        // }

        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab',
            'appium:deviceName': 'Google Pixel 5',
            'appium:platformVersion': '14',
            'appium:automationName': 'UiAutomator2',
            'sauce:options': {
                build: 'appium-build-teste-ebacshop',
                name: 'EBAC Shop Test',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: '2.0.0'
            },
            'appium:disableIdLocatorAutocompletion': true
        }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }
}
