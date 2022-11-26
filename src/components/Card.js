class Card {
    constructor(text, link, config, handleCardClick, newElementTemplate) {
    this._text = text;
    this._link = link;
    this._elementText = config.elementText;
    this._elementImageSelector = config.elementImage;
    this._elementTrashSelector = config.elementTrash;
    this._elementLikeSelector = config.elementLike;
    this._elementLikeActive = config.elementLikeActive;
    this._newElementIdTemplate = config.newElementIdTemplate;
    this._handleCardClick = handleCardClick;
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
    this._card.remove();
    this._card = null;
  }
  
  //метод лайк карточки
  _likePush() {
    this._elementLike.classList.toggle(this._elementLikeActive);
  }

  //Добавляем слушатели
  _addEventListener() {
    //по факту заменили handleOpenPopup - не понял зачем? Какая разница?
    //Какое ТЗ - Такая и работа ХЗ
    this._elementImage.addEventListener("click", () => {
      this._handleCardClick(this._text, this._link);
    })

    //Удаляем карточки
    this._buttonTrash.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    //Лайкаем сердечки
    this._elementLike.addEventListener("click", () => {
      this._likePush()
    });
  }

  //Создаем карточки
  createCard() {
    this._card = this._getTemplate();
    this._card.querySelector(this._elementText).textContent = this._text;

    //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
    this._elementImage = this._card.querySelector(
      this._elementImageSelector
    );
    //Добавляем alt картинки из массива
    this._buttonTrash = this._card.querySelector(
      this._elementTrashSelector
    );
    this._elementLike = this._card.querySelector(
      this._elementLikeSelector
    );
    this._elementImage.src = this._link;
    this._elementImage.alt = this._text;

    //Вызываем слушателей
    this._addEventListener();
    return this._card;
  }
}

export default Card;
