import { test, expect } from '@playwright/test'
import { handleCookiesPopUp,handleStayOnSitePopUp, handleModalWindowSignUp } from '../../helpers/pop_ups'
import { MainPage } from '../../pages/main/MainPage'

let mainPage;
test.describe('Smoke_FCA_License(EN), Main Page', () =>{
    test.beforeEach(async({page}) => {
        await page.goto("/en-gb");
        await handleStayOnSitePopUp(page)           
        mainPage = new MainPage(page);
    })

    test('FCA_License(EN), Sign Up Form is opened after clicking on the [Sign Up] button on the banner "Award-winning trading platform, here in the UAE.", unauthorized user', async({page})=>{
        await mainPage.clickSignUpButton()                        
      }
    );

     test('FCA_License(EN), Sign Up Form is opened after clicking on the [Try demo] button on the banner "Award-winning trading platform, here in the UAE.", unauthorized user', async ({
       page,
     }) => {
       await mainPage.clickTryDemoButton();      
     });

     test('FCA_License(EN), Sign Up Form is opened after clicking on the [Sign up] button on the banner "Why choose Capital.com?", unauthorized user', async ({
        page,
      }) => {
        await mainPage.clickSignUpButtonWhyChooseCapitalCom();
     
      })

      test("FCA_License(EN),Sign Up Form is opened after clicking on the [Sell] button in the block [Our markets] (Trading Instrument), unauthorized user", async ({
        page,
      }) => {
        await mainPage.clickSellButtonOurMarkets();        
      });

      test("FCA_License(EN), Sign Up Form is opened after clicking on the [Buy] button in the block [Our markets] (Trading Instrument), unauthorized user", async ({
        page,
      }) => {
        await mainPage.clickBuyButtonOutMarkets();        
      });  

       test('FCA_License(EN),Sign Up Form is opened after clicking on the [Try demo] button in the block "For learner traders", unauthorized user', async ({
         page,
       }) => {
         await mainPage.clickTryDemoButtonForLearnerTraders();
        
       });

       test('FCA_License(EN), Sign Up Form is opened after clicking on the [Sign Up] button in the block "For learner traders", unauthorized user', async ({
         page,
       }) => {       
         await mainPage.clickSignUpButtonForLearnerTraders();
       

       })
       
           test("FCA_License(EN),Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", async ({
             page,
           }) => {
             await mainPage.clickCreateYourAccountButtonFromReady();
            
           });
    })

test.describe('Smoke_SCA_License(EN), Main Page', () =>{
    test.beforeEach(async({page}) => {
        await page.goto("/en-ae");
        await handleStayOnSitePopUp(page)           
        mainPage = new MainPage(page);
    })

    test('SCA_License(EN), Sign Up Form is opened after clicking on the [Sign Up] button on the banner "Award-winning trading platform, here in the UAE.", unauthorized user', async({page})=>{
        await mainPage.clickSignUpButton()        
                  
      }
    );

     test('SCA_License(EN), Sign Up Form is opened after clicking on the [Try demo] button on the banner "Award-winning trading platform, here in the UAE.", unauthorized user', async ({
       page,
     }) => {
       await mainPage.clickTryDemoButton();      
     });

      test('SCA_License(EN), Sign Up Form is opened after clicking on the [Sign up] button on the banner "Why choose Capital.com?", unauthorized user', async ({
        page,
      }) => {
        await mainPage.clickSignUpButtonWhyChooseCapitalCom();        
      });

      test("SCA_License(EN),Sign Up Form is opened after clicking on the [Sell] button in the block [Our markets] (Trading Instrument), unauthorized user", async ({
        page,
      }) => {
        await mainPage.clickSellButtonOurMarkets();        
      });        	

       test("SCA_License(EN), Sign Up Form is opened after clicking on the [Buy] button in the block [Our markets] (Trading Instrument), unauthorized user", async ({
         page,
       }) => {
         await mainPage.clickBuyButtonOutMarkets();         
       });  

         test('SCA_License(EN),Sign Up Form is opened after clicking on the [Try demo] button in the block "For learner traders", unauthorized user', async ({
           page,
         }) => {
           await mainPage.clickTryDemoButtonForLearnerTraders();          
         });
       
           test('SCA_License(EN), Sign Up Form is opened after clicking on the [Sign Up] button in the block "For learner traders", unauthorized user', async ({
             page,
           }) => {            
             await mainPage.clickSignUpButtonForLearnerTraders();
            
           });

           test("SCA_License(EN),Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", async ({
             page,
           }) => {
             await mainPage.clickCreateYourAccountButtonFromReady();
            
})

})


