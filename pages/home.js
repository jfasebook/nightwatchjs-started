var homeCommands = {
    loadHome: function() {
        return this.navigate()
        .waitForElementVisible('body', 1000)   
    },
    setZoneSelector: function(zoneName) {
        return this.section.zoneSelector.waitForElementVisible('@zoneSelectorDestination', 1000)
        .setValue('@zoneSelectorDestination', zoneName);
    },
    clickFirstResult: function() {
        return this.section.zoneSelector
        .waitForElementVisible('@firstResult', 2000, () => this.section.zoneSelector.click('@firstResult'))
    },
    clickSearch: function() {
        return this.section.search.click('@searchButton');
    }
}

module.exports = {
    url: 'https://www.demojuniper.com',
    commands: [homeCommands],
    sections: {
        search: {
            selector: '#hotel-searcher',
            elements: {
                searchButton: {
                    selector: '#hotel-searcher > div.row > div.hidden-sm.hidden-md.col-xs-6.col-md-2.pull-right > button'
                }
            }
        },
        zoneSelector: { 
            selector: '.zone-selector',
            elements: {
                zoneSelectorDestination: {
                    selector: '#hotel-searcher-_ctl1__ctl1__ctl1_pageBody_pageBody_searcher_ctlMultiSearcher__ctl1_ctlZoneSelector-input'
                },
                firstResult: {
                    selector: '.tt-suggestion.tt-selectable:first-of-type'
                } 
            }
        }      
    }
}