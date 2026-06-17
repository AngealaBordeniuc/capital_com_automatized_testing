import {handleModalWindowSignUp} from "./modal_SignUp";
import { expect } from "allure-playwright";

export async function threeStepsToStartTrading(page, userState){
     const bannerBtnReady = page.locator('[data-type="banner_with_steps"]');     
        await bannerBtnReady.scrollIntoViewIfNeeded();   
        await expect(bannerBtnReady).toBeVisible({timeout: 1000})
        await bannerBtnReady.click();
        await handleModalWindowSignUp(page, userState);
}