// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  params: {
    auth: {
	  formType:'plain'
      //username: 'blackm',
    //  password: 'welcome'
  },
  coverage: false
  },


baseUrl:'https://ldcipqe.wdf.sap.corp:44301/sap/bc/ui5_ui5/brlt/emy_patch/index.html?sap-client=001&sap-language=EN',

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
 // specs: ['EPname.spec.js','username.spec.js','Help.spec.js','INFO.spec.js','location.spec.js','product list.spec.js','product selected.spec.js','landscape.spec.js','calender.spec.js','notification icon.spec.js'],
specs: ['EPDASHBOARD/*.js'],

  allScriptsTimeout: 29000,   //important for loading to complete
     getPageTimeout: 12000,
     idleTimeout :10000,

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
                     showColors: false,
      //silent: true,
                  defaultTimeoutInterval: 50000

    }
};
