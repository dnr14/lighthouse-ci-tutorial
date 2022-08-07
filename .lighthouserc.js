const url = ["http://localhost:3000","http://localhost:3000/home","http://localhost:3000/login"];
const screenShot = ['./screenshot/main.png', './screenshot/home.png', './screenshot/login.png'];

module.exports = {
    ci:{
        collect:{
            puppeteerScript: './puppeteerScript.js',
            puppeteerLaunchOptions: {args: ['--allow-no-sandbox-job', '--allow-sandbox-debugging', '--no-sandbox', '--disable-gpu', '--disable-gpu-sandbox', '--display']}, //https://www.puppeteersharp.com/api/PuppeteerSharp.LaunchOptions.html
            // staticDistDir:"./build",
            numberOfRuns:1,
            settings: {
                // Don't clear localStorage/IndexedDB/etc before loading the page.
                "disableStorageReset": true,
                // Wait up to 60s for the page to load
                "maxWaitForLoad": 60000,
                // Use applied throttling instead of simulated throttling
                "throttlingMethod": "devtools"
            },
            url,
            startServerCommand:"yarn start",
            startServerReadyPattern: "Available on",
            screenShot
        },
        upload: {
            target: 'filesystem',
            outputDir: './lhci_reports',
            reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
        },
        assert: {
             assertions : {
                "categories:performance": ["error", { "minScore": 1 }],
                "categories:accessibility": ["error", { "minScore": 1 }]
            }
        }
    }
}
