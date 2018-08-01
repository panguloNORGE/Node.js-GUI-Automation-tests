module.exports = {
  'Verify navigation across the 4 main sections of media sources homepage' : function (browser) {
    browser
      .url('https://www.xeneta.com/media-resources')
.useXpath()
.assert.visible("//a[contains(text(),'Image of Founders')]")
.useXpath()
.click("//a[contains(text(),'Image of Founders')]")
.pause(2000)
.saveScreenshot('./reports/image.png')
.pause(2000)
.assert.visible("//a[contains(text(),'Spokepersons')]")
.useXpath()
.click("//a[contains(text(),'Spokepersons')]")
.pause(2000)
.saveScreenshot('./reports/spoke.png')
.pause(2000)
.assert.visible("//a[contains(text(),'Xeneta Logo')]")
.useXpath()
.click("//a[contains(text(),'Xeneta Logo')]")
.pause(2000)
.saveScreenshot('./reports/xlogo.png')
.pause(2000)
.assert.visible("//a[contains(text(),'Product Screenshots')]")
.useXpath()
.click("//a[contains(text(),'Product Screenshots')]")
.pause(2000)
.saveScreenshot('./reports/product.png')
.pause(2000)
.end();
  },

'Verify screenshots for the Xeneta products' : function (browser) {
    browser
      .url('https://www.xeneta.com/media-resources')
.useXpath()
.click("//a[contains(text(),'Product Screenshots')]")
.pause(2000)
.useCss()
.assert.visible('img[alt="product_intelligence.jpg"]')
.useCss()
.click('img[alt="product_intelligence.jpg"]')
.pause(2000)
.useCss()
.click('div.vex-close')
.pause(2000)
.useCss()
.assert.visible('img[alt="Xeneta-Spend-analysis.jpg"]')
.useCss()
.click('img[alt="Xeneta-Spend-analysis.jpg"]')
.pause(2000)
.useCss()
.click('div.vex-close')
.pause(2000)
.useCss()
.assert.visible('img[alt="combined_analytics_intelligence.jpg"]')
.useCss()
.click('img[alt="combined_analytics_intelligence.jpg"]')
.pause(2000)
.useCss()
.click('div.vex-close')
.pause(2000)
.useCss()
.assert.visible('img[alt="product_analytics.jpg"]')
.useCss()
.click('img[alt="product_analytics.jpg"]')
.pause(2000)
.useCss()
.click('div.vex-close')
.pause(1000)
.end();
  },

'Verify german version of the media sources hompeage' : function (browser) {
    browser
      .url('https://www.xeneta.com/media-resources')
.useXpath()
.assert.visible("//a[contains(text(),'Deutsch')]")
.pause(2000)
.useXpath()
.click("//a[contains(text(),'Deutsch')]")
.pause(2000)

.useXpath()
.assert.visible("//a[contains(text(),'Sprecher')]")
.pause(2000)
.useXpath()
.click("//a[contains(text(),'Sprecher')]")
.pause(2000)

.useXpath()
.assert.visible("//a[contains(text(),'Xeneta Logo')]")
.pause(2000)
.useXpath()
.click("//a[contains(text(),'Xeneta Logo')]")
.pause(2000)

.useXpath()
.assert.visible("//a[contains(text(),'Produkt-Screenshots')]")
.pause(2000)
.useXpath()
.click("//a[contains(text(),'Produkt-Screenshots')]")
.pause(2000)


.end();
  }
};
