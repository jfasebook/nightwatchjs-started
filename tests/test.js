module.exports = {
  home: null,
  zoneSelector: null,
  search: null,
  promiseStep: null,
  before: function(client) {
    home = client.page.home();
    zoneSelector = home.section.zoneSelector;
    search = home.section.search;
    client.maximizeWindow();
  },
  'open and load Demoresponsive': function(client) {
    promiseStep = home.loadHome();
  },
  'find zoneSelector and set': function(client) {
    promiseStep = promiseStep.then(element=>{
      return zoneSelector.setZoneSelector(['miami']);
    }).then(value => {
      return zoneSelector.clickFirstResult();
    }).then(element=>{
     return search.clickSearch().then((element)=> client.elementIdClick(element.ELEMENT));

    });
    
    
    //search.click('@searchButton', b=> console.log(b))
    
      client.pause(10000);
      client.end();
  }
}
