const os = require("os");
const report = require("multiple-cucumber-html-reporter");

const browserName = process.env.BROWSER || "default-browser"; 

report.generate({
    jsonDir: 'test-results',
    reportPath: 'test-results/reports/',
    pageTitle: 'BookCart App test report',
    reportName: 'Playwright Automation Report',
    displayDuration: true,
    displayReportTime: true,
    hideMetadata: false,
    customMetadata: false,
    metadata: {
      browser: {
        name: browserName,
        version: os.release(),
      },
      device: os.hostname(),
      platform: {
        name: os.type(),
        version: os.release(),
      },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Book Cart Application" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});