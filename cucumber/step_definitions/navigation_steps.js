const { Given, When, Then } = require('@cucumber/cucumber');
const { navigateTo } = require(`../../utils/navigation`);

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
    await navigateTo(this, { urlString });
});
