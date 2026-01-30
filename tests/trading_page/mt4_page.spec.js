import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { MT4Page } from "../../pages/tradingSection/MT4Page";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];
// const languages = ["ZHS"]

licenses.forEach((license) => {
languages.forEach((lang) => {

   const mt4 = license.tradingSubmenus.MT4;
  
   if (!mt4 || (Array.isArray(mt4) && !mt4.includes(lang))) return;   
       
      
    
    if (license.features.mt4CreateAccountButton1){
    test(`${license.name} ${lang} – MT4: Create account - un`, async ({
      page, 
    }) => {      

      const path = license.paths[lang];     

      // await page.pause()

      await page.goto(path, {waitUntil: "domcontentloaded"});

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const mT4Page = new MT4Page(page);

      await tradingMenu.openMT4Page()
    
      const expectedPath = `${path}/trading-platforms/mt4`;

      await expect(page).toHaveURL(expectedPath);
      await mT4Page.clickCreateAccountButton()
    });
  }

    if (license.features.mt4OpenAccountButton){
    test(`${license.name} ${lang} – MT4: Open account - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];

      // await page.pause()

      await page.goto(path, { waitUntil: "domcontentloaded" });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const mT4Page = new MT4Page(page);

      await tradingMenu.openMT4Page();

      const expectedPath = `${path}/trading-platforms/mt4`;

      await expect(page).toHaveURL(expectedPath);
      await mT4Page.clickOpenAccountButton()
    });
  }

      test(`${license.name} ${lang} – MT4, Create account: Three Steps - un`, async ({
        page,
      }) => {
        const path = license.paths[lang];

        await page.goto(path, { waitUntil: "domcontentloaded" });

        await handleOptionalPopups(page);

        const tradingMenu = new TradingSectionMenu(page);
        const mT4Page = new MT4Page(page);

        await tradingMenu.openMT4Page();

        const expectedPath = `${path}/trading-platforms/mt4`;

        await expect(page).toHaveURL(expectedPath);
        await mT4Page.clickCreateAccountButtonThreeSteps()
      });

       test(`${license.name} ${lang} – MT4, Download For Mac - un`, async ({
         page,
       }) => {
         const path = license.paths[lang];

         await page.goto(path, { waitUntil: "domcontentloaded" });

         await handleOptionalPopups(page);

         const tradingMenu = new TradingSectionMenu(page);
         const mT4Page = new MT4Page(page);

         await tradingMenu.openMT4Page();

         const expectedPath = `${path}/trading-platforms/mt4`;

         await expect(page).toHaveURL(expectedPath);
         await mT4Page.verifyMt4DownloadForMac()
       });

       test(`${license.name} ${lang} – MT4, Download For Windows - un`, async ({
         page,
       }) => {
         const path = license.paths[lang];         

         await page.goto(path, { waitUntil: "domcontentloaded" });

         await handleOptionalPopups(page);

         const tradingMenu = new TradingSectionMenu(page);
         const mT4Page = new MT4Page(page);

         await tradingMenu.openMT4Page();

         const expectedPath = `${path}/trading-platforms/mt4`;

         await expect(page).toHaveURL(expectedPath);
         await mT4Page.verifyMt4DownloadForWindows()
       });

        test(`${license.name} ${lang} – MT4, Download Google Play- un`, async ({
          page,
        }) => {
          const path = license.paths[lang];

          await page.goto(path, { waitUntil: "domcontentloaded" });

          await handleOptionalPopups(page);

          const tradingMenu = new TradingSectionMenu(page);
          const mT4Page = new MT4Page(page);

          await tradingMenu.openMT4Page();

          const expectedPath = `${path}/trading-platforms/mt4`;

          await expect(page).toHaveURL(expectedPath);
          await mT4Page.verifyMt4DownloadGooglePlay()
        });
        

         test(`${license.name} ${lang} – MT4, Download from App Store- un`, async ({
           page,
         }) => {
           const path = license.paths[lang];       

           await page.goto(path, { waitUntil: "domcontentloaded" });

           await handleOptionalPopups(page);

           const tradingMenu = new TradingSectionMenu(page);
           const mT4Page = new MT4Page(page);

           await tradingMenu.openMT4Page();

           const expectedPath = `${path}/trading-platforms/mt4`;

           await expect(page).toHaveURL(expectedPath);
           await mT4Page.verifyMt4DownloadAppStore()
         });

         test(`${license.name} ${lang} – MT4, Web Terminal- un`, async ({
           page,
         }) => {
           const path = license.paths[lang];

           await page.goto(path, { waitUntil: "domcontentloaded" });

           await handleOptionalPopups(page);

           const tradingMenu = new TradingSectionMenu(page);
           const mT4Page = new MT4Page(page);

           await tradingMenu.openMT4Page();

           const expectedPath = `${path}/trading-platforms/mt4`;

           await expect(page).toHaveURL(expectedPath);
           await mT4Page.verifyMt4OpenWebTerminal()
         });          

         if (license.features.mt4SignUpNowDiscoverTradingButton) {
           test(`${license.name} ${lang} – MT4: Sign up now - un`, async ({
             page,
           }) => {
             const path = license.paths[lang];

             // await page.pause()

             await page.goto(path, { waitUntil: "domcontentloaded" });

             await handleOptionalPopups(page);

             const tradingMenu = new TradingSectionMenu(page);
             const mT4Page = new MT4Page(page);

             await tradingMenu.openMT4Page();

             const expectedPath = `${path}/trading-platforms/mt4`;

             await expect(page).toHaveURL(expectedPath);
             await mT4Page.clickSignUpNowDiscoverTrading()
           });
         }

         if (license.features.mt4SignUpWhyChooseButton) {
           test(`${license.name} ${lang} – MT4: Sign up, Why Choose - un`, async ({
             page,
           }) => {
             const path = license.paths[lang];

             await page.pause()

             await page.goto(path, { waitUntil: "domcontentloaded" });

             await handleOptionalPopups(page);

             const tradingMenu = new TradingSectionMenu(page);
             const mT4Page = new MT4Page(page);

             await tradingMenu.openMT4Page();

             const expectedPath = `${path}/trading-platforms/mt4`;

             await expect(page).toHaveURL(expectedPath);
             await mT4Page.clickSignUpWhyChoose()
           });
         }
         
         
         test(`${license.name} ${lang} – MT4, Create your account- un`, async ({
           page,
         }) => {
           const path = license.paths[lang];           

           await page.goto(path, { waitUntil: "domcontentloaded" });

           await handleOptionalPopups(page);

           const tradingMenu = new TradingSectionMenu(page);
           const mT4Page = new MT4Page(page);

           await tradingMenu.openMT4Page();

           const expectedPath = `${path}/trading-platforms/mt4`;

           await expect(page).toHaveURL(expectedPath);
           await mT4Page.clickCreateYourAccountButtonFromReady()
         });
  })
})


