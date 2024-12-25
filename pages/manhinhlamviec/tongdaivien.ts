import { Page, Locator } from '@playwright/test';

/**
 * @param page 
 * @param optionTextDuAn
 * @param optionTextChienDich 
 * @param optionTextNguoiDung
 */


export const selectDropTongDaiVien = async (
    page,
    optionTextDuAn,
    optionTextChienDich,
    optionTextNhomNguoiDung
)=>{
    // Dự án
    await page.locator("//ng-select[@placeholder='Chọn dự án']//div[@class='ng-select-container ng-has-value']").click();
    await page.locator(`//span[@class='ng-option-label ng-star-inserted'][contains(text(),'${optionTextDuAn}')]`).click();

    // chiến dịch
    await page.locator("//ng-select[@placeholder='Chọn chiến dịch']//span[@class='ng-arrow-wrapper']").click();
    await page.waitForTimeout(1000);
    const chiendich= await page.locator(`//span[contains(text(),'${optionTextChienDich}')]`);

    // Chờ phần tử có thể nhìn thấy
    await chiendich.waitFor({ state: 'visible' });
    await chiendich.click();

    await page.locator("//ng-select[@placeholder='Chọn nhóm người dùng']//div[@class='ng-select-container ng-has-value']").click();
    await page.locator(`//span[contains(text(),'${optionTextNhomNguoiDung}')]`).click();
}


