// Информация, на основе которой генерится сайт
let heroes = [
  [
    "Мишка",
    "Защитник",
    "https://masterpiecer-images.s3.yandex.net/9f426baea22c11ee8617fe970543874c:upscaled",
  ],
  [
    "Утя",
    "Помошник",
    "https://masterpiecer-images.s3.yandex.net/bd938d59a09b11ee9c85d6f07e64960d:upscaled",
  ],
  [
    "Енотя",
    "Бард",
    "https://masterpiecer-images.s3.yandex.net/1557cccc9d9011ee996b12e9024ad7c8:upscaled",
  ],
];

let heroesContainer = document.getElementById("heroesContainer");

// Функция, которая отображает героев на странице

function displayHeroes() {
  // Достаём контейнер, в который будем добавлять новые карточки героев
  let heroesContainer = document.getElementById("heroesContainer");

  // Очищаем текущее содержимое
  heroesContainer.innerHTML = "";

  // С помощью цикла проходимся по массиву героев
  // (переменная i будет равняться индексу элемента в массиве)
  for (let i = 0; i < heroes.length; i++) {
    // Создаём элемент, в который будем добавлять информацию о герое
    let heroDiv = document.createElement("div");
    //heroDiv.className = "card";

    // Записываем в созданный элемент разметку, подставляя необходимые данные
    // (данные достаём из массивов по индексу – если не помнишь, как это делать,
    // перечитай наш урок про массивы)
    // Так как элемент массива heroes[i] и есть массив - hero = ["имя", "класс"],
    // нужно взять отдельно имя и класс по индексу массива: [0]- имя [1]- класс

    heroDiv.innerHTML = `<img src=${heroes[i][2]} /><div class="textCard"><h3>${heroes[i][0]}</h3><hr /><p>Класс героя: ${heroes[i][1]}</p></div>`;

    // Добавляем карточку героя в контейнер
    heroesContainer.appendChild(heroDiv);
  }
}

function addHero() {
  /* Ищем поля ввода */
  let nameInput = document.getElementById("heroName");
  let classInput = document.getElementById("heroClass");
  let avatarInput = document.getElementById("heroImg");

  if (nameInput.value && classInput.value && avatarInput) {
    // Создаем массив с новым персонажем
    let newHero = [nameInput.value, classInput.value, avatarInput.value];

    // Кидаем нового персонажа в массив с героями на нашем сайте
    heroes.push(newHero);

    // Используем функцию, которую мы подготовили в прошлом уроке,
    // чтобы обновить список героев на странице
    displayHeroes();

    nameInput.value = "";
    classInput.value = "";
    avatarInput.value = "";
  } else {
    alert("Введите Имя и Класс и Аватар");
  }
}

// Вызываем написанную функцию

document.getElementById("addButton").addEventListener("click", addHero);
displayHeroes();
