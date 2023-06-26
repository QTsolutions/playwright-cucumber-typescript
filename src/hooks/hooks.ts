import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, Page, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/utils/logger"

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
})

Before(async function ({pickle}) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext();
    const page = await context.newPage();
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName));
})

//pickel gives the meta information about the scenario 
After(async function ({ pickle, result }) {

    console.log(result?.status);    
    //screenshot
    if(result?.status == Status.FAILED){
    const img = await fixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
    await this.attach(img, "image/png");
    }

    await fixture.page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
    fixture.logger.close();
})
