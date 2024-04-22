const { When } = require('@cucumber/cucumber');

/**
 * When I download from '(.+)' link
 *
 * @example <caption>Gherkin</caption>
 * When I download from 'Download a Printable PDF of this Cheat Sheet' link
 * @memberof General
 * @name When-I-from-'(.+)'-link
 * @param {string} text - Any link
 */
When(/^I download from '(.+)' link$/, { timeout: 12 * 5000 }, async function (textValue) {
  const downloadLink = await this.page.waitForSelector(this.locators.global.link.replace('{txt}', textValue));
  await downloadLink.evaluate(element => { element.setAttribute('download', 'download'); });
  const downloadPromise = this.page.waitForEvent('download');
  await downloadLink.click();
  const downloadedFile = await downloadPromise;

  this.filePath = 'resources/downloads/Selenium-Cheat-Sheet-2022.pdf';
  await downloadedFile.saveAs(this.filePath);
});
