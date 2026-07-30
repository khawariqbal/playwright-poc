const { chromium } = require('@playwright/test');
const path = require('node:path');
const fs = require('node:fs');
const configData = require('../utils/config.json');

module.exports = async (config) => {


  const baseURL = config.use?.baseURL || 'https://automationexercise.com';
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(baseURL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.locator("//a[@href='/login']").click();
  await page.locator("[data-qa='login-email']").fill(configData.username);
  await page.locator("[data-qa='login-password']").fill(configData.password);
  await page.locator("[data-qa='login-button']").click();
  await page.locator("text=Logged in as").waitFor({ state: 'visible', timeout: 15000 });

  await context.storageState({ path: "user.json"});
  await browser.close();
};
