import { test, expect } from "@playwright/test";
import {
  handleCookiesPopUp,
  handleStayOnSitePopUp,
  handleModalWindowSignUp,
} from "../../helpers/pop_ups";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { FraudPreventionPage } from "../../pages/tradingSection/FraudPreventionPage";

let tradingSectionMenu;
let fraudPreventionPage;

test.describe("CySec_License(EN), Fraud Prevention Page", () => {
  test.beforeEach(async ({ page }) => {
    tradingSectionMenu = new TradingSectionMenu(page);
    fraudPreventionPage = new FraudPreventionPage(page);
    await page.goto("/en-eu");
    await handleStayOnSitePopUp(page);
    await handleCookiesPopUp(page);
    await tradingSectionMenu.openFraudPreventionPage();
  });

    test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", 
          async ({page}) => {
              await expect(page).toHaveURL("/en-eu/ways-to-trade/fraud-awareness");
              await fraudPreventionPage.clickCreateYourAccountButtonFromReady();           
       });
  


})