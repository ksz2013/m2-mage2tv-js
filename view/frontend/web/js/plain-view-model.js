define(['ko'], function(ko){
    'use strict';

    // in console for debugging: requirejs('uiRegistry').get('startSimple')

    return function(config) {
        return {
            title: ko.observable('Aloha!'),
            config: config,
            getTitle: function() {
                return this.title;
            }
        }
    }
});