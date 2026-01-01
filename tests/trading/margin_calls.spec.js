import {test, expect} from '@playwright/test'
import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp} from "../../helpers/pop_ups";
import { TradingSectionMenu } from '../../pages/tradingSection/TradingSectionMenu';
import { MarginCallsPage } from '../../pages/tradingSection/MarginCallsPage';

let tradingSectionMenu;
let marginCallsPage;

test.describe('CySec_License(EN), Margin Calls Page', () =>{
    test.beforeEach(async({page}) => {
        tradingSectionMenu = new TradingSectionMenu(page);
        marginCallsPage = new MarginCallsPage(page);
        await page.goto('/en-eu')
        await handleStayOnSitePopUp(page)
        await handleCookiesPopUp(page)        
        await tradingSectionMenu.openMarginCallsPage();
    })

     test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", 
        async ({page}) => {
            await expect(page).toHaveURL("/en-eu/ways-to-trade/margin-calls");
            await marginCallsPage.clickCreateYourAccountButtonFromReady();           
     });

})