import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupElement, calbacklSubmitForm) {
    super(popupElement);
    this._popupElement = popupElement;
    this._calbacklSubmitForm = calbacklSubmitForm;
    this._popups = this._popupElement.querySelector(".popup__form");
    this._input = this._popups.querySelectorAll(".popup__input");
  }

  //собирает данные всех полей формы.
  _getInputValues() {
    this._inputs = "";
    this._input.forEach((input) => {
      this._inputs = input.value;
    });
    console.log("Класс PopupWithForm - метод _getInputValues работает");

    return this._input;
  }

  //Перезаписывает родительский метод setEventListeners.
  setEventListeners() {
    //Перезаписывает родительский метод setEventListeners.
    super.setEventListeners();
    this._popups.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._calbacklSubmitForm(this._getInputValues());
      this.close();
      console.log("Класс PopupWithForm - метод setEventListeners работает");
    });
  }

  //Перезаписывает родительский метод close, так
  //как при закрытии попапа форма должна ещё и сбрасываться
  close() {
    this._popups.reset();
    super.close();
  }
}
