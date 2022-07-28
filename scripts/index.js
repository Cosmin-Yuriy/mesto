//ПЕРЕМЕННЫЕ

const title = document.querySelector(".profile__title");
const subTitle = document.querySelector(".profile__subtitle");
const popupEditProfile = document.querySelector("#popup_edit_profile");
const popupButtonCloseEditProfile =
  popupEditProfile.querySelector(".popup__close");
const buttonEdit = document.querySelector(".profile__button-edit");
const titleEdit = document.querySelector('.popup__text[name="name"]');
const subTitleEdit = document.querySelector('.popup__text[name="subtitle"]');
// Делаем константу для для title карточки
const titleCard = document.querySelector(".element__text");
const popupFormEditPofileTable = document.querySelector(
  '.popup__form[name="popupFormEditPofileTable"]'
);
const buttonAddButton = document.querySelector(".profile__add-button");
//Форма добавления ищем по айди и скидываем в константу
const popupAdd = document.querySelector("#popup_add");
//Сделали переменную с помощью id
//теперь делаем постоянную ищем нужный класс который находится там
const popupEditCloseButton = popupAdd.querySelector(".popup__close");
//Сделали переменную с помощью id для текста title и subtitle ДЛЯ ПЛОХОГО МЕТОДА
const textValuePopupTitle = document.querySelector("#text-input-title");
const textValuePopupSubtitle = document.querySelector("#text-input-subtitle");
//Кнопка like берем полность блок Elements
const elementsCard = document.querySelector(".elements");

//Сделали переменную с помощью id для текста title и subtitle
const templatePopform = document.querySelector(".template-todo");
//ДЛЯ POPUP c КАРТИНКОЙ
//Найдем наш попап с картинкой и закинем его в константу PopupImg
const popupBigOpenImage = document.querySelector("#popup-photo");
//Найдем в этом попапе нашу кнопку "закрытие" с классом  popup__close
//и закинем это все в  popupClose
const buttonPopupBigImageClose = document.querySelector(
  ".popup__close[name='buttonPopupBigImgClose']"
);

const popupPhoto = document.querySelector("#popup-photo");
const newElement = document.querySelector("#newElement");
//создаем константу, из списка карточек Ul - li

//ФУНКЦИИ

// Здесь мы перебираем массив методом forEach - аргументом выступает функция (item туда
// направляется каждый элемент массива, соответсвенно каждая итерации внутри функции, там мы
// и колдуем также как и в For цикле)
initialCards.forEach(function (item) {
  // обязательно вставлять cloneNode в цикл, иначе не будет заново клонироваться объект/элемент
  const newElementAdd = newElement.content.cloneNode(true);
  //берем нашу константу через къериселектор указываем какой класс берем, и то, что мы будем
  //колдавать с текстом "textContent" - туда забрасываем из массива, что указываем "item"
  //и объект "name"
  newElementAdd.querySelector(".element__text").textContent = item.name;
  //берем нашу константу через къериселектор указываем какой класс берем, и то, что мы будем
  //колдавать с ссылкой "src" - туда забрасываем из массива, что указываем "item"
  //и объект "link"
  newElementAdd.querySelector(".element__img").src = item.link;
  //Добавляем alt картинки из массива
  newElementAdd.querySelector(".element__img").alt = item.alt;
  //Затем перед карточками "elementsCard" в начале выбрасываем это все c помощью prepend
  elementsCard.prepend(newElementAdd);
});

//Функция изменения текста title в форме
function changeColorTextTitle() {
  //Удаляем текст Value
  let RemoveTitle = document.getElementById("text-input-title");
  //Делаем там пустую строку
  RemoveTitle.value = "";
  textValuePopupTitle.classList.remove("popup__text_color-font_grey");
}

//Функция изменения текста subTitle в форме
function changeColorTextSubtitle() {
  //Удаляем текст Value
  let RemoveSubitle = document.getElementById("text-input-subtitle");
  //Делаем там пустую строку
  RemoveSubitle.value = "";
  textValuePopupSubtitle.classList.remove("popup__text_color-font_grey");
}

//Новые функция открыть/закрыть попап и нажатие на крестик|28/07/2022|
function popupOpen(modalWindow) {
  modalWindow.classList.add("popup_opened");
}

function popupClose(modalWindow) {
  modalWindow.classList.remove("popup_opened");
  console.log("Работает клоз");
}

//ОБРАБОТЧИКИ

// при нажатии на value меняется цвет title
const TextEditNewForm = textValuePopupTitle.addEventListener(
  "click",
  changeColorTextTitle
);

