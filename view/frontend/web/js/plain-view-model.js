define(['ko'], function(ko){
    'use strict';

    // in console for debugging: requirejs('uiRegistry').get('startSimple')

    return function(config) {
        var title = ko.observable('Aloha!');
        title.subscribe(function(newValue) {
            console.log('Title Changed to', newValue);
        });
        title.subscribe(function(oldValue) {
            console.log('Will be changed from', oldValue);
        }, this, 'beforeChange');
        return {
            title: title,
            config: config,
            getTitle: function() {
                return this.title;
            },
            output: ko.computed(function() {
                return 'abc';
            })
        }
    }
});