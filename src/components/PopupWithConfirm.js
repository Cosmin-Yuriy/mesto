import Popup from "./Popup.js";

class PopupWithConfirm extends Popup {
  constructor(popupElement){
    super(popupElement);
   // this._calbacklSubmitForm = calbacklSubmitForm;
  }


// setEventListeners() {
//   super.setEventListeners();
//   this._buttonSubmitPopup.addEventListener('click', () => {
//     this._calbacklSubmitForm
//   })
//}
// setEventListeners() {
//   //Перезаписывает родительский метод setEventListeners.
//   super.setEventListeners();
//   //ставит слушатель на форме, на кнопку (button) и если нажать, то будет следущее:
//   this._form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     this._calbacklSubmitForm(this._getInputValues());
//   });
// }



popupWithConfirm(calbacklSubmitForm) {
  this._calbacklSubmitForm = calbacklSubmitForm;
}

}

export default PopupWithConfirm;
