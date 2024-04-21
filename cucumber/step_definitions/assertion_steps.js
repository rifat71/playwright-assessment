const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const fs = require('fs');

/**
 * Then check the file downloads correctly
 *
 * @example <caption>Gherkin</caption>
 * Then check the file downloads correctly
 * @memberof General
 * @name Then-check-the-file-downloads-correctly
 */
Then(/^check the file downloads correctly$/, async function () {
  expect(fs.existsSync(this.filePath)).to.equal(true);
  await this.browser.close();
});
