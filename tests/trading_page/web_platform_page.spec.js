import { test, expect } from "allure-playwright";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { WebPlatformPage } from "../../pages/tradingSection/WebPlatformPage";
import { handleStayOnSitePopUp, handleCookiesPopUp, handleModalWindowSignUp } from "../../helpers/pop_ups";

let tradingSectionMenu;
let webPlatformPage;

test.describe('CySec_License(EN), Web Platform Page', () => {
    test.beforeEach(async({page}) => {
        await page.goto('/en-eu')
        await handleStayOnSitePopUp(page)
        await handleCookiesPopUp(page)
        tradingSectionMenu = new TradingSectionMenu(page)
        webPlatformPage = new WebPlatformPage(page)
    })

    test('Smoke_CySEC_License(EN), Sign Up Form is opened after clicking on the [Create account] button on the banner "The Capital.com web trading platform", unauthorized user', async ({
      page,
    }) => {        
      await tradingSectionMenu.openWebPlatformPage();
      await expect(page).toHaveURL("/en-eu/trading-platforms/web-platform");
      await webPlatformPage.clickCreateAccountButton();      
    });

    test('Smoke_CySEC_License(EN), Verify QR Code', async ({
      page,
    }) => {        
      await tradingSectionMenu.openWebPlatformPage();
      await expect(page).toHaveURL("/en-eu/trading-platforms/web-platform");
      await webPlatformPage.verifyQrRedirect();
      
    });
})
