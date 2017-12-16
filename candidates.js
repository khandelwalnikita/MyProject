describe('test login functionality for hirexp site', function() {
	var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

   it('candidate should be edited', function(){
		browser.get('https://console.hirexp.com/#/login');
		
		
	 element(by.model('user.username')).sendKeys('nikita.khandelwal@hirexp.com');
    element(by.model('user.password')).sendKeys('password@123');
    element(by.id('submit-form')).click();
	element(by.css('[ng-click="cancel()"]')).click();
	 element(by.css('a[href*="#/candidates"]')).click();
	 element(by.id('btn-append-to-to-body')).click();
	 browser.waitForAngular();
	 
	 //element(by.css('.btn btn-white btn-action dropdown-toggle')).click();
	 element(by.xpath('html/body/ul/li[1]/a')).click();
	 //element(by.css('[ng-click="actions.edit(person)"]')).click();
	 element(by.model('info.person.phone_number')).clear().sendKeys('+918806645537');
	 element(by.model('info.person.gender')).$('[value="string:Female"]').click();
	 browser.sleep(1000);
	 
	 element(by.css('[ng-click="saveCandidate(info.person)"]')).click();
	 
	 expect(browser.getCurrentUrl()).toContain("candidates"); 
   });
	
	

   it('candidate should be SCHEDULED', function(){
	   
	   element(by.css('a[href*="#/candidates"]')).click();
		
		element(by.css('[ng-click="openPerson(person.id);"]')).click();
	 
	 element(by.xpath('html/body/div[4]/div[2]/floating-chat/div/div[1]/button')).click();
	 element(by.css('[ng-click="actions.schedule();"]')).click();
	 browser.waitForAngular();
		 element(by.model('date.startDate')).click();
		 
		 element(by.cssContainingText('[ng-click="setDatepickerDay(item)"]', '4')).click();
		 
		 browser.waitForAngular();
		 
         element(by.model('date.endDate')).clear().sendKeys('12/12/2017');
		 
		element(by.model('data.description')).sendKeys('description');
		element(by.css('[ng-click="ok()"]')).click();
	 expect(browser.getCurrentUrl()).toContain("candidates"); 

   });
    });