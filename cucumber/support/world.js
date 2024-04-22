const { setWorldConstructor } = require('@cucumber/cucumber');
const requireDir = require('require-dir');
const Promise = require(`bluebird`);
const Screenshot = require('./Screenshot');

class World {

    constructor({ attach }) {
        this.attach = attach;
        this.locators = requireDir('../../resources/pages', { recurse: true });
        this.screenshot = new Screenshot(this);
    }

    sleep(milliseconds) {
        return Promise.delay(milliseconds);
    }
}

setWorldConstructor(World);