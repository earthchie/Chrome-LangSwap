(function () {
    'use strict';

    var $input = document.getElementById('input'),
        run = function (action, tabId, callback) {
            chrome.tabs.getSelected(null, function (tab) {
                chrome.tabs.sendMessage(tabId, {name: action}, callback);
            });
        },

        render = function () {

            var keymap = {

                    '1': 'ๅ',
                    '2': '/',
                    '3': '-',
                    '4': 'ภ',
                    '5': 'ถ',
                    '6': 'ุ',
                    '7': 'ึ',
                    '8': 'ค',
                    '9': 'ต',
                    '0': 'จ',
                    '-': 'ข',
                    '=': 'ช',
                    '+': '๙',
                    //'!': '+' // Most people does not mistake ! with +. so no need to convert it.
                    '@': '๑',
                    '#': '๒',
                    '$': '๓',
                    '%': '๔',
                    '^': 'ู',
                    '&': '฿',
                    '*': '๕',
                    '(': '๖',
                    ')': '๗',
                    '_': '๘',
                    'q': 'ๆ',
                    'w': 'ไ',
                    'e': 'ำ',
                    'r': 'พ',
                    't': 'ะ',
                    'y': 'ั',
                    'u': 'ี',
                    'i': 'ร',
                    'o': 'น',
                    'p': 'ย',
                    '[': 'บ',
                    ']': 'ล',
                    '\\': 'ฃ',
                    'Q': '๐',
                    '.': 'ใ',
                    '\"': '.',
                    'W': '\"',
                    'E': 'ฎ',
                    'R': 'ฑ',
                    'T': 'ธ',
                    'Y': 'ํ',
                    'U': '๊',
                    'I': 'ณ',
                    'O': 'ฯ',
                    'P': 'ญ',
                    '{': 'ฐ',
                    '}': ',',
                    '|': 'ฅ',
                    'a': 'ฟ',
                    's': 'ห',
                    'd': 'ก',
                    'f': 'ด',
                    'g': 'เ',
                    'h': '้',
                    'j': '่',
                    'k': 'า',
                    'l': 'ส',
                    ';': 'ว',
                    "'": 'ง',
                    "A": 'ฤ',
                    'S': 'ฆ',
                    'D': 'ฏ',
                    'F': 'โ',
                    'G': 'ฌ',
                    'H': '็',
                    'J': '๋',
                    'K': 'ษ',
                    'L': 'ศ',
                    ':': 'ซ',
                    'z': 'ผ',
                    'x': 'ป',
                    'c': 'แ',
                    'v': 'อ',
                    'b': 'ิ',
                    'n': 'ื',
                    'm': 'ท',
                    ',': 'ม',
                    '/': 'ฝ',
                    'Z': '(',
                    'X': ')',
                    'C': 'ฉ',
                    'V': 'ฮ',
                    'B': 'ฺ',
                    'N': '์',
                    '?': 'ฦ',
                    'M': '?',
                    '<': 'ฒ',
                    '>': 'ฬ'
                },
                $result = document.getElementById('result'),
                result = '';
            
            $input.value.split('').map(function (c) {
                result += keymap[c] || c;
            });
            
            if (result === '') {
                $result.removeAttribute('class');
            } else {
                $result.innerHTML = result;
                $result.setAttribute('class', 'active');
            }

        };

    $input.onkeyup = render;

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {

        run('getSelectedText', tabs[0].id, function (text) {
            $input.value = text;
            render();
        });

    });
}());
