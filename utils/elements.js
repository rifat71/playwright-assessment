const { Promise } = require(`bluebird`);

module.exports = {
  clickElement: async (world, locator, options = {}) => {
    const index = options.index ? options.index : 1;

    if (index > 1) {
      locator = `(${locator})[${index}]`;
    }
    await world.page.isVisible(locator);
    await world.page.click(locator);
  }
};
