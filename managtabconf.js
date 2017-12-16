exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['managtab.js'],
   framework: 'jasmine2' ,
  onPrepare: function() {
    var Jasmine2HtmlReporter = require('C:/Users/Ankit/Desktop/protractor/test/node_modules/protractor-jasmine2-html-reporter');
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'screenshots managetab'
      })
    );
  }
};