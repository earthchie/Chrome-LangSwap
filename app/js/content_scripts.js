(function () {
    'use strict';

    chrome.runtime.onMessage.addListener(function (action, e, sendResponse) {
        
        if (action.name === 'getSelectedText') {
            console.log(window.getSelection().toString());
            sendResponse(window.getSelection().toString() || '');
        }

    });
    
}());