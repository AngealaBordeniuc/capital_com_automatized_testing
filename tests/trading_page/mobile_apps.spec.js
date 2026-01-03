import {test, expect} from '@playwright/test'
import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp } from '../../helpers/pop_ups'
import { TradingSectionMenu } from '../../pages/tradingSection/TradingSectionMenu'
import { MobileAppsPage } from '../../pages/tradingSection/MobileAppsPage'

let tradingSectionMenu;
let mobileAppsPage;

test.describe('CySec_License(EN), Mobile apps Page', () => {
    test.beforeEach(async({page}) => {
        await page.goto('/en-eu')
        await handleStayOnSitePopUp(page)
        await handleCookiesPopUp(page)
        tradingSectionMenu = new TradingSectionMenu(page)
        mobileAppsPage = new MobileAppsPage(page)
    })

     test('Smoke_CySEC_License(EN), Verify QR Code from "CFD trading app" block', 
      async ({page}) => {
       await tradingSectionMenu.openMobileAppsPage();       
       await expect(page).toHaveURL("/en-eu/trading-platforms/mobile-apps");    
       await mobileAppsPage.verifyQrRedirect_1()
     });

     test('Smoke_CySEC_License(EN), Verify QR Code from "Investmate" block', 
      async ({page}) => {       
       await tradingSectionMenu.openMobileAppsPage();
       await expect(page).toHaveURL("/en-eu/trading-platforms/mobile-apps");
       await mobileAppsPage.verifyQrRedirect_2();
     });


})
