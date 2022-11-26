/* Класс который наследует от Popup. Этот класс добавляет новые данные в
 родительский метод open. В методе open класса PopupWithImage
  нужно вставлять 3 вещи

  1) Ссылку на картинку => this._popupPhotoBig.src = link;
  2) Текст atl картинки =>  this._popupPhotoBig.alt = text;
  3) Текст описание под картинкой => this._popupTitleImage = popupTitleImage;
   */

  //Импортозамещаем )) Popup из нашей же папки
   import Popup from './Popup.js';

   //Расширяем что б добавить новые значения
   export default class PopupWithImage extends Popup {

    constructor(popupElement) {
      super (popupElement);
      
      this._popupPhotoBig = popupElement.querySelector('.popup__photo');
      this._popupTitleImage = popupElement.querySelector('.popup__title-img');
    }

  // отвечают за открытие попапа
  open(text, link) {
    console.log(this._popup);
    //направляем данные в открытый Popup для большой картинки link и text
    this._popupPhotoBig.src = link;
    this._popupPhotoBig.alt = text;
    this._popupTitleImage.textContent = text;
    super.open();
    console.log("Класс PopupWithImage - метод OPEN работает" )
  } 

}