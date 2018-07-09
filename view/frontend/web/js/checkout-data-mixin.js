define([], function() {
    'use strict';

    return function(checkoutData) {
        const orig = checkoutData.getNewCustomerShippingAddress;
        checkoutData.getNewCustomerShippingAddress = function() {
            const address = orig.bind(checkoutData)();
            console.log('Selected Shippingg address', address);
            return address;
        };
        return checkoutData;
    }
});