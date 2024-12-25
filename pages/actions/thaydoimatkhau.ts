import { Page } from '@playwright/test';
export class thaydoimatkhau {
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }

 /**
     
     * @param passHienTai -
     * @param passMoi -
     * @param passXacNhanMoi -

     */
    async thaydoimatkhaudung(passHienTai: string, passMoi: string, passXacNhanMoi: string) {
        await this.page.locator("//img[@class='header-profile-picture m--img-rounded m--marginless m--img-centered ng-star-inserted']").click();
         await this.page.locator("//span[@class='m-nav__link-text'][contains(text(),'Thay đổi mật khẩu')]").click();
        console.log("Màn hình Thay đổi mật khẩu");

        await this.page.fill("//input[@placeholder='Nhập mật khẩu hiện tại']", passHienTai, {timeout: 1000});

        await this.page.fill("//input[@placeholder='Nhập mật khẩu mới']", passMoi,{timeout: 1000});

        await this.page.fill("//input[@placeholder='Nhập lại mật khẩu mới']", passXacNhanMoi,{timeout: 1000});


    }

    async clickButtonLuu() {
        const button = this.page.getByRole('button', { name: ' Thay đổi' });
        if(await button.isVisible()){
            await button.click();
            console.log("Click button Lưu");
        }else{
            console.log("Không click được button Lưu");
        }
    }

    async validateMatKhauKhongDung() {
        try {
            // Tìm phần tử swal-title và chờ nó hiển thị
            const locator = this.page.locator("//div[@class='swal-title']");
            await locator.waitFor({ state: 'visible', timeout: 5000 }); // Chờ phần tử hiển thị tối đa 5 giây
    
            // Đọc nội dung văn bản
            const text = await locator.textContent();
            console.log("Nội dung thông báo:", text);
    
            // Kiểm tra nếu thông báo liên quan đến mật khẩu
            if (text && text.trim() === "Mật khẩu hiện tại không đúng") {
                console.log("Mật khẩu hiện tại đang sai");
            } else {
                console.log("Thông báo khác:", text);
            }
    
            return text;
        } catch (error) {
            console.error("Không đọc được thông báo:", error);
            return null;
        }
    }

};