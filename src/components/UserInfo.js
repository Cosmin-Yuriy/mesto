// /Класс UserInfo отвечает 
//за управление отображением информации о пользователе на странице.
//Принимает в конструктор объект с селекторами двух элементов:
// элемента имени пользователя и элемента информации о себе

export default class UserInfo {

  constructor(elementName,  elementInfo) {
    this._elementName = elementName;
    this._elementInfo = elementInfo;
  }

  // Этот метод пригодится когда данные пользователя 
  // нужно будет подставить в форму при открытии.
  getUserInfo(){
    return {
      name: this._elementName.textContent,
      info: this._elementInfo.textContent,
    }
  }

//который принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo({name,info}){
    this._elementName.textContent = name;
    this._elementInfo.textContent = info;
  }
  
}