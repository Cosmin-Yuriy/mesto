//**************************** ИМПОРТЫ ****************************
import  "../pages/index.css";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
//import initialCards from "../utils/cards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { validationConfig } from "../utils/utils.js";
import { config } from "../utils/utils.js";
import Api from "../components/Api.js";
//import { popupDeleteCard } from "../../mesto-main 4/src/utils/constants.js";

//**************************** КОНСТАНТЫ ****************************

const api = new Api(config.host, config.token);

const popupSubmitButtons = document.querySelectorAll(
  validationConfig.buttonFormEditPofileTable
);
//config
const title = document.querySelector(config.title);
const subTitle = document.querySelector(config.subTitle);
const popupEditProfile = document.querySelector(config.popupEditProfile);
const buttonEdit = document.querySelector(config.buttonEdit);
const buttonAddButton = document.querySelector(config.buttonAddButton);
const popupAdd = document.querySelector(config.popupAdd);
const formAdd = document.querySelector(config.formAdd);
const elementsCard = document.querySelector(config.elementsCard);
const popupBigOpenImage = document.querySelector(config.popupBigOpenImage);
const newElementTemplate = document.querySelector(
  config.newElementIdTemplate
).content;
const inputTitleProfile = document.querySelector(config.inputTitleProfile);
const inputSubtitleProfile = document.querySelector(
  config.inputSubtitleProfile
);
//const likeCounter = document.querySelector(config.likeCounter);
const cardDelete = document.querySelector(config.cardDelete);
const profileAvatar = document.querySelector(config.profileAvatar);
const popupUpdateAvatarId = document.querySelector(config.popupUpdateAvatarId);
const inputProfileLinkAvatar = document.querySelector(
  config.inputProfileLinkAvatar
);
//**************************** КЛАССЫ ****************************

//**************************** PopupWithImage ****************************
//Подключаем большие картинки
const popupImage = new PopupWithImage(popupBigOpenImage);

popupImage.setEventListeners();
const handleCardClick = (name, link) => {
  popupImage.open(name, link);
};

// const handleLikeClick = (cardId) => {
//   if (newCard.isLiked()) {
//     api.deleteLikeCard(cardId)
//     .then(res => {
//       console.log('Лайк удалился');
//     })
//   }
//  else {
//    api.putLikeCard(cardId)
//    .then(res => {
//     console.log('Лайк добавился');
//    });
//  }
// };

const deleteCardServer = (id) => {
  api.deleteCard(id).then();
};
//**************************** Card ****************************
//Делаем функцию что б добавлялись карточки (МАССИВ)
function createCard(data) {
  const newCard = new Card(
    data,
    config,
    handleCardClick,
    newElementTemplate,
    deleteCardServer,
    (cardId) => {
      if (newCard.isLiked()) {
        api.deleteLikeCard(cardId).then((res) => {
          newCard.likeCounter(res.likes);
          console.log("Лайк удалился");
        });
      } else {
        api.putLikeCard(cardId).then((res) => {
          newCard.likeCounter(res.likes);
          console.log("Лайк добавился");
        });
      }
    }
    //handleLikeClick
  );
  return newCard.createCard();
}

//**************************** Section ****************************

//Делаем константу и из класса, прокидываем ему ({массив с карточками, функцию добавление карточек},
//найденный селектор)
const cardRender = new Section(
  {
    renderer: (item) => {
      //хватаем метод "addItem" и вставляем в параметр функцию добавление карточек createCard(item)
      cardRender.addItem(createCard(item));
    },
    // А здесь добавляем селектор
  },
  elementsCard
);

//****************************** ВЫЗОВ КАРТОЧЕК  **********************************

//обернули вызов в APi с данными карточек из сервера
api.getCards().then((cards) => {
  //вызываем метод renderitems(c параметром массивом каточек)
  cardRender.renderItems(cards);
});

//создаем константу из Класса для Профайла
const userInfo = new UserInfo(title, subTitle, profileAvatar);

//получаем данные о юзере с сервера
api.getUserInform().then((user) => {
  userInfo.setUserInfo({
    name: user.name,
    info: user.about,
    avatar: user.avatar,
  });
});

//**************************** PopupWithForm  UserInfo Card ****************************

//Обновление имя и описание профайла
const popupProfileEdit = new PopupWithForm(popupEditProfile, (res) => {
  popupProfileEdit.buttonTextChange(true, "Сохранить", "Сохранение...");
  //отпраляем/получаем данные под рекдатированию провиля имя и описание
  api.editUserInform(res.name, res.subtitle).then((res) => {
    //добавляем сюда и аватар, что б подгружался и он после обновления
    userInfo.setUserInfo({
      name: res.name,
      info: res.about,
      avatar: res.avatar,
    });
    popupProfileEdit.buttonTextChange(false, "Сохранить", "Сохранение...");
  });
});
popupProfileEdit.setEventListeners();
buttonEdit.addEventListener("click", () => {
  inputTitleProfile.value = userInfo.getUserInfo().name;
  inputSubtitleProfile.value = userInfo.getUserInfo().info;
  popupProfileEdit.open();
});

//Обновляем аватарку
const avatarUpdate = new PopupWithForm(popupUpdateAvatarId, (input) => {
  //обернули в api переименование ссылки аватара, оно отправляется на сервер, что б
  //потом приходило и добавлялось на страницу
  avatarUpdate.buttonTextChange(true, "Сохранить", "Сохранение...");
  api.updateAvatar(input.avatar).then((res) => {
    userInfo.setUserInfo({
      avatar: input.avatar,
      name: res.name,
      info: res.about,
    });
    avatarUpdate.buttonTextChange(false, "Сохранить", "Сохранение...");
  });
});

avatarUpdate.setEventListeners();
profileAvatar.addEventListener("click", () => {
  inputProfileLinkAvatar.value = userInfo.getUserInfo().avatar;
  avatarUpdate.open();
});

//Добавляем карточку на сервер
const popupAddCard = new PopupWithForm(popupAdd, (input) => {
  //нужно что б после опять надпись "создать была"
  popupAddCard.buttonTextChange(true, "Создать", "Сохранение...");
  api.addNewCard(input.name, input.subtitle).then((res) => {
    const infoCard = createCard({
      name: res.name,
      link: res.link,
      //здесь отправляю данные дополнительные
      owner: res.owner,
      likes: res.likes,
    });
    popupAddCard.buttonTextChange(false, "Создать", "Сохранение...");
    cardRender.addItemNewcard(infoCard);
  });
});

popupAddCard._getInputValues();
popupAddCard.setEventListeners();

// 2 POPUP
// Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", () => {
  popupAddCard.open();
});
//------------------------------ КОНЕЦ ------------------------------

//**************************** ВАЛИДАЦИЯ ****************************
//Обязательно нужно пробрасывать (параметры/аргументы из Класcа/index)
const validationCard = new FormValidator(validationConfig, formAdd);
validationCard.enableValidation();
const validationProfile = new FormValidator(validationConfig, popupEditProfile);
validationProfile.enableValidation();
