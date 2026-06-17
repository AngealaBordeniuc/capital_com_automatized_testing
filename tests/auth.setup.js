import {test as setup, expect} from '@playwright/test'
import { handleOptionalPopups } from '../helpers/pop_ups';

const authFile = '.auth/authorized.json'

setup('authentication', async({page}) => {
  await page.goto("https://capital.com/en-int");

  await handleOptionalPopups(page);

  await page.locator('button[data-type="btn_header_login"]').nth(1).click();
  const emailInput = page.locator('input[type="email"]');

  // await emailInput.fill(process.env.TEST_EMAIL);
  await emailInput.pressSequentially(process.env.TEST_EMAIL, { delay: 200 });

  const passwordInput = page.locator('input[type="password"]');
  // await passwordInput.fill(process.env.TEST_PASSWORD);
  await passwordInput.pressSequentially(process.env.TEST_PASSWORD, { delay: 220 });

  const submitButton = page.locator('button[type="submit"]');

    await page.waitForTimeout(1500);
  await submitButton.click();
  
  // await page.pause();



  const tradingPlatform = page.locator("div.title").first();
  await expect(tradingPlatform).toBeVisible({ timeout: 60000 });
  await expect(page).toHaveURL(/trading\/platform/);

  await page.context().storageState({ path: authFile });
});

// setup('Api authentication', async ({request})=> {
//   const response = await request.post(
//     "https://api.backend-capital.com/proxy/v1/api/auth.authToken.generate",
//     {
//       data: {
//         identifier: process.env.TEST_EMAIL,
//         password: process.env.TEST_PASSWORD,
//         encryptedPassword: false,
//       },
//     },
//   );
//      console.log("STATUS:", response.status());

//   const body = await response.json();
//   console.log(body);

// //   const headers = response.headers();

// // console.log(headers);
// // console.log("CST:", headers["cst"]);
// // console.log("X-SECURITY-TOKEN:", headers["x-security-token"]);
  
// });











