## Timer lib

Библиотека для создания таймера в веб приложении.<br>


### Функция принимает
`.timer` - класс таймера<br>
`deadline` - дата окончания акции в формате '2024-09-30'.<br>


### Содержит функции:
`timer()` - создание таймера.<br>
`getTimeRemaining()` - функция высчитавает время до окончания акции и возвращает объект.<br>
`getZero()` - функция подставляет 0 к цифрам, если они меньше 10.<br>
`setClock()` - функция устанавливает таймер на страницу.<br>
`updateClock()` - функция обновляет таймер. Ее мы передаем в setInterval().<br>

![alt text](image.png)


