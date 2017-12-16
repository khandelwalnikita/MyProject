describe('test create user functionality for hirexp site', function() {
	
	var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

it('user should be created', function(){
		browser.get('https://console.hirexp.com/#/login');
		
		
	element(by.model('user.username')).sendKeys('nikita.khandelwal@hirexp.com');
    element(by.model('user.password')).sendKeys('password@123');
    element(by.id('submit-form')).click();
	element(by.css('[ng-click="cancel()"]')).click();
	element(by.css('a[href*="#/manage"]')).click();
	element(by.id('users-tab')).click();
	element(by.css('a[href*="#/users/create"]')).click();
	element(by.model('user.name')).sendKeys('mensi');
	element(by.model('user.email')).sendKeys('mency@mailinator.com');
	element(by.model('user.department')).$('[value="string:141"]').click();
	
	var selectButton = element(by.model('user.selected'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));

    
    selectButton.click();
  
    selectInput.sendKeys('recruit');
    
    element.all(by.css('.ui-select-choices-row-inner span')).first().click();
	element(by.model('checked')).click();
	
	element(by.model('checked')).click();
	element(by.css('[ng-click="create(user);"]')).click();

	
	
	
	expect(browser.getCurrentUrl()).toContain("user")
});
});