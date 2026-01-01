export class InvestorRelationsPage {
  constructor(page) {
    this.page = page;
  }
  async clickCreateYourAccountButtonFromReady() {
    await this.page.getByText("Ready to join a leading broker?").scrollIntoViewIfNeeded();
    await this.page.locator('[data-type="banner_with_steps"]').click();
  }
}