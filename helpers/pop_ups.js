import { expect } from '@playwright/test'

export const  handleOptionalPopups = async(page) => {
  try {
    await handleCookiesPopUp(page);
  } catch (e) {
    // dacă nu există popup, ignorăm
  }

  try {
    await handleStayOnSitePopUp(page);
  } catch (e) {
    // dacă nu există popup, ignorăm
  }
  try {
    await acceptAllCookies(page); // popup cookies
  } catch (e) {
    // dacă nu există, ignorăm
  }

}

export const handleCookiesPopUp = async (page) => {
  if (page.isClosed()) return;

  const closeBtn = page.locator('button[aria-label="Close"]');

  if ((await closeBtn.count()) === 0) return;

  await closeBtn.click();
  // await closeBtn.waitFor({ state: "detached", timeout: 1000 });

  // // ❗ Așteaptă un pic ca pagina să fie stabilă
  // await page.waitForTimeout(300); // 300ms sau 500ms
};




export const handleStayOnSitePopUp = async (page) => {
  if (page.isClosed()) return;

  const stayBtn = page.getByText("Stay on this site");

  if ((await stayBtn.count()) === 0) return;

  await stayBtn.click();
  await stayBtn.waitFor({ state: "detached", timeout: 1000 });
};



export const handleModalWindowSignUp = async (page) => {
  if (page.isClosed()) return;

  const modal = page.locator('[data-sentry-component="Modal"]');

  if ((await modal.count()) === 0) return;  
  await expect(modal).toBeVisible();
};




export const acceptAllCookies = async (page) => {
  if (page.isClosed()) return;

  const acceptAllBtn = page.getByRole("button", {
    name: /accept all cookies/i,
  });

  if (await acceptAllBtn.count() === 0) return;

  await acceptAllBtn.click();
  await acceptAllBtn.waitFor({ state: "detached", timeout: 1000 });
};




   
