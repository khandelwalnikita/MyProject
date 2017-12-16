describe('test create job functionality for hirexp site', function() {
	
	var username = element(by.model('user.username'));
  var password = element(by.model('user.password'));
  var submit = element(by.id('submit-form'));                                        
 // var latestResult = element(by.binding('latest'));
   beforeEach(function() {
	   
	   browser.get('https://console.hirexp.com/#/login');
	    });


 it('login should be done', function() {                                           // .1 log in
			username.sendKeys('nikita.khandelwal@hirexp.com');
			password.sendKeys('password@123');
			submit.click();
			element(by.css('[ng-click="cancel()"]')).click();
    expect(browser.getCurrentUrl()).toContain("dashboard");
  });

	  it('job should not be created', function() {                                      	  // .2 not enter job tital
      element(by.css('a[href*="#/jobs/create"]')).click();
  	element(by.model('job.title')).sendKeys('');
  	element(by.model('job.department')).$('[value="string:135"]').click();
  	element(by.id('google_places_ac')).sendKeys('pune').click();
	browser.sleep(1000);
     browser.wait(function(){
  		var allLocationElm = element.all(by.css('.pac-container.pac-logo'));
  		allLocationElm.last().click();
      return true;
  	});

  	element(by.model('job.deadline')).sendKeys('11/25/2017');
  	element(by.model('job.role')).sendKeys('devloper');
  	element(by.model('job.skills')).click();
browser.switchTo().activeElement().sendKeys('Java', ',', 'Python');


    var selectButton = element(by.model('job.education'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));
 selectButton.click();
 selectInput.sendKeys('prof');
 element.all(by.css('.ui-select-choices-row-inner span')).first().click();

  	element(by.model('job.vacancies')).sendKeys('3');
  	element(by.model('job.toggleManager')).click();


    element(by.model('job.desc')).sendKeys('Enter your job description here');
	//element(by.css('[ng-click="save('draft')"]')).click();
	
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div[2]/div/div[2]/div/button[2]')).click();
	 browser.waitForAngular();
	 //element(by.xpath('html/body/div[7]/div[7]/button')).click();                                     (error)
	// element(by.xpath('html/body/div[7]/div[7]/div/button')).click();
	 //element(by.css('.cancel')).click();
	 //element(by.css('.sa-button-container.confirm')).click();
	 expect(browser.getCurrentUrl()).toContain("create");
		});
		it('job should not be created', function() {                                                        // .3 not enter department


	  element(by.css('a[href*="#/jobs/create"]')).click();

  	element(by.model('job.title')).sendKeys('software engineer');
  	//element(by.model('job.department')).$('[value="string:135"]').click();
  	element(by.id('google_places_ac')).sendKeys('pune').click();
	browser.sleep(1000);
  browser.wait(function(){
  		var allLocationElm = element.all(by.css('.pac-container.pac-logo'));
  		allLocationElm.last().click();
      return true;
  	});

  	element(by.model('job.deadline')).sendKeys('11/25/2017');
  	element(by.model('job.role')).sendKeys('devloper');
  	element(by.model('job.skills')).click();
browser.switchTo().activeElement().sendKeys('Java', ',', 'Python');


    var selectButton = element(by.model('job.education'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));
 selectButton.click();
 selectInput.sendKeys('prof');
 element.all(by.css('.ui-select-choices-row-inner span')).first().click();

  	element(by.model('job.vacancies')).sendKeys('3');
  	element(by.model('job.toggleManager')).click();


    element(by.model('job.desc')).sendKeys('Enter your job description here');
	//element(by.css('[ng-click="save('draft')"]')).click();
	
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div[2]/div/div[2]/div/button[2]')).click();
	 browser.waitForAngular();
	// element(by.xpath('html/body/div[7]/div[7]/button')).click();
	// element(by.xpath('html/body/div[7]/div[7]/div/button')).click();
	 //element(by.css('.cancel')).click();
	 //element(by.css('.sa-button-container.confirm')).click();
	 expect(browser.getCurrentUrl()).toContain("create");
		});

it('job should not be created', function() {                                                // .4 not enter location


	  element(by.css('a[href*="#/jobs/create"]')).click();

  	element(by.model('job.title')).sendKeys('software engineer');
  	element(by.model('job.department')).$('[value="string:135"]').click();
  	//element(by.id('google_places_ac')).sendKeys('pune').click();
	//browser.sleep(1000);
 //browser.wait(function(){
  	//	var allLocationElm = element.all(by.css('.pac-container.pac-logo'));
  		//allLocationElm.last().click();
      //return true;
  	//});

  	element(by.model('job.deadline')).sendKeys('11/25/2017');
  	element(by.model('job.role')).sendKeys('devloper');
  	element(by.model('job.skills')).click();
browser.switchTo().activeElement().sendKeys('Java', ',', 'Python');


    var selectButton = element(by.model('job.education'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));
 selectButton.click();
 selectInput.sendKeys('prof');
 element.all(by.css('.ui-select-choices-row-inner span')).first().click();

  	element(by.model('job.vacancies')).sendKeys('3');
  	element(by.model('job.toggleManager')).click();


    element(by.model('job.desc')).sendKeys('Enter your job description here');
	//element(by.css('[ng-click="save('draft')"]')).click();
	
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div[2]/div/div[2]/div/button[2]')).click();
	 browser.waitForAngular();
	// element(by.xpath('html/body/div[7]/div[7]/button')).click();
	// element(by.xpath('html/body/div[7]/div[7]/div/button')).click();
	 //element(by.css('.cancel')).click();
	 //element(by.css('.sa-button-container.confirm')).click();
	 expect(browser.getCurrentUrl()).toContain("create");
		});
		it('job should not be created', function() {                                                  // .5 not enterd job deadline


	  element(by.css('a[href*="#/jobs/create"]')).click();

  	element(by.model('job.title')).sendKeys('software engineer');
  	element(by.model('job.department')).$('[value="string:135"]').click();
  	element(by.id('google_places_ac')).sendKeys('pune').click();
	browser.sleep(1000);
browser.wait(function(){
  		var allLocationElm = element.all(by.css('.pac-container.pac-logo'));
  		allLocationElm.last().click();
      return true;
  	});

  	//element(by.model('job.deadline')).sendKeys('11/25/2017');
  	element(by.model('job.role')).sendKeys('devloper');
  	element(by.model('job.skills')).click();
browser.switchTo().activeElement().sendKeys('Java', ',', 'Python');


    var selectButton = element(by.model('job.education'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));
 selectButton.click();
 selectInput.sendKeys('prof');
 element.all(by.css('.ui-select-choices-row-inner span')).first().click();

  	element(by.model('job.vacancies')).sendKeys('3');
  	element(by.model('job.toggleManager')).click();


    element(by.model('job.desc')).sendKeys('Enter your job description here');
	//element(by.css('[ng-click="save('draft')"]')).click();
	
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div[2]/div/div[2]/div/button[2]')).click();
	 browser.waitForAngular();
	// element(by.xpath('html/body/div[7]/div[7]/button')).click();
	// element(by.xpath('html/body/div[7]/div[7]/div/button')).click();
	 //element(by.css('.cancel')).click();
	 //element(by.css('.sa-button-container.confirm')).click();
	 expect(browser.getCurrentUrl()).toContain("create");
		});
		 

	  it('job should not be created', function() {                                                          // .8 not enterd education


	  element(by.css('a[href*="#/jobs/create"]')).click();

  	element(by.model('job.title')).sendKeys('software engineer');
  	element(by.model('job.department')).$('[value="string:135"]').click();
  	element(by.id('google_places_ac')).sendKeys('pune').click();
	browser.sleep(1000);
browser.wait(function(){
  		var allLocationElm = element.all(by.css('.pac-container.pac-logo'));
  		allLocationElm.last().click();
      return true;
  	});

  	element(by.model('job.deadline')).sendKeys('11/25/2017');
  	element(by.model('job.role')).sendKeys('devloper');
  	element(by.model('job.skills')).click();
browser.switchTo().activeElement().sendKeys('Java', ',', 'Python');


    //var selectButton = element(by.model('job.education'));
    //var selectInput = selectButton.element(by.css('.ui-select-search'));
 //selectButton.click();
 //selectInput.sendKeys('prof');
 //element.all(by.css('.ui-select-choices-row-inner span')).first().click();

  	element(by.model('job.vacancies')).sendKeys('3');
  	element(by.model('job.toggleManager')).click();


    element(by.model('job.desc')).sendKeys('Enter your job description here');
	//element(by.css('[ng-click="save('draft')"]')).click();
	
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div[2]/div/div[2]/div/button[2]')).click();
	 browser.waitForAngular();
	 //element(by.xpath('html/body/div[7]/div[7]/button')).click();                                     (error)
	// element(by.xpath('html/body/div[7]/div[7]/div/button')).click();
	 //element(by.css('.cancel')).click();
	 //element(by.css('.sa-button-container.confirm')).click();
	 expect(browser.getCurrentUrl()).toContain("create");
	  });

	  it('job should not be created', function() {                                                               // .9 not entered vacancies


	  element(by.css('a[href*="#/jobs/create"]')).click();

  	element(by.model('job.title')).sendKeys('software engineer');
  	element(by.model('job.department')).$('[value="string:135"]').click();
  	element(by.id('google_places_ac')).sendKeys('pune').click();
	browser.sleep(1000);
browser.wait(function(){
  		var allLocationElm = element.all(by.css('.pac-container.pac-logo'));
  		allLocationElm.last().click();
      return true;
  	});

  	element(by.model('job.deadline')).sendKeys('11/25/2017');
  	element(by.model('job.role')).sendKeys('devloper');
  	element(by.model('job.skills')).click();
browser.switchTo().activeElement().sendKeys('Java', ',', 'Python');


    var selectButton = element(by.model('job.education'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));
 selectButton.click();
 selectInput.sendKeys('prof');
 element.all(by.css('.ui-select-choices-row-inner span')).first().click();

  	//element(by.model('job.vacancies')).sendKeys('3');
  	element(by.model('job.toggleManager')).click();


    element(by.model('job.desc')).sendKeys('Enter your job description here');
	//element(by.css('[ng-click="save('draft')"]')).click();
	
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div[2]/div/div[2]/div/button[2]')).click();
	 browser.waitForAngular();
	 //element(by.xpath('html/body/div[7]/div[7]/button')).click();                                     (error)
	// element(by.xpath('html/body/div[7]/div[7]/div/button')).click();
	 //element(by.css('.cancel')).click();
	 //element(by.css('.sa-button-container.confirm')).click();
	 expect(browser.getCurrentUrl()).toContain("create");
		});
		 

  /*	  it('job should  be created', function() {                                                              // .10 not clicked checkbox


	  element(by.css('a[href*="#/jobs/create"]')).click();

  	element(by.model('job.title')).sendKeys('software engineer');
  	element(by.model('job.department')).$('[value="string:135"]').click();
  	element(by.id('google_places_ac')).sendKeys('pune').click();
	browser.sleep(1000);
browser.wait(function(){
  		var allLocationElm = element.all(by.css('.pac-container.pac-logo'));
  		allLocationElm.last().click();
      return true;
  	});

  	element(by.model('job.deadline')).sendKeys('11/25/2017');
  	element(by.model('job.role')).sendKeys('devloper');
  	element(by.model('job.skills')).click();
browser.switchTo().activeElement().sendKeys('Java', ',', 'Python');


    var selectButton = element(by.model('job.education'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));
 selectButton.click();
 selectInput.sendKeys('prof');
 element.all(by.css('.ui-select-choices-row-inner span')).first().click();

  	element(by.model('job.vacancies')).sendKeys('3');
  	//element(by.model('job.toggleManager')).click();


    element(by.model('job.desc')).sendKeys('Enter your job description here');
	//element(by.css('[ng-click="save('draft')"]')).click();
	
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div[2]/div/div[2]/div/button[2]')).click();
	 browser.waitForAngular();
	 //element(by.xpath('html/body/div[7]/div[7]/button')).click();                                     (error)
	// element(by.xpath('html/body/div[7]/div[7]/div/button')).click();
	 //element(by.css('.cancel')).click();
	 //element(by.css('.sa-button-container.confirm')).click();
	 expect(browser.getCurrentUrl()).toContain("create");
		}); */
		
	  it('job should not be created', function() {                                                                      // .11 not entered description


	  element(by.css('a[href*="#/jobs/create"]')).click();

  	element(by.model('job.title')).sendKeys('software engineer');
  	element(by.model('job.department')).$('[value="string:135"]').click();
  	element(by.id('google_places_ac')).sendKeys('pune').click();
	browser.sleep(1000);
browser.wait(function(){
  		var allLocationElm = element.all(by.css('.pac-container.pac-logo'));
  		allLocationElm.last().click();
      return true;
  	});

  	element(by.model('job.deadline')).sendKeys('11/25/2017');
  	element(by.model('job.role')).sendKeys('devloper');
  	element(by.model('job.skills')).click();
browser.switchTo().activeElement().sendKeys('Java', ',', 'Python');


    var selectButton = element(by.model('job.education'));
    var selectInput = selectButton.element(by.css('.ui-select-search'));
 selectButton.click();
 selectInput.sendKeys('prof');
 element.all(by.css('.ui-select-choices-row-inner span')).first().click();

  	element(by.model('job.vacancies')).sendKeys('3');
  	element(by.model('job.toggleManager')).click();


    //element(by.model('job.desc')).sendKeys('Enter your job description here');
	//element(by.css('[ng-click="save('draft')"]')).click();
	
	element(by.xpath('html/body/div[4]/div[3]/div/div[2]/div/div/div[2]/div/div[2]/div/button[2]')).click();
	 browser.waitForAngular();
	 //element(by.xpath('html/body/div[7]/div[7]/button')).click();                                     (error)
	// element(by.xpath('html/body/div[7]/div[7]/div/button')).click();
	 //element(by.css('.cancel')).click();
	 //element(by.css('.sa-button-container.confirm')).click();
	 expect(browser.getCurrentUrl()).toContain("create");
		});
	});
