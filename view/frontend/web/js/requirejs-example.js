define(['jquery'], function($) {
    'use strict';

    // if * is used element is false
    return function(config, element) {
        console.log(element);
        console.log(config);

        $.getJSON(config.base_url + "rest/V1/directory/currency", function(result) {
           element.innerText =  JSON.stringify(result, null, 2);
        });
    }
});