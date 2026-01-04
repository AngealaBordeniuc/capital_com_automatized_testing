import {test, expect} from '@playwright/test'
import { handleCookiesPopUp, handleModalWindowSignUp, handleStayOnSitePopUp}  from '../../helpers/pop_ups';
import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
import { ComplaintsPage } from '../../pages/aboutSection/ComplaintsPage';

let aboutSectionMenu;
let complaintsPage;

test.describe('Is Capital.com safe?, FCA license', () => {
    test.beforeEach(async ({page}) =>{
        await page.goto("https://capital.com/en-gb");
        await handleStayOnSitePopUp(page)
        aboutSectionMenu = new AboutSectionMenu(page)
        complaintsPage = new ComplaintsPage(page)
        await aboutSectionMenu.openComplaintsPage();    
    })

    test('Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user', async ({page}) => {     
      await expect(page).toHaveURL('https://capital.com/en-gb/help/complaints');                
      await complaintsPage.clickCreateYourAccountButtonFromReady()       
    })

})