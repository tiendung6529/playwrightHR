import { test, expect } from '@playwright/test';

const login = async (page, username, password) => {
    await page.goto('https://hrweb-uat.viec3mien.vn/account/login');
    await page.fill("xpath=//input[@placeholder='Tài khoản *']", username);
    await page.fill("xpath=//input[@placeholder='Mật khẩu *']", password);
    await page.click("xpath=//button[contains(text(),'Đăng nhập')]");
  };
  


test('Quan li lead trung', async ({ page }) => {
    await login(page,'00000002424','Abc@4321')
    const menuItem = page.locator('text=Quản trị hồ sơ');
    await menuItem.click();
    const menuItem1 = page.locator('text=Hồ sơ trùng');
    await expect(menuItem1).toBeVisible();
    console.log(menuItem1);
    await menuItem1.click();

  });
