import{test, expect} from '@playwright/test';
import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp} from "../../helpers/pop_ups";
import {TradingPage} from '../../pages/tradingSection/TradingPage';

let tradingPage;

test.describe('Trading Page', () => {
    test.beforeEach(async({page}) => {
        await page.goto('/en-eu')
        await handleStayOnSitePopUp(page)
        await handleCookiesPopUp(page)
        tradingPage = new TradingPage(page);
    })



test('Smoke_CySEC_License(EN), Sign Up Form is opened after clicking on the [Create account] button on the banner "Ways to trade", unauthorized user', async({page}) =>{
    
    await tradingPage.openTradingPage()
    await expect(page).toHaveURL('/en-eu/ways-to-trade', {timeout: 6000})
    await tradingPage.clickCreateAccountButton()
    await handleModalWindowSignUp(page)
})

test('Smoke_CySEC_License(EN), Sign Up Form is opened after clicking on the [Try demo account] button on the banner "Ways to trade", unauthorized user', async({page}) =>{
    
    await tradingPage.openTradingPage()
    await expect(page).toHaveURL('/en-eu/ways-to-trade')
    await tradingPage.clickTryDemoAccountButton()
    await handleModalWindowSignUp(page)

})

})




