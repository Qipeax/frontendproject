const newTableValues = [
    "Базовое бэкенд-приложение",
    " HTTP-запросы4",
    "JSON и работа с ним",
    "HTTP-ответы",
    "Проектирование API",
    "Роутинг и его настройка",
    "NoSQL базы данных",
    "Обеспечение авторизации и доступа пользователей",
    "Работа сторонних сервисов уведомления и авторизации",
    "Основы ReactJS",
    "Работа с компонентами динамической DOM",
    "Использование хуков в React",
    "Основы микросервисной архитектуры",
    "Разработка классических модулей веб-приложений",
    "Разработка классических модулей веб-приложений", 
];
const columnIndex = 1;

function movingtitle() {
    const table = document.getElementById('lection');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');


    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
       if(cells.length > columnIndex && i < newTableValues.length)
       {
          cells[columnIndex].textContent = newTableValues[i];
       }
  }
}

const h1change = document.getElementById('h1alert');
 
h1change.addEventListener('click', function() {
    alert('Вы кликнули. Ну молодэц ваще!');
    console.log("Пизда нихуя не работает");
    
});
const doubleclick = document.getElementById('megaclick');

doubleclick.addEventListener('dblclick', function(){
    alert('Что ты ещё хочешь тут найти?');
});