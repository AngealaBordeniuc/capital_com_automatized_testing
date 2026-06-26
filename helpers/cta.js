import {expect} from "@playwright/test";
export async function clickCta(locator){
      await expect(locator).toBeAttached({ timeout: 5000 });
      await locator.scrollIntoViewIfNeeded();
      await expect(locator).toBeVisible({ timeout: 5000 });
      await expect(locator).toBeEnabled();
      await locator.click();
    
}