import {test,expect} from '@playwright/test'
import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp } from '../../helpers/pop_ups'
import { TradingSectionMenu } from '../../pages/tradingSection/TradingSectionMenu'
import { TradingViewPage } from '../../pages/tradingSection/TradingViewPage'

let tradingSectionMenu;
let tradingViewPage;

test.describe('CySEC_License(EN, TradingView Page', ()=> {
    test.beforeEach(async ({page}) => {
        await page.goto("/en-eu");
        await handleCookiesPopUp(page)
        await handleStayOnSitePopUp(page)
        tradingSectionMenu = new TradingSectionMenu(page)
        tradingViewPage = new TradingViewPage(page)
        await tradingSectionMenu.openTradingViewPage()  
    })

    test("CySEC_License(EN), The file for installing the application on Windows is downloaded", 
        async ({page}) => {
            await expect(page).toHaveURL('/en-eu/trading-platforms/trading-view');            
            await tradingViewPage.verifyDownloadForDesktop();
     });

      test("CySEC_License(EN), The file for installing the application on Mac is downloaded", 
        async ({page}) => {
        await expect(page).toHaveURL("/en-eu/trading-platforms/trading-view");
        await tradingViewPage.verifyDownloadForMacOs();
      });

       test("CySEC_License(EN), The page https://snapcraft.io/tradingview is opened", 
        async ({page}) => {
        await expect(page).toHaveURL("/en-eu/trading-platforms/trading-view");               
        await tradingViewPage.verifyDownloadForLinux();
      })

      test("CySEC_License(EN), The page https://www.tradingview.com/chart/ is opened", 
        async ({page}) => {
        await expect(page).toHaveURL("/en-eu/trading-platforms/trading-view");               
        await tradingViewPage.verifyLaunchBrowser();
      })      

      test("CySEC_License(EN), The site TradingView is opened", async ({
        page,
      }) => {
        await expect(page).toHaveURL("/en-eu/trading-platforms/trading-view");        
        await tradingViewPage.clickTradingViewLink();
      });  

       test('CySEC_License(EN), Sign Up form is opened on "How can I connect TradingView?" block', async ({
         page,
       }) => {
         await expect(page).toHaveURL("/en-eu/trading-platforms/trading-view");
         await tradingViewPage.clickSignUpButtonHowCan();
       });  

       test('CySEC_License(EN), Sign Up form is opened on "Why choose Capital.com?" block', async ({
         page,
       }) => {
         await expect(page).toHaveURL("/en-eu/trading-platforms/trading-view")              
         await tradingViewPage.clickSignUpButtonWhyChoose();
       });  


})