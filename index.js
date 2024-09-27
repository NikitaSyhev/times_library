timer('.timer', '2024-09-30');


function timer(id, deadline) {

    function getTimeRemaining(deadline) {
         const timeRemain = Date.parse(deadline) - Date.parse(new Date()),
               days = Math.floor(timeRemain / (1000 * 60 * 60 * 24)),
               hours = Math.floor((timeRemain / (1000 * 60 * 60) % 24 )),
               minutes = Math.floor( (timeRemain/1000/60) % 60 ),
               seconds = Math.floor((timeRemain / 1000) % 60);
               
               if(timeRemain < 0) {
                 return {
                     'total': 0,
                     'days': 0,
                     'hours': 0,
                     'minutes': 0,
                     'seconds': 0,
                 };
               }
               else {
                 return {
                     'total': timeRemain,
                     'days': days,
                     'hours': hours,
                     'minutes': minutes,
                     'seconds': seconds,
                 };
         }
    }
 
    function getZero(num) {
         if( num >= 0 && num < 10) {
             return `0${num}`;
         }
         else {
             return num;
         }
    }
 

    function setClock(selector, deadline) {
         const timer = document.querySelector(selector),
               days = timer.querySelector('#days'),
               hours = timer.querySelector('#hours'),
               minutes = timer.querySelector('#minutes'),
               seconds = timer.querySelector('#seconds'),

               timeInterval = setInterval(updateClock, 1000);
 
    //устраняем мерцание таймера
    updateClock();
 
    //функция обновления таймера на странице
    function updateClock() {
             const timeRemain = getTimeRemaining(deadline);
             days.innerHTML = getZero(timeRemain.days);
             hours.innerHTML = getZero(timeRemain.hours);
             minutes.innerHTML = getZero(timeRemain.minutes);
             seconds.innerHTML = getZero(timeRemain.seconds);
             //условие остановки таймера   
             if(timeRemain.total <= 0) {
                 clearInterval(timeInterval);
             }
         }
    }
    setClock(id ,deadline);
}