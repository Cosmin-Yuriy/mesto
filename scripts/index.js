//ПЕРЕМЕННЫЕ

// Делаем для удобства объект
const elements = {
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

const title = document.querySelector(elements.title);
const subTitle = document.querySelector(elements.subTitle);
const popupEditProfile = document.querySelector(elements.popupEditProfile);
const popupButtonCloseEditProfile = popupEditProfile.querySelector(elements.popupClose);
const buttonEdit = document.querySelector(elements.buttonEdit);
const titleEdit = document.querySelector(elements.titleEdit);
const subTitleEdit = document.querySelector(elements.subTitleEdit);
const popupFormEditPofileTable = document.querySelector(
  elements.popupFormEditPofileTable
);
const buttonAddButton = document.querySelector(elements.buttonAddButton);
//Форма добавления ищем по айди и скидываем в константу
const popupAdd = document.querySelector(elements.popupAdd);
const popupEditCloseButton = popupAdd.querySelector(elements.popupClose);
const textValuePopupTitle = document.querySelector(
  elements.textValuePopupTitle
);
const textValuePopupSubtitle = document.querySelector(
  elements.textValuePopupSubtitle
);
const elementsCard = document.querySelector(elements.elementsCard);
//ДЛЯ POPUP c КАРТИНКОЙ
//Найдем наш попап с картинкой и закинем его в константу PopupImg
const popupBigOpenImage = document.querySelector(elements.popupBigOpenImage);
//Найдем в этом попапе нашу кнопку "закрытие" с классом  popup__close
//и закинем это все в  popupClose
const buttonPopupBigImageClose = document.querySelector(
  elements.buttonPopupBigImageClose
);
const popupPhoto = document.querySelector(elements.popupBigOpenImage);
const popupPhotoBig = popupPhoto.querySelector(elements.popupPhotoBig);
const newElement = document
  .querySelector(elements.newElement)
  .content.querySelector(elements.element);
//класс где находится title большой картинки (там пока пусто)
const popupTitleImage = document.querySelector(elements.popupTitleImage);

//  *****  ФУНКЦИИ  *****
 
function cardCreateNew(name) {
  const todoNewCard = newElement.cloneNode(true);
  //теперь находим класс Тайтла в контстанте todoNewCard, с помощью textContent кладем туда нашу константу с title
  todoNewCard.querySelector(elements.elementText).textContent = name.name;
  //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
  todoNewCard.querySelector(elements.elementImage).src = name.link;
  //Добавляем alt картинки из массива
  todoNewCard.querySelector(elements.elementImage).alt = name.alt;
  const buttonTrash = todoNewCard.querySelector(elements.elementTrash);
  const elementLike = todoNewCard.querySelector(elements.elementLike);
  const elementImage = todoNewCard.querySelector(elements.elementImage);
  const popupPhotoBigAddName = todoNewCard.querySelector(
    elements.elementText
  ).textContent;
  const popupPhotoBigAddLink = todoNewCard.querySelector(
    elements.elementImage
  ).src;
  const popupPhotoBigAddAlt = todoNewCard.querySelector(
    elements.elementImage
  ).alt;

  const elementLikeActive = elements.elementLikeActive;
  //console.log(elementLike);
  //Удаляем карточки
  buttonTrash.addEventListener("click", function () {
    todoNewCard.remove();
  });
  //Лайкаем сердечки
  elementLike.addEventListener("click", function () {
    elementLike.classList.toggle(elementLikeActive);
  });

  //Большая картинка при нажатие на неё
  elementImage.addEventListener("click", function () {
    popupTitleImage.textContent = popupPhotoBigAddName;
    popupPhotoBig.src = popupPhotoBigAddLink;
    popupPhotoBig.alt = popupPhotoBigAddAlt;
//добавляем open class
    popupOpen(popupBigOpenImage);
    //нажали на крестик - закрыли
    buttonPopupBigImageClose.addEventListener("click", function () {
      popupClose(popupBigOpenImage);
    });
  });

  return todoNewCard;
}

//Делаем функцию что б добавлялись карточки, как работает - пока понятно на 50%
function renderCard(data, container) {
  const cardAdd = cardCreateNew(data);
  container.prepend(cardAdd);
}

//берет создание карточек "cardCreate" и с помощью цикла вставляет на страницу
function creatCardsPage() {
  initialCards.forEach((item) => renderCard(item, elementsCard));
  //Прошу, это нужно мне оставить, что б понимать логику функции =>
  // initialCards.forEach(cardCreateNew);
}

//вызываем функцию для добавление карточек из массива
creatCardsPage();

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
      alt: "Новая картинка",
    },
  ];
  function CardsPage() {
    newCard.forEach((item) => renderCard(item, elementsCard));
    // addCard.forEach(cardCreateNew);
  }
  CardsPage();
  popupClose(popupAdd);
});

//изменения текста title в форме
function changeColorTextTitle() {
  //Удаляем текст Value
  let RemoveTitle = document.querySelector(elements.textValuePopupTitle);
  //Делаем там пустую строку
  RemoveTitle.value = "";
  textValuePopupTitle.classList.remove(elements.popupTextColorFontGrey);
}

//изменения текста subTitle в форме
function changeColorTextSubtitle() {
  //Удаляем текст Value
  let RemoveSubitle = document.querySelector(elements.textValuePopupSubtitle);
  //Делаем там пустую строку
  RemoveSubitle.value = "";
  textValuePopupSubtitle.classList.remove(elements.popupTextColorFontGrey);
}

//Открыть/закрыть попап и нажатие на крестик
function popupOpen(modalWindow) {
  modalWindow.classList.add(elements.popupOpened);
}
function popupClose(modalWindow) {
  modalWindow.classList.remove(elements.popupOpened);
}

//  *****  ОБРАБОТЧИКИ *****

// при нажатии на value меняется цвет title
const TextEditNewForm = textValuePopupTitle.addEventListener(
  "click",
  changeColorTextTitle
);

// при нажатии на value меняется цвет subTitle
textValuePopupSubtitle.addEventListener("click", changeColorTextSubtitle);

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
