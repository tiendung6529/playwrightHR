import { test, expect } from '@playwright/test';
import { login } from '../../pages/login/login';

import { thaydoimatkhau } from '../../pages/actions/thaydoimatkhau';

test('Thay đổi mật khẩu case 01', async ({ page }) => {
   
    await login(page,'00000002424','Abc@4321')
    const doipass = new thaydoimatkhau(page);
    await doipass.thaydoimatkhaudung('fgretret','564546@Dgfregg','564546@Dgfregg');
    // await doipass.thaydoimatkhaudung('Abc@4321','Abc@56789','Abc@56789');
    await page.waitForTimeout(2000);
    await doipass.clickButtonLuu();
    await page.waitForTimeout(2000);

    await doipass.validateMatKhauKhongDung();


});

test('Thay đổi mật khẩu case 02', async ({ page }) => {
   
    await login(page,'00000002424','Abc@4321')
    const doipass = new thaydoimatkhau(page);
    await doipass.thaydoimatkhaudung('Abc@4321','564546@Dgfregg','564546@Dgfregg');
    // await doipass.thaydoimatkhaudung('Abc@4321','Abc@56789','Abc@56789');
    await page.waitForTimeout(2000);
    await doipass.clickButtonLuu();
    await page.waitForTimeout(2000);

});