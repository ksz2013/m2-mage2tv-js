define(['ko'], function(ko){
    'use strict';

    // in console for debugging: requirejs('uiRegistry').get('startSimple')
    // update array element:
    // requirejs('uiRegistry').get('startSimple').exchange_rates.splice(1,1, {currency_to: 'XXX', rate: '213'})
    // remove last element
    // requirejs('uiRegistry').get('startSimple').exchange_rates.pop()
    // add new element
    // requirejs('uiRegistry').get('startSimple').exchange_rates.push({currency_to: 'AAV', rate: 22})

    return function() {
        const viewModel = {
            exchange_rates: ko.observableArray([
                {
                    currency_to: 'USD',
                    rate: 1.0
                },
                {
                    currency_to: 'EUR',
                    rate: 0.83
                },
                {
                    currency_to: 'NZD',
                    rate: 1.43
                }
            ]),
            values: ko.observableArray([
                123,
                12,
                555,
                778
            ])
        };

        return viewModel;
    }
});