class Card {
  constructor(text, link) {
    // this._config = config;
    this._text = text;
    this._link = link;
  }

  _getTemplate() {
    return newElementTemplate.cloneNode(true);
  }

  _createCard() {
    const newTodoCard = this._getTemplate();
    // console.log(newTodoCard);
    //  _getTemplate();
    // newTodoCard = this._getTemplate();
    newTodoCard.querySelector(config.elementText).textContent = this._text;

    //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
    const elementImage = newTodoCard.querySelector(config.elementImage);
    //Добавляем alt картинки из массива
    const buttonTrash = newTodoCard.querySelector(config.elementTrash);
    const elementLike = newTodoCard.querySelector(config.elementLike);
    const elementLikeActive = config.elementLikeActive;
    elementImage.src = this._link;
    elementImage.alt = this._text;
    //return newTodoCard;

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
      //Не понимаю, почему здесь не срабатывает "this._link" и "this._text"
      popupTitleImage.textContent = elementImage.alt;
      popupPhotoBig.src = elementImage.src;
      popupPhotoBig.alt = elementImage.alt;
      //добавляем open class
      openPopup(popupBigOpenImage);
    });

    return newTodoCard;
  }

  _renderCard(data, container) {
    const cardAdd = this._createCard(data);
    container.prepend(cardAdd);
  }

  _renderInitialCard() {
    this._renderCard(initialCards, elementsCard);
  }
}

function renderInitialCards() {
  initialCards.forEach(function (item) {
    const newCard = new Card(item.name, item.link);
    newCard._renderInitialCard();
  });
}

renderInitialCards();

//Почему-то не работает export - import
//export default Card;