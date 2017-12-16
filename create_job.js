describe('test create_job functionality for hirexp site', function() {
var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

  it('job should be created', function() {
    browser.get('https://console.hirexp.com');

    element(by.model('user.username')).sendKeys('nikita.khandelwal@hirexp.com');
    element(by.model('user.password')).sendKeys('password@123');

    // To check if the button is still enabled or not
    var submit = element(by.id('submit-form'));
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(submit), 5000);
    // expect(submit.isEnabled()).toBe(true);

    // Wait until enabled, then click the login button.
    submit.click();

	  element(by.css('[ng-click="cancel()"]')).click();

	  element(by.css('a[href*="#/jobs/create"]')).click();

  	element(by.model('job.title')).sendKeys('accountant');
  	element(by.model('job.department')).$('[value="string:135"]').click();
  	element(by.id('google_places_ac')).sendKeys('gurugram').click();
	browser.sleep(1000);
    browser.wait(function(){
  		var allLocationElm = element.all(by.css('.pac-container.pac-logo'));
  		allLocationElm.last().click();
      return true;
  	});
 element(by.model('job.deadline')).click();
 element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div[2]/div/div[1]/form/div[1]/div[4]/div/datepicker/div/div[4]/a[20]')).click();
  	//element(by.model('job.deadline')).sendKeys('12/05/2017');
  	element(by.model('job.role')).sendKeys('devloper');

    // As the skills field is not an input element, we first have to select/focus it and then type values
  	element(by.model('job.skills')).click();
    // Comma here is used to enter the values / You can use ENTER also
    browser.switchTo().activeElement().sendKeys('Java', ',', 'Python');


    var selectButton = element(by.model('job.education'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));

    // click to open select
    selectButton.click();
    // type some text
    selectInput.sendKeys('prof');
    // select first element
    element.all(by.css('.ui-select-choices-row-inner span')).first().click();

  	element(by.model('job.vacancies')).sendKeys('3');
  	element(by.model('job.toggleManager')).click();


    element(by.model('job.desc')).sendKeys('Enter your job description here');
	
	  //element(by.css('[ng-click="save('draft')"]')).click();
	  element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div[2]/div/div[2]/div/button[2]')).click();
	  element(by.css('.cancel')).click();
	 //element(by.xpath('html/body/div[8]/div[7]/button')).click();
	 expect(browser.getCurrentUrl()).toContain("jobs");
	});

	// it('open manage tab', function() {
  //
	//   element(by.css('a[href*="#/manage"]')).click();
	//   element(by.css('.confirm')).click();
  //   // expect(browser.getCurrentUrl()).toContain("manage");
	// });
});