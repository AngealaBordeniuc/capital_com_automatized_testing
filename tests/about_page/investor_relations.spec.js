import {test, expect} from '@playwright/test'
import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
import { InvestorRelationsPage } from '../../pages/aboutSection/InvestorRelationsPage';

let aboutSectionMenu;
let investorRelationsPage;

test.describe('Is Capital.com safe?, FCA license', () => {
    test.beforeEach(async ({page}) =>{
        await page.goto("https://capital.com/en-gb");                
        aboutSectionMenu = new AboutSectionMenu(page)
        investorRelationsPage = new InvestorRelationsPage(page)
    })

    test('Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user', async ({page}) => {
      await aboutSectionMenu.openInvestorRelationsPage()   
      await expect(page).toHaveURL('https://capital.com/en-gb/about-us/investor-relations')           
      await investorRelationsPage.clickCreateYourAccountButtonFromReady()             
    })
    })

