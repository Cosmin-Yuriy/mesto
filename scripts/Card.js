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
    this._newElementTemplate = newElementTemplate;
    //this._newTodoCard = newTodoCard;
  };

  _getTemplate() {
    //return this._newElementTemplate.cloneNode(true).children[0];
   //  this._template =  document.querySelector(this._newElementIdTemplate).content;
   return this._newElementTemplate.cloneNode(true);

  }

  //Удаляем карточки
  _deleteCardListener() {
    this._buttonTrash.addEventListener("click", () => {
      //const test = this._newTodoCard.querySelector('element');
    this._newTodoCard.remove();
      //после удаление карточки нужно обязательно её обнулять!!!
       console.log(this._newElementTemplate);
      //this._newTodoCard = null;
    });
  }

  //Лайкаем сердечки
  _likeCardListener() {
    this._elementLike.addEventListener("click", () => {
      this._elementLike.classList.toggle(this._elementLikeActive);
    });
  }

  //Большая картинка при нажатие на неё
  _bigCardListener() {
    //Здесь функция которую мы взяли передали из index.js (handleOpenPopup)
    this._elementImage.addEventListener("click", () => {
      this._handleOpenPopup(this._text, this._link);
    });
  }

  //Запускаем слушатели
  _addEventListener() {
    this._deleteCardListener();
    this._likeCardListener();
    this._bigCardListener();
  }

  _createCard() {
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
    //const elementLikeActive = this._elementLikeActive;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._text;
    //return newTodoCard;

    //Вызываем слушателей
    this._addEventListener();
    return this._newTodoCard;
  }
}


export default Card;
