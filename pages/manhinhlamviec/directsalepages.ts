import { Page, Locator } from '@playwright/test';
export class directsalepages {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    /**
     * @param tenUngVien:string 
     * @param soDienThoai1:number
     * @param soDienThoai2:number 
     * @param email:string
     * @param diaChiThuongTru:string
     * @param diaChiTamchu:string
     * @param CCCD:string
     * 
     * @param phuongThucXuLyInput:string
     * @param loaiNguonHosoInput:string
     * @param TenNguonHosoInput:string
     * @param loaiHosoInput:string
     * @param congTyUngTuyenInput:string
     * @param vitriUngTuyenInput:string
     *  
     * 
     * 
     * 
     * 
     * 
     * 
     */
    // element form (tao mới)
    private tenUngVienInput = "//div[@class='form-group col-md-6 ng-star-inserted']//input[@placeholder='Nhập tên ứng viên']";
    private soDienThoai1Input = "//input[@formcontrolname='fc_Phone']";
    private soDienThoai2Input = "//div[@class='col-6 ng-star-inserted']//input[@placeholder='Nhập số điện thoại']";
    private emailInput = "//div[@class='form-group col-md-6 ng-star-inserted']//input[@placeholder='Nhập email']";
    private get cccdInput() {
        return this.page.getByRole('textbox', { name: 'Nhập số CMND/CCCD' });
    }


    private phuongThucXuLy = "//ng-select[@placeholder='Chọn phương thức xử lý']//div[@class='ng-input']";

    // private tenNguonHoSo = "//input[@class='form-control ng-touched ng-pristine ng-valid ng-star-inserted']";
    get tenNguonHoSo() {
        return this.page.getByRole('textbox', { name: 'Nhập nguồn' })
    }
    
    get NguonHoSo() {
        return this.page
            .locator('div')
            .filter({ hasText: /^Loại nguồn hồ sơ \*Chọn loại nguồn$/ })
            .locator('span')
            .nth(1);
    }


    get loaiHoSo() {
        return this.page.
            getByRole('dialog').locator('div').filter({ hasText: /^Chọn loại hồ sơ$/ }).first();

    }

    get congTyUngTuyen() {
        return this.page
            .locator('div').filter({ hasText: /^Chọn công ty$/ }).first();

    }

    get vitriUngTuyen() {
        return this.page
            .locator('div').filter({ hasText: /^Chọn vị trí ứng tuyển$/ }).first();
    }

    get buttonLuuTaoMoi() {
        return this.page.getByRole('button', { name: ' Lưu' });
    }

    private buttonHuyformTaoMoi = "//form[@class='ng-valid ng-touched ng-dirty']//button[@type='button'][contains(text(),'Hủy')]";


    async clickButtonLuu() {
        // Kiểm tra nếu nút lưu có thể nhìn thấy và có thể click
        if (await this.buttonLuuTaoMoi.isVisible()) {
            if (await this.buttonLuuTaoMoi.isEnabled()) {
                await this.buttonLuuTaoMoi.click(); // Thực hiện click
                console.log("Đã click button lưu");
    
                // Chờ một chút (ví dụ 2 giây) để hệ thống phản hồi
                await this.page.waitForTimeout(2000);
                const alertMessage = await this.page.locator('.swal-title').textContent();

                if (alertMessage && alertMessage.includes('Success.')) {
                    console.log("Tạo hồ sơ mới thành công.");
                } else {
                    console.log("Thêm thất bại -----Thông báo : " + alertMessage);
                }
                
                
    
            } else {
                console.log("Button lưu bị vô hiệu hóa");
            }
        } else {
            console.log("Không tìm thấy button lưu");
        }
    }
    


    async clickThemMoi() {
        const button = this.page.locator("//body/app-root[1]/ng-component[1]/div[1]/div[1]/div[2]/ng-component[1]/div[1]/div[1]/div[1]/div[2]/button[3]");
        const tieudemanhinhtaomoi = this.page.locator("//span[@class='ng-star-inserted']");
        if (await button.isVisible()) {
            await button.click({ timeout: 2000 });
            console.log("Đã click button thêm mới");
            if (await tieudemanhinhtaomoi.isVisible()) {
                console.log("Đã mở form tạo mới");
            } 
        } else {
            console.log("Không tìm thấy button thêm mới");
        }

    }

    async nhapThongTinUngVien(tenUngVien: string, soDienThoai1: string, soDienThoai2: string, email: string, CCCD: string) {
        // Tên ứng viên
        await this.page.fill(this.tenUngVienInput, tenUngVien);

        // Số điện thoại 1
        await this.page.fill(this.soDienThoai1Input, soDienThoai1);

        // Số điện thoại 2
        await this.page.fill(this.soDienThoai2Input, soDienThoai2);

        // Email
        await this.page.fill(this.emailInput, email);

        // CCCD
        await this.cccdInput.fill(CCCD);

        console.log("Nhập thông tin ứng viên thành công");
    }

    async ThongTinXuLyHoSo(phuongThucXuLyInput,
        loaiNguonHosoInput,
        TenNguonHosoInput,loaiHosoInput,
        congTyUngTuyenInput,
        vitriUngTuyenInput) {
        // phương thức,loại nguồm,tên
        await this.page.locator(this.phuongThucXuLy).click();
        await this.page.locator(`//span[@class='ng-option-label ng-star-inserted'][contains(text(),'${phuongThucXuLyInput}')]`).click();

        await this.NguonHoSo.click();
        await this.page.getByRole('option', { name: loaiNguonHosoInput }).click();

        await this.tenNguonHoSo.fill(TenNguonHosoInput);

        // loại hồ sơ, công ty ứng tuyển, vị trí ứng tuyển
        await this.loaiHoSo.click();
        await this.page.getByRole('option', { name: loaiHosoInput }).click();

        await this.congTyUngTuyen.click();
        await this.page.getByRole('option', { name: congTyUngTuyenInput }).click();

        await this.vitriUngTuyen.click();
        await this.page.getByRole('option', { name: vitriUngTuyenInput }).click();


    }


    async ThongTinXuLyHoSoK8S(phuongThucXuLyInput,
        TenNguonHosoInput,loaiHosoInput,
        congTyUngTuyenInput,
        vitriUngTuyenInput) {
        // phương thức,loại nguồm,tên
        await this.page.locator(this.phuongThucXuLy).click();
        await this.page.locator(`//span[@class='ng-option-label ng-star-inserted'][contains(text(),'${phuongThucXuLyInput}')]`).click();

   
        await this.tenNguonHoSo.fill(TenNguonHosoInput);

        // loại hồ sơ, công ty ứng tuyển, vị trí ứng tuyển
        await this.loaiHoSo.click();
        await this.page.getByRole('option', { name: loaiHosoInput }).click();

        await this.congTyUngTuyen.click();
        await this.page.getByRole('option', { name: congTyUngTuyenInput }).click();

        await this.vitriUngTuyen.click();
        await this.page.getByRole('option', { name: vitriUngTuyenInput }).click();


    }
}