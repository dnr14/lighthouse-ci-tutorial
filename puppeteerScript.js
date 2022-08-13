/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */

let counter = 0;

const selector = {
    class(attribute, className){
        return `${attribute}[class='${className}']`
    },
    type(attribute, value){
        return `${attribute}[type='${value}']`
    },
    id(value){
        return `#${value}`
    }
}

async function doLogin(page) {
    const loginUrl = 'http://tutorialsninja.com/demo/index.php?route=accounter/login'
    await page.waitForTimeout(2000)
    await page.goto(loginUrl);
    await page.type(selector.id('input-email'), 'test1user@test.com');
    await page.type(selector.id('input-password'), 'Mypassword@08');
    console.log(`Entered user credentials`)
    await page.click(selector.type('input', 'submit'));
    console.log(`Login is successful`)
}


async function setup(browser, { url , options }) {
    // launch browser for LHCI
    const { screenShot } = options;
    const page = await browser.newPage();
    console.log('node in start ===>',url,screenShot);
    await page.setCacheEnabled(true);
    await page.goto(url);

    await page.screenshot({ path: screenShot[counter] });
    counter++;
}

module.exports = setup;
