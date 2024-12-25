import { test, expect } from '@playwright/test';
import { login } from '../../pages/login/login';
import { doianhdaidienuser } from '../../pages/actions/doihinhdaidien';
test('đổi ảnh đại diện user', async ({ page }) => { 
    await login(page,'00000002424','Abc@4321')
    await doianhdaidienuser(page);

});