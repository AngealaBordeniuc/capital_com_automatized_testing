import{test, expect} from '@playwright/test'
import { handleModalWindowSignUp, handleStayOnSitePopUp } from '../../helpers/pop_ups';
import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
import { WhyCapitalComPage } from '../../pages/aboutSection/WhyCapitalComPage';


let aboutSectionMenu;
let whyCapitalComPage;

test.describe('Smoke_FCA_license(EN), Why Capital.com?', ( ) => {
    test.beforeEach(async({page})=> {
         await page.goto("/en-gb");
         await handleStayOnSitePopUp(page)                  
          aboutSectionMenu = new AboutSectionMenu(page);
          whyCapitalComPage = new WhyCapitalComPage(page);
    })

    test('FCA_license,Sign Up Form is opened on "Why Capital.com" page after clicking "Create account" button, unauthorized user', async({page}) => {      
      await aboutSectionMenu.openWhyCapitalComPage();               
      await expect(page).toHaveURL("/en-gb/why-capital");
      await whyCapitalComPage.clickCreateAccountButton();
      await handleModalWindowSignUp(page);
    })

    test('FCA_License, Sign Up Form is opened on "Why Capital.com" page after clicking "Try demo account" button, unauthorized user', async ({page}) => {
      await aboutSectionMenu.openWhyCapitalComPage()        
         await expect(page).toHaveURL("/en-gb/why-capital");
         await whyCapitalComPage.clickTryDemoAccountButton()        
         await handleModalWindowSignUp(page)
    })

     test('FCA_License, Sign Up Form is opened on "Why Capital.com" page after clicking "Create your account" button, unauthorized user', async ({
       page,
     }) => {
      await aboutSectionMenu.openWhyCapitalComPage()
       await expect(page).toHaveURL("/en-gb/why-capital");       
       await whyCapitalComPage.clickCreateYourAccountButtonFromReady()      
       await handleModalWindowSignUp(page)         
     });
})

test.describe('Smoke_FCA_license(EN), Why Capital.com?', ( ) => {
    test.beforeEach(async({page})=> {
         await page.goto("/en-ae");
         await handleStayOnSitePopUp(page)                  
          aboutSectionMenu = new AboutSectionMenu(page);
          whyCapitalComPage = new WhyCapitalComPage(page);
    })

     test('SCA_License(EN), Sign Up Form is opened on "Why Capital.com" page after clicking "Create account" button, unauthorized user', async ({
       page,
     }) => {
       await aboutSectionMenu.openWhyCapitalComPage();
       await expect(page).toHaveURL("/en-ae/why-capital");
       await whyCapitalComPage.clickCreateAccountButton();
       await handleModalWindowSignUp(page);
     });

     
    test('SCA_License(EN), Sign Up Form is opened on "Why Capital.com" page after clicking "Try demo account" button, unauthorized user', async ({
      page,
    }) => {
      await aboutSectionMenu.openWhyCapitalComPage();
      await expect(page).toHaveURL("/en-ae/why-capital");
      await whyCapitalComPage.clickTryDemoAccountButton();
      await handleModalWindowSignUp(page);
    });

    test('SCA_License(EN), Sign Up Form is opened on "Why Capital.com" page after clicking "Create your account" button, unauthorized user', async ({
      page,
    }) => {
      await aboutSectionMenu.openWhyCapitalComPage();
      await expect(page).toHaveURL("/en-ae/why-capital");
      await whyCapitalComPage.clickCreateYourAccountButtonFromReady();
      await handleModalWindowSignUp(page);
    });

  })




