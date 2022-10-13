import initialCards from "./cards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//ПЕРЕМЕННЫЕ
const validationConfig = {
  popup: ".popup",
  popupForm: ".popup__form",
  popupInput: ".popup__input",
  buttonFormEditPofileTable: ".popup__submit-button",
  popupElementError: "popup__element-error",
  popupInputError: "popup__input_error",
};

// Делаем для удобства объект
const config = {
  popup: ".popup",
  title: ".profile__title",
  subTitle: ".profile__subtitle",
  popupEditProfile: "#popup_edit_profile",
  buttonEdit: ".profile__button-edit",
  subTitleEdit: '.popup__input[name="subtitle"]',
  //начало попапа
  popupFormEditPofileTable: '.popup__form[name="popupFormEditPofileTable"]',
  titleEdit: '.popup__input[name="name"]',
  popupSubmitButtonsDisable: ".popup__submit-button_disable",
  //конец попапа
  buttonAddButton: ".profile__add-button",
  popupAdd: "#popup_add",
  textValuePopupTitle: "#input-image-title",
  textValuePopupSubtitle: "#input-image-url",
  elementsCard: ".elements",
  popupBigOpenImage: "#popup-photo",
  buttonPopupBigImageClose: ".popup__close[name='buttonPopupBigImgClose']",
  newElementIdTemplate: "#newElement",
  popupClose: ".popup__close",
  popupOpened: "popup_opened",
  elementText: ".element__text",
  elementImage: ".element__img",
  popupTextColorFontGrey: "popup__input_color-font_grey",
  popupTitleImage: ".popup__title-img",
  popupPhotoBig: ".popup__photo",
  elementLike: ".element__like",
  elementLikeActive: "element__like_active",
  elementTrash: ".element__trash",
  element: ".element",
  formAdd: "#form_add",
};
//validationConfig

const popupSubmitButtons = document.querySelectorAll(
  validationConfig.buttonFormEditPofileTable
);
//config
const popups = document.querySelectorAll(config.popup);
const title = document.querySelector(config.title);
const subTitle = document.querySelector(config.subTitle);
const popupEditProfile = document.querySelector(config.popupEditProfile);
const popupButtonCloseEditProfile = popupEditProfile.querySelector(
  config.popupClose
);
const buttonEdit = document.querySelector(config.buttonEdit);
const titleEdit = document.querySelector(config.titleEdit);
const subTitleEdit = document.querySelector(config.subTitleEdit);
const popupFormEditPofileTable = document.querySelector(
  config.popupFormEditPofileTable
);

const popupFormEditPofileTableInvalid = config.popupFormEditPofileTableInvalid;
const buttonAddButton = document.querySelector(config.buttonAddButton);

//Форма добавления ищем по айди и скидываем в константу
const popupAdd = document.querySelector(config.popupAdd);
const formAdd = document.querySelector(config.formAdd);
const popupEditCloseButton = popupAdd.querySelector(config.popupClose);
const textValuePopupTitle = document.querySelector(config.textValuePopupTitle);
const textValuePopupSubtitle = document.querySelector(
  config.textValuePopupSubtitle
);
const elementsCard = document.querySelector(config.elementsCard);
//ДЛЯ POPUP c КАРТИНКОЙ
//Найдем наш попап с картинкой и закинем его в константу PopupImg
const popupBigOpenImage = document.querySelector(config.popupBigOpenImage);
//Найдем в этом попапе нашу кнопку "закрытие" с классом  popup__close
//и закинем это все в  closePopup
const buttonPopupBigImageClose = document.querySelector(
  config.buttonPopupBigImageClose
);
const popupPhoto = document.querySelector(config.popupBigOpenImage);
const popupPhotoBig = popupPhoto.querySelector(config.popupPhotoBig);
const newElementTemplate = document.querySelector(
  config.newElementIdTemplate
).content;
//класс где находится title большой картинки (там пока пусто)
const popupTitleImage = document.querySelector(config.popupTitleImage);
//массив из всех попапов

//  *****  ФУНКЦИИ  *****

//ЗАКРЫТИЕ ПОПАПА С ПОМОЩЬЮ ESC
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//Здесь делаем функцию для отправкию ее в класс Card
function handleOpenPopup(name, link) {
  popupPhotoBig.src = link;
  popupPhotoBig.alt = name;
  popupTitleImage.textContent = name;
  openPopup(popupBigOpenImage);
}

//Закрытие кнопки для добавления
// function disabledButton(){
// popupSubmitButtons.forEach((element) => {
//   element.setAttribute("disabled", "disabled");
// });
// }; 
//Подключаем Class 
//Добавление карточек

//Делаем функцию что б добавлялись карточки
function addCard(data) {
  const newCard = new Card(
    data.name,
    data.link,
    config,
    handleOpenPopup,
    newElementTemplate
  );
 return newCard.createCard();
  //container.prepend(cardAdd);
}

//берет создание карточек "cardCreate" и с помощью цикла вставляет на страницу
function renderInitialCards() {
  initialCards.forEach((item) => {
   // createCard(item);
    elementsCard.prepend(addCard(item));
  });
}
renderInitialCards();

//Добавление данных форму
formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
 
  //что б не перезагружалась страница

  const data = {
    name: textValuePopupTitle.value,
    link: textValuePopupSubtitle.value,
    alt: textValuePopupTitle.value,
  };
    
  formAdd.reset();
  validationCard.validateButton();
  elementsCard.prepend(addCard(data));
  closePopup(popupAdd);
  
});

//Закончили добавлять карты

//Открыть/закрыть все попапы (кроме большой картинки) и нажатие на крестик
function openPopup(modalWindow) {
  modalWindow.classList.add(config.popupOpened);
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(modalWindow) {
  modalWindow.classList.remove(config.popupOpened);
  document.removeEventListener("keydown", closeByEsc);
}

//Открыть/закрыть попап большой картинки
buttonPopupBigImageClose.addEventListener("click", function () {
  closePopup(popupBigOpenImage);
});

//  *****  ОБРАБОТЧИКИ *****

// Редактирование Титла
//Включаем кнопку, дословно добавляем к классу popup + класс popup-Open
//ЭТО НЕБОЛЬШОЕ ОТКЛОНЕНИЕ КОТОРОЕ ВСЕМ ПОНРАВИЛОСЬ И МЫ ЕГО ВЕЗДЕ ОСТАВИЛИ!!!!
buttonEdit.addEventListener("click", function () {
  openPopup(popupEditProfile);
  titleEdit.value = title.textContent;
  subTitleEdit.value = subTitle.textContent;
});

//Закрываем попап редактирования Титла без сохранения с помощью функции
popupButtonCloseEditProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

//Форма редактирования и отправления Профиля TITLE / SUBTITLE
//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupFormEditPofileTable.addEventListener("submit", function (event) {
  event.preventDefault();
  title.textContent = titleEdit.value;
  subTitle.textContent = subTitleEdit.value;
  closePopup(popupEditProfile);
});

// 2 POPUP
// Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", function () {
  openPopup(popupAdd);
});

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupEditCloseButton.addEventListener("click", function () {
  closePopup(popupAdd);
});

//ЗАКРЫТИЯ ПОПАПА ДОПОЛНИТЕЛЬНЫЕ
//закрытие попапа нажатие на паранжу
function popupCloseOutPopup(popupElement) {
  popupElement.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(popupElement);
    }
  });
}

//ЗАКРЫТИЕ ПОПАПА НАЖАТИЕМ НА ПАРАНЖУ
popups.forEach((popupElement) => {
  //закрытие попапа нажатие на паранжу
  popupCloseOutPopup(popupElement);
});


//***** ВАЛИДАЦИЯ *****
//Обязательно нужно пробрасывать (параметры/аргументы из Класcа/index)
// const validInput = () => {
//   const validationCard = new FormValidator(validationConfig, formAdd);
//   const validationProfile = new FormValidator(validationConfig, popupEditProfile);

  
//   validationProfile.enableValidation();
//   validationCard.enableValidation();
// };

// validInput();


  const validationCard = new FormValidator(validationConfig, formAdd);
   validationCard.enableValidation();
  const validationProfile = new FormValidator(validationConfig, popupEditProfile);
  validationProfile.enableValidation();




//КОНЕЦ ВАЛИДАЦИИ
