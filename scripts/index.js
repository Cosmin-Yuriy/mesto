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
const newElementTemplate = document
  .querySelector(config.newElementIdTemplate)
  .content.querySelector(config.element);
//класс где находится title большой картинки (там пока пусто)
const popupTitleImage = document.querySelector(config.popupTitleImage);
//массив из всех попапов

const ESC_CODE = "Escape";
//  *****  ФУНКЦИИ  *****

//ЗАКРЫТИЕ ПОПАПА С ПОМОЩЬЮ ESC
function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function createCard(card) {
  const newTodoCard = newElementTemplate.cloneNode(true);
  //теперь находим класс Тайтла в контстанте newTodoCard, с помощью textContent кладем туда нашу константу с title
  newTodoCard.querySelector(config.elementText).textContent = card.name;
  //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
  const elementImage = newTodoCard.querySelector(config.elementImage);
  //Добавляем alt картинки из массива
  const buttonTrash = newTodoCard.querySelector(config.elementTrash);
  const elementLike = newTodoCard.querySelector(config.elementLike);
  const elementLikeActive = config.elementLikeActive;
  elementImage.src = card.link;
  elementImage.alt = card.name;

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
    popupTitleImage.textContent = card.name;
    popupPhotoBig.src = card.link;
    popupPhotoBig.alt = card.alt;
    //добавляем open class
    openPopup(popupBigOpenImage);
  });

  return newTodoCard;
}

//Делаем функцию что б добавлялись карточки, как работает - пока понятно на 50%
function renderCard(data, container) {
  const cardAdd = createCard(data);
  container.prepend(cardAdd);
}

//берет создание карточек "cardCreate" и с помощью цикла вставляет на страницу
function renderInitialCards() {
  initialCards.forEach((item) => renderCard(item, elementsCard));
  //Прошу, это нужно мне оставить, что б понимать логику функции =>
  // initialCards.forEach(cardCreateNew);
}

//вызываем функцию для добавление карточек из массива
renderInitialCards();

//Добавление данных форму
popupAdd.addEventListener("submit", function (event) {
  //что б не перезагружалась страница
  event.preventDefault();
  const data = {
    name: textValuePopupTitle.value,
    link: textValuePopupSubtitle.value,
    alt: textValuePopupTitle.value,
  };

  renderCard(data, elementsCard);
  closePopup(popupAdd);
});

//ДА, ЕСТЬ RESET, А ЕСТЬ и ТАКОЙ, КАК В ТРЕНАЖЕРЕ!
//НО КАК РАБОТАЕТ RESET ТОТ ЖЕ в ДАННОМ СЛУЧАЕ НИКТО НИКОГДА НЕ ОБЪЯСНЯЛ!
//ЕСЛИ ВЫ ОБЪЯСНИТЕ, Я БУДУ ОЧЕНЬ РАД, И БЛАГОДАРЕН ВАМ!
//Я ВЫБРАЛ, КАК В ТРЕНАЖЕРЕ, ТАК ДРУГОМУ НЕ УЧИЛИ:)
//стираем данный из инпутов
function deletePopupCardInputsText() {
  document.querySelector(config.formAdd).reset();
}

// тебе нужно найти тег form -
//  в котором лежат твои инпуты -
//   textValuePopupTitle и textValuePopupSubtitle -
//    и вызвать form.reset()

//Открыть/закрыть все попапы (кроме большой картинки) и нажатие на крестик
function openPopup(modalWindow) {
  modalWindow.classList.add(config.popupOpened);
  //скорее всего нужно будет вынести функцию
  popupSubmitButtons.forEach((element) => {
    element.setAttribute("disabled", "disabled");
  });
  //стираем данные из инпутов
  deletePopupCardInputsText();
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(modalWindow) {
  modalWindow.classList.remove(config.popupOpened);
  document.addEventListener("keydown", closeByEsc);
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
