import { expect } from '@playwright/test'

export const handleCookiesPopUp = async (page) => {
    const closeBtn = page.locator('button[aria-label="Close"]')
    try {
        if (await closeBtn.isVisible({timeout: 5000})){
            await closeBtn.click({timeout: 5000})
            await closeBtn.waitFor({state: 'detached', timeout: 5000})
        }
    } catch (e){
        console.warn('No cookies pop-up displayed!')
    }
}

export const handleStayOnSitePopUp =async(page) => {
  const stayOnSiteBtn = page.getByText("Stay on this site");

  try{
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept(); 
  });
  if (await stayOnSiteBtn.isVisible({ timeout: 5000 })) {
    await stayOnSiteBtn.click();
    await stayOnSiteBtn.waitFor({ state: "detached", timeout: 5000 });
  }
 } catch(e){
    console.warn('No "Stay on this site" pop-up displayed!')
  }
}



export const handleModalWindowSignUp = async(page) => {
    const modal = page.locator('[data-sentry-component="Modal"]');
     if (await modal.isVisible({ timeout: 8000 }).catch(() => false)) {
       await expect(modal).toBeVisible()
     } else {
      console.warn("Modal window is not displayed")
     }           
}
   