// при нажатии на value меняется цвет subTitle
textValuePopupSubtitle.addEventListener("click", changeColorTextSubtitle);

// 1 POPUP
//Включаем кнопку, дословно добавляем к классу popup + класс popup-Open
buttonEdit.addEventListener("click", function () {
  popupOpen(popupEditProfile);
  titleEdit.value = title.textContent;
  subTitleEdit.value = subTitle.textContent;
});

//Закрываем наш попап крестиком без сохранения с помощью функции
popupButtonCloseEditProfile.addEventListener("click", function () {
  popupClose(popupEditProfile);
});

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupFormEditPofileTable.addEventListener("submit", function (event) {
  event.preventDefault();
  title.textContent = titleEdit.value;
  subTitle.textContent = subTitleEdit.value;
  popupClose(popupEditProfile);
});

// 2 POPUP
//Форма редактирования
//Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", function () {
  popupOpen(popupAdd);
});

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupEditCloseButton.addEventListener("click", function () {
  popupClose(popupAdd);
});

//ФУНКЦИЯ - Добавление данных форму

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupAdd.addEventListener("submit", function (event) {
  //что б не перезагружалась страница
  event.preventDefault();
  //Константа, что текст Титла, что ввели в форме
  const titleCardNew = textValuePopupTitle.value;
  //Константа, ссылка на картинку, что ввели в форме
  const link = textValuePopupSubtitle.value;
  //Перекидываем в константу темлейт, открываем его - clone(true)
  const todoNewCard = templatePopform.content.cloneNode(true);

  //теперь находим класс Тайтла в контстанте todoNewCard, с помощью textContent кладем туда нашу константу с title
  todoNewCard.querySelector(".element__text").textContent = titleCardNew;
  //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
  todoNewCard.querySelector(".element__img").src = link;
  //Теперь берем константу где указан блок Ul "Elements", перед вложением li (prepend) укладываем нашу измененную константу
  elementsCard.prepend(todoNewCard);
  popupClose(popupAdd);
});

// ЧЕРНОЕ СЕРДЦЕ при КЛИКЕ

//При клике на сердце за этим следит evt
elementsCard.addEventListener("click", function (evt) {
  // будет найден с помощью targe имеено этот класс - кидаем его в константу Pushlike
  //будет следить за все где нажмем, то что есть в классе "elements"
  const clickLike = evt.target;
  //смотрим через classlist (получаем список классов в "clickLike"), и с помощбю toogle -
  //если нету класса "element__like_active", то его добавляем, если есть убираем
  if (clickLike.classList.contains("element__like")) {
    clickLike.classList.toggle("element__like_active");
  }
});

//При клике на Trash за этим следит evt
elementsCard.addEventListener("click", function (evt) {
  // будет найден с помощью target (ссылка на объект, которым было
  //инициировано событие. Например, если событие произошло на поле
  // ввода, мы получим ссылку на этот DOM элемент.) именно этот
  // класс - кидаем его в константу Pushlike
  const clickTrash = evt.target;

  if (clickTrash.classList.contains("element__trash")) {
    //ищет ближайший родительский
    clickTrash.closest(".element").remove();
  }
});

//При клике на картинку за этим следит evt
elementsCard.addEventListener("click", function (evt) {
  // будет найден с помощью target (ссылка на объект, которым было
  //инициировано событие. Например, если событие произошло на поле
  // ввода, мы получим ссылку на этот DOM элемент.) именно этот
  // класс - кидаем его в константу
  const clickImg = evt.target;
  //Если мы кликнули на картинку, а в ней, кликнутой есть стиль element__img,
  // то сделаем следующее:
  if (clickImg.classList.contains("element__img")) {
    //Убираем наш  dispalay none c добавлением класса popup_opened в наш попап
    popupOpen(popupBigOpenImage);

    //Закрываем наш попап крестиком с помощью функции (если событие произошло нажали на крестик
    buttonPopupBigImageClose.addEventListener("click", function () {
      popupClose(popupBigOpenImage);
    });
    //закидываем ссылку фото Элемента на которую нажали и название картинки
    const link = clickImg.src;
    const elementImgBig = clickImg.closest(".element");
    const titleImg = elementImgBig.querySelector(".element__text").textContent;
    //Теперь эту сслыку забрасываем в наш попап в src
    popupBigOpenImage.querySelector(".popup__photo").src = link;
    popupBigOpenImage.querySelector(".popup__title-img").textContent = titleImg;
  }
});
