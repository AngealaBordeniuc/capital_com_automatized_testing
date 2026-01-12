import{test, expect} from "@playwright/test"
import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
import { WhyCapitalComPage } from '../../pages/aboutSection/WhyCapitalComPage';
import { handleOptionalPopups } from "../../helpers/pop_ups";


let aboutSectionMenu;
let whyCapitalComPage;

test.describe('Smoke_FCA_license(EN), Why Capital.com?', ( ) => {
    test.beforeEach(async({page})=> {      
         await page.goto("/en-gb", {waitUntil: "domcontentloaded"});                             
        
          aboutSectionMenu = new AboutSectionMenu(page);
          whyCapitalComPage = new WhyCapitalComPage(page);
         await aboutSectionMenu.openWhyCapitalComPage();  
    })

    test('FCA_license,Sign Up Form is opened on "Why Capital.com" page after clicking "Create account" button, unauthorized user', async({page}) => {      
                  
      await expect(page).toHaveURL("/en-gb/why-capital");
      await whyCapitalComPage.clickCreateAccountButton();      
    })

    test('FCA_License, Sign Up Form is opened on "Why Capital.com" page after clicking "Try demo account" button, unauthorized user', async ({page}) => {
              
         await expect(page).toHaveURL("/en-gb/why-capital");
         await whyCapitalComPage.clickTryDemoAccountButton()                
    })

     test('FCA_License, Sign Up Form is opened on "Why Capital.com" page after clicking "Create your account" button, unauthorized user', async ({
       page,
     }) => {
      
       await expect(page).toHaveURL("/en-gb/why-capital");       
       await whyCapitalComPage.clickCreateYourAccountButtonFromReady()                   
     });
})

test.describe('Smoke_FCA_license(EN), Why Capital.com?', ( ) => {
    test.beforeEach(async({page})=> {
         await page.goto("/en-ae", {waitUntil: "domcontentloaded"});                  

          aboutSectionMenu = new AboutSectionMenu(page);
          whyCapitalComPage = new WhyCapitalComPage(page);
            await aboutSectionMenu.openWhyCapitalComPage();
    })

     test('SCA_License(EN), Sign Up Form is opened on "Why Capital.com" page after clicking "Create account" button, unauthorized user', async ({
       page,
     }) => {
      
       await expect(page).toHaveURL("/en-ae/why-capital");
       await whyCapitalComPage.clickCreateAccountButton();    
     });

     
    test('SCA_License(EN), Sign Up Form is opened on "Why Capital.com" page after clicking "Try demo account" button, unauthorized user', async ({
      page,
    }) => {
      
      await expect(page).toHaveURL("/en-ae/why-capital");
      await whyCapitalComPage.clickTryDemoAccountButton();
    });

    test('SCA_License(EN), Sign Up Form is opened on "Why Capital.com" page after clicking "Create your account" button, unauthorized user', async ({
      page,
    }) => {
    
      await expect(page).toHaveURL("/en-ae/why-capital");
      await whyCapitalComPage.clickCreateYourAccountButtonFromReady();     
    });

  })




