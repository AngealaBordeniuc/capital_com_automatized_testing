import { test, expect } from "@playwright/test";
import { LogIn } from "../../pages/header/LogIn";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "IT", "NL", "PL"];
// const languages = ["RO", "DE", "IT", "NL"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Log In, "Log in"`, async ({ page }) => {
      const path = license.paths[lang];     

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });     

      await handleOptionalPopups(page)

      const logIn = new LogIn(page)
      await logIn.clickLogInButton()

      await logIn.submitLogInForm("angelabordeniuc5@gmail.com", "Test2026$")
      await expect(page).toHaveURL("/trading/platform/")          
      
    });

})
})