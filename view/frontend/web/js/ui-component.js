define(['uiElement'], function(UiElement){
    'use strict';

    return UiElement.extend({
        defaults: {
            template: 'Mage2tv_Js/ui-component-template',
            label: 'ViewModel defaults.label property',
            values: [22, 1, 5, 1024, 1235]
        },
        label: 'My first UiComponent label'
    });
});