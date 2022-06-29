const popupCloseButton = document.querySelector(".popup__close");
const Title = document.querySelector(".profile__title");
const SubTitle = document.querySelector(".profile__subtitle");
const popup = document.querySelector(".popup");
const buttonEdit = document.querySelector(".profile__button-edit");
const editTitle = document.querySelector('.popup__text[name="name"]');
const editSubTitle = document.querySelector('.popup__text[name="subtitle"]');
// Делаем константу для для Title карточки
const TitleCard = document.querySelector(".element__text");
const popupForm = document.querySelector(".popup__form");
const buttonAddButton = document.querySelector(".profile__add-button");
//Сделали переменную с помощью id
const popupEdit = document.getElementById("popup_add");
//теперь делаем постоянную ищем нужный класс который находится там
const popupCloseButtonEdit = popupEdit.querySelector(".popup__close");
//console.log(popupCloseButtonEdit);
//Сделали переменную с помощью id для текста title и subtitle ДЛЯ ПЛОХОГО МЕТОДА
const textValuePopupTitle = document.getElementById("text-input-title");
const textValuePopupSubtitle = document.getElementById("text-input-subtitle");
//Кнопка like берем полность блок Elements
const ButtonLike = document.querySelector(".elements");
const FirstCardGrid = document.querySelector(".element");

//Сделали переменную с помощью id для текста title и subtitle
const TemplatePopform = document.querySelector(".template-todo");
//ДЛЯ POPUP c КАРТИНКОЙ
//Найдем наш попап с картинкой и закинем его в константу PopupImg
const popupImg = document.getElementById("popup-photo");
//Найдем в этом попапе нашу кнопку "закрытие" с классом  popup__close
//и закинем это все в  popupClose
const popupClose = popupImg.querySelector(".popup__close");

//Форма добавления ищем по айди и скидываем в константу
const popupAdd = document.getElementById("popup_add");
const popupPhoto = document.getElementById("popup-photo");


// 1 POPUP
//Включаем кнопку, дословно добавляем к классу popup + класс popup-Open
buttonEdit.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  editTitle.value = Title.textContent;
  editSubTitle.value = SubTitle.textContent;
});

//Закрываем наш попап крестиком без сохранения с помощью функции
popupCloseButton.addEventListener("click", closePopup);

// Создаем функцию, удалять класс c flex
function closePopup() {
  popup.classList.remove("popup_opened");
}

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupForm.addEventListener("submit", function (event) {
  console.log(event);
  event.preventDefault();
  Title.textContent = editTitle.value;
  SubTitle.textContent = editSubTitle.value;
  closePopup();
});

// 2 POPUP
//Форма редактирования
//Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", function () {
  popupEdit.classList.add("popup_opened");
});

//ФУНКЦИЯ - Корректировка текста
const CorrectTextForm = (text) => {
  //Удаляем текст Value
  const RemoveTitle = document.getElementById("text-input-title");
  //Делаем там пустую строку
  RemoveTitle.value = "Название";
  // меняем цвет Title
  textValuePopupTitle.classList.add("popup__text_color-font_grey");
  // при нажатии на value меняется цвет обратно серый Subtitle
  textValuePopupSubtitle.classList.add("popup__text_color-font_grey");
  const RemoveSubitle = document.getElementById("text-input-subtitle");
  RemoveSubitle.value = "Ссылка на картинку";
};

//Закрываем наш попап edit крестиком без сохранения с помощью функции
popupCloseButtonEdit.addEventListener("click", closePopupEdit);

// Создаем функцию, удалять класс c flex
function closePopupEdit() {
  popupEdit.classList.remove("popup_opened");
  //Корректируем текст
  CorrectTextForm();
}

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupForm.addEventListener("submit", function (event) {
  console.log(event);
  event.preventDefault();
  closePopupEdit();
});

//Функция изменения текста в форме
// при нажатии на value меняется цвет Title
const TextEditNewForm = textValuePopupTitle.addEventListener(
  "click",
  function () {
    //Удаляем текст Value
    const RemoveTitle = document.getElementById("text-input-title");
    //Делаем там пустую строку
    RemoveTitle.value = "";
    textValuePopupTitle.classList.remove("popup__text_color-font_grey");
  }
);

// при нажатии на value меняется цвет Subtitle
textValuePopupSubtitle.addEventListener("click", function () {
  const RemoveSubitle = document.getElementById("text-input-subtitle");
  RemoveSubitle.value = "";
  textValuePopupSubtitle.classList.remove("popup__text_color-font_grey");
});

//Массив из задания титлы картинки и ссылки на них
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//создаем константу, из списка карточек Ul - li
const addCard = document.querySelector(".elements");

//Делаем константу(стрелочную функцию) с аргументами для проброса данных
//Титла картинки и ссылки на картинку
const creatTodo = (text, src) => {
  return `
  <li class="element">
<img src="${src}" alt="Новая картинка" class="element__img">
<button class="element__trash"></button>
<div class="element__subtitle">
  <p class="element__text">${text}</p>
  <button class="element__like"></button>
</div>
</li>
  `;
};

// Здесь мы перебираем массив методом forEach - аргументом выступает функция (item туда
// направляется каждый элемент массива, соответсвенно каждая итерации внутри функции, там мы
// и колдуем также как и в For цикле)
initialCards.forEach(function (item) {
  //берем константу куда мы сделали проброс из класса, и после этого класса мы вкладываем
  // creatTodo (где хранится код, с аргументами для проброса двух данных text - Титл картинки и
  // src - ссылка на картинку)
  // туда мы подставляем данные из массива который перебираем item.name, item.link
  addCard.insertAdjacentHTML("afterbegin", creatTodo(item.name, item.link));
});

//ФУНКЦИЯ - Добавление данных форму

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupAdd.addEventListener("submit", function (event) {
  //что б не перезагружалась страница
  event.preventDefault();
  //Константа, что текст Титла, что ввели в форме
  const TitleCardNew = textValuePopupTitle.value;
  //Константа, ссылка на картинку, что ввели в форме
  const link = textValuePopupSubtitle.value;
  //Перекидываем в константу темлейт, открываем его - clone(true)
  const todo = TemplatePopform.content.cloneNode(true);
  //теперь находим класс Тайтла в контстанте todo, с помощью textContent кладем туда нашу константу с Title
  todo.querySelector(".element__text").textContent = TitleCardNew;
  //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
  todo.querySelector(".element__img").src = link;
  //Теперь берем константу где указан блок Ul "Elements", перед вложением li (prepend) укладываем нашу измененную константу
  addCard.prepend(todo);
  closePopupEdit();
  //  Функция - корректировка текста
  CorrectTextForm();
});

// ЧЕРНОЕ СЕРДЦЕ при КЛИКЕ

//При клике на сердце за этим следит evt
ButtonLike.addEventListener("click", function (evt) {
  // будет найден с помощью targe имеено этот класс - кидаем его в константу Pushlike
  const pushLike = evt.target;
  //Проверяем Pushlike с помощью contains, если класс есть с прозрачным сердцем - тру, и черным фолс, то добавляем
  //черное сердце

  if (
    pushLike.classList.contains("element__like") == true &&
    pushLike.classList.contains("element__like_active") == false
  ) {
    pushLike.classList.add("element__like_active");
    //Проверяем Pushlike с помощью contains, если класс есть с прозрачным сердцем - тру, и черным true, то удаляем класс с
    //черным сердцем
  } else if (
    pushLike.classList.contains("element__like") == true &&
    pushLike.classList.contains("element__like_active") == true
  ) {
    pushLike.classList.remove("element__like_active");
  }
});

const ButtonClickElement = document.querySelector(".elements");

//При клике на Trash за этим следит evt
ButtonClickElement.addEventListener("click", function (evt) {
  // будет найден с помощью target (ссылка на объект, которым было
  //инициировано событие. Например, если событие произошло на поле
  // ввода, мы получим ссылку на этот DOM элемент.) именно этот
  // класс - кидаем его в константу Pushlike
  const ButtonClickElement = evt.target;

  if (ButtonClickElement.classList.contains("element__trash")) {
    ButtonClickElement.parentElement.remove();
  }
});

//При клике на картинку за этим следит evt
ButtonClickElement.addEventListener("click", function (evt) {
  // будет найден с помощью target (ссылка на объект, которым было
  //инициировано событие. Например, если событие произошло на поле
  // ввода, мы получим ссылку на этот DOM элемент.) именно этот
  // класс - кидаем его в константу Pushlike
  const ButtonClickElement = evt.target;
  //Если мы кликнули на картинку, а в ней, кликнутой есть стиль element__img,
  // то сделаем следующее:
  if (ButtonClickElement.classList.contains("element__img")) {
    //Убираем наш  dispalay none c добавлением класса popup_opened в наш попап
    popupImg.classList.add("popup_opened");

    // Создаем функцию, удалять класс popup_opened
    const closePopupEdit = () => {
      //удаляем класс popup_opened из попапа с id popup-photo
      popupImg.classList.remove("popup_opened");
    };
    //Закрываем наш попап крестиком с помощью функции (если событие произошло нажали на крестик
    // popupClose в нем класс popup__close)
    popupClose.addEventListener("click", closePopupEdit);
    //закидываем ссылку фото Элемента на которую нажали
    const link = (element__img = ButtonClickElement.src);
    //Теперь эту сслыку забрасываем в наш попап в src
    popupImg.querySelector(".popup__photo").src = link;
  }
});
