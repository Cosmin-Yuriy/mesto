/* класс Popup, который отвечает за открытие и закрытие попапа
Принимает в конструктор единственный параметр — селектор попапа */
export default class Popup {
  constructor(selectrPopup) {
    this._selectrPopup = selectrPopup;
    /* !!! ВАЖНО Делаем привязку с помощью метода "bind" без него не будет
    передоваться в другой метод, там лишь будет "undefined" */
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // отвечают за открытие попапа
  open() {
    this._selectrPopup.classList.add("popup_opened");
    /*обязательно надо делать привязку с помощью метода "bind" в конструкторе
    Также можно просто здесь написать (evt) => this._handleEscClose(evt) */
    document.addEventListener("keydown", this._handleEscClose);
    console.log("Метод OPEN - WORK");
  }

  // отвечают закpытие попапа
  close() {
    this._selectrPopup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    console.log("Метод CLOSE - WORK");
  }

  //содержит логику закрытия попапа клавишей Esc.
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      // document.querySelectorAll(".popup").forEach((element) => {
      //   element.classList.remove("popup_opened");
      // });
      this.close();
      console.log("Метод _handleEscClose - WORK");
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
        console.log("Метод setEventListeners |КРЕСТИК| - WORK");
        this.close();
      });
    });

    //закрытие на паранжу
    this._selectrPopup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
        console.log("Метод setEventListeners |ПАРАНЖА| - WORK");
      }
    });
  }
}
