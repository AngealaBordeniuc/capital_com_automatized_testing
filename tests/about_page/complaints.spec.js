import {test, expect} from '@playwright/test'
import { handleCookiesPopUp, handleStayOnSitePopUp } from '../../helpers/pop_ups.js';
import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
import { ComplaintsPage } from '../../pages/aboutSection/ComplaintsPage';

let aboutSectionMenu;
let complaintsPage;

test.describe('Is Capital.com safe?, FCA license', () => {
    test.beforeEach(async ({page}) =>{
        await page.goto("https://capital.com/en-gb");   
        await page.waitForLoadState('domcontentloaded');
        await handleStayOnSitePopUp(page);
        await handleCookiesPopUp(page);

        aboutSectionMenu = new AboutSectionMenu(page)
        complaintsPage = new ComplaintsPage(page)
        await aboutSectionMenu.openComplaintsPage();    
    })

    test('Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user', async ({page}) => {     
      await expect(page).toHaveURL('https://capital.com/en-gb/help/complaints');                
      await complaintsPage.clickCreateYourAccountButtonFromReady()       
    })

})