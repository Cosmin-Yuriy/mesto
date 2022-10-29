// класс Popup, который отвечает за открытие и закрытие попапа
//Принимает в конструктор единственный параметр — селектор попапа
export default class Popup {
  constructor(selectrPopup) {
    this._selectrPopup = selectrPopup;
  }

  // отвечают за открытие попапа
  // open(modalWindow) {
  //   modalWindow.classList.add(this._selectrPopup);
  //   document.addEventListener("keydown", this._handleEscClose);
  //   console.log(modalWindow);
  //   console.log('Метод OPEN - WORK');
  // }
  open() {
    this._selectrPopup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    // console.log(this._selectrPopup);
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

  //добавляет слушатель клика иконке закрытия попапа
  // который добавляет слушатель клика иконке закрытия попапа.
  // Модальное окно также закрывается при клике на затемнённую
  // область вокруг формы
  setEventListeners() {}
}
