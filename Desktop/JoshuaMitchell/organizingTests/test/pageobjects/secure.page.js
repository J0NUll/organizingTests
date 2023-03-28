

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    get btnLogout() {
        return $('a.button');
    }
    async logout() {
        await this.btnLogout.click();
    }




}

module.exports = new SecurePage();
