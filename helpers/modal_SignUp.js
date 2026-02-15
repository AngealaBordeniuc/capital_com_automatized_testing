import { expect } from "allure-playwright";

export async function handleModalWindowSignUp (page, expectedUrl) {
   const modal = page.locator('div[data-sentry-component="Modal"]');

  try {
    await modal.waitFor({ state: "visible", timeout: 5000 });
   const inputEmail = page.locator("#email").last()
    await expect(inputEmail).toBeVisible();
    return "unauthorized";
  } catch {
    await expect(page).toHaveURL(expectedUrl, { timeout: 10000 });
    return "authorized";
  }
}

