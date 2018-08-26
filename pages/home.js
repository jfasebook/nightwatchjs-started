var elementVisible = function(selector) {
    var promises = [];
    
    return new Promise((resolveF, rejectF)=>{
        this.api.elements('css selector', selector, (elements)=>{
        let elementsValues = elements.value;
        
        elementsValues.forEach((element)=> {
            promises.push(new Promise((resolve2, reject2)=>{
                this.api.elementIdDisplayed(element.ELEMENT, (el)=>{
                    if(el.value) {
                        resolve2(element);
                    }
                })
            }))
        });
        resolveF(promises)
    });
});
    // console.log(`Esto es ${promises}`);
    // return promises;
}

var homeCommands = {
    loadHome: function() {
        return new Promise((resolve, reject)=>{
            this.navigate()
        .waitForElementVisible('body', 1000, element=> resolve(element))});   
    },
}

var searchCommands = {
    clickSearch: function() {
        //console.log(this);
        return elementVisible.call(this, `.searcher ${this.elements.searchButton.selector}`)
        .then(promises=>{return Promise.race(promises)});
    }
}

var zoneSelectorCommands = {
    setZoneSelector: function(zoneName) {
        return new Promise((resolve, reject)=>{
            this.waitForElementVisible('@zoneSelectorDestination', 1000, (element)=>{
                this.setValue('@zoneSelectorDestination', zoneName, (value)=> {
                    resolve(value)
                }); 
            });
             
        });
    },
    clickFirstResult: function() {
        return new Promise((resolve, reject)=>{ 
            this
        .waitForElementVisible('@firstResult', 2000, () => this.click('@firstResult', element => resolve(element)))
        });
    },
}

module.exports = {
    url: 'https://www.demojuniper.com',
    commands: [homeCommands],
    sections: {
        search: {
            commands: [searchCommands],
            selector: '.searcher',
            elements: {
                searchButton: {
                    // selector: '.searcher > div.row > div.hidden-sm.hidden-md.col-xs-6.col-md-2.pull-right > button'
                    selector: '.searcher-button'
                }
            }
        },
        zoneSelector: { 
            selector: '.zone-selector',
            commands: [zoneSelectorCommands],
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