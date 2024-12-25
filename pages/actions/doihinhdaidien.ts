import { Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export const doianhdaidienuser = async (page: Page) => {
    await page.locator("//img[@class='header-profile-picture m--img-rounded m--marginless m--img-centered ng-star-inserted']").click();
    await page.locator("//span[@id='UserProfileChangePictureLink']").click();
    
    const filePath = path.resolve('D:/playwright/assets/jack.jpg');

    // Kiểm tra tệp có tồn tại không
    if (!fs.existsSync(filePath)) {
        console.error("Không tìm thấy tệp ảnh tại đường dẫn: ", filePath);
    } else {
        console.log("Tệp ảnh đã sẵn sàng: ", filePath);
    
        // Lấy phần tử input để tải ảnh lên
        const input = page.locator("//div[@class='form-group']//input[@type='file']");
    
        // Đợi phần tử input xuất hiện
        await page.waitForSelector("//div[@class='form-group']//input[@type='file']", { state: 'visible' });
    
        // Kiểm tra phần tử có thể nhìn thấy và có thể tương tác không
        if (await input.isVisible()) {
            console.log("Phần tử input đã sẵn sàng.");
    
            // Thực hiện thao tác tải ảnh lên
            try {
                // Chọn tệp ảnh và tải lên
                await input.setInputFiles(filePath);
                console.log("Tệp ảnh đã được chọn thành công.");
    
                // Sau khi chọn tệp, tiếp tục các thao tác (ví dụ nhấn nút Submit hoặc Confirm)
                await page.locator("//body//app-root//changeprofilepicturemodal//button[2]").click();
                console.log("Ảnh đã được tải lên thành công.");
            } catch (error) {
                console.error("Lỗi khi tải ảnh lên: ", error);
            }
        } else {
            console.error("Không tìm thấy phần tử input để tải ảnh.");
        }

    await page.waitForTimeout(1000);
}
};

