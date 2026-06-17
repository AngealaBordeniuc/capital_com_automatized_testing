export async function eligibilityCheck(page){
    if (page.isClosed()) return;

    const eligibilityBtn = page.locator('[data-type="eligibility_block_btn1"]');

    try {
      await eligibilityBtn.waitFor({ state: "visible", timeout: 3000 });
      await eligibilityBtn.click();
    } catch {
      return;
    }
}