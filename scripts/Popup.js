// класс Popup, который отвечает за открытие и закрытие попапа
//Принимает в конструктор единственный параметр — селектор попапа
export default class Popup {
  constructor(selectrPopup) {
    this._selectrPopup = selectrPopup;
  }

  // отвечают за открытие попапа
  open(modalWindow) {
    modalWindow.classList.add(this._selectrPopup);
    document.addEventListener("keydown", this._handleEscClose);
    console.log(modalWindow);
    console.log('Метод OPEN - WORK');
  }

  // отвечают за pакрытие попапа
  close(modalWindow) {
   modalWindow.classList.remove(this._selectrPopup);
  //  document.removeEventListener("keydown",this._handleEscClose);
    console.log('Метод CLOSE - WORK');
  }

  test(){
   console.log('test sos');
  }

  //содержит логику закрытия попапа клавишей Esc.
  _handleEscClose(evt) {
    // evt.key === "Escape"
    // ? modalWindow.classList.remove(this._selectrPopup)
    // : console.log('Не нажато')
    if (evt.key === "Escape") {
      this.close();
      console.log('Метод _handleEscClose - WORK');
     // const openedPopup = document.querySelector(".popup_opened");
     // modalWindow.classList.remove(openedPopup);
     // console.log(openedPopup);
     // console.log(this._selectrPopup);
    }}


  //добавляет слушатель клика иконке закрытия попапа
  // который добавляет слушатель клика иконке закрытия попапа.
  // Модальное окно также закрывается при клике на затемнённую
  // область вокруг формы
  setEventListeners() {}

}


