import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { ProAccountPage } from "../../pages/tradingSection/ProAccountPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";
import { threeStepsToStartTrading } from "../../helpers/threeSteps";


const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHT", "IT", "NL", "PL"];
// const languages = ["IT"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    if (!license.tradingSubmenus.PRO_ACCOUNT) return;

    test(`${license.name} ${lang} – Pro Account: Apply`, async ({
      page
    }, testInfo) => {
      const userState = testInfo.project.name;      
      const path = license.paths[lang];

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });      
      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const proAccountPage = new ProAccountPage(page);

      await tradingMenu.openProAccountPage()

      await page.waitForURL(
        (url) =>
          url.toString().includes("/professional") ||
          url.toString().includes("/professional-clients"),
      );


      const currentUrl = page.url();

      const expectedPaths = [
        `${path}/professional`,
        `${path}/professional-clients`,
      ];

      expect(expectedPaths.some((p) => currentUrl.includes(p))).toBeTruthy();
    
      await proAccountPage.clickApplyButton(userState);
    });

if (license.features.openAccountButton) {
    test(`${license.name} ${lang} – Pro Account: Open an Account`, async ({
      page,
    }, testInfo) => {
      const userState = testInfo.project.name;
      const path = license.paths[lang];

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });
      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const proAccountPage = new ProAccountPage(page);

      await tradingMenu.openProAccountPage();

      await page.waitForURL(
        (url) =>
          url.toString().includes("/professional") ||
          url.toString().includes("/professional-clients"),
      );

      const currentUrl = page.url();

      const expectedPaths = [
        `${path}/professional`,
        `${path}/professional-clients`,
      ];

      expect(expectedPaths.some((p) => currentUrl.includes(p))).toBeTruthy();
    
      await proAccountPage.clickOpenAnAccountButton(userState);
    });
}


if (license.features.logInButton) {
    test(`${license.name} ${lang} – Pro Account: Log In`, async ({
      page,
    }, testInfo) => {
      const userState = testInfo.project.name;
      const path = license.paths[lang];

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });
      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const proAccountPage = new ProAccountPage(page);

      await tradingMenu.openProAccountPage();

      await page.waitForURL(
        (url) =>
          url.toString().includes("/professional") ||
          url.toString().includes("/professional-clients"),
      );

      const currentUrl = page.url();

      const expectedPaths = [
        `${path}/professional`,
        `${path}/professional-clients`,
      ];

      expect(expectedPaths.some((p) => currentUrl.includes(p))).toBeTruthy();
     
      await proAccountPage.clickLogInButton(userState);
    });
}
if (license.features.qrCodeNewToCapital) {
 test(`${license.name} ${lang} – Pro Account: QR Code New to Capital`, async ({
   page,
 }, testInfo) => {
   const userState = testInfo.project.name;
   const path = license.paths[lang];

   await page.goto(path, {
     waitUntil: "domcontentloaded",
   });
   await handleOptionalPopups(page);

   const tradingMenu = new TradingSectionMenu(page);
   const proAccountPage = new ProAccountPage(page);

   await tradingMenu.openProAccountPage();

   await page.waitForURL(
     (url) =>
       url.toString().includes("/professional") ||
       url.toString().includes("/professional-clients"),
   );

   const currentUrl = page.url();

   const expectedPaths = [
     `${path}/professional`,
     `${path}/professional-clients`,
   ];

   expect(expectedPaths.some((p) => currentUrl.includes(p))).toBeTruthy();

   await proAccountPage.verifyQrNewToCapital(userState);
 });
}

if (license.features.qrCodeExisting) {
 test(`${license.name} ${lang} – Pro Account: QR Code Existing`, async ({
   page,
 }, testInfo) => {
   const userState = testInfo.project.name;
   const path = license.paths[lang];

   await page.goto(path, {
     waitUntil: "domcontentloaded",
   });
   await handleOptionalPopups(page);

   const tradingMenu = new TradingSectionMenu(page);
   const proAccountPage = new ProAccountPage(page);

   await tradingMenu.openProAccountPage();

   await page.waitForURL(
     (url) =>
       url.toString().includes("/professional") ||
       url.toString().includes("/professional-clients"),
   );

   const currentUrl = page.url();

   const expectedPaths = [
     `${path}/professional`,
     `${path}/professional-clients`,
   ];

   expect(expectedPaths.some((p) => currentUrl.includes(p))).toBeTruthy();   
   await proAccountPage.verifyQrExisting(userState);
 });
}
});

});
