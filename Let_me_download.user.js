// ==UserScript==
// @name         Let me download
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?domain=instagram.com
// @downloadURL  https://github.com/Aikufurr/tampermonkey-scripts/raw/main/Let_me_download.user.js
// @updateURL    https://github.com/Aikufurr/tampermonkey-scripts/raw/main/Let_me_download.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    function checkDOMChange() {
        [...document.getElementsByTagName('img')].filter(e=>e.src.startsWith("https://instagram.")).filter(e=>e.parentElement.tagName=="DIV").forEach(e => {try{if (e.parentElement.parentElement.children[1].tagName=="DIV") {e.parentElement.parentElement.children[1].remove()}}catch(_){}})
        setTimeout( checkDOMChange, 1000 );
    }
    checkDOMChange();
})();

