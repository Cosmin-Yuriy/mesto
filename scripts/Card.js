class Card {
  // static template = document.querySelector("#newElement").content;
  constructor(text, link, config, handleOpenPopup, newElementTemplate) {
    this._text = text;
    this._link = link;
    this._config = config;
    this._elementText = config.elementText;
    this._elementImageSelector = config.elementImage;
    this._elementTrashSelector = config.elementTrash;
    this._elementLikeSelector = config.elementLike;
    this._elementLikeActive = config.elementLikeActive;
    this._handleOpenPopup = handleOpenPopup;
    this._newElementIdTemplate = config.newElementIdTemplate;
  }

  _getTemplate() {
    //Достаем template и клонируем (config.newElementIdTemplate не будет работать)
    return document
      .querySelector(this._newElementIdTemplate)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  //метод удаление карточки
  _handleDeleteCard() {
    this._newTodoCard.remove();
    this._newTodoCard = null;
  }
  
  //метод лайк карточки
  _likePush() {
    this._elementLike.classList.toggle(this._elementLikeActive);
  }

  //Добавляем слушатели
  _addEventListener() {
    //Удаляем карточки
    this._buttonTrash.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    //Лайкаем сердечки
    this._elementLike.addEventListener("click", () => {
      this._likePush()
    });

    //Здесь функция которую мы взяли передали из index.js (handleOpenPopup)
    this._elementImage.addEventListener("click", () => {
      this._handleOpenPopup(this._text, this._link);
    });
  }

  //Создаем карточки
  createCard() {
    this._newTodoCard = this._getTemplate();
    this._newTodoCard.querySelector(this._elementText).textContent = this._text;

    //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
    this._elementImage = this._newTodoCard.querySelector(
      this._elementImageSelector
    );
    //Добавляем alt картинки из массива
    this._buttonTrash = this._newTodoCard.querySelector(
      this._elementTrashSelector
    );
    this._elementLike = this._newTodoCard.querySelector(
      this._elementLikeSelector
    );
    this._elementImage.src = this._link;
    this._elementImage.alt = this._text;

    //Вызываем слушателей
    this._addEventListener();
    return this._newTodoCard;
  }
}

export default Card;
