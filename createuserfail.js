describe('test login functionality for hirexp site', function() {
  var username = element(by.model('user.username'));
  var password = element(by.model('user.password'));
  var submit = element(by.id('submit-form'));
  
  beforeEach(function() {
	   
	   browser.get('https://console.hirexp.com/#/login');
	    });
		it('login should be done', function() {                                                        // .1
			username.sendKeys('nikita.khandelwal@hirexp.com');
			password.sendKeys('password@123');
			submit.click();
			element(by.css('[ng-click="cancel()"]')).click();
    expect(browser.getCurrentUrl()).toContain("dashboard");
  });

   it('user should not be created', function() {                                                     // .2
	element(by.css('a[href*="#/manage"]')).click();
	element(by.id('users-tab')).click();
	element(by.css('a[href*="#/users/create"]')).click();
	//element(by.model('user.name')).sendKeys('nikky gupta');
	element(by.model('user.email')).sendKeys('nishat@mailinator.com');
	element(by.model('user.department')).$('[value="string:141"]').click();
	
	var selectButton = element(by.model('user.selected'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));

    
    selectButton.click();
  
    selectInput.sendKeys('recruit');
    
    element.all(by.css('.ui-select-choices-row-inner span')).first().click();
	element(by.model('checked')).click();
	
	element(by.model('checked')).click();
	element(by.css('[ng-click="create(user);"]')).click();
    browser.waitForAngular();
	
	
	
	expect(browser.getCurrentUrl()).toContain("user");
});


   it('user should not be created', function() {                                                     // .3
	element(by.css('a[href*="#/manage"]')).click();
	element(by.id('users-tab')).click();
	element(by.css('a[href*="#/users/create"]')).click();
	element(by.model('user.name')).sendKeys('nikky gupta');
	//element(by.model('user.email')).sendKeys('nishat@mailinator.com');
	element(by.model('user.department')).$('[value="string:141"]').click();
	
	var selectButton = element(by.model('user.selected'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));

    
    selectButton.click();
  
    selectInput.sendKeys('recruit');
    
    element.all(by.css('.ui-select-choices-row-inner span')).first().click();
	element(by.model('checked')).click();
	
	element(by.model('checked')).click();
	element(by.css('[ng-click="create(user);"]')).click();
    browser.waitForAngular();
	
	
	
	expect(browser.getCurrentUrl()).toContain("user");
});

 it('user should not be created', function() {                                                     // .4
	element(by.css('a[href*="#/manage"]')).click();
	element(by.id('users-tab')).click();
	element(by.css('a[href*="#/users/create"]')).click();
	element(by.model('user.name')).sendKeys('nikky gupta');
	element(by.model('user.email')).sendKeys('nishat@mailinator.com');
	//element(by.model('user.department')).$('[value="string:141"]').click();
	
	var selectButton = element(by.model('user.selected'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));

    
    selectButton.click();
  
    selectInput.sendKeys('recruit');
    
    element.all(by.css('.ui-select-choices-row-inner span')).first().click();
	element(by.model('checked')).click();
	
	element(by.model('checked')).click();
	element(by.css('[ng-click="create(user);"]')).click();
    browser.waitForAngular();
	
	
	
	expect(browser.getCurrentUrl()).toContain("user");
});
          
		  it('user should not be created', function() {                                                     // .5
	element(by.css('a[href*="#/manage"]')).click();
	element(by.id('users-tab')).click();
	element(by.css('a[href*="#/users/create"]')).click();
	element(by.model('user.name')).sendKeys('nikky gupta');
	element(by.model('user.email')).sendKeys('nishat@mailinator.com');
	element(by.model('user.department')).$('[value="string:141"]').click();
	
//	var selectButton = element(by.model('user.selected'));
  //  var selectInput = selectButton.element(by.css('.ui-select-search'));

    
   // selectButton.click();
  
   // selectInput.sendKeys('recruit');
    
   // element.all(by.css('.ui-select-choices-row-inner span')).first().click();
	element(by.model('checked')).click();
	
	element(by.model('checked')).click();
	element(by.css('[ng-click="create(user);"]')).click();
    browser.waitForAngular();
	
	
	
	expect(browser.getCurrentUrl()).toContain("user");
});

       
		  it('user should not be created', function() {                                                     // .6
	element(by.css('a[href*="#/manage"]')).click();
	element(by.id('users-tab')).click();
	element(by.css('a[href*="#/users/create"]')).click();
	element(by.model('user.name')).sendKeys('nikky gupta');
	element(by.model('user.email')).sendKeys('nishat@mailinator.com');
	element(by.model('user.department')).$('[value="string:141"]').click();
	
	var selectButton = element(by.model('user.selected'));
   var selectInput = selectButton.element(by.css('.ui-select-search'));

    
   selectButton.click();
  
    selectInput.sendKeys('recruit');
    
    element.all(by.css('.ui-select-choices-row-inner span')).first().click();
	//element(by.model('checked')).click();
	
	element(by.model('checked')).click();
	element(by.css('[ng-click="create(user);"]')).click();
    browser.waitForAngular();
	
	
	
	expect(browser.getCurrentUrl()).toContain("user");
});
 it('user should not be created', function() {                                                     // .7
	element(by.css('a[href*="#/manage"]')).click();
	element(by.id('users-tab')).click();
	element(by.css('a[href*="#/users/create"]')).click();
	element(by.model('user.name')).sendKeys('nikky gupta');
	element(by.model('user.email')).sendKeys('nishat@mailinator.com');
	element(by.model('user.department')).$('[value="string:141"]').click();
	
	var selectButton = element(by.model('user.selected'));
   var selectInput = selectButton.element(by.css('.ui-select-search'));

    
   selectButton.click();
  
    selectInput.sendKeys('recruit');
    
    element.all(by.css('.ui-select-choices-row-inner span')).first().click();
	element(by.model('checked')).click();
	
	//element(by.model('checked')).click();
	element(by.css('[ng-click="create(user);"]')).click();
    browser.waitForAngular();
	
	
	
	expect(browser.getCurrentUrl()).toContain("user");
 });
});
