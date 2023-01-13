//Импортозамещаем )) Popup из нашей же папки
import Popup from "./Popup.js";
class Card {
  constructor(
    data,
    config,
    handleCardClick,
    newElementTemplate,
    deleteCardServer,
    handleLikeClick
  ) {
    this.data = data;
    this._text = data.name;
    this._link = data.link;
    //  this.userId = data.owner._id
    this._likes = data.likes;
    this._cardId = data._id;
    this._elementText = config.elementText;
    this._elementImageSelector = config.elementImage;
    this._elementTrashSelector = config.elementTrash;
    this._elementLikeSelector = config.elementLike;
    this._elementLikeActive = config.elementLikeActive;
    this._newElementIdTemplate = config.newElementIdTemplate;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._likesCoount = config.likeCounter;
    this._cardDeleteId = config.cardDelete;
    this._buttonPushYesId = config.buttonPushYes;
    this._myId = config.userId;
    this._deleteCardServer = deleteCardServer;
  }

  _getTemplate() {
    //Достаем template и клонируем (config.newElementIdTemplate не будет работать)
    return document
      .querySelector(this._newElementIdTemplate)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  //метод удаление карточки
  async _handleDeleteCard() {
    try {
      this._deleteCardServer(this._cardId);
      this._card.remove();
      this._card = null;
    } catch (error) {
      console.log("ошибка с удалением карточки");
    }
  }

  //метод лайк карточки
  _likePush() {
    this._elementLike.classList.toggle(this._elementLikeActive);
  }

  //метод слушателей для удалений card
  _listenerDeleteCard() {
    this._cardDelete = document.querySelector(this._cardDeleteId);
    this._buttonPushYes = document.querySelector(this._buttonPushYesId);
    const popupCardDelete = new Popup(this._cardDelete);
    popupCardDelete.setEventListeners();
    popupCardDelete.open();
    this._buttonPushYes.addEventListener("click", () => {
      this._handleDeleteCard();
      popupCardDelete.close();
    });
  }

  //Добавляем слушатели
  _addEventListener() {
    //по факту заменили handleOpenPopup - не понял зачем? Какая разница?
    //Какое ТЗ - Такая и работа ХЗ
    this._elementImage.addEventListener("click", () => {
      this._handleCardClick(this._text, this._link);
    });

    //Удаляем карточки
    this._buttonTrash.addEventListener("click", (event) => {
      event.preventDefault();
      this._listenerDeleteCard();
    });

    //Лайкаем сердечки
    this._elementLike.addEventListener("click", () => {
      this._likePush();
      this._handleLikeClick(this._cardId);
    });
  }

  _checkUserId() {
    if (this.data.owner._id !== this._myId) {
      this._card
        .querySelector(this._elementTrashSelector)
        .classList.add("element__trash_hidden");
    }
  }

  isLiked(){
    const myIdLikeCards = this._likes.find(
      (element) => element._id === this._myId
    );
    return myIdLikeCards;
  }


    //МЕТОД - закрашивает мои лайки
    //Если мой айди совпадает с айди лайкнушего картинку,
    // то закрашиваем сердце  "this._elementLikeActive"
  _likeMyUserCard() {
    const myIdLikeCard = this._likes.find(
      (element) => element._id === this._myId
    );
  //  console.log(myIdLikeCard)
    if (myIdLikeCard) {
      this._elementLike.classList.add(this._elementLikeActive);
    }
  }

    //метод считает и добавляет лайки
    likeCounter(addLikes){
      this._likes = addLikes;
    //вытаскиваем счетчик лайков (если сделать document.querySelector.... то будет выдавать ошибку)
    this._likeCounter = this._card.querySelector(this._likesCoount);
    this._likeCounter.textContent = this._likes.length;
    }
  //Создаем карточки

  createCard() {
    this._card = this._getTemplate();
    this._card.querySelector(this._elementText).textContent = this._text;

    //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
    this._elementImage = this._card.querySelector(this._elementImageSelector);

    this._buttonTrash = this._card.querySelector(this._elementTrashSelector);
    this._elementLike = this._card.querySelector(this._elementLikeSelector);

  
    this._elementImage.src = this._link;
    this._elementImage.alt = this._text;
    
    //метод считает и добавляет лайки
    this.likeCounter(this._likes);
    //метод закрашивает мои лайки
    this._likeMyUserCard();
    //проверка для корзины - показывает для своих карточек
    this._checkUserId();
    //Вызываем слушателей
    this._addEventListener();

    return this._card;
  }
}

export default Card;
