/* класс Popup, который отвечает за открытие и закрытие попапа
Принимает в конструктор единственный параметр — селектор попапа */
export default class Popup {
  constructor(popupElement, ) {
    this._popupElement = popupElement;
    /* !!! ВАЖНО Делаем привязку с помощью метода "bind" без него не будет
    передоваться в другой метод, там лишь будет "undefined" */
    this._handleEscClose = this._handleEscClose.bind(this);
    this._buttonSubmitPopup = this._popupElement.querySelector(".popup__submit-button");
  }


  // отвечают за открытие попапа
  open() {
    this._popupElement.classList.add("popup_opened");
    /*обязательно надо делать привязку с помощью метода "bind" в конструкторе
    Также можно просто здесь написать (evt) => this._handleEscClose(evt) */
    document.addEventListener("keydown", this._handleEscClose);
  }

  // отвечают закpытие попапа
  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  //содержит логику закрытия попапа клавишей Esc.
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
      // }
    }
  }

  /* добавляет слушатель клика иконке закрытия попапа.
   Модальное окно также закрывается при клике на затемнённую
   область вокруг формы */
  setEventListeners() {
    //закрыть при нажатии на крестик
    this._buttonClose = document.querySelectorAll(".popup__close-icon");
    this._buttonClose.forEach((element) => {
      element.addEventListener("click", () => {
        this.close();
      });
    });

    //закрытие на паранжу
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }

}
