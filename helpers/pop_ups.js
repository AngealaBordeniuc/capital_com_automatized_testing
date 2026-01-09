import { expect } from '@playwright/test'

export const handleCookiesPopUp = async (page) => {
  const closeBtn = page.locator('button[aria-label="Close"]');

  // verificăm dacă există butonul fără expect
  if ((await closeBtn.count()) > 0) {
    try {
      if (await closeBtn.isVisible({ timeout: 3000 })) {
        await closeBtn.click();
        await closeBtn.waitFor({ state: "detached", timeout: 3000 });
        console.log("Cookies pop-up closed");
      }
    } catch {
      console.warn("Cookies pop-up found but not clickable");
    }
  } else {
    console.log("No cookies pop-up displayed!");
  }
};


export const handleStayOnSitePopUp = async (page) => {
  const stayOnSiteBtn = page.getByText("Stay on this site");

  // verificăm dacă există butonul, fără expect
  if ((await stayOnSiteBtn.count()) > 0) {
    try {
      if (await stayOnSiteBtn.isVisible({ timeout: 3000 })) {
        await stayOnSiteBtn.click();
        // așteptăm să dispară
        await stayOnSiteBtn.waitFor({ state: "detached", timeout: 3000 });
        console.log('"Stay on this site" pop-up clicked');
      }
    } catch {
      console.warn('"Stay on this site" pop-up found but not visible');
    }
  } else {
    console.log('No "Stay on this site" pop-up displayed!');
  }

  // tratăm orice dialog nativ (alert / confirm) care poate apărea
  page.once("dialog", async (dialog) => {
    console.log(`Dialog detected: ${dialog.message()}`);
    await dialog.accept();
  });
};



export const handleModalWindowSignUp = async (page) => {
  const modal = page.locator('[data-sentry-component="Modal"]');

  // verificăm dacă există modalul
  if ((await modal.count()) > 0) {
    try {
      if (await modal.isVisible({ timeout: 3000 })) {
        console.log("Modal window is displayed");
        // poți face aici orice verificare suplimentară, de exemplu text
        // await expect(modal).toContainText('Sign up');
      }
    } catch {
      console.warn("Modal window found but not visible");
    }
  } else {
    console.log("Modal window is not displayed");
  }
};


export const acceptAllCookies = async (page) => {
  const acceptAllBtn = page.getByRole("button", { name: "Accept All Cookies" });

  // verificăm dacă există și e vizibil, dar NU facem expect
  if ((await acceptAllBtn.count()) > 0) {
    try {
      if (await acceptAllBtn.isVisible({ timeout: 3000 })) {
        await acceptAllBtn.click();
        console.log('"Accept All Cookies" clicked');
      }
    } catch {
      console.warn("Accept All Cookies button found but not visible");
    }
  } else {
    console.log('No "Accept All Cookies" button displayed');
  }
};

   
