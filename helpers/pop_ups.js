import { expect } from '@playwright/test'

export const handleCookiesPopUp = async (page) => {
    const closeBtn = page.locator('button[aria-label="Close"]')
    try {
        if (await closeBtn.isVisible({timeout: 5000})){
            await closeBtn.click()
        }
    } catch (e){
        console.log('No cookies pop-up displayed!')
    }
}

export const handleStayOnSitePopUp =async(page) => {
  const stayOnSiteBtn = page.getByText("Stay on this site");
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept(); 
  });
  if (await stayOnSiteBtn.isVisible({ timeout: 5000 })) {
    await stayOnSiteBtn.click();
  }

}

export const handleModalWindowSignUp = async(page) => {
    const modal = page.locator('[data-sentry-component="Modal"]');
     if (await modal.isVisible({ timeout: 3000 }).catch(() => false)) {
       await expect(modal).toContainText("Sign up");
     }
                //  await expect(modal).toBeVisible({timeout: 10000});
                //  await expect(modal).toContainText("Sign up");

}
   
