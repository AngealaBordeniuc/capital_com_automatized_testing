import{test, expect} from '@playwright/test'
import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp} from "../../helpers/pop_ups";
import { TradingSectionMenu } from '../../pages/tradingSection/TradingSectionMenu'
import { AllPlatformsPage } from '../../pages/tradingSection/AllPlatformsPage';

let tradingSectionMenu;
let allPlatformsPage;


test.describe('CySEC_License(EN), CFD Trading Page', () => {
    test.beforeEach(async({page}) => {          
         await page.goto('/en-eu')       
         await handleStayOnSitePopUp(page)
         await handleCookiesPopUp(page)
         tradingSectionMenu = new TradingSectionMenu(page)
         allPlatformsPage = new AllPlatformsPage(page)
    })

    test('CySEC_license(EN), Sign Up Form is opened on "All platforms" page after clicking "Create account" button, unauthorized user', 
            async({page}) => {                     
              await tradingSectionMenu.openAllPlatformsPage()            
              await expect(page).toHaveURL("/en-eu/trading-platforms");
            await allPlatformsPage.clickCreateAccountButton()
             await handleModalWindowSignUp(page)
            })
    
     test('CySEC_License, Sign Up Form is opened on "All platforms" page after clicking "Try demo account" button, unauthorized user', 
                async ({page}) => {                   
                 await tradingSectionMenu.openAllPlatformsPage()
                     await expect(page).toHaveURL("/en-eu/trading-platforms");
                     await allPlatformsPage.clickTryDemoAccountButton()
                     await handleModalWindowSignUp(page)
                })
    test('SCA_License(EN), Sign Up Form is opened after clicking on the [Sign Up] button in the block "Why choose Capital.com? Our numbers speak for themselves", unauthorized user', async ({
      page,
    }) => {       
        await tradingSectionMenu.openAllPlatformsPage()
         await expect(page).toHaveURL("/en-eu/trading-platforms");
         await allPlatformsPage.clickSignUpButtonWhyChooseCapital();
         await handleModalWindowSignUp(page);
    });

})
