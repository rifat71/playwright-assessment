const { After, Before, Status } = require('@cucumber/cucumber');
const sanitize = require('sanitize-filename');
const _ = require('lodash');

Before(async function (scenario) {
    console.log("\nRunning Scenario: " + scenario.pickle.name);
});

After(async function (scenario) {
    console.log("status: "+ scenario.result.status);
    if (scenario.result.status === Status.FAILED) {
        try {
            if (this.debug) console.log('After Hook: ' + scenario.result.status);
            // Taking screenshot
            await this.screenshot.create(sanitize(_.toLower(scenario.pickle.name) + ".png").replace(/ /g, "_"));
        } catch (e) {
            console.error(e);
        }
    }

    await this.browser.close();
    await this.sleep(700);
});