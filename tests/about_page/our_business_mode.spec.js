import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { OurBusinessModelPage} from "../../pages/aboutSection/OurBusinessModelPage";
import { handleOptionalPopups } from "../../helpers/pop_ups";
import { licenses } from "../../test-data/licenses";

const languages = ["EN", "FR", "DE", "AR", "RU", "ZHT", "IT", "NL", "PL"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;   

    test(`${license.name} ${lang} – Our Business Model: Open an Account`, async ({ page }, testInfo) => {
      const userState = testInfo.project.name;
      const path = license.paths[lang];

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const aboutMenu = new AboutSectionMenu(page);
      const ourBusinessModelPage = new OurBusinessModelPage(page);

      await aboutMenu.openOurBusinessModel();

      const expectedPath = `${path}/about-us/how-capital-makes-money`;

      await expect(page).toHaveURL(expectedPath);
      await ourBusinessModelPage.clickOpenAnAccountOurBusinessModel(userState);
    });
    
   
    test(`${license.name} ${lang} – Our Business Model: Three Steps`, async ({
      page,
    }, testInfo) => {
      const userState = testInfo.project.name;
      const path = license.paths[lang];

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const aboutMenu = new AboutSectionMenu(page);
      const ourBusinessModelPage = new OurBusinessModelPage(page);

      await aboutMenu.openOurBusinessModel();

      const expectedPath = `${path}/about-us/how-capital-makes-money`;

      await expect(page).toHaveURL(expectedPath);
      await ourBusinessModelPage.clickThreeStepsOurBusinessModel(userState);
    });

  });
});
