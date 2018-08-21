module.exports = {
    url: 'https://www.demojuniper.com',
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