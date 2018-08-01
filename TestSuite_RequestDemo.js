module.exports = {
  'Verify request demo form is displayed: fields, dropdowns and submit button' : function (client) {
    client
      .url('https://www.xeneta.com/test-request-xeneta-demo')
      .waitForElementVisible('body', 5000)
      .pause(5000)
 
.assert.visible('input[name=firstname]')
.assert.visible('input[name=lastname]')
.assert.visible('input[name=company]')
.assert.visible('input[name=jobtitle]')
.assert.visible('input[name=email]')
.assert.visible('input[name=direct_phone__c]')
.waitForElementVisible('.hs-input', 1000)
.waitForElementVisible('.hs-input', 1000)
.waitForElementVisible('.hs-input', 1000)
.assert.visible('input[type=submit]')
.pause(2000)         
.end();
  },

'Fill out the demo form: fields and select a specific option from the dropdown options' : function (client) {
    client
      .url('https://www.xeneta.com/test-request-xeneta-demo')
      .waitForElementVisible('body', 5000)
      .pause(5000)
 
.assert.visible('input[name=firstname]')
.setValue('input[name=firstname]', 'FIRST')
.assert.visible('input[name=lastname]')
.setValue('input[name=lastname]', 'LAST')
.assert.visible('input[name=company]')
.setValue('input[name=company]', 'INC')
.assert.visible('input[name=jobtitle]')
.setValue('input[name=jobtitle]', 'JOB')
.assert.visible('input[name=email]')
.setValue('input[name=email]', 'my@email.com')
.assert.visible('input[name=direct_phone__c]')
.setValue('input[name=direct_phone__c]', '747474')

.waitForElementVisible('.hs-input', 5000)
           .click('.hs-input')
           .waitForElementVisible('option[value="Shipper/BCO"]', 5000)  
 .click('option[value="Shipper/BCO"]')

.waitForElementVisible('.hs-input', 5000)
           .click('.hs-input')
           .waitForElementVisible('option[value="Less than 500"]', 10000)  
 .click('option[value="Less than 500"]')

.waitForElementVisible('.hs-input', 5000)
           .click('.hs-input')
           .waitForElementVisible('option[value="Supply Chain MICHAEL"]', 10000)  
 .click('option[value="Supply Chain MICHAEL"]')    
    
.pause(10000)         
.end();
  },

'Negative test: click submit button without filling form(indicate user to enter the required fields)' : function (client) {
    client
      .url('https://www.xeneta.com/test-request-xeneta-demo')
      .waitForElementVisible('body', 5000)
      .pause(3000)
 .assert.visible('input[type=submit]')
.pause(5000)
.click('input[type=submit]')
.pause(5000)
.assert.containsText('body', 'Please complete all required fields.')
.pause(5000)         
.end();
  }
};

