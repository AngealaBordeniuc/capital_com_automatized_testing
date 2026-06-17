// const { chromium } = require("@playwright/test");
// const path = require("path");
// const fs = require("fs");

// (async () => {
//   const userDataDir = path.join(
//     process.env.LOCALAPPDATA,
//     "Google",
//     "Chrome",
//     "User Data",
//   );

//   console.log("Chrome profile:", userDataDir);

//   if (!fs.existsSync(userDataDir)) {
//     throw new Error(`Folder not found: ${userDataDir}`);
//   }

//   const context = await chromium.launchPersistentContext(userDataDir, {
//     channel: "chrome",
//     headless: false,
//     viewport: null,
//     ignoreDefaultArgs: ["--enable-automation"],
//     args: [
//       "--disable-blink-features=AutomationControlled",
//       "--start-maximized",
//     ],
//   });

//   const page = await context.newPage();

//   await page.goto("https://capital.com/en-eu", {
//     waitUntil: "domcontentloaded",
//     timeout: 60000,
//   });

//   console.log("Capital opened");

//   console.log("");
//   console.log("Login manually to Capital.com.");
//   console.log(
//     "After you see the platform and are fully logged in, press ENTER.",
//   );
//   console.log("");

//   process.stdin.resume();

//   process.stdin.once("data", async () => {
//     if (!fs.existsSync(".auth")) {
//       fs.mkdirSync(".auth");
//     }

//     await context.storageState({
//       path: ".auth/authorized.json",
//     });

//     console.log("✓ Storage state saved to .auth/authorized.json");

//     await context.close();
//     process.exit(0);
//   });
// })();

const { chromium } = require("@playwright/test");
const fs = require("fs");

(async () => {
  const context = await chromium.launchPersistentContext("./chrome-profile", {
    channel: "chrome",
    headless: false,
    viewport: null,
    ignoreDefaultArgs: ["--enable-automation"],
    args: [
      "--disable-blink-features=AutomationControlled",
      "--start-maximized",
    ],
  });

  const page = await context.newPage();

  await page.goto("https://capital.com", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  console.log("");
  console.log("========================================");
  console.log("Login manually to Capital.com");
  console.log("After successful login press ENTER");
  console.log("========================================");
  console.log("");

  process.stdin.resume();

  process.stdin.once("data", async () => {
    if (!fs.existsSync(".auth")) {
      fs.mkdirSync(".auth");
    }

    await context.storageState({
      path: ".auth/authorized.json",
    });

    console.log("");
    console.log("✓ Storage state saved");
    console.log("✓ File: .auth/authorized.json");

    await context.close();
    process.exit(0);
  });
})();