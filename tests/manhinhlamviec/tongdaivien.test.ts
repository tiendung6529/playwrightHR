
import { test, expect } from '@playwright/test';
import { login } from '../../pages/login/login';
import { selectDropTongDaiVien } from '../../pages/manhinhlamviec/tongdaivien';
import { logout } from '../../pages/actions/logout';

test('Tổng đài viên', async ({ page }) => {
  // Sử dụng hàm login từ utils
  await login(page,'00000002424','Abc@4321')

//   await expect(page.locator('text=Trang chủ')).toBeVisible();
    const menuItem = page.locator('text=Màn hình làm việc');
    await menuItem.click();
    await page.waitForTimeout(1000);

    const menuItem1 = page.locator('text=Tổng đài viên');
    await menuItem1.first().click();
    await page.waitForTimeout(4000);
// Click vào ng-select
    await selectDropTongDaiVien(page,'Công ty Cổ phần Công nghệ thông tin 3T','3T_Tuyển dụng lao động có chuyên môn','Nhóm TĐV 3T T');
    await logout(page);
});
