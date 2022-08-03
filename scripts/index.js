//ПЕРЕМЕННЫЕ

// Делаем для удобства объект
const config = {
  title: ".profile__title",
  subTitle: ".profile__subtitle",
  popupEditProfile: "#popup_edit_profile",
  buttonEdit: ".profile__button-edit",
  titleEdit: '.popup__text[name="name"]',
  subTitleEdit: '.popup__text[name="subtitle"]',
  popupFormEditPofileTable: '.popup__form[name="popupFormEditPofileTable',
  buttonAddButton: ".profile__add-button",
  popupAdd: "#popup_add",
  textValuePopupTitle: "#text-input-title",
  textValuePopupSubtitle: "#text-input-subtitle",
  elementsCard: ".elements",
  popupBigOpenImage: "#popup-photo",
  buttonPopupBigImageClose: ".popup__close[name='buttonPopupBigImgClose']",
  newElement: "#newElement",
  popupClose: ".popup__close",
  popupOpened: "popup_opened",
  elementText: ".element__text",
  elementImage: ".element__img",
  popupTextColorFontGrey: "popup__text_color-font_grey",
  popupTitleImage: ".popup__title-img",
  popupPhotoBig: ".popup__photo",
  elementLike: ".element__like",
  elementLikeActive: "element__like_active",
  elementTrash: ".element__trash",
  element: ".element",
};

const title = document.querySelector(config.title);
const subTitle = document.querySelector(config.subTitle);
const popupEditProfile = document.querySelector(config.popupEditProfile);
const popupButtonCloseEditProfile = popupEditProfile.querySelector(config.popupClose);
const buttonEdit = document.querySelector(config.buttonEdit);
const titleEdit = document.querySelector(config.titleEdit);
const subTitleEdit = document.querySelector(config.subTitleEdit);
const popupFormEditPofileTable = document.querySelector(
  config.popupFormEditPofileTable
);
const buttonAddButton = document.querySelector(config.buttonAddButton);
//Форма добавления ищем по айди и скидываем в константу
const popupAdd = document.querySelector(config.popupAdd);
const popupEditCloseButton = popupAdd.querySelector(config.popupClose);
const textValuePopupTitle = document.querySelector(
  config.textValuePopupTitle
);
const textValuePopupSubtitle = document.querySelector(
  config.textValuePopupSubtitle
);
const elementsCard = document.querySelector(config.elementsCard);
//ДЛЯ POPUP c КАРТИНКОЙ
//Найдем наш попап с картинкой и закинем его в константу PopupImg
const popupBigOpenImage = document.querySelector(config.popupBigOpenImage);
//Найдем в этом попапе нашу кнопку "закрытие" с классом  popup__close
//и закинем это все в  popupClose
const buttonPopupBigImageClose = document.querySelector(
  config.buttonPopupBigImageClose
);
const popupPhoto = document.querySelector(config.popupBigOpenImage);
const popupPhotoBig = popupPhoto.querySelector(config.popupPhotoBig);
const newElement = document
  .querySelector(config.newElement)
  .content.querySelector(config.element);
//класс где находится title большой картинки (там пока пусто)
const popupTitleImage = document.querySelector(config.popupTitleImage);

//  *****  ФУНКЦИИ  *****
 
function createCard(card) {
  const newTodoCard = newElement.cloneNode(true);
  //теперь находим класс Тайтла в контстанте newTodoCard, с помощью textContent кладем туда нашу константу с title
  newTodoCard.querySelector(config.elementText).textContent = card.name;
  //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
  newTodoCard.querySelector(config.elementImage).src = card.link;
  //Добавляем alt картинки из массива
  newTodoCard.querySelector(config.elementImage).alt = card.alt;
  const buttonTrash = newTodoCard.querySelector(config.elementTrash);
  const elementLike = newTodoCard.querySelector(config.elementLike);
  const elementImage = newTodoCard.querySelector(config.elementImage);
  const elementLikeActive = config.elementLikeActive;
  //Удаляем карточки
  buttonTrash.addEventListener("click", function () {
    newTodoCard.remove();
  });
  //Лайкаем сердечки
  elementLike.addEventListener("click", function () {
    elementLike.classList.toggle(elementLikeActive);
  });

  //Большая картинка при нажатие на неё
  elementImage.addEventListener("click", function () {
    popupTitleImage.textContent = newTodoCard.querySelector(config.elementText).textContent;
    popupPhotoBig.src = newTodoCard.querySelector(config.elementImage).src;
    popupPhotoBig.alt = newTodoCard.querySelector(config.elementImage).alt;
//добавляем open class
    popupOpen(popupBigOpenImage);

  });

  return newTodoCard;
}

//Делаем функцию что б добавлялись карточки, как работает - пока понятно на 50%
function renderCard(data, container) {
  const cardAdd = createCard(data);
  container.prepend(cardAdd);
}

//берет создание карточек "cardCreate" и с помощью цикла вставляет на страницу
function createCardsPage() {
  initialCards.forEach((item) => renderCard(item, elementsCard));
  //Прошу, это нужно мне оставить, что б понимать логику функции =>
  // initialCards.forEach(cardCreateNew);
}

//вызываем функцию для добавление карточек из массива
createCardsPage();

//Добавление данных форму
popupAdd.addEventListener("submit", function (event) {
  //что б не перезагружалась страница
  event.preventDefault();
  const newCard = [
    {
      //Константа, что текст Титла, что ввели в форме
      name: textValuePopupTitle.value,
      //Константа, ссылка на картинку, что ввели в форме
      link: textValuePopupSubtitle.value,
      alt: textValuePopupTitle.value,
    },
  ];
  function CreateNewCardPage() {
    newCard.forEach((item) => renderCard(item, elementsCard));
    popupClose(popupAdd)
    // addCard.forEach(cardCreateNew);
  }
  CreateNewCardPage();
 // popupClose(popupAdd);
});
changeColorText
//изменения текста title в форме
function changeColorText(text) {
  //Удаляем текст Value
  const textRemove = document.querySelector(text);
  //Делаем там пустую строку
  textRemove.value = "";
  textValuePopupTitle.classList.remove(text);
}

//Открыть/закрыть все попапы (кроме большой картинки) и нажатие на крестик
function popupOpen(modalWindow) {
  modalWindow.classList.add(config.popupOpened);
}
function popupClose(modalWindow) {
  modalWindow.classList.remove(config.popupOpened);
}

//Открыть/закрыть попап большой картинки
    buttonPopupBigImageClose.addEventListener("click", function () {
      popupClose(popupBigOpenImage);
    });

//  *****  ОБРАБОТЧИКИ *****

// при нажатии на value меняется цвет title
textValuePopupTitle.addEventListener(
  "click",
  changeColorText(config.textValuePopupTitle)
);

// при нажатии на value меняется цвет subTitle
textValuePopupSubtitle.addEventListener("click", changeColorText(config.textValuePopupSubtitle));

// Редактирование Титла 
//Включаем кнопку, дословно добавляем к классу popup + класс popup-Open
buttonEdit.addEventListener("click", function () {
  popupOpen(popupEditProfile);
  titleEdit.value = title.textContent;
  subTitleEdit.value = subTitle.textContent;
});

//Закрываем попап редактирования Титла без сохранения с помощью функции
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
// Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", function () {
  popupOpen(popupAdd);
});

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupEditCloseButton.addEventListener("click", function () {
  popupClose(popupAdd);
});
