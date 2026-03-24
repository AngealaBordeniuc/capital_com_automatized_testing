import {test as setup, expect} from '@playwright/test'
import { handleOptionalPopups } from '../helpers/pop_ups';

const authFile = '.auth/authorized.json'

setup('authentication', async({page}) => {
  await page.goto("https://capital.com/en-int");

  await handleOptionalPopups(page);

  await page.locator('button[data-type="btn_header_login"]').nth(1).click();
  const emailInput = page.locator('input[type="email"]');
  await emailInput.fill(process.env.TEST_EMAIL);
  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.fill(process.env.TEST_PASSWORD); 

  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click({ force: true }); 

  const overlay = page.locator("div.c8Rg");
      if ((await overlay.isVisible())){      
    const submitButtonHandle = await submitButton.elementHandle();
    await page.evaluate((button) => button.click(), submitButtonHandle);
      }

  const tradingPlatform = page.locator("div.title").first();
  await expect(tradingPlatform).toBeVisible({ timeout: 60000 });
  await expect(page).toHaveURL(/trading\/platform/);

  await page.context().storageState({ path: authFile });
});











