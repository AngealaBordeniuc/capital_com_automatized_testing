import { expect } from "allure-playwright";

export async function handleModalWindowSignUp (page, userState) {  

  console.log("USER STATE:", userState);

  const modal = page.locator('[data-type="SIGN_UP_close"]');
  // const inputEmail = page.locator('[validateemail = "username"]');

  switch (userState){
    case "unregistered":
      // await modal.waitFor({ state: "visible", timeout: 10000 });
      // const inputEmail = page.locator("#email");
      // await expect(inputEmail).toBeVisible();
    
      // await expect(inputEmail).toBeVisible();
      await expect(modal).toBeVisible({ timeout: 10000 });
      return "unregistered";      

    case "authorized":
      await expect(page).toHaveURL("/trading/platform/", {
        timeout: 10000,
      });
      return "authorized";      

      case "unauthorized":
        // await modal.waitFor({ state: "visible", timeout: 5000 });
        // const inputEmailUnauth = page.locator("#email");
        // await expect(inputEmailUnauth).toBeVisible();        
        await expect(modal).toBeVisible({ timeout: 10000 });
        
        // await expect(inputEmail).toBeVisible();

        return "unauthorized";        

      default:
        throw new Error(`Unknown user state: ${userState}`);
      
  } 
}

export async function handleModalSignUpSellBuy (page, userState) {
     console.log("USER STATE:", userState);
    
    //   const modal = page.locator('div[data-sentry-component="Modal"]');
      const inputEmail = page.locator('[validateemail = "username"]');
    
      switch (userState){
        case "unregistered":
         
          await expect(inputEmail).toBeVisible();      
          return "unregistered";      
    
        case "authorized":
          await expect(page).toHaveURL(/trading\/platform\/charting/, {
            timeout: 10000,
          });
          return "authorized";      
    
          case "unauthorized":          
            
            await expect(inputEmail).toBeVisible();
    
            return "unauthorized";        
    
          default:
            throw new Error(`Unknown user state: ${userState}`);
          
      }
    }

