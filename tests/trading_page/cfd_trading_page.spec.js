import{test, expect} from '@playwright/test'
import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp} from "../../helpers/pop_ups";
import { TradingSectionMenu } from '../../pages/tradingSection/TradingSectionMenu'
import { CFDTradingPage } from '../../pages/tradingSection/CFDTradingPage';

let tradingSectionMenu;
let cfdTradingPage;


test.describe('CySEC_License(EN), CFD Trading Page', () => {
    test.beforeEach(async({page}) => {          
         await page.goto('/en-eu')       
         await handleStayOnSitePopUp(page)
         await handleCookiesPopUp(page)
         tradingSectionMenu = new TradingSectionMenu(page)
         cfdTradingPage = new CFDTradingPage(page);
         await tradingSectionMenu.openCFDTradingPage();  
    })

    test('CySEC_license(EN), Sign Up Form is opened on "CFD trading" page after clicking "Create account" button, unauthorized user', 
        async({page}) => {                           
          await expect(page).toHaveURL("/en-eu/ways-to-trade/cfd-trading");
        await cfdTradingPage.clickCreateAccountButton()
         
        })

        test('CySEC_License, Sign Up Form is opened on "CFD trading" page after clicking "Try demo account" button, unauthorized user', 
            async ({page}) => {            
                 await expect(page).toHaveURL("/en-eu/ways-to-trade/cfd-trading");
                 await cfdTradingPage.clickTryDemoAccountButton()                
            })

    test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Sell] button in the block [Our CFD markets] (Trading Instrument), unauthorized user", 
        async ({page}) => {
           await cfdTradingPage.clickSellButtonOurCFDMarkets()            
          });        	
    
           test("CySEC_License(EN), Sign Up Form is opened after clicking on the [Buy] button in the block [Our CFD markets] (Trading Instrument), unauthorized user", 
            async ({page}) => {
             await cfdTradingPage.ClickBuyButtonOurCFDMarkets();                        
           });  

            test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", 
                async ({page}) => {
                await cfdTradingPage.clickCreateYourAccountButtonFromReady();
              });
            


})