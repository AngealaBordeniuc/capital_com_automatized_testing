import {test as setup, expect} from '@playwright/test'
import { handleOptionalPopups } from '../helpers/pop_ups';

const authFile = '.auth/authorized.json'

setup('authentication', async({page}) => {
    await page.goto("https://capital.com/en-int");

    await handleOptionalPopups(page)
    await page.locator('button[data-type="btn_header_login"]').nth(1).click()
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill(process.env.TEST_EMAIL);
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill(process.env.TEST_PASSWORD);
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    await page.waitForResponse(
      "https://api.backend-capital.com/proxy/v1/api/auth.authToken.generate",
    );

    await expect(page).toHaveURL("/trading/platform/")

    await page.context().storageState({path: authFile})
})