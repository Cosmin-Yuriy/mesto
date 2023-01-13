import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupElement, calbacklSubmitForm) {
    super(popupElement);
    this._popupElement = popupElement;
    this._calbacklSubmitForm = calbacklSubmitForm;
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }
  
  //собирает данные всех полей формы и укладывет их в объект (данные name и subtitle).
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  //Перезаписывает родительский метод setEventListeners.
  setEventListeners() {
    //Перезаписывает родительский метод setEventListeners.
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._calbacklSubmitForm(this._getInputValues());
      this.close();
    });
  }

  //Перезаписывает родительский метод close, так
  //как при закрытии попапа форма должна ещё и сбрасываться
  close() {
    this._form.reset();
    super.close();
  }
}
