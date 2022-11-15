/* Класс который наследует от Popup. Этот класс добавляет новые данные в
 родительский метод open. В методе open класса PopupWithImage
  нужно вставлять 3 вещи

  1) Ссылку на картинку => this._popupPhotoBig.src = link;
  2) Текст atl картинки =>  this._popupPhotoBig.alt = text;
  3) Текст описание под картинкой => this._popupTitleImage = popupTitleImage;

  PS я очередной раз охреневаю над описанием ТЗ Яндекс практикум, такое ощущение,
  что в налоговой кто пишет требования и задания в ЯП это одни и те же люди...
   */
  //Импортозамещаем )) Popup из нашей же папки
   import Popup from './Popup.js';
   //пробрасываем наши константы
   import { popupPhotoBig, popupTitleImage } from './index.js';

   //Расширяем что б добавить новые значения
   export default class PopupWithImage extends Popup {

    constructor(selectrPopup) {
      super (selectrPopup);
      this._popupPhotoBig = popupPhotoBig;
      this._popupTitleImage = popupTitleImage;
    }

  // отвечают за открытие попапа
  open(text, link) {
    //направляем данные в открытый Popup для большой картинки link и text
    this._popupPhotoBig.src = link;
    this._popupPhotoBig.alt = text;
    this._popupTitleImage.textContent = text;
    super.open();
    console.log("Класс PopupWithImage - метод OPEN работает" )
  } 

}