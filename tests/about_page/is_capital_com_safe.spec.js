import {test, expect} from '@playwright/test'
import { handleCookiesPopUp, handleStayOnSitePopUp } from '../../helpers/pop_ups';
import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
import { IsCapitalComSafePage } from '../../pages/aboutSection/IsCapitalComSafePage';

let aboutSectionMenu;
let isCapitalComSafePage;
test.describe('Smoke_FCA_license(EN), Is Capital.com safe?', () => {
    test.beforeEach(async ({page}) =>{
        await page.goto("/en-gb");               
        await page.waitForLoadState('domcontentloaded');
        await handleStayOnSitePopUp(page);
        await handleCookiesPopUp(page);
        aboutSectionMenu = new AboutSectionMenu(page)
        isCapitalComSafePage = new IsCapitalComSafePage(page)
         await aboutSectionMenu.openIsCapitalComSafePage();    
    })

    test('Sign Up Form is opened after clicking on the [Open an account] button, unauthorized user', async ({page}) => {             
        await expect(page).toHaveURL('/en-gb/security-measures')        
        await isCapitalComSafePage.clickOpenAnAccountButton()                                              
    })
})

test.describe('Smoke_SCA_license(EN), Is Capital.com safe?,', () => {
    test.beforeEach(async ({page}) =>{
        await page.goto("/en-ae");               
        await page.waitForLoadState('domcontentloaded');
        await handleStayOnSitePopUp(page);
        await handleCookiesPopUp(page);
        aboutSectionMenu = new AboutSectionMenu(page)
        isCapitalComSafePage = new IsCapitalComSafePage(page)
          await aboutSectionMenu.openIsCapitalComSafePage(); 
    })

    test('Sign Up Form is opened after clicking on the [Open an account] button, unauthorized user', async ({page}) => {               
        await expect(page).toHaveURL('/en-ae/security-measures');              
        await isCapitalComSafePage.clickOpenAnAccountButton()                                               
    })
})