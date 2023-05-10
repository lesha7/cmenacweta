var colors = ["red", "orange", "blue"]; // массив с цветами
var cells = document.getElementsByTagName("td"); // получаем все ячейки таблицы
var index = 0; // начальный индекс цвета
var clicks = 0; // количество кликов

function changeColor() {
 clicks++; // увеличиваем количество кликов
 this.style.backgroundColor = colors[index]; // меняем цвет ячейки
 index = (index + 1) % colors.length; 
 checkTable(); 
 document.getElementById("clicks").innerHTML = clicks; 
}

for (var i = 0; i < cells.length; i++) {
 cells[i].addEventListener("click", changeColor); 
}

function checkTable() {
 var firstColor = cells[0].style.backgroundColor; 
 for (var i = 1; i < cells.length; i++) {
  if (cells[i].style.backgroundColor != firstColor) {
   return; 
  }
 }
 alert("Вы выиграли за " + clicks + " кликов!"); // если все ячейки одного цвета, выводим сообщение о победе
}

function reset() {
 for (var i = 0; i < cells.length; i++) {
  cells[i].style.backgroundColor = ""; 
 }
 index = 0; 
 clicks = 0;
 document.getElementById("clicks").innerHTML = clicks; 
}