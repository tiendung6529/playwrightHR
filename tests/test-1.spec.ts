import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...await page.goto('https://hrweb-uat.viec3mien.vn/account/login');
  await page.getByPlaceholder('Tài khoản *').fill('00000002424');
  await page.getByPlaceholder('Mật khẩu *').click();
  await page.getByPlaceholder('Mật khẩu *').fill('Abc@4321');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByRole('menuitem', { name: '00000002424' }).click();
  await page.getByRole('menuitem', { name: '00000002424' }).click();
  await page.getByRole('menuitem', { name: '00000002424' }).click();
  await page.getByRole('menuitem', { name: ' Đổi hình đại diện' }).click();
  await page.getByRole('dialog').getByRole('textbox').click();
  await page.getByRole('dialog').getByRole('textbox').setInputFiles('sontung.jpg');
  await page.locator('.jcrop-selection > div:nth-child(13)').click();
  await page.locator('.jcrop-selection > div:nth-child(13)').click();
  await page.getByRole('button', { name: ' Lưu' }).click();
});