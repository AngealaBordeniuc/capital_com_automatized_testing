import { expect } from '@playwright/test'

export const handleOptionalPopups = async (page) => { 
  await handleCookiesPopUp(page);
  await handleStayOnSitePopUp(page);
  await acceptAllCookies(page);
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

  const stayBtn = page.getByText("Stay on this site");

  try {
    await stayBtn.waitFor({ state: "visible", timeout: 3000 });
    await stayBtn.click();
  } catch {
    return; 
  }
};

export const acceptAllCookies = async (page) => {
  if (page.isClosed()) return;

  const acceptAllBtn = page.getByRole("button", {
    name: /accept all cookies/i,
  });

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






