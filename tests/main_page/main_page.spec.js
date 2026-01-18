import { test, expect } from "@playwright/test";
import { MainPage } from "../../pages/main/MainPage"
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Main Page, "Sign up" - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      const mainPage = new MainPage(page)
      await mainPage.clickSignUpButton()
    });

    test(`${license.name} ${lang} – Main Page, "Try demo" - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];     

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      const mainPage = new MainPage(page);
      await mainPage.clickTryDemoButton()
    });

     test(`${license.name} ${lang} – Main Page, "Sign up- Why Capital" - un`, async ({
       page,
     }) => {
       const path = license.paths[lang];
      //  await page.pause()

       await page.goto(`https://capital.com${path}`, {
         waitUntil: "domcontentloaded",
       });

       const mainPage = new MainPage(page);
       await mainPage.clickSignUpButtonWhyChooseCapitalCom()
     });

      test(`${license.name} ${lang} – Main Page, "Sell link" - un`, async ({
        page,
      }) => {
        const path = license.paths[lang];        

        await page.goto(`https://capital.com${path}`, {
          waitUntil: "domcontentloaded",
        });
        await handleOptionalPopups(page)

        const mainPage = new MainPage(page);
        await mainPage.clickSellButtonOurMarkets()
      });

      test.only(`${license.name} ${lang} – Main Page, "Buy link" - un`, async ({
        page,
      }) => {
        const path = license.paths[lang];       

        await page.goto(`https://capital.com${path}`, {
          waitUntil: "domcontentloaded",
        }); 

        await handleOptionalPopups(page)

        const mainPage = new MainPage(page);
        await mainPage.clickBuyButtonOutMarkets()
      });

      test(`${license.name} ${lang} – Main Page, "Try demo - For Learner" - un`, async ({
        page,
      }) => {
        const path = license.paths[lang];
        //  await page.pause()

        await page.goto(`https://capital.com${path}`, {
          waitUntil: "domcontentloaded",
        });      

        const mainPage = new MainPage(page);
        await mainPage.clickTryDemoButtonForLearnerTraders()
      });

      test(`${license.name} ${lang} – Main Page, "Sign up - For Learner" - un`, async ({
        page,
      }) => {
        const path = license.paths[lang];      

        await page.goto(`https://capital.com${path}`, {
          waitUntil: "domcontentloaded",
        });

        const mainPage = new MainPage(page);
        await mainPage.clickSignUpButtonForLearnerTraders()
      });

      
      test(`${license.name} ${lang} – Main Page, "Create your account - Ready" - un`, async ({
        page,
      }) => {
        const path = license.paths[lang];
        //  await page.pause()

        await page.goto(`https://capital.com${path}`, {
          waitUntil: "domcontentloaded",
        });

        const mainPage = new MainPage(page);
        await mainPage.clickCreateYourAccountButtonFromReady()
      });    

  });
});




