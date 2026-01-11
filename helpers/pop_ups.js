import { expect } from '@playwright/test'

export const handleCookiesPopUp = async (page) => {
  if (page.isClosed()) return;

  try {
    const closeBtn = page.locator('button[aria-label="Close"]');

    await closeBtn.waitFor({
      state: "visible",
      timeout: 3000,
    });

    await closeBtn.click();
    await closeBtn.waitFor({ state: "detached", timeout: 1000 });
  } catch {
    // no cookies popup → OK
  }
};



export const handleStayOnSitePopUp = async (page) => {
  if (page.isClosed()) return;

  try {
    const stayBtn = page.getByText("Stay on this site");

    await stayBtn.waitFor({
      state: "visible",
      timeout: 3000,
    });

    await stayBtn.click();
    await stayBtn.waitFor({ state: "detached", timeout: 3000 });
  } catch {
    // pop-up nu există → OK
  }
};


export const handleModalWindowSignUp = async (page) => {
  if (page.isClosed()) return;

  try {
    const modal = page.locator('[data-sentry-component="Modal"]');

    await modal.waitFor({
      state: "visible",
      timeout: 3000,
    });
    
    // await expect(modal).toContainText('Sign up');
  } catch {   
  }
};


export const acceptAllCookies = async (page) => {
  if (page.isClosed()) return;

  try {
    const acceptAllBtn = page.getByRole("button", {
      name: /accept all cookies/i,
    });

    await acceptAllBtn.waitFor({
      state: "visible",
      timeout: 3000,
    });

    await acceptAllBtn.click();

    await acceptAllBtn.waitFor({
      state: "detached",
      timeout: 3000,
    });
  } catch {   
  }
};


   
