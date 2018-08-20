var element = {
  zoneSelectorDestination: '#hotel-searcher-_ctl1__ctl1__ctl1_pageBody_pageBody_searcher_ctlMultiSearcher__ctl1_ctlZoneSelector-input'
};

// module.exports = {
//   'Demo test Google' : ""+ function (client) {
//     client
//       .url('http://www.google.com')
//       .waitForElementVisible('body', 1000)
//       .assert.title('Google')
//       .assert.visible('input[type=text]')
//       .setValue('input[type=text]', 'rembrandt van rijn')
//       .waitForElementVisible('input[name=btnK]', 1000)
//       .click('input[name=btnK]')
//       .pause(5000)
//       .assert.containsText('ol#rso li:first-child',
//         'Rembrandt - Wikipedia')
//       .end();
//   }
// }

module.exports = { 
  'open and load Demoresponsive': function(client) {
  client
    .url("https://www.demojuniper.com")
    .waitForElementVisible('body', 1000)
    .maximizeWindow()  
  },
  'find input': function(client) {
    client
      .assert.visible(element.zoneSelectorDestination)
      .setValue(element.zoneSelectorDestination, ['miami'])
      .pause(3000)
      .keys(['\uE015', client.Keys.ENTER])
      .waitForElementPresent('#hotel-searcher > div.row > div.col-xs-12.col-sm-12.col-md-12.col-lg-10 > div.hidden-xs.row.searcher-row > div.visible-sm-block.visible-md-block.col-sm-2.pull-right > button', 1000)
      .moveTo('#hotel-searcher > div.row > div.col-xs-12.col-sm-12.col-md-12.col-lg-10 > div.hidden-xs.row.searcher-row > div.visible-sm-block.visible-md-block.col-sm-2.pull-right > button', 10, 5)
      .mouseButtonClick('left')
      //.end()
  }
}
