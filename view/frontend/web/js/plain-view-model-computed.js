define(['ko', 'jquery'], function(ko, $){
    'use strict';

    // in console for debugging: requirejs('uiRegistry').get('startSimple')

    return function(config) {
        let currencyInfo = ko.observable();
        $.getJSON(config.base_url + 'rest/V1/directory/currency', currencyInfo);

        const viewModel = {
            label: ko.observable('Currency Info')
        };

        viewModel.output =  ko.computed(function () {
            if (currencyInfo()) {
                return this.label() + ':\n' + JSON.stringify(currencyInfo(), null, 2);
            }
            return '...loading';
        }.bind(viewModel));

        return viewModel;
    }
});