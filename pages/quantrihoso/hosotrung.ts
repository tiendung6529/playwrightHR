export class hosotrung {
    private page: any;
  
    constructor(page: any) {
      this.page = page;
    }
  
    /**
     * Chọn dự án và chiến dịch từ giao diện.
     * @param optionTextDuAnTrung - Tên của dự án cần chọn.
     * @param optionTextChienDich - Tên của chiến dịch cần chọn.
     */
    async selectHosotrung(optionTextDuAnTrung: string, optionTextChienDich: string) {
      // Chọn Dự án
      await this.page.locator('.ng-arrow-wrapper').first().click();
      await this.page.locator(`//span[contains(text(),'${optionTextDuAnTrung}')]`).click();
      await this.page.waitForTimeout(2000);
  
      // Chọn Chiến dịch
      await this.page
        .locator('div:nth-child(2) > .form-group > .ng-select > .ng-select-container > .ng-arrow-wrapper')
        .first()
        .click();
      await this.page
        .locator(`//span[@class='ng-option-label ng-star-inserted'][contains(text(),'${optionTextChienDich}')]`)
        .click();
    }
  }
  