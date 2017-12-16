describe('test login functionality for hirexp site', function() {
	
	var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

   it('To check talent pool functionality', function(){
		browser.get('https://console.hirexp.com/#/login');
		
		
		
	 element(by.model('user.username')).sendKeys('nikita.khandelwal@hirexp.com');
    element(by.model('user.password')).sendKeys('password@123');
    element(by.id('submit-form')).click();
	element(by.css('[ng-click="cancel()"]')).click();
	element(by.css('a[href*="#/talent-pool"]')).click();
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div[1]/div[2]/div/div[1]/div/div/tags-input/div/div/input')).sendKeys('8806645537');
	browser.sleep(5000);
	element(by.model('apply.source')).click();
	browser.switchTo().activeElement().sendKeys('career page', protractor.Key.ENTER, 'internal', protractor.Key.ENTER);
	element(by.model('apply.createdBy__display_name')).click();
	browser.switchTo().activeElement().sendKeys('nikita', protractor.Key.ENTER);
	element(by.model('apply.job_title')).click();
	browser.switchTo().activeElement().sendKeys('built', protractor.Key.ENTER);
    element(by.model('apply.category__title')).click();
	browser.switchTo().activeElement().sendKeys('salary', protractor.Key.ENTER, 'admin', protractor.Key.ENTER);
	element(by.model('apply.skills_data')).click();
	browser.switchTo().activeElement().sendKeys('java', protractor.Key.ENTER, 'javascript', protractor.Key.ENTER);
	element(by.model('apply.gender')).click();
	browser.switchTo().activeElement().sendKeys('male', protractor.Key.ENTER, 'female', protractor.Key.ENTER);
	//element(by.css('.btn btn-primary m-t-0 col-sm-3 text-center ng-scope')).click();
	//element(by.xpath('html/body/div[5]/div[1]/ul/li[2]')).click();
	//element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div[1]/div[2]/div/div[3]/button')).click();
	
    
    
	expect(browser.getCurrentUrl()).toContain("talent-pool");

   });
});