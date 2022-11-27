//**************************** ИМПОРТЫ ****************************
import  "../pages/index.css";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import initialCards from "../components/cards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { validationConfig } from "../utils/utils.js";
import { config } from "../utils/utils.js";


//**************************** КОНСТАНТЫ ****************************

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
const popupAdd = document.querySelector(config.popupAdd);
const formAdd = document.querySelector(config.formAdd);
const popupEditCloseButton = popupAdd.querySelector(config.popupClose);
const textValuePopupTitle = document.querySelector(config.textValuePopupTitle);
const textValuePopupSubtitle = document.querySelector(
  config.textValuePopupSubtitle
);
const elementsCard = document.querySelector(config.elementsCard);
const popupBigOpenImage = document.querySelector(config.popupBigOpenImage);
const buttonPopupBigImageClose = document.querySelector(
  config.buttonPopupBigImageClose
);
const popupPhoto = document.querySelector(config.popupBigOpenImage);
const popupPhotoBig = popupPhoto.querySelector(config.popupPhotoBig);
const newElementTemplate = document.querySelector(
  config.newElementIdTemplate
).content;
const popupTitleImage = document.querySelector(config.popupTitleImage);
const inputTitleProfile = document.querySelector(config.inputTitleProfile);
const inputSubtitleProfile = document.querySelector(config.inputSubtitleProfile);

//**************************** КЛАССЫ ****************************

//**************************** PopupWithImage ****************************
//Подключаем большие картинки
const popupImage = new PopupWithImage(popupBigOpenImage);

popupImage.setEventListeners();
const handleCardClick = (name, link) => {
  popupImage.open(name, link);
};

//**************************** Card ****************************

//Делаем функцию что б добавлялись карточки (МАССИВ)
function createCard(data) {
  const newCard = new Card(
    data.name,
    data.link,
    config,
    handleCardClick,
    newElementTemplate
  );
  return newCard.createCard();
}

//**************************** Section ****************************

//Делаем константу и из класса, прокидываем ему ({массив с карточками, функцию добавление карточек},
//найденный селектор)
const cardRender = new Section(
  {
    initialCards,
    renderer: (item) => {
      //хватаем метод "addItem" и вставляем в параметр функцию добавление карточек createCard(item)
      cardRender.addItem(createCard(item));
    },
    // А здесь добавляем селектор
  },
  elementsCard
);
//вызываем метод renderitems(c параметром массивом каточек)
cardRender.renderItems(initialCards);
const userinfo = new UserInfo(title, subTitle);

//console.log(userinfo.getUserInfo());
//console.log(title.textContent, subTitle.textContent);
//**************************** PopupWithForm  UserInfo Card ****************************
const editPopupProfile = new PopupWithForm(popupEditProfile, (input) => {
  userinfo.setUserInfo({ name: input[0].value, info: input[1].value });
});

editPopupProfile.setEventListeners();


buttonEdit.addEventListener("click", () => {
  inputTitleProfile.value = userinfo.getUserInfo().name;
  inputSubtitleProfile.value = userinfo.getUserInfo().info;
  editPopupProfile.open();
});

const openPopup = new PopupWithForm(popupAdd, (input) => {
  const infoCard = createCard({
    name: input[0].value,
    link: input[1].value,
  });
  cardRender.addItem(infoCard);
});

openPopup.setEventListeners();

// 2 POPUP
// Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", () => {
  openPopup.open();
});

//**************************** ВАЛИДАЦИЯ ****************************
//Обязательно нужно пробрасывать (параметры/аргументы из Класcа/index)
const validationCard = new FormValidator(validationConfig, formAdd);
validationCard.enableValidation();
const validationProfile = new FormValidator(validationConfig, popupEditProfile);
validationProfile.enableValidation();
