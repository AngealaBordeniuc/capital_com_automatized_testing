import { test, expect } from "@playwright/test";
import {
  handleCookiesPopUp,
  handleStayOnSitePopUp,
} from "../../helpers/pop_ups";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { CFDCalculator } from "../../pages/tradingSection/CFDCalculatorPage";

let tradingSectionMenu;
let cfdCalculator;

test.describe("CySec_License(EN), CFD Calculator Page", () => {
  test.beforeEach(async ({ page }) => {
    tradingSectionMenu = new TradingSectionMenu(page);
    cfdCalculator = new CFDCalculator(page);
    await page.goto("/en-eu");
    await handleStayOnSitePopUp(page);
    await handleCookiesPopUp(page);
    await tradingSectionMenu.openCFDCalculatorPage();
  })

  test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Sign up] button, unauthorized user",
        async ({page}) => {
            await expect(page).toHaveURL("/en-eu/ways-to-trade/cfd-trading/cfd-calculator");                    
            await cfdCalculator.clickSignUpButton()
     })

    test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Try demo] button, unauthorized user",
        async ({page}) => {
            await expect(page).toHaveURL("/en-eu/ways-to-trade/cfd-trading/cfd-calculator");          
            await cfdCalculator.clickTryDemoButton()
        })

    test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Trade now] button, unauthorized user",
        async ({page}) => {
            await expect(page).toHaveURL("/en-eu/ways-to-trade/cfd-trading/cfd-calculator");                     
            await cfdCalculator.clickTradeNowButton()
        })

    test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Sign up] button in 'How to start' section, unauthorized user",
        async ({page}) => {
            await expect(page).toHaveURL("/en-eu/ways-to-trade/cfd-trading/cfd-calculator");                              
            await cfdCalculator.clickSignUpButtonHowToStart()
     })

})