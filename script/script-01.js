'use strict';

// const inputText = document.getElementById('myText');
// const myBtn = document.getElementById('myBtn');
// const text = document.getElementById('text');

// const showText = function() {
//     // text.textContent = localStorage.myText;
//     text.textContent = localStorage.getItem('memory');
// };

// myBtn.addEventListener('click', function(){
//     // localStorage.myText = inputText.value;
//     localStorage.setItem('memory', inputText.value);
//     showText();
// });

// localStorage.removeItem('myText');

// showText();


// document.cookie = 'имя=значение';
// document.cookie = 'имя1=значение2';
// document.cookie = 'имя2=значение2';

// document.cookie = 'hope=life; expires=Tue, 7 May 2024 00:00:00 GMT';

// console.log(document.cookie.split(' ')[1]);


function setCookie(key, value, year, month, day, path, domain, secure){
 let cookieStr = key + '=' + encodeURI(value);
 if (year) {
     const expires = new Date(year, month, day);
     cookieStr += '; expires=' + expires.toGMTString();
 }

 cookieStr += path ? '; path=' + path : '';
 cookieStr += domain ? '; domain=' + domain : '';
 cookieStr += secure ? '; secure' : '';

 document.cookie = cookieStr;
};

setCookie('Привет', 'Мир');

setCookie('любимый праздник детей', 'новый год', 2022, 1, 1);

console.log(decodeURI(document.cookie));
