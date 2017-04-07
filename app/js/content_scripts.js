(function () {
    'use strict';

    chrome.runtime.onMessage.addListener(function (action, e, sendResponse) {
        
        if (action.name === 'getSelectedText') {
            sendResponse(window.getSelection().toString() || '');
        }

    });
    
}());