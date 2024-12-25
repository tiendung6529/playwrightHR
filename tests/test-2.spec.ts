import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://hrweb-uat.viec3mien.vn/account/login');
  await page.getByPlaceholder('Tài khoản *').click();
  await page.getByPlaceholder('Tài khoản *').fill('00000002424');
  await page.getByPlaceholder('Mật khẩu *').click();
  await page.getByPlaceholder('Mật khẩu *').fill('Abc@4321');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByRole('menuitem', { name: ' Màn hình làm việc ' }).click();
  await page.getByRole('menuitem', { name: ' Direct Sales' }).click();
  await page.getByRole('button', { name: ' Thêm mới' }).click();
  await page.locator('div:nth-child(31) > div > .ng-select > .ng-select-container > .ng-arrow-wrapper').first().click();
  await page.getByRole('option', { name: 'Bộ phận nghiệp vụ xử lý' }).click();
  await page.locator('div').filter({ hasText: /^Loại nguồn hồ sơ \*Chọn loại nguồn$/ }).locator('span').nth(1).click();
  await page.getByRole('option', { name: 'AFFILIATE' }).click();
  await page.getByRole('dialog').locator('div').filter({ hasText: /^Chọn loại hồ sơ$/ }).first().click();
  await page.getByRole('option', { name: '3T' }).click();
  await page.locator('div').filter({ hasText: /^Chọn công ty$/ }).first().click();
  await page.getByRole('option', { name: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔ' }).click();
  await page.locator('div').filter({ hasText: /^Chọn vị trí ứng tuyển$/ }).first().click();
  await page.getByRole('option', { name: 'Công nhân Vip' }).click();
});