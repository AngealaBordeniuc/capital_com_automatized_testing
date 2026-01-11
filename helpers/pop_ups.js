import { expect } from '@playwright/test'
import { promises as fs } from 'fs';
import path from 'path';

async function writeDiagnostics(diagDir, tag, initialUrl, screenshotFile, consoleMessages) {
  try {
    await fs.mkdir(diagDir, { recursive: true });
    const diagFile = path.join(diagDir, `diag-${Date.now()}-${tag}.txt`);
    const content = `timestamp: ${new Date().toISOString()}\ninitialUrl: ${initialUrl}\nscreenshot: ${screenshotFile || 'unavailable'}\n\nconsole:\n${consoleMessages.map(m => `[${m.type}] ${m.text}`).join('\n')}`;
    await fs.writeFile(diagFile, content);
  } catch (e) {
    // ignore any diagnostics write errors
  }
}

export const handleCookiesPopUp = async (page) => {
  if (page.isClosed()) return;

  const consoleMessages = [];
  const onConsole = (msg) => consoleMessages.push({ type: msg.type(), text: msg.text() });
  page.on('console', onConsole);

  const diagDir = path.join(process.cwd(), 'test-results', 'diagnostics');
  let initialUrl = 'unknown';
  let screenshotFile;
  try {
    initialUrl = page.url();
    screenshotFile = path.join(diagDir, `diag-${Date.now()}-cookies.png`);
    await fs.mkdir(diagDir, { recursive: true });
    await page.screenshot({ path: screenshotFile, fullPage: true });
  } catch (e) {
    // ignore screenshot/url errors
  }

  try {
    const closeBtn = page.locator('button[aria-label="Close"]');

    await closeBtn.waitFor({
      state: "visible",
      timeout: 3000,
    });

    await closeBtn.click();
    await closeBtn.waitFor({ state: "detached", timeout: 1000 });
  } catch {
    // no cookies popup → OK
  }

  page.off('console', onConsole);

  if (page.isClosed()) {
    await writeDiagnostics(diagDir, 'cookies', initialUrl, screenshotFile, consoleMessages);
    throw new Error('Page was closed during cookies popup handling');
  }
};

export const handleStayOnSitePopUp = async (page) => {
  if (page.isClosed()) return;

  const consoleMessages = [];
  const onConsole = (msg) => consoleMessages.push({ type: msg.type(), text: msg.text() });
  page.on('console', onConsole);

  const diagDir = path.join(process.cwd(), 'test-results', 'diagnostics');
  let initialUrl = 'unknown';
  let screenshotFile;
  try {
    initialUrl = page.url();
    screenshotFile = path.join(diagDir, `diag-${Date.now()}-stayonsite.png`);
    await fs.mkdir(diagDir, { recursive: true });
    await page.screenshot({ path: screenshotFile, fullPage: true });
  } catch (e) {
    // ignore
  }

  try {
    const stayBtn = page.getByText("Stay on this site");

    await stayBtn.waitFor({
      state: "visible",
      timeout: 3000,
    });

    await stayBtn.click();
    await stayBtn.waitFor({ state: "detached", timeout: 3000 });
  } catch {
    // pop-up nu există → OK
  }

  page.off('console', onConsole);

  if (page.isClosed()) {
    await writeDiagnostics(diagDir, 'stayonsite', initialUrl, screenshotFile, consoleMessages);
    throw new Error('Page was closed during stay-on-site popup handling');
  }
};

export const handleModalWindowSignUp = async (page) => {
  if (page.isClosed()) return;

  const consoleMessages = [];
  const onConsole = (msg) => consoleMessages.push({ type: msg.type(), text: msg.text() });
  page.on('console', onConsole);

  const diagDir = path.join(process.cwd(), 'test-results', 'diagnostics');
  let initialUrl = 'unknown';
  let screenshotFile;
  try {
    initialUrl = page.url();
    screenshotFile = path.join(diagDir, `diag-${Date.now()}-modal.png`);
    await fs.mkdir(diagDir, { recursive: true });
    await page.screenshot({ path: screenshotFile, fullPage: true });
  } catch (e) {
    // ignore
  }

  try {
    const modal = page.locator('[data-sentry-component="Modal"]');

    await modal.waitFor({
      state: "visible",
      timeout: 3000,
    });
    
    // await expect(modal).toContainText('Sign up');
  } catch {
    // no modal → OK
  }

  page.off('console', onConsole);

  if (page.isClosed()) {
    await writeDiagnostics(diagDir, 'modal', initialUrl, screenshotFile, consoleMessages);
    throw new Error('Page was closed during modal-signup popup handling');
  }
};

export const acceptAllCookies = async (page) => {
  if (page.isClosed()) return;

  const consoleMessages = [];
  const onConsole = (msg) => consoleMessages.push({ type: msg.type(), text: msg.text() });
  page.on('console', onConsole);

  const diagDir = path.join(process.cwd(), 'test-results', 'diagnostics');
  let initialUrl = 'unknown';
  let screenshotFile;
  try {
    initialUrl = page.url();
    screenshotFile = path.join(diagDir, `diag-${Date.now()}-acceptAll.png`);
    await fs.mkdir(diagDir, { recursive: true });
    await page.screenshot({ path: screenshotFile, fullPage: true });
  } catch (e) {
    // ignore
  }

  try {
    const acceptAllBtn = page.getByRole("button", {
      name: /accept all cookies/i,
    });

    await acceptAllBtn.waitFor({
      state: "visible",
      timeout: 3000,
    });

    await acceptAllBtn.click();

    await acceptAllBtn.waitFor({
      state: "detached",
      timeout: 3000,
    });
  } catch {
    // no accept-all → OK
  }

  page.off('console', onConsole);

  if (page.isClosed()) {
    await writeDiagnostics(diagDir, 'acceptAll', initialUrl, screenshotFile, consoleMessages);
    throw new Error('Page was closed after acceptAllCookies');
  }
};



