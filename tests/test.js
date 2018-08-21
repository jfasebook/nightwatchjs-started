

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
  home: null,
  zoneSelector: null,
  search: null,
  before: function(client) {
    home = client.page.home();
    zoneSelector = home.section.zoneSelector;
    search = home.section.search;
    client.maximizeWindow();
  },
  'open and load Demoresponsive': function(client) {
    home.navigate()
      .waitForElementVisible('body', 1000)   
  },
  'find input': function(client) {
    zoneSelector
      .assert.visible('@zoneSelectorDestination')
      .setValue('@zoneSelectorDestination', ['miami'])
      .expect.element('@firstResult').to.be.visible;
    client.pause(3000)
      //.keys(['\uE015', client.Keys.ENTER]);
      zoneSelector.click('@firstResult')
      search.click('@searchButton');
      client.pause(10000);
      //.waitForElementPresent('#hotel-searcher > div.row > div.col-xs-12.col-sm-12.col-md-12.col-lg-10 > div.hidden-xs.row.searcher-row > div.visible-sm-block.visible-md-block.col-sm-2.pull-right > button', 1000)
      client.end()
  }
}
