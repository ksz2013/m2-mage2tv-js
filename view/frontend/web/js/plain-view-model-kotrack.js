define(['ko'], function(ko){
    'use strict';

    return function() {
        const viewModel = ko.track({
            label: 'A view module with KO track observables',
            additional_charge: 2,
            items: [
                {name: 'Surprise Box', qty: 4, price: 1.5},
                {name: 'Chunk of Goo', qty: 1, price: 7.5}
            ],
            rowTotal: item => item.qty * item.price, // rowTotal: function(item) {return item.qty * item.price}
            total: function() {
                const sum = this.items.map(this.rowTotal).reduce((acc, curr) => acc + curr);
                return sum + this.additional_charge;
            }
        });

        ko.getObservable(viewModel, 'additional_charge').subscribe(function(newValue) {
            console.log('Additional charge changed to: ', newValue);
        });

        return viewModel;
    }
});