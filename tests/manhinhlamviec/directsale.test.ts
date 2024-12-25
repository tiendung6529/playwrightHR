import { test, expect } from '@playwright/test';
import { login } from '../../pages/login/login';
import { directsalepages } from '../../pages/manhinhlamviec/directsalepages';

test('Tạo mới tay directsale case 01', async ({ page }) => {
    await login(page,'long99','Abc@4321')


// Click vào menu Direct Sales
await page.locator('text=Màn hình làm việc').click({waitForTimeout:1000});
await page.locator("//span[@class='title'][normalize-space()='Direct Sales']").click({waitForTimeout:1000});
await page.waitForTimeout(4000);

    const directsale = new directsalepages(page);
    await directsale.clickThemMoi();

    await directsale.nhapThongTinUngVien('Nguyen Van A','09876543211','0987654321','duyng@gmail.com','123456789');
    await page.waitForTimeout(2000);
    await directsale.ThongTinXuLyHoSo('Bộ phận nghiệp vụ xử lý','AFFILIATE','Tên nguồn AFFILIATE','3T','CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN 3T','Công Nhân Vip');

    await directsale.clickButtonLuu();

});

test('Tạo mới tay directsale case 02 K8s', async ({ page }) => {
    await login(page,'long99','Abc@4321')


// Click vào menu Direct Sales
await page.locator('text=Màn hình làm việc').click({waitForTimeout:1000});
await page.locator("//span[@class='title'][normalize-space()='Direct Sales']").click({waitForTimeout:1000});
await page.waitForTimeout(4000);

    const directsale = new directsalepages(page);
    await directsale.clickThemMoi();

    await directsale.nhapThongTinUngVien('Nguyen Van A','9876543212','0987654321','duyng@gmail.com','123456789');
    await page.waitForTimeout(2000);
    await directsale.ThongTinXuLyHoSoK8S('Bộ phận nghiệp vụ xử lý','Tên nguồn Vector','3T','CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN 3T','test vn');

    await directsale.clickButtonLuu();

});