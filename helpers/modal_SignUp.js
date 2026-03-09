import { expect } from "allure-playwright";

export async function handleModalWindowSignUp (page, expectedUrl) {
   const modal = page.locator('div[data-sentry-component="Modal"]');

   try {
     // dacă apare modalul → user complet nou
     await modal.waitFor({ state: "visible", timeout: 5000 });
     const inputEmail = page.locator("#email").last();
     await expect(inputEmail).toBeVisible();
     return "unregistered"; // user fără cont
   } catch {
     // modalul nu apare → verificăm URL
     await expect(page).toHaveURL(expectedUrl, { timeout: 10000 });

     // dacă există storageState încărcat → authorized
     const storage = await page.context().storageState();
     if (storage.origins.some((origin) => origin.localStorage.length > 0 || origin.cookies.length > 0)) {
       return "authorized";
     } else {
       return "unauthorized"; // user delogat
     }
   }

  // try {
  //   await modal.waitFor({ state: "visible", timeout: 5000 });
  //  const inputEmail = page.locator("#email").last()
  //   await expect(inputEmail).toBeVisible();
  //   return "unauthorized";
  // } catch {
  //   await expect(page).toHaveURL(expectedUrl, { timeout: 10000 });
  //   return "authorized";
  // }
}

