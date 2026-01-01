import { test, expect } from "@playwright/test";
import {handleCookiesPopUp, handleStayOnSitePopUp} from "../../helpers/pop_ups"
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { DemoTradingPage } from "../../pages/tradingSection/DemoTradingPage";

let tradingSectionMenu;
let demoTradingPage;

test.describe("CySec_License(EN), Demo Trading Page", () => {
  test.beforeEach(async ({ page }) => {
    tradingSectionMenu = new TradingSectionMenu(page);
    demoTradingPage = new DemoTradingPage(page);
    await page.goto("/en-eu");
    await handleStayOnSitePopUp(page);
    await handleCookiesPopUp(page);
    await tradingSectionMenu.openDemoTradingPage();
  })


 test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user",
        async ({page}) => {
            await expect(page).toHaveURL("/en-eu/trading-platforms/demo-account");
            await demoTradingPage.clickTryDemoButton()
     })

 test('CySec_License(EN), QR code redirects to Google Play Store, unauthorized user', async ({ page }) => {
    await expect(page).toHaveURL("/en-eu/trading-platforms/demo-account");    
    await demoTradingPage.verifyQrRedirect();
  })

   test("CySEC_License(EN), Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", 
            async ({page}) => {
            await expect(page).toHaveURL("/en-eu/trading-platforms/demo-account");                            
            await demoTradingPage.clickCreateYourAccountButtonFromReady();           
         });
    

})
