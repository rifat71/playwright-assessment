
async function navigateTo(world, options = {}) {
    const page = options.urlString.toLowerCase();
    let url = ``;
    switch (page) {
        case `selenium tutorial`:
            url = `${world.baseUrl}/tutorial/selenium-tutorial/selenium-cheat-sheet/`;
            break;
        default:
            url = `${world.baseUrl}`;
    }
    await world.page.goto(url, { timeout: 30000 });
}

module.exports = {
    navigateTo
};