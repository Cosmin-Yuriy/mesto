// /Класс UserInfo отвечает
//за управление отображением информации о пользователе на странице.
//Принимает в конструктор объект с селекторами двух элементов:
// элемента имени пользователя и элемента информации о себе

export default class UserInfo {
  constructor(elementName, elementInfo, avatar) {
    this._elementName = elementName;
    this._elementInfo = elementInfo;
    this._avatar = avatar;
  }

  // Этот метод пригодится когда данные пользователя
  // нужно будет подставить в форму при открытии.
  getUserInfo() {
    return {
      name: this._elementName.textContent,
      info: this._elementInfo.textContent,
      avatar: this._avatar.src,
      // name: this._elementName,
      // info: this._elementInfo,
    };
  }

  //который принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo({ name, info, avatar }) {
    this._elementName.textContent = name;
    this._elementInfo.textContent = info;
    this._avatar.src = avatar;
    // console.log(avatar);
    // this._elementInfo = info;
  }
}
