const { When } = require('@cucumber/cucumber');
const path = require(`path`);

/**
 * When I download from '(.+)' link
 *
 * @example <caption>Gherkin</caption>
 * When I download from 'Download a Printable PDF of this Cheat Sheet' link
 * @memberof General
 * @name When-I-from-'(.+)'-link
 * @param {string} text - Any link
 */
When(/^I download from '(.+)' link$/, { timeout: 6 * 5000 }, async function (textValue) {
  const downloadLink = await this.page.waitForSelector(`//a[contains(., "${textValue}")]`);
  await downloadLink.evaluate(element => { element.setAttribute('download', 'download'); });
  const downloadPromise = this.page.waitForEvent('download');
  await downloadLink.click();
  const downloadedFile = await downloadPromise;

  this.filePath = 'resources/downloads/Selenium-Cheat-Sheet-2022.pdf';
  await downloadedFile.saveAs(this.filePath);
});
