import {test, expect} from '@playwright/test'
import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp } from '../../helpers/pop_ups'
import { TradingSectionMenu } from '../../pages/tradingSection/TradingSectionMenu'
import { MT4Page } from '../../pages/tradingSection/MT4Page'

let tradingSectionMenu;
let mT4Page;

test.describe('CySec_License(EN), MT4 Page', () => {
    test.beforeEach(async({page}) => {
            await page.goto('/en-eu')
            await handleStayOnSitePopUp(page)
            await handleCookiesPopUp(page)
            tradingSectionMenu = new TradingSectionMenu(page)
            mT4Page = new MT4Page(page)
            await tradingSectionMenu.openMT4Page();
        })
    
 test('CySEC_license(EN), Sign Up Form is opened on "MT4" page after clicking "Create account" button, unauthorized user', 
  async ({page}) => {      
       await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
       await mT4Page.clickCreateAccountButton();     
     });       
 
 test('CySEC_license(EN), Sign Up Form is opened after clicking "Open account" button from the "Connect your account to MT4 in three steps" block, unauthorized user', 
  async ({page}) => {      
       await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
       await mT4Page.clickOpenAccountButton();      
     })

  test('CySEC_license(EN), Sign Up Form is opened after clicking "Create account" button from the "Connect your account to MT4 in three steps" block, unauthorized user', 
    async ({page}) => {       
       await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
       await mT4Page.clickCreateAccountButton2();      
     });

 test('CySEC_license(EN), Verify Mt4 Download For Mac from the "Download MT4" block, unauthorized user', 
  async ({page}) => {   
   await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
   await mT4Page.verifyMt4DownloadForMac();
 });

  test('CySEC_license(EN), Verify Mt4 Download For Windows from the "Download MT4" block, unauthorized user', 
    async ({page}) => {    
    await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
    await mT4Page.verifyMt4DownloadForWindows();
  });

  test('CySEC_license(EN), Verify Mt4 Download Google Play from the "Download MT4" block, unauthorized user', 
    async ({page}) => {    
    await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
    await mT4Page.verifyMt4DownloadGooglePlay();
  });

 test('CySEC_license(EN), Verify Mt4 Download App Store from the "Download MT4" block, unauthorized user', 
  async ({page}) => {   
   await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");   
   await mT4Page.verifyMt4DownloadAppStore();
 }); 

 test('CySEC_license(EN), Verify Web Terminal from the "Download MT4" block, unauthorized user', async ({
   page,
 }) => {   
   await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");  
   await mT4Page.verifyMt4OpenWebTerminal();
 }); 

  test('CySEC_license(EN), Sign Up form is opened after clicking on [Sign Up], unauthorized user', 
    async ({page}) => {    
    await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");    
    await mT4Page.clickSignUpButtonWhyChooseCapital();   
  }); 

   test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", 
     async ({page}) => {   
    await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");        
     await mT4Page.clickCreateYourAccountButtonFromReady();                          
 });

});  

