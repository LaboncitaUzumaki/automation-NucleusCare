import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
    tests: './test/codecept/*_test.ts',
    output: './output',
    helpers: {
        Playwright: {
            browser: 'chromium',
            url: '',
            show: true,
            video: true,
            keepVideoForPassedTests: true,
            pressKeyDelay: 100,
            trace: true,
            keepTraceForPassedTests: true,
        },
        ChaiWrapper: {
            require: 'codeceptjs-chai',
        },
        PlaywrightAllure: {
            require: './src/utils/helpers/PlaywrightAllure',
        },
        REST: {
            endpoint: '',
        },
        JSONResponse: {},
        Appium: {
            appiumV2: true,
            app: '',
            platform: 'Android',
            path: '/',
            desiredCapabilities: {
                platformName: 'Android',
                'appium:deviceName': 'SM-T220',
                'appium:appPackage': 'com.nucleus.devicetry2',
                'appium:udid': 'R9PW30ZMEFK',
                'appium:appWaitActivity': '*',
                'appium:autoGrantPermissions': 'true',
                'appium:appActivity': 'com.nucleus.device.MainActivity',
                'appium:automationName': 'UiAutomator2',
            },
        },
    },
    include: {
        I: './steps_file',
        AdminLoginPage: './src/pages/web/admin/AdminLoginPage',
        AdminDashboardPage: './src/pages/web/admin/AdminDashboardPage',
        AdminNavigationBar: './src/pages/web/admin/AdminNavigationBar',
        NucelusPermissionsPage:
            './src/pages/mobile/nucleus/NucleusPermissionsPage',
    },

    gherkin: {
        features: [
            './src/features/*/*/*.feature',
            './src/features/*/*/*/*.feature',
            './features/*.feature',
            './features/api_features/*.feature',
        ],
        steps: [
            './src/step_definitions/web/admin/admin_login_steps',
            './src/step_definitions/mobile/nucleus/nucleus_launch_app_steps.ts',
        ],
    },

    plugins: {
        subtitles: {
            enabled: true,
        },
        screenshotOnFail: {
            enabled: true,
        },
        pauseOnFail: {
            enabled: false,
        },
        retryFailedStep: {
            enabled: true,
        },
        tryTo: {
            enabled: true,
        },
        allure: {
            enabled: true,
            require: '@codeceptjs/allure-legacy',
        },
        fakerTransform: {
            enabled: true,
        },
    },

    name: 'Nucleus',
};
