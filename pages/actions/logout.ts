import { Page } from '@playwright/test';


export const logout = async (page: Page) => {
    await page.locator("//img[@class='header-profile-picture m--img-rounded m--marginless m--img-centered ng-star-inserted']").click();

    const buttonlogout = page.locator("//a[contains(text(),'Đăng xuất')]");
    if (await buttonlogout.isVisible()) {
        await buttonlogout.click();
        console.log("Đăng xuất thành công");
    }else {
    console.error("Không thể click vào phần tử");
    }
await page.waitForTimeout(1000);


};