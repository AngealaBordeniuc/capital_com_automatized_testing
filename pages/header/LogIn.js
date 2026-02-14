import { expect} from "@playwright/test"
import { handleModalWindowSignUp } from "../../helpers/pop_ups";
export class LogIn {
  constructor(page) {
    this.page = page;
  }

  async clickLogInButton() {
    const logInButton = this.page
      .locator('button[data-type="btn_header_login"]')
      .nth(1);
    await expect(logInButton).toBeVisible({ timeout: 10000 });
    await logInButton.click();
    await handleModalWindowSignUp(this.page);
  }

  async submitLogInForm(email, password) {
    const emailInput = this.page.locator('input[type="email"]');
    await emailInput.fill(email);
    const passwordInput = this.page.locator('input[type="password"]');
    await passwordInput.fill(password);
    const submitButton = this.page.locator('button[type="submit"]');
    await submitButton.click();
  }

  async returnOnMainPage() {
    const logo = this.page.locator("a.logo--capital");
    await logo.click();

    // SPA update: așteptăm vizibilitatea unui element care confirmă revenirea pe main page
    const mainHeader = this.page.locator('header[id="header"]'); // exemplu
    await mainHeader.waitFor({ state: "visible", timeout: 2000 });
    await expect(mainHeader).toBeVisible()
  }
}