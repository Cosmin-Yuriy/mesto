class Api {
  constructor(host, token) {
    this._host = host;
    this._token = token;
    this._checkErorrJson = this._checkErorrJson.bind(this);
    this.__getHeader = this._getHeader.bind(this);
  }

  //метод будет выдавать промис если ок, или показывать ошибку
  _checkErorrJson(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Ошибка при загрузке");
  }

  //метод будет авторизироваться
  _getHeader() {
    return {
      authorization: this._token,
      "Content-Type": "application/json",
    };
  }

  //метод получается инфо о юзере
  getUserInform() {
    return fetch(`${this._host}/users/me`, {
      headers: this.__getHeader(),
    }).then(this._checkErorrJson);
  }

//метод получает карты
  getCards() {
    return fetch(`${this._host}/cards`, {
      headers: this.__getHeader(),
    }).then(this._checkErorrJson);
  }

//Метод для отправки изменения юзера
  editUserInform(name, about) {
    return fetch(`${this._host}/users/me`, {
      method: "PATCH",
      headers: this.__getHeader(),
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkErorrJson);
  }

  //метод добавления новой карточки
  addNewCard(newName, newLink) {
    return fetch(`${this._host}/cards`, {
      method: "POST",
      headers: this.__getHeader(),
      body: JSON.stringify({
        name: newName,
        link: newLink,
        // owner_id: "0",
      }),
    }).then(this._checkErorrJson);
  }

  //метод удаления карточки
  deleteCard(cardId) {
    return fetch(`${this._host}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.__getHeader(),
    }).then(this._checkErorrJson);
  }

  //метод лайка карточки
  putLikeCard(cardId) {
    return fetch(`${this._host}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.__getHeader(),
    }).then(this._checkErorrJson);
  }

  //метод удаления лайка карточки
  deleteLikeCard(cardId) {
    return fetch(`${this._host}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.__getHeader(), 
    }).then(this._checkErorrJson);
  }

  //обновление аватара
  updateAvatar(avatar) {
    return fetch(`${this._host}/users/me/avatar`, {
      method: "PATCH",
      headers: this.__getHeader(),
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._checkErorrJson);
  }
}

export default Api;
