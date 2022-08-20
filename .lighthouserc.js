// const url = ["http://localhost:3000", "http://localhost:3000/home", "http://localhost:3000/login"];
// const screenShot = ["./screenshot/main.png", "./screenshot/home.png", "./screenshot/login.png"];

const url = [
  "https://zaritalk.com/?memberType=LESSOR",
  "https://bill.zaritalk.com/?memberType=LESSEE",
  "https://gongsil.zaritalk.com/?memberType=REALTOR",
];

const screenShot = [
  "./screenshot/zaritalk_lessor.png",
  "./screenshot/zaritalk_lessee.png",
  "./screenshot/zaritalk_gongsil.png",
];

//======================================== collect ========================================
const collect = {
  puppeteerScript: "./.github/script/puppeteer-script.js",
  puppeteerLaunchOptions: {
    args: [
      "--allow-no-sandbox-job",
      "--allow-sandbox-debugging",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-gpu-sandbox",
      "--display",
    ],
    headless: true,
  },
  //https://www.puppeteersharp.com/api/PuppeteerSharp.LaunchOptions.html
  // staticDistDir:"./build",
  numberOfRuns: 1,
  settings: {
    // Don't clear localStorage/IndexedDB/etc before loading the page.
    disableStorageReset: true,
    // Wait up to 60s for the page to load
    maxWaitForLoad: 60000,
    // Use applied throttling instead of simulated throttling
    throttlingMethod: "devtools",
  },
  url,
  startServerCommand: "yarn build && yarn start",
  // 터미널에 표시되는 문자열을 정규식으로 찾아낸다.
  // 서버를 바로 실행하는게 아닌 정규식에 맞는 규칙이 감지 됬을 때 실행된다.
  startServerReadyPattern: "ready - started server on 0.0.0.0:3000",
  screenShot,
};

//======================================== upload ========================================
const upload = {
  target: "filesystem",
  outputDir: "./lhci_reports",
  reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
};

//======================================== assert ========================================
const assert = {
  // eslint처럼 lighthouse가 정해주는 정책을 사용할 수도 있다.
  // preset: "lighthouse:no-pwa",
  // assertions: {
  //   "dom-size": ["error", { maxNumericValue: 3000 }],
  //   "offscreen-images": "off",
  //   "color-contrast": "off",
  //   "tap-targets": "off",
  // },
  // assertions: {
  //   "categories:performance": ["warn", { minScore: 1 }],
  //   "categories:accessibility": ["warn", { minScore: 1 }],
  // },
  // assertMatrix를 통해서 패턴에 맞는 url에 대해서 각각의 룰을 적용할 수 있다.
  assertMatrix: [
    {
      matchingUrlPattern: ".*",
      assertions: {
        "first-contentful-paint": ["warn", { maxNumericValue: 2000 }],
      },
    },
    {
      matchingUrlPattern: "https://.*/?memberType=LESSOR",
      assertions: {
        interactive: ["warn", { maxNumericValue: 5000 }],
      },
    },
    {
      matchingUrlPattern: "https://.*/?memberType=LESSEE",
      assertions: {
        interactive: ["warn", { maxNumericValue: 5000 }],
      },
    },
    {
      matchingUrlPattern: "https://[^/]+/?memberType=REALTOR",
      assertions: {
        interactive: ["warn", { maxNumericValue: 5000 }],
      },
    },
  ],
};

module.exports = { ci: { collect, upload, assert } };
