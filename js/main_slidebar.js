control_left = document.querySelector(".slidebar__control_left");
control_right = document.querySelector(".slidebar__control_right");

control_left.addEventListener("click", function(){
  active_element = document.querySelector(".slidebar__logotype-active"); //Находим элемент по классу
  var activeId = active_element.id; //Считываем его id
  active_element.classList.remove("slidebar__logotype-active");//удаляем активный класс
  active_element.classList.add("slidebar__logotype");//добавляем неактивный класс
  activeId -= 1;//на один id назад
  var activeEl = document.getElementById(activeId); // находим элемент по его id
  activeEl.classList.remove("slidebar__logotype"); // удаляем неактивный класс
  activeEl.classList.add("slidebar__logotype-active"); // присваиваем активный
})

control_right.addEventListener("click", function(){
  active_element = document.querySelector(".slidebar__logotype-active"); //Находим элемент по классу
  var activeId = active_element.id; //Считываем его id
  active_element.classList.remove("slidebar__logotype-active");//удаляем активный класс
  active_element.classList.add("slidebar__logotype");//добавляем неактивный класс
  activeId -= -1;//на один id вперед
  var activeEl = document.getElementById(activeId); // находим элемент по его id
  activeEl.classList.remove("slidebar__logotype"); // удаляем неактивный класс
  activeEl.classList.add("slidebar__logotype-active"); // присваиваем активный
})
