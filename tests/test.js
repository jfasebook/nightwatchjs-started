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
    home.loadHome()
  },
  'find zoneSelector and set': function(client) {
    home.setZoneSelector(['miami']);
    home.clickFirstResult();
    home.clickSearch();
    //zoneSelector
      // .waitForElementVisible('@firstResult', 2000) 
      // .expect.element('@firstResult').to.be.visible
      // zoneSelector.click('@firstResult')
      //search.click('@searchButton');
      client.pause(3000);
      //.waitForElementPresent('#hotel-searcher > div.row > div.col-xs-12.col-sm-12.col-md-12.col-lg-10 > div.hidden-xs.row.searcher-row > div.visible-sm-block.visible-md-block.col-sm-2.pull-right > button', 1000)
     // client.end()
  }
}
