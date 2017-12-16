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
it('department should be created', function() {
           // username.sendKeys('nikita.khandelwal@hirexp.com');
			//password.sendKeys('password@123');
			//submit.click();
			
	//element(by.css('[ng-click="cancel()"]')).click();
	element(by.css('a[href*="#/manage"]')).click();
	element(by.css('a[href*="#/department/create"]')).click();
	element(by.model('department.title')).sendKeys('sales');
	element(by.model('department.hiring_budget')).sendKeys('35000');
	element(by.css('[ng-click="create(departments);"]')).click();
	

    expect(browser.getCurrentUrl()).toContain("manage");
  });
  it('user should be created', function() {
	  element(by.css('a[href*="#/manage"]')).click();
	  element(by.id('users-tab')).click();
	element(by.css('a[href*="#/users/create"]')).click();
	element(by.model('user.name')).sendKeys('nish gupta');
	element(by.model('user.email')).sendKeys('nish@mailinator.com');
	element(by.model('user.department')).$('[value="string:141"]').click();
	
	var selectButton = element(by.model('user.selected'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));

    
    selectButton.click();
  
    selectInput.sendKeys('recruit');
    
    element.all(by.css('.ui-select-choices-row-inner span')).first().click();
	element(by.model('checked')).click();
	
	element(by.model('checked')).click();
	element(by.css('[ng-click="create(user);"]')).click();

	
	
	
	expect(browser.getCurrentUrl()).toContain("manage");
  });
  it('Email settings should be open', function() {
	  element(by.css('a[href*="#/manage"]')).click();
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div/div/ul/li[3]/a')).click();
	element(by.css('[ng-click="actions.openTemplate(template);"]')).click();
	
	element(by.model('template.subject_text')).clear().sendKeys('{{sender_full_name}} sent you a job referral invite for job openings in {{company_name}}');
	element(by.model('template.footer_text')).clear().sendKeys('All Rights Reserved');
	//element(by.css('.btn btn-danger btn-transparent')).click();
	element(by.css('[ng-click="update(template);"]')).click();
	element(by.css('[ng-click="actions.generalSettings()"]')).click();
	element(by.model('template.facebook_url')).clear().sendKeys('https://www.facebook.com/hirexp');
	element(by.model('template.twitter_url')).clear().sendKeys('https://twitter.com/');
	element(by.css('[ng-click="set()"]')).click();
	//element(by.css('[ng-click="ok()"]')).click();
	//element(by.css('.ng-scope')).click();
	expect(browser.getCurrentUrl()).toContain("manage");
   });  
   
   it('agency should be created', function() {
    element(by.css('a[href*="#/manage"]')).click();
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div/div/ul/li[4]/a')).click();
	element(by.css('a[href*="#/agency/create"]')).click();
	element(by.model('companyDetails.company_name')).sendKeys('HCL communication limited');
	element(by.model('companyDetails.brand_name')).sendKeys('HCL');
	element(by.model('companyDetails.company_address')).sendKeys('TCL dighi,pune,maharashtra');
	element(by.model('companyDetails.companyProfile')).sendKeys('Networking domain');
	var selectButton = element(by.model('companyDetails.country'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));
	selectButton.click();
   
    selectInput.sendKeys('india');
    
    element.all(by.css('.ui-select-choices-row-inner span')).last().click();
	element(by.model('companyDetails.employee_strength')).sendKeys('20');
	element(by.model('companyDetails.spoc_name')).sendKeys('sameer');
	element(by.model('companyDetails.spoc_email')).sendKeys('sameeeer@HCLcommunication.com');
	element(by.model('companyDetails.spoc_phone')).sendKeys('8806645537');
	element(by.css('[ng-click="saveCompanyDetails(companyDetails)"]')).click();
	
	expect(browser.getCurrentUrl()).toContain("manage");

   });
});