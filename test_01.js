// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';
    let d = document.createElement('button');
    d.textContent = 'buttonbuttonbuttonbuttonbuttonbuttonbutton';
    d.style.position='absolute';
    d.style.top='100px';
    d.style.left='10px';
    d.addEventListener('click',(e)=>console.log('123'));
    document.body.appendChild(d);

    // Your code here...
})();