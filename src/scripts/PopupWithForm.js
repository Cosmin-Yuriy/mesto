/* который наследует от Popup. Этот класс:
Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
*/

import Popup from "./Popup.js";
import { popups } from './index.js';
export default class PopupWithForm extends Popup {
  constructor(selectrPopup, calbacklSubmitForm) {
    super(selectrPopup);
    this._calbacklSubmitForm = calbacklSubmitForm;
    this._popups = popups;
  }

  //собирает данные всех полей формы.
  _getInputValues() {
    this._inputs = '';
    this._input = document.querySelectorAll("input");
    this._input.forEach((input) => {
      this._inputs = input;
    });
    console.log("Класс PopupWithForm - метод _getInputValues работает" )
    return this._input;
  }

  //Перезаписывает родительский метод setEventListeners.
  //должен не только добавлять обработчик клика иконке закрытия,
  //но и добавлять обработчик сабмита формы
  //Как всегда, здесь в ПР8, без наставника ну никак не разобрать и понять, что нужно...
  //Сделали, но пока на 60% понимаю (не понятен колбек)
  setEventListeners() {
     //Перезаписывает родительский метод setEventListeners.
    super.setEventListeners();
    this._popups.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._calbacklSubmitForm(this._getInputValues());
      this.close();
      console.log("Класс PopupWithForm - метод setEventListeners работает" )
    })
  }


  //Перезаписывает родительский метод close, так
  //как при закрытии попапа форма должна ещё и сбрасываться
  close() {
    this._popups.reset();
    super.close();
  }
  //Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
}
