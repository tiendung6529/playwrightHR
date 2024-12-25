import { test, expect } from '@playwright/test';
import { login } from '../../pages/login/login';
import { hosotrung } from '../../pages/quantrihoso/hosotrung';


test('select list hồ sơ trùng', async ({ page }) => {  // Sửa lại dòng này
    await login(page, '00000002424', 'Abc@4321');
    
    // Click vào menu Quản trị hồ sơ
    await page.locator('text=Quản trị hồ sơ').click({waitForTimeout:1000});
    await page.locator('text=Hồ sơ trùng').click();

    try {
        await page.locator('span').filter({ hasText: 'Hiển thị bộ lọc nâng cao' }).locator('i').click();
    } catch (error) {
        console.error("Không thể click vào phần tử:", error);
    }
        // Lọc và chọn hồ sơ
    const hosoTrung = new hosotrung(page);
    await hosoTrung.selectHosotrung('Dự Án Test 3T','Chiến dịch Test 3T');
});


