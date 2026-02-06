import { expect } from '@playwright/test'

export const handleOptionalPopups = async (page) => { 
  await acceptImportantNotice(page); 
  await acceptAllCookies(page);
  await handleCookiesPopUp(page);
  await handleStayOnSitePopUp(page);
 
};

export const acceptImportantNotice = async (page) => {
   if (page.isClosed()) return;

   const confirmBtn = page.getByRole("button", { name: /i confirm/i });

   try {     
     await confirmBtn.waitFor({ state: "visible", timeout: 3000 });
    
     await confirmBtn.evaluate((el) => {
       el.style.display = "block";
       el.style.visibility = "visible";
       el.style.pointerEvents = "auto";
       el.disabled = false;
     });
     
     await confirmBtn.click();
   } catch (e) {    
     return;
   }
};



export const handleCookiesPopUp = async (page) => {
  if (page.isClosed()) return;

  const closeBtn = page.locator('button[aria-label="Close"]');

  try {
    await closeBtn.waitFor({ state: "visible", timeout: 3000 });
    await closeBtn.click();
  } catch {
    return; 
  }
};

export const handleStayOnSitePopUp = async (page) => {
  if (page.isClosed()) return;  
  const stayBtn = page.locator(`button[data-type="wrong_location_cancel"]`);

  try {
    await stayBtn.waitFor({ state: "visible", timeout: 3000 });
    await stayBtn.click();
  } catch {
    return; 
  }
};

export const acceptAllCookies = async (page) => {
  if (page.isClosed()) return; 

  const acceptAllBtn = page.locator(`button[data-type="cb_accept_btn"]`);

  try {
    await acceptAllBtn.waitFor({ state: "visible", timeout: 3000 });
    await acceptAllBtn.click();
  } catch {
    return; 
  }
};

export const handleModalWindowSignUp = async (page) => {
  if (page.isClosed()) return;

  const modal = page.locator('[data-sentry-component="Modal"]');

  try {
    await modal.waitFor({ state: "visible", timeout: 5000 });
    await expect(modal).toBeVisible();
  } catch {
    return; 
  }
};






