const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

/**
 * When I navigate to the '(.+)' details page
 *
 * @example <caption>Gherkin</caption>
 * When I navigate to the 'https://intellipaat.com/blog/tutorial/selenium-tutorial/selenium-cheat-sheet/' page
 * @memberof Selenium Tutorial
 * @name When-I-navigate-to-the-'(.+)'-page
 * @param {string} url - Any page url, example: https://www.facebook.com/
 */
Given(/^I navigate to the '(.+)' page$/, async function (pageUrl) {
    const urlString = `${pageUrl}`;
    this.browser = await chromium.launch({ headless: false, args: [`--window-position=0,0`] });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.goto(urlString);
});
