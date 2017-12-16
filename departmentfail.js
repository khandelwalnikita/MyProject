describe('test hirexp app', function() {
  var username = element(by.model('user.username'));
  var password = element(by.model('user.password'));
  var submit = element(by.id('submit-form'));
 // var latestResult = element(by.binding('latest'));
   beforeEach(function() {
	   
	   browser.get('https://console.hirexp.com/#/login');
	    });
		
		it('login should be done', function() {
			username.sendKeys('nikita.khandelwal@hirexp.com');
			password.sendKeys('password@123');
			submit.click();
			element(by.css('[ng-click="cancel()"]')).click();
    expect(browser.getCurrentUrl()).toContain("dashboard");
  });
  
  
it('department should not be created', function() {                                             // 1. department not entered
	element(by.css('a[href*="#/manage"]')).click();
	element(by.css('a[href*="#/department/create"]')).click();
	element(by.model('department.title')).sendKeys('');
	element(by.model('department.hiring_budget')).sendKeys('35000');
	element(by.css('[ng-click="create(departments);"]')).click();
	
expect(browser.getCurrentUrl()).toContain("department");
  });
  it('department should be not created', function() {                                                // 2. department and budget not entered
 
	element(by.css('a[href*="#/manage"]')).click();
	element(by.css('a[href*="#/department/create"]')).click();
	element(by.model('department.title')).sendKeys('');
	element(by.model('department.hiring_budget')).sendKeys('');
	element(by.css('[ng-click="create(departments);"]')).click();
	
expect(browser.getCurrentUrl()).toContain("department");
  });
  it('department should not be created', function() {                                                // 3. budget not entered
	element(by.css('a[href*="#/manage"]')).click();
	element(by.css('a[href*="#/department/create"]')).click();
	element(by.model('department.title')).sendKeys('sales');
	element(by.model('department.hiring_budget')).sendKeys('');
	element(by.css('[ng-click="create(departments);"]')).click();
	
expect(browser.getCurrentUrl()).toContain("department");
  });
});
  