/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Api = /*#__PURE__*/function () {
  function Api(host, token) {
    _classCallCheck(this, Api);
    this._host = host;
    this._token = token;
    this._checkErorrJson = this._checkErorrJson.bind(this);
    this.__getHeader = this._getHeader.bind(this);
  }

  //метод будет выдавать промис если ок, или показывать ошибку
  _createClass(Api, [{
    key: "_checkErorrJson",
    value: function _checkErorrJson(res) {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Ошибка при загрузке");
    }

    //метод будет авторизироваться
  }, {
    key: "_getHeader",
    value: function _getHeader() {
      return {
        authorization: this._token,
        "Content-Type": "application/json"
      };
    }

    //метод получается инфо о юзере
  }, {
    key: "getUserInform",
    value: function getUserInform() {
      return fetch("".concat(this._host, "/users/me"), {
        headers: this.__getHeader()
      }).then(this._checkErorrJson);
    }

    //метод получает карты
  }, {
    key: "getCards",
    value: function getCards() {
      return fetch("".concat(this._host, "/cards"), {
        headers: this.__getHeader()
      }).then(this._checkErorrJson);
    }

    //Метод для отправки изменения юзера
  }, {
    key: "editUserInform",
    value: function editUserInform(name, about) {
      return fetch("".concat(this._host, "/users/me"), {
        method: "PATCH",
        headers: this.__getHeader(),
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(this._checkErorrJson);
    }

    //метод добавления новой карточки
  }, {
    key: "addNewCard",
    value: function addNewCard(newName, newLink) {
      return fetch("".concat(this._host, "/cards"), {
        method: "POST",
        headers: this.__getHeader(),
        body: JSON.stringify({
          name: newName,
          link: newLink
          // owner_id: "0",
        })
      }).then(this._checkErorrJson);
    }

    //метод удаления карточки
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this._host, "/cards/").concat(cardId), {
        method: "DELETE",
        headers: this.__getHeader()
      }).then(this._checkErorrJson);
    }

    //метод лайка карточки
  }, {
    key: "putLikeCard",
    value: function putLikeCard(cardId) {
      return fetch("".concat(this._host, "/cards/").concat(cardId, "/likes"), {
        method: "PUT",
        headers: this.__getHeader()
      }).then(this._checkErorrJson);
    }

    //метод удаления лайка карточки
  }, {
    key: "deleteLikeCard",
    value: function deleteLikeCard(cardId) {
      return fetch("".concat(this._host, "/cards/").concat(cardId, "/likes"), {
        method: "DELETE",
        headers: this.__getHeader()
      }).then(this._checkErorrJson);
    }

    //обновление аватара
  }, {
    key: "updateAvatar",
    value: function updateAvatar(avatar) {
      return fetch("".concat(this._host, "/users/me/avatar"), {
        method: "PATCH",
        headers: this.__getHeader(),
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(this._checkErorrJson);
    }
  }]);
  return Api;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//Импортозамещаем )) Popup из нашей же папки

var Card = /*#__PURE__*/function () {
  function Card(data, config, handleCardClick, handleDeleteClick, handleLikeClick) {
    _classCallCheck(this, Card);
    this.data = data;
    this._text = data.name;
    this._link = data.link;
    //  this.userId = data.owner._id
    this._likes = data.likes;
    this._cardId = data._id;
    this._elementText = config.elementText;
    this._elementImageSelector = config.elementImage;
    this._elementTrashSelector = config.elementTrash;
    this._elementLikeSelector = config.elementLike;
    this._elementLikeActive = config.elementLikeActive;
    this._newElementIdTemplate = config.newElementIdTemplate;
    this._likesCoount = config.likeCounter;
    this._cardDeleteId = config.cardDelete;
    this._buttonPushYesId = config.buttonPushYes;
    this._myId = config.userId;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      //Достаем template и клонируем (config.newElementIdTemplate не будет работать)
      return document.querySelector(this._newElementIdTemplate).content.querySelector(".element").cloneNode(true);
    }

    //метод удаление карточки
    // async _handleDeleteCard() {
    //   try {
    //     this._deleteCardServer(this._cardId);
    //     this._card.remove();
    //     this._card = null;
    //   } catch (error) {
    //     console.log("ошибка с удалением карточки");
    //   }
    // }

    //метод лайк карточки
  }, {
    key: "_likePush",
    value: function _likePush() {
      this._elementLike.classList.toggle(this._elementLikeActive);
    }

    //метод слушателей для удалений card
    // _listenerDeleteCard() {
    //   this._cardDelete = document.querySelector(this._cardDeleteId);
    //   this._buttonPushYes = document.querySelector(this._buttonPushYesId);
    //   const popupCardDelete = new Popup(this._cardDelete);
    //   popupCardDelete.setEventListeners();
    //   popupCardDelete.open();
    //   this._buttonPushYes.addEventListener("click", () => {
    //     this._deleteCardServer(this._cardId, this._getTemplate);
    //     this._card.remove();
    //     this._card = null;
    //   //  this._handleDeleteCard();
    //     popupCardDelete.close();
    //   });
    // }
  }, {
    key: "removeCard",
    value: function removeCard() {
      this._card.remove();
      this._card = null;
    }

    //Добавляем слушатели
  }, {
    key: "_addEventListener",
    value: function _addEventListener() {
      var _this = this;
      //по факту заменили handleOpenPopup - не понял зачем? Какая разница?
      //Какое ТЗ - Такая и работа ХЗ
      this._elementImage.addEventListener("click", function () {
        _this._handleCardClick(_this._text, _this._link);
      });

      //Удаляем карточки
      this._buttonTrash.addEventListener("click", function () {
        _this._handleDeleteClick(_this._cardId);
        console.log("Class Card  work");
      });
      //Удаляем карточки
      // this._buttonTrash.addEventListener("click", (event) => {
      //   event.preventDefault();
      //   this._listenerDeleteCard();
      // });

      //Лайкаем сердечки
      this._elementLike.addEventListener("click", function () {
        _this._likePush();
        //сюда в функцию передаем id карты
        _this._handleLikeClick(_this._cardId);
      });
    }
  }, {
    key: "_checkUserId",
    value: function _checkUserId() {
      if (this.data.owner._id !== this._myId) {
        this._card.querySelector(this._elementTrashSelector).classList.add("element__trash_hidden");
      }
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      var _this2 = this;
      var myIdLikeCards = this._likes.find(function (element) {
        return element._id === _this2._myId;
      });
      return myIdLikeCards;
    }

    //МЕТОД - закрашивает мои лайки
    //Если мой айди совпадает с айди лайкнушего картинку,
    // то закрашиваем сердце  "this._elementLikeActive"
  }, {
    key: "_likeMyUserCard",
    value: function _likeMyUserCard() {
      var _this3 = this;
      var myIdLikeCard = this._likes.find(function (element) {
        return element._id === _this3._myId;
      });
      if (myIdLikeCard) {
        this._elementLike.classList.add(this._elementLikeActive);
      }
    }

    //метод считает и добавляет лайки
  }, {
    key: "likeCounter",
    value: function likeCounter(addLikes) {
      this._likes = addLikes;
      //вытаскиваем счетчик лайков (если сделать document.querySelector.... то будет выдавать ошибку)
      this._likeCounter = this._card.querySelector(this._likesCoount);
      this._likeCounter.textContent = this._likes.length;
    }
    //Создаем карточки
  }, {
    key: "createCard",
    value: function createCard() {
      this._card = this._getTemplate();
      this._card.querySelector(this._elementText).textContent = this._text;

      //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
      this._elementImage = this._card.querySelector(this._elementImageSelector);
      this._buttonTrash = this._card.querySelector(this._elementTrashSelector);
      this._elementLike = this._card.querySelector(this._elementLikeSelector);
      this._elementImage.src = this._link;
      this._elementImage.alt = this._text;

      //метод считает и добавляет лайки
      this.likeCounter(this._likes);
      //метод закрашивает мои лайки
      this._likeMyUserCard();
      //проверка для корзины - показывает для своих карточек
      this._checkUserId();
      //Вызываем слушателей
      this._addEventListener();
      return this._card;
    }
  }]);
  return Card;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//ФУНКЦИИ ВАЛИДНОСТИ
var FormValidator = /*#__PURE__*/function () {
  //Обязательно нужно пробрасывать (параметры/аргументы из Класа/index)
  function FormValidator(validationConfig, form) {
    var _this = this;
    _classCallCheck(this, FormValidator);
    _defineProperty(this, "validateButton", function () {
      //пробегаемся по инпуту формы "formInputs" берем в них { validity } и проверяем на  validity.valid тру или фолс
      _this._isFormValid = _this._formInputs.every(function (_ref) {
        var validity = _ref.validity;
        return validity.valid;
      });
      //Если форма валидная включаем кнопку
      if (_this._isFormValid) {
        _this._popupSubmitButton.removeAttribute("disabled");
        //Если форма не валидная отключаем кнопку
      } else {
        _this._popupSubmitButton.setAttribute("disabled", "disabled");
      }
    });
    _defineProperty(this, "_showInputError", function (inputElement) {
      //получаем из класса в span который (под инпутом) главное, что б id совпадало с названием класса
      _this._elementError = document.querySelector(".".concat(inputElement.id, "-error"));
      //забрасываем текс ошибок из валидации в новую константу
      _this._textError = inputElement.validationMessage;
      //добавляем класс ошибки к инпуту
      inputElement.classList.add(_this._popupInputError);
      //в текст span под инпутом закидываем текст ошибки
      _this._elementError.textContent = _this._textError;
    });
    _defineProperty(this, "_hideInputError", function (inputElement) {
      _this._elementError = document.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.remove(_this._popupInputError);
      _this._elementError.textContent = "";
    });
    _defineProperty(this, "_checkInputValidity", function (input) {
      if (!input.checkValidity()) {
        _this._showInputError(input);
      } else {
        _this._hideInputError(input);
      }
    });
    _defineProperty(this, "_validateFormInputs", function () {
      //создаем массив из инпутов
      _this._formInputs = Array.from(_this._form.querySelectorAll(_this._popupInput));
      //определяем кнопку "сохранить/отправить" в профиле
      _this._popupSubmitButton = _this._form.querySelector(_this._buttonFormEditPofileTable);
      _this.validateButton();
      _this._formInputs.forEach(function (inputElement) {
        //вешаем слушатель на инпуты (элементы массива /инпуты/ "this._formInputs")
        inputElement.addEventListener("input", function (evt) {
          _this._checkInputValidity(inputElement);
          _this.validateButton();
        });
      });
    });
    this._popupForm = validationConfig.popupForm;
    this._validationConfig = validationConfig;
    this._popupElementError = validationConfig.popupElementError;
    this._popupInputError = validationConfig.popupInputError;
    this._popupInput = validationConfig.popupInput;
    this._buttonFormEditPofileTable = validationConfig.buttonFormEditPofileTable;
    this._form = form;
  }
  _createClass(FormValidator, [{
    key: "enableValidation",
    value: function enableValidation() {
      this._validateFormInputs();
    }
  }]);
  return FormValidator;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/* класс Popup, который отвечает за открытие и закрытие попапа
Принимает в конструктор единственный параметр — селектор попапа */
var Popup = /*#__PURE__*/function () {
  function Popup(popupElement) {
    _classCallCheck(this, Popup);
    this._popupElement = popupElement;
    /* !!! ВАЖНО Делаем привязку с помощью метода "bind" без него не будет
    передоваться в другой метод, там лишь будет "undefined" */
    this._handleEscClose = this._handleEscClose.bind(this);
    this._buttonSubmitPopup = this._popupElement.querySelector(".popup__submit-button");
  }

  // отвечают за открытие попапа
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupElement.classList.add("popup_opened");
      /*обязательно надо делать привязку с помощью метода "bind" в конструкторе
      Также можно просто здесь написать (evt) => this._handleEscClose(evt) */
      document.addEventListener("keydown", this._handleEscClose);
      console.log('сработало опен в попап');
    }

    // отвечают закpытие попапа
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose);
    }

    //содержит логику закрытия попапа клавишей Esc.
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
        // }
      }
    }

    /* добавляет слушатель клика иконке закрытия попапа.
     Модальное окно также закрывается при клике на затемнённую
     область вокруг формы */
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      //закрыть попап
      this._buttonClose = document.querySelectorAll(".popup__close-icon");
      this._popupElement.addEventListener("click", function (evt) {
        if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-icon")) {
          _this.close();
        }
      });
      // this._buttonClose.forEach((element) => {
      //   element.addEventListener("click", () => {
      //     this.close();
      //   });
      // });

      //закрытие на паранжу
      // this._popupElement.addEventListener("click", (evt) => {
      //   if (evt.target === evt.currentTarget) {
      //     this.close();
      //   }
      // });
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupElement, calbacklSubmitForm) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupElement);
    _this._popupElement = popupElement;
    _this._calbacklSubmitForm = calbacklSubmitForm;
    _this._form = _this._popupElement.querySelector(".popup__form");
    _this._inputList = _this._form.querySelectorAll(".popup__input");
    return _this;
  }

  //собирает данные всех полей формы и укладывет их в объект (данные name и subtitle).
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._formValues = {};
      this._inputList.forEach(function (input) {
        return _this2._formValues[input.name] = input.value;
      });
      return this._formValues;
    }
  }, {
    key: "popupWithConfirm",
    value: function popupWithConfirm(calbacklSubmitForm) {
      this._calbacklSubmitForm = calbacklSubmitForm;
    }

    //Перезаписывает родительский метод setEventListeners.
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      //Перезаписывает родительский метод setEventListeners.
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      //ставит слушатель на форме, на кнопку (button) и если нажать, то будет следущее:
      this._form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this3._calbacklSubmitForm(_this3._getInputValues());
      });
    }

    //Перезаписывает родительский метод close, так
    //как при закрытии попапа форма должна ещё и сбрасываться
  }, {
    key: "close",
    value: function close() {
      this._form.reset();
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }, {
    key: "buttonTextChange",
    value: function buttonTextChange(save, textButton, textTimeoutSave) {
      if (save) {
        this._buttonSubmitPopup.textContent = textTimeoutSave;
      } else {
        this._buttonSubmitPopup.textContent = textButton;
      }
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/* Класс который наследует от Popup. Этот класс добавляет новые данные в
 родительский метод open. В методе open класса PopupWithImage
  нужно вставлять 3 вещи

  1) Ссылку на картинку => this._popupPhotoBig.src = link;
  2) Текст atl картинки =>  this._popupPhotoBig.alt = text;
  3) Текст описание под картинкой => this._popupTitleImage = popupTitleImage;
   */

//Импортозамещаем )) Popup из нашей же папки


//Расширяем что б добавить новые значения
var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupElement) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupElement);
    _this._popupPhotoBig = popupElement.querySelector('.popup__photo');
    _this._popupTitleImage = popupElement.querySelector('.popup__title-img');
    return _this;
  }

  // отвечают за открытие попапа
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(text, link) {
      //направляем данные в открытый Popup для большой картинки link и text
      this._popupPhotoBig.src = link;
      this._popupPhotoBig.alt = text;
      this._popupTitleImage.textContent = text;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//отвечает за отрисовку элементов на странице
/*  Первым параметром конструктора принимает объект с двумя свойствами: items и renderer. 
  Свойство items — это массив данных (В нашем случае здесь это карточки которые 
    находится в cards), которые нужно добавить на страницу при инициализации
   класса. Свойство renderer — это функция, которая отвечает за создание и отрисовку данных
    на странице.
  Второй параметр конструктора — селектор контейнера, в который нужно добавлять 
  созданные элементы. */
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelectr) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._renderer = renderer;
    this._container = containerSelectr;
  }

  // отвечает за отрисовку всех элементов. 
  // Отрисовка каждого отдельного элемента должна 
  // осуществляться функцией renderer
  // по факту хватанули из индекс.js функцию  и запихнули сюда
  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;
      items.forEach(function (item) {
        _this._renderer(item);
      });
    }

    // Содержит публичный метод addItem, который 
    //принимает DOM-элемент и добавляет его в контейнер
    // здесь мы будем добавлять карточки в начало 
    // в аргумент будет вставляться Функция карточка с добавлением данных на сайт
  }, {
    key: "addItem",
    value: function addItem(item) {
      this._container.append(item);
    }

    //для новых карт, что б вверху появлялось(пока только так)
  }, {
    key: "addItemNewcard",
    value: function addItemNewcard(item) {
      this._container.prepend(item);
    }
  }]);
  return Section;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// /Класс UserInfo отвечает
//за управление отображением информации о пользователе на странице.
//Принимает в конструктор объект с селекторами двух элементов:
// элемента имени пользователя и элемента информации о себе
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(elementName, elementInfo, avatar) {
    _classCallCheck(this, UserInfo);
    this._elementName = elementName;
    this._elementInfo = elementInfo;
    this._avatar = avatar;
  }

  // Этот метод пригодится когда данные пользователя
  // нужно будет подставить в форму при открытии.
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._elementName.textContent,
        about: this._elementInfo.textContent,
        avatar: this._avatar.src
      };
    }

    //который принимает новые данные пользователя и добавляет их на страницу.
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref) {
      var name = _ref.name,
        about = _ref.about,
        avatar = _ref.avatar;
      this._elementName.textContent = name;
      this._elementInfo.textContent = about;
      this._avatar.src = avatar;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "validationConfig": () => (/* binding */ validationConfig)
/* harmony export */ });
var validationConfig = {
  popup: ".popup",
  popupForm: ".popup__form",
  popupInput: ".popup__input",
  buttonFormEditPofileTable: ".popup__submit-button",
  popupElementError: "popup__element-error",
  popupInputError: "popup__input_error"
};
var config = {
  popup: ".popup",
  profileAvatar: ".profile__avatar",
  formUpdateCard: "#form_update_card",
  title: ".profile__title",
  subTitle: ".profile__subtitle",
  popupEditProfile: "#popup_edit_profile",
  buttonEdit: "#profileButtonEdit",
  subTitleEdit: '.popup__input[name="subtitle"]',
  popupFormEditPofileTable: '.popup__form[name="popupFormEditPofileTable"]',
  titleEdit: '.popup__input[name="name"]',
  popupSubmitButtonsDisable: ".popup__submit-button_disable",
  buttonAddButton: "#profileAddButton",
  popupAdd: "#popup_add",
  textValuePopupTitle: "#input-image-title",
  textValuePopupSubtitle: "#input-image-url",
  elementsCard: ".elements",
  popupBigOpenImage: "#popup-photo",
  buttonPopupBigImageClose: ".popup__close[name='buttonPopupBigImgClose']",
  newElementIdTemplate: "#newElement",
  popupClose: ".popup__close",
  popupOpened: "popup_opened",
  elementText: ".element__text",
  elementImage: ".element__img",
  popupTextColorFontGrey: "popup__input_color-font_grey",
  popupTitleImage: ".popup__title-img",
  popupPhotoBig: ".popup__photo",
  elementLike: ".element__like",
  elementLikeActive: "element__like_active",
  elementTrash: ".element__trash",
  element: ".element",
  formAdd: "#form_add",
  inputTitleProfile: ".popup__input[name='name']",
  inputSubtitleProfile: ".popup__input[name='subtitle']",
  likeCounter: "#likeCounter",
  cardDelete: "#popup_delete_card",
  buttonPushYes: "#button_push_yes",
  popupCardDelete: "#popup_delete_card",
  popupUpdateAvatarId: "#popup_update_avatar",
  inputProfileLinkAvatar: "#input-profile-link-avatar",
  host: "https://mesto.nomoreparties.co/v1/cohort-55",
  token: "588e8735-cc00-4f6d-8d92-da715c5db0ca",
  userId: "d0ab5740981b8599f5d183a6"
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//**************************** ИМПОРТЫ ****************************





//import initialCards from "../utils/cards.js";




//import { PopupWithConfirm } from "../components/PopupWithConfirmation.js";


//import { popupDeleteCard } from "../../mesto-main 4/src/utils/constants.js";

//**************************** КОНСТАНТЫ ****************************

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.host, _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.token);
var popupSubmitButtons = document.querySelectorAll(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.validationConfig.buttonFormEditPofileTable);
//config
var title = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.title);
var subTitle = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.subTitle);
var popupEditProfile = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.popupEditProfile);
var buttonEdit = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.buttonEdit);
var buttonAddButton = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.buttonAddButton);
var popupAdd = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.popupAdd);
var formAdd = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.formAdd);
var elementsCard = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.elementsCard);
var popupBigOpenImage = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.popupBigOpenImage);
var newElementTemplate = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.newElementIdTemplate).content;
var inputTitleProfile = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.inputTitleProfile);
var inputSubtitleProfile = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.inputSubtitleProfile);
//const likeCounter = document.querySelector(config.likeCounter);
var cardDelete = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.cardDelete);
var profileAvatar = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.profileAvatar);
var popupUpdateAvatarId = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.popupUpdateAvatarId);
var inputProfileLinkAvatar = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.inputProfileLinkAvatar);
var formUpdateCard = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.formUpdateCard);
var popupFormEditPofileTable = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.popupFormEditPofileTable);
var popupCardDelete = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config.popupCardDelete);

//**************************** Промис ALL ****************************
var userId;
var promis = [api.getUserInform(), api.getCards()];
Promise.all(promis).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    userResponse = _ref2[0],
    cardResponse = _ref2[1];
  userId = userResponse._id;
  cardList.renderItems(cardResponse);
  //Если использую userInfo не приходид subtitle в профиль popupProfileEdit
  userInfo.setUserInfo(userResponse);
})["catch"](function (error) {
  console.log(error);
});

//**************************** КЛАССЫ ****************************

//**************************** PopupWithImage ****************************
//Подключаем большие картинки
var popupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__["default"](popupBigOpenImage);
popupImage.setEventListeners();
var handleCardClick = function handleCardClick(name, link) {
  popupImage.open(name, link);
};

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ВНИМАНИЕ - ВНИМАНИЕ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Я ТАК ПОНИМАЮ PopupWithConfirm ДЕЛАТЬ НЕ НУЖНО - НЕ ОБЯЗАТЕЛЬНО, НАСТАВНИК ПОКАЗЫВАЛ ПО ДРУГОМУ ДЕЛАТЬ
// У НАС  PopupWithForm есть, зачем нам новый класс создавать, всё же там готово

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ВНИМАНИЕ - ВНИМАНИЕ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//**************************** Card ****************************
//Делаем функцию что б добавлялись карточки (МАССИВ)
function createCard(data) {
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_5__["default"](data, _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config, handleCardClick, function (cardId) {
    deleteCard.open();
    deleteCard.popupWithConfirm(function () {
      api.deleteCard(cardId).then(function (res) {
        newCard.removeCard();
        deleteCard.close();
      })["catch"](function (error) {
        return console.log(error);
      });
    });
  }, function (cardId) {
    if (newCard.isLiked()) {
      api.deleteLikeCard(cardId).then(function (res) {
        newCard.likeCounter(res.likes);
        console.log("Лайк удалился");
      })["catch"](function (error) {
        return console.log(error);
      });
    } else {
      api.putLikeCard(cardId).then(function (res) {
        newCard.likeCounter(res.likes);
        console.log("Лайк добавился");
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  });
  return newCard.createCard();
}

//**************************** Section ****************************

//Делаем константу и из класса, прокидываем ему ({массив с карточками, функцию добавление карточек},
//найденный селектор)
var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  renderer: function renderer(item) {
    //хватаем метод "addItem" и вставляем в параметр функцию добавление карточек createCard(item)
    cardList.addItem(createCard(item));
  }
  // А здесь добавляем селектор
}, elementsCard);

//****************************** ВЫЗОВ КАРТОЧЕК  **********************************

//обернули вызов в APi с данными карточек из сервера
// api
//   .getCards()
//   .then((cards) => {
//     //вызываем метод renderitems(c параметром массивом каточек)
//     cardList.renderItems(cards);
//   });

//создаем константу из Класса для Профайла
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, subTitle, profileAvatar);

//получаем данные о юзере с сервера
// api
//   .getUserInform()
//   .then((user) => {
//     userInfo.setUserInfo({
//       name: user.name,
//       info: user.about,
//       avatar: user.avatar,
//     });
//   })
//   .catch((error) => console.log(error));

//**************************** PopupWithForm  UserInfo Card ****************************

//Обновление имя и описание профайла
var popupProfileEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"](popupEditProfile, function (res) {
  popupProfileEdit.buttonTextChange(true, "Сохранить", "Сохранение...");
  //отпраляем/получаем данные под рекдатированию провиля имя и описание
  api.editUserInform(res.name, res.subtitle).then(function (res) {
    //добавляем сюда и аватар, что б подгружался и он после обновления
    userInfo.setUserInfo({
      name: res.name,
      about: res.about,
      avatar: res.avatar
    });
  }).then(function () {
    popupProfileEdit.close();
  })["catch"](function (error) {
    return console.log(error);
  })["finally"](function () {
    return popupProfileEdit.buttonTextChange(false, "Сохранить", "Сохранение...");
  });
});
popupProfileEdit.setEventListeners();
buttonEdit.addEventListener("click", function () {
  inputTitleProfile.value = userInfo.getUserInfo().name;
  inputSubtitleProfile.value = userInfo.getUserInfo().about;
  popupProfileEdit.open();
});

//Обновляем аватарку
var avatarUpdate = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"](popupUpdateAvatarId, function (input) {
  //обернули в api переименование ссылки аватара, оно отправляется на сервер, что б
  //потом приходило и добавлялось на страницу
  avatarUpdate.buttonTextChange(true, "Сохранить", "Сохранение...");
  api.updateAvatar(input.avatar).then(function (res) {
    userInfo.setUserInfo({
      avatar: input.avatar,
      name: res.name,
      about: res.about
    });
  }).then(function () {
    avatarUpdate.close();
  })["catch"](function (error) {
    return console.log(error);
  })["finally"](function () {
    return avatarUpdate.buttonTextChange(false, "Сохранить", "Сохранение...");
  });
});
avatarUpdate.setEventListeners();
profileAvatar.addEventListener("click", function () {
  // inputProfileLinkAvatar.value = userInfo.getUserInfo().avatar;
  avatarUpdate.open();
});

//Добавляем карточку на сервер
var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"](popupAdd, function (input) {
  //нужно что б после опять надпись "создать была"
  popupAddCard.buttonTextChange(true, "Создать", "Сохранение...");
  api.addNewCard(input.name, input.subtitle).then(function (res) {
    var infoCard = createCard(res);
    cardList.addItemNewcard(infoCard);
  }).then(function () {
    popupAddCard.close();
  })["catch"](function (error) {
    return console.log(error);
  })["finally"](function () {
    return popupAddCard.buttonTextChange(false, "Создать", "Сохранение...");
  });
});

//popupAddCard._getInputValues();
popupAddCard.setEventListeners();

//удаление карточки popupCardDelete -
var deleteCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"](popupCardDelete);

//закрытие попапа
deleteCard.setEventListeners();

//console.log(popupAddCard);
//console.log(deleteCard);
// 2 POPUP
// Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", function () {
  popupAddCard.open();
});

//const test = document.querySelector(config.elementTrash);
//const confirm = new PopupWithConfirm(".popup_delete_card");
// confirm.what();
//confirm.listenerDeleteCard()
//-----------------------------s- КОНЕЦ ------------------------------

//**************************** ВАЛИДАЦИЯ ****************************
//Обязательно нужно пробрасывать (параметры/аргументы из Класcа/index)
//создаем константу и класса с параметрами Congig c для валидации классов, и формы popup
var validationCard = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_6__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.validationConfig, formAdd);
validationCard.enableValidation();
var validationProfile = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_6__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.validationConfig, popupFormEditPofileTable);
validationProfile.enableValidation();
var validationAvatar = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_6__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.validationConfig, formUpdateCard);
validationAvatar.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7QUFFRjtBQUNBTSxZQUFZLENBQUNsQixpQkFBaUIsRUFBRTs7QUFFaEM7QUFDQSxJQUFNSSxVQUFVLEdBQUcsSUFBSWhGLG9FQUFhLENBQUN5RCxlQUFlLENBQUM7O0FBRXJEO0FBQ0F1QixVQUFVLENBQUNKLGlCQUFpQixFQUFFOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBbEMsZUFBZSxDQUFDakgsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDOUNxSyxZQUFZLENBQUNqQixJQUFJLEVBQUU7QUFDckIsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTXFCLGNBQWMsR0FBRyxJQUFJcEosb0VBQWEsQ0FBQ0MsNkRBQWdCLEVBQUV1RyxPQUFPLENBQUM7QUFDbkU0QyxjQUFjLENBQUNDLGdCQUFnQixFQUFFO0FBQ2pDLElBQU1DLGlCQUFpQixHQUFHLElBQUl0SixvRUFBYSxDQUN6Q0MsNkRBQWdCLEVBQ2hCd0Ysd0JBQXdCLENBQ3pCO0FBQ0Q2RCxpQkFBaUIsQ0FBQ0QsZ0JBQWdCLEVBQUU7QUFDcEMsSUFBTUUsZ0JBQWdCLEdBQUcsSUFBSXZKLG9FQUFhLENBQUNDLDZEQUFnQixFQUFFa0YsY0FBYyxDQUFDO0FBQzVFb0UsZ0JBQWdCLENBQUNGLGdCQUFnQixFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3IoaG9zdCwgdG9rZW4pIHtcbiAgICB0aGlzLl9ob3N0ID0gaG9zdDtcbiAgICB0aGlzLl90b2tlbiA9IHRva2VuO1xuICAgIHRoaXMuX2NoZWNrRXJvcnJKc29uID0gdGhpcy5fY2hlY2tFcm9yckpzb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9fZ2V0SGVhZGVyID0gdGhpcy5fZ2V0SGVhZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICAvL9C80LXRgtC+0LQg0LHRg9C00LXRgiDQstGL0LTQsNCy0LDRgtGMINC/0YDQvtC80LjRgSDQtdGB0LvQuCDQvtC6LCDQuNC70Lgg0L/QvtC60LDQt9GL0LLQsNGC0Ywg0L7RiNC40LHQutGDXG4gIF9jaGVja0Vyb3JySnNvbihyZXMpIHtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1XCIpO1xuICB9XG5cbiAgLy/QvNC10YLQvtC0INCx0YPQtNC10YIg0LDQstGC0L7RgNC40LfQuNGA0L7QstCw0YLRjNGB0Y9cbiAgX2dldEhlYWRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5fdG9rZW4sXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9O1xuICB9XG5cbiAgLy/QvNC10YLQvtC0INC/0L7Qu9GD0YfQsNC10YLRgdGPINC40L3RhNC+INC+INGO0LfQtdGA0LVcbiAgZ2V0VXNlckluZm9ybSgpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vdXNlcnMvbWVgLCB7XG4gICAgICBoZWFkZXJzOiB0aGlzLl9fZ2V0SGVhZGVyKCksXG4gICAgfSkudGhlbih0aGlzLl9jaGVja0Vyb3JySnNvbik7XG4gIH1cblxuLy/QvNC10YLQvtC0INC/0L7Qu9GD0YfQsNC10YIg0LrQsNGA0YLRi1xuICBnZXRDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vY2FyZHNgLCB7XG4gICAgICBoZWFkZXJzOiB0aGlzLl9fZ2V0SGVhZGVyKCksXG4gICAgfSkudGhlbih0aGlzLl9jaGVja0Vyb3JySnNvbik7XG4gIH1cblxuLy/QnNC10YLQvtC0INC00LvRjyDQvtGC0L/RgNCw0LLQutC4INC40LfQvNC10L3QtdC90LjRjyDRjtC30LXRgNCwXG4gIGVkaXRVc2VySW5mb3JtKG5hbWUsIGFib3V0KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9fZ2V0SGVhZGVyKCksXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGFib3V0OiBhYm91dCxcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4odGhpcy5fY2hlY2tFcm9yckpzb24pO1xuICB9XG5cbiAgLy/QvNC10YLQvtC0INC00L7QsdCw0LLQu9C10L3QuNGPINC90L7QstC+0Lkg0LrQsNGA0YLQvtGH0LrQuFxuICBhZGROZXdDYXJkKG5ld05hbWUsIG5ld0xpbmspIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vY2FyZHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5fX2dldEhlYWRlcigpLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lOiBuZXdOYW1lLFxuICAgICAgICBsaW5rOiBuZXdMaW5rLFxuICAgICAgICAvLyBvd25lcl9pZDogXCIwXCIsXG4gICAgICB9KSxcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrRXJvcnJKc29uKTtcbiAgfVxuXG4gIC8v0LzQtdGC0L7QtCDRg9C00LDQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C60LhcbiAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vY2FyZHMvJHtjYXJkSWR9YCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5fX2dldEhlYWRlcigpLFxuICAgIH0pLnRoZW4odGhpcy5fY2hlY2tFcm9yckpzb24pO1xuICB9XG5cbiAgLy/QvNC10YLQvtC0INC70LDQudC60LAg0LrQsNGA0YLQvtGH0LrQuFxuICBwdXRMaWtlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vY2FyZHMvJHtjYXJkSWR9L2xpa2VzYCwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5fX2dldEhlYWRlcigpLFxuICAgIH0pLnRoZW4odGhpcy5fY2hlY2tFcm9yckpzb24pO1xuICB9XG5cbiAgLy/QvNC10YLQvtC0INGD0LTQsNC70LXQvdC40Y8g0LvQsNC50LrQsCDQutCw0YDRgtC+0YfQutC4XG4gIGRlbGV0ZUxpa2VDYXJkKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9ob3N0fS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9fZ2V0SGVhZGVyKCksIFxuICAgIH0pLnRoZW4odGhpcy5fY2hlY2tFcm9yckpzb24pO1xuICB9XG5cbiAgLy/QvtCx0L3QvtCy0LvQtdC90LjQtSDQsNCy0LDRgtCw0YDQsFxuICB1cGRhdGVBdmF0YXIoYXZhdGFyKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L3VzZXJzL21lL2F2YXRhcmAsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5fX2dldEhlYWRlcigpLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhdmF0YXIsXG4gICAgICB9KSxcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrRXJvcnJKc29uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcGk7XG4iLCIvL9CY0LzQv9C+0YDRgtC+0LfQsNC80LXRidCw0LXQvCApKSBQb3B1cCDQuNC3INC90LDRiNC10Lkg0LbQtSDQv9Cw0L/QutC4XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcbmNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBkYXRhLFxuICAgIGNvbmZpZyxcbiAgICBoYW5kbGVDYXJkQ2xpY2ssXG4gICAgaGFuZGxlRGVsZXRlQ2xpY2ssXG4gICAgaGFuZGxlTGlrZUNsaWNrXG4gICkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fdGV4dCA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgIC8vICB0aGlzLnVzZXJJZCA9IGRhdGEub3duZXIuX2lkXG4gICAgdGhpcy5fbGlrZXMgPSBkYXRhLmxpa2VzO1xuICAgIHRoaXMuX2NhcmRJZCA9IGRhdGEuX2lkO1xuICAgIHRoaXMuX2VsZW1lbnRUZXh0ID0gY29uZmlnLmVsZW1lbnRUZXh0O1xuICAgIHRoaXMuX2VsZW1lbnRJbWFnZVNlbGVjdG9yID0gY29uZmlnLmVsZW1lbnRJbWFnZTtcbiAgICB0aGlzLl9lbGVtZW50VHJhc2hTZWxlY3RvciA9IGNvbmZpZy5lbGVtZW50VHJhc2g7XG4gICAgdGhpcy5fZWxlbWVudExpa2VTZWxlY3RvciA9IGNvbmZpZy5lbGVtZW50TGlrZTtcbiAgICB0aGlzLl9lbGVtZW50TGlrZUFjdGl2ZSA9IGNvbmZpZy5lbGVtZW50TGlrZUFjdGl2ZTtcbiAgICB0aGlzLl9uZXdFbGVtZW50SWRUZW1wbGF0ZSA9IGNvbmZpZy5uZXdFbGVtZW50SWRUZW1wbGF0ZTtcbiAgICB0aGlzLl9saWtlc0Nvb3VudCA9IGNvbmZpZy5saWtlQ291bnRlcjtcbiAgICB0aGlzLl9jYXJkRGVsZXRlSWQgPSBjb25maWcuY2FyZERlbGV0ZTtcbiAgICB0aGlzLl9idXR0b25QdXNoWWVzSWQgPSBjb25maWcuYnV0dG9uUHVzaFllcztcbiAgICB0aGlzLl9teUlkID0gY29uZmlnLnVzZXJJZDtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrID0gaGFuZGxlTGlrZUNsaWNrO1xuICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNsaWNrID0gaGFuZGxlRGVsZXRlQ2xpY2s7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgLy/QlNC+0YHRgtCw0LXQvCB0ZW1wbGF0ZSDQuCDQutC70L7QvdC40YDRg9C10LwgKGNvbmZpZy5uZXdFbGVtZW50SWRUZW1wbGF0ZSDQvdC1INCx0YPQtNC10YIg0YDQsNCx0L7RgtCw0YLRjClcbiAgICByZXR1cm4gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX25ld0VsZW1lbnRJZFRlbXBsYXRlKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50XCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICB9XG5cbiAgLy/QvNC10YLQvtC0INGD0LTQsNC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LrQuFxuICAvLyBhc3luYyBfaGFuZGxlRGVsZXRlQ2FyZCgpIHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgdGhpcy5fZGVsZXRlQ2FyZFNlcnZlcih0aGlzLl9jYXJkSWQpO1xuICAvLyAgICAgdGhpcy5fY2FyZC5yZW1vdmUoKTtcbiAgLy8gICAgIHRoaXMuX2NhcmQgPSBudWxsO1xuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcItC+0YjQuNCx0LrQsCDRgSDRg9C00LDQu9C10L3QuNC10Lwg0LrQsNGA0YLQvtGH0LrQuFwiKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvL9C80LXRgtC+0LQg0LvQsNC50Log0LrQsNGA0YLQvtGH0LrQuFxuICBfbGlrZVB1c2goKSB7XG4gICAgdGhpcy5fZWxlbWVudExpa2UuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLl9lbGVtZW50TGlrZUFjdGl2ZSk7XG4gIH1cblxuICAvL9C80LXRgtC+0LQg0YHQu9GD0YjQsNGC0LXQu9C10Lkg0LTQu9GPINGD0LTQsNC70LXQvdC40LkgY2FyZFxuICAvLyBfbGlzdGVuZXJEZWxldGVDYXJkKCkge1xuICAvLyAgIHRoaXMuX2NhcmREZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmREZWxldGVJZCk7XG4gIC8vICAgdGhpcy5fYnV0dG9uUHVzaFllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fYnV0dG9uUHVzaFllc0lkKTtcbiAgLy8gICBjb25zdCBwb3B1cENhcmREZWxldGUgPSBuZXcgUG9wdXAodGhpcy5fY2FyZERlbGV0ZSk7XG4gIC8vICAgcG9wdXBDYXJkRGVsZXRlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIC8vICAgcG9wdXBDYXJkRGVsZXRlLm9wZW4oKTtcbiAgLy8gICB0aGlzLl9idXR0b25QdXNoWWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vICAgICB0aGlzLl9kZWxldGVDYXJkU2VydmVyKHRoaXMuX2NhcmRJZCwgdGhpcy5fZ2V0VGVtcGxhdGUpO1xuICAvLyAgICAgdGhpcy5fY2FyZC5yZW1vdmUoKTtcbiAgLy8gICAgIHRoaXMuX2NhcmQgPSBudWxsO1xuICAvLyAgIC8vICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKCk7XG4gIC8vICAgICBwb3B1cENhcmREZWxldGUuY2xvc2UoKTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIHJlbW92ZUNhcmQoKSB7XG4gICAgdGhpcy5fY2FyZC5yZW1vdmUoKTtcbiAgICB0aGlzLl9jYXJkID0gbnVsbDtcbiAgfVxuXG4gIC8v0JTQvtCx0LDQstC70Y/QtdC8INGB0LvRg9GI0LDRgtC10LvQuFxuICBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAvL9C/0L4g0YTQsNC60YLRgyDQt9Cw0LzQtdC90LjQu9C4IGhhbmRsZU9wZW5Qb3B1cCAtINC90LUg0L/QvtC90Y/QuyDQt9Cw0YfQtdC8PyDQmtCw0LrQsNGPINGA0LDQt9C90LjRhtCwP1xuICAgIC8v0JrQsNC60L7QtSDQotCXIC0g0KLQsNC60LDRjyDQuCDRgNCw0LHQvtGC0LAg0KXQl1xuICAgIHRoaXMuX2VsZW1lbnRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX3RleHQsIHRoaXMuX2xpbmspO1xuICAgIH0pO1xuXG4gICAgLy/Qo9C00LDQu9GP0LXQvCDQutCw0YDRgtC+0YfQutC4XG4gICAgdGhpcy5fYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNsaWNrKHRoaXMuX2NhcmRJZCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkNsYXNzIENhcmQgIHdvcmtcIik7XG4gICAgfSk7XG4gICAgLy/Qo9C00LDQu9GP0LXQvCDQutCw0YDRgtC+0YfQutC4XG4gICAgLy8gdGhpcy5fYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIC8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgIHRoaXMuX2xpc3RlbmVyRGVsZXRlQ2FyZCgpO1xuICAgIC8vIH0pO1xuXG4gICAgLy/Qm9Cw0LnQutCw0LXQvCDRgdC10YDQtNC10YfQutC4XG4gICAgdGhpcy5fZWxlbWVudExpa2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2xpa2VQdXNoKCk7XG4gICAgICAvL9GB0Y7QtNCwINCyINGE0YPQvdC60YbQuNGOINC/0LXRgNC10LTQsNC10LwgaWQg0LrQsNGA0YLRi1xuICAgICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrKHRoaXMuX2NhcmRJZCk7XG4gICAgfSk7XG4gIH1cblxuICBfY2hlY2tVc2VySWQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5vd25lci5faWQgIT09IHRoaXMuX215SWQpIHtcbiAgICAgIHRoaXMuX2NhcmRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fZWxlbWVudFRyYXNoU2VsZWN0b3IpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudF9fdHJhc2hfaGlkZGVuXCIpO1xuICAgIH1cbiAgfVxuXG4gIGlzTGlrZWQoKSB7XG4gICAgY29uc3QgbXlJZExpa2VDYXJkcyA9IHRoaXMuX2xpa2VzLmZpbmQoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5faWQgPT09IHRoaXMuX215SWRcbiAgICApO1xuICAgIHJldHVybiBteUlkTGlrZUNhcmRzO1xuICB9XG5cbiAgLy/QnNCV0KLQntCUIC0g0LfQsNC60YDQsNGI0LjQstCw0LXRgiDQvNC+0Lgg0LvQsNC50LrQuFxuICAvL9CV0YHQu9C4INC80L7QuSDQsNC50LTQuCDRgdC+0LLQv9Cw0LTQsNC10YIg0YEg0LDQudC00Lgg0LvQsNC50LrQvdGD0YjQtdCz0L4g0LrQsNGA0YLQuNC90LrRgyxcbiAgLy8g0YLQviDQt9Cw0LrRgNCw0YjQuNCy0LDQtdC8INGB0LXRgNC00YbQtSAgXCJ0aGlzLl9lbGVtZW50TGlrZUFjdGl2ZVwiXG4gIF9saWtlTXlVc2VyQ2FyZCgpIHtcbiAgICBjb25zdCBteUlkTGlrZUNhcmQgPSB0aGlzLl9saWtlcy5maW5kKFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuX2lkID09PSB0aGlzLl9teUlkXG4gICAgKTtcbiAgICBpZiAobXlJZExpa2VDYXJkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50TGlrZS5jbGFzc0xpc3QuYWRkKHRoaXMuX2VsZW1lbnRMaWtlQWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICAvL9C80LXRgtC+0LQg0YHRh9C40YLQsNC10YIg0Lgg0LTQvtCx0LDQstC70Y/QtdGCINC70LDQudC60LhcbiAgbGlrZUNvdW50ZXIoYWRkTGlrZXMpIHtcbiAgICB0aGlzLl9saWtlcyA9IGFkZExpa2VzO1xuICAgIC8v0LLRi9GC0LDRgdC60LjQstCw0LXQvCDRgdGH0LXRgtGH0LjQuiDQu9Cw0LnQutC+0LIgKNC10YHQu9C4INGB0LTQtdC70LDRgtGMIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuLi4uINGC0L4g0LHRg9C00LXRgiDQstGL0LTQsNCy0LDRgtGMINC+0YjQuNCx0LrRgylcbiAgICB0aGlzLl9saWtlQ291bnRlciA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3Rvcih0aGlzLl9saWtlc0Nvb3VudCk7XG4gICAgdGhpcy5fbGlrZUNvdW50ZXIudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGg7XG4gIH1cbiAgLy/QodC+0LfQtNCw0LXQvCDQutCw0YDRgtC+0YfQutC4XG5cbiAgY3JlYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9jYXJkID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IodGhpcy5fZWxlbWVudFRleHQpLnRleHRDb250ZW50ID0gdGhpcy5fdGV4dDtcblxuICAgIC8v0KLQsNC60LbQtSDQtNC10LvQsNC10Lwg0LfQtNC10YHRjCwg0YPQutCw0LfRi9Cy0LDQtdC8LCDRh9GC0L4g0L3Rg9C20L3QviDQt9Cw0LrQuNC90YPRgtGMINCyIHNyYyDQuCDRgtGD0LTQsCDQutC40LTQsNC10Lwg0YHRgdGL0LvQutGDXG4gICAgdGhpcy5fZWxlbWVudEltYWdlID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKHRoaXMuX2VsZW1lbnRJbWFnZVNlbGVjdG9yKTtcblxuICAgIHRoaXMuX2J1dHRvblRyYXNoID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKHRoaXMuX2VsZW1lbnRUcmFzaFNlbGVjdG9yKTtcbiAgICB0aGlzLl9lbGVtZW50TGlrZSA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3Rvcih0aGlzLl9lbGVtZW50TGlrZVNlbGVjdG9yKTtcblxuICAgIHRoaXMuX2VsZW1lbnRJbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2VsZW1lbnRJbWFnZS5hbHQgPSB0aGlzLl90ZXh0O1xuXG4gICAgLy/QvNC10YLQvtC0INGB0YfQuNGC0LDQtdGCINC4INC00L7QsdCw0LLQu9GP0LXRgiDQu9Cw0LnQutC4XG4gICAgdGhpcy5saWtlQ291bnRlcih0aGlzLl9saWtlcyk7XG4gICAgLy/QvNC10YLQvtC0INC30LDQutGA0LDRiNC40LLQsNC10YIg0LzQvtC4INC70LDQudC60LhcbiAgICB0aGlzLl9saWtlTXlVc2VyQ2FyZCgpO1xuICAgIC8v0L/RgNC+0LLQtdGA0LrQsCDQtNC70Y8g0LrQvtGA0LfQuNC90YsgLSDQv9C+0LrQsNC30YvQstCw0LXRgiDQtNC70Y8g0YHQstC+0LjRhSDQutCw0YDRgtC+0YfQtdC6XG4gICAgdGhpcy5fY2hlY2tVc2VySWQoKTtcbiAgICAvL9CS0YvQt9GL0LLQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9C10LlcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5fY2FyZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLy/QpNCj0J3QmtCm0JjQmCDQktCQ0JvQmNCU0J3QntCh0KLQmFxuY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIC8v0J7QsdGP0LfQsNGC0LXQu9GM0L3QviDQvdGD0LbQvdC+INC/0YDQvtCx0YDQsNGB0YvQstCw0YLRjCAo0L/QsNGA0LDQvNC10YLRgNGLL9Cw0YDQs9GD0LzQtdC90YLRiyDQuNC3INCa0LvQsNGB0LAvaW5kZXgpXG4gIGNvbnN0cnVjdG9yKHZhbGlkYXRpb25Db25maWcsIGZvcm0pIHtcbiAgICB0aGlzLl9wb3B1cEZvcm0gPSB2YWxpZGF0aW9uQ29uZmlnLnBvcHVwRm9ybTtcbiAgICB0aGlzLl92YWxpZGF0aW9uQ29uZmlnID0gdmFsaWRhdGlvbkNvbmZpZztcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnRFcnJvciA9IHZhbGlkYXRpb25Db25maWcucG9wdXBFbGVtZW50RXJyb3I7XG4gICAgdGhpcy5fcG9wdXBJbnB1dEVycm9yID0gdmFsaWRhdGlvbkNvbmZpZy5wb3B1cElucHV0RXJyb3I7XG4gICAgdGhpcy5fcG9wdXBJbnB1dCA9IHZhbGlkYXRpb25Db25maWcucG9wdXBJbnB1dDtcbiAgICB0aGlzLl9idXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlID1cbiAgICAgIHZhbGlkYXRpb25Db25maWcuYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZTtcbiAgICB0aGlzLl9mb3JtID0gZm9ybTtcbiAgfVxuXG4gIHZhbGlkYXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIC8v0L/RgNC+0LHQtdCz0LDQtdC80YHRjyDQv9C+INC40L3Qv9GD0YLRgyDRhNC+0YDQvNGLIFwiZm9ybUlucHV0c1wiINCx0LXRgNC10Lwg0LIg0L3QuNGFIHsgdmFsaWRpdHkgfSDQuCDQv9GA0L7QstC10YDRj9C10Lwg0L3QsCAgdmFsaWRpdHkudmFsaWQg0YLRgNGDINC40LvQuCDRhNC+0LvRgVxuICAgIHRoaXMuX2lzRm9ybVZhbGlkID0gdGhpcy5fZm9ybUlucHV0cy5ldmVyeShcbiAgICAgICh7IHZhbGlkaXR5IH0pID0+IHZhbGlkaXR5LnZhbGlkXG4gICAgKTtcbiAgICAvL9CV0YHQu9C4INGE0L7RgNC80LAg0LLQsNC70LjQtNC90LDRjyDQstC60LvRjtGH0LDQtdC8INC60L3QvtC/0LrRg1xuICAgIGlmICh0aGlzLl9pc0Zvcm1WYWxpZCkge1xuICAgICAgdGhpcy5fcG9wdXBTdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAvL9CV0YHQu9C4INGE0L7RgNC80LAg0L3QtSDQstCw0LvQuNC00L3QsNGPINC+0YLQutC70Y7Rh9Cw0LXQvCDQutC90L7Qv9C60YNcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9wdXBTdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIC8v0L/QvtC70YPRh9Cw0LXQvCDQuNC3INC60LvQsNGB0YHQsCDQsiBzcGFuINC60L7RgtC+0YDRi9C5ICjQv9C+0LQg0LjQvdC/0YPRgtC+0LwpINCz0LvQsNCy0L3QvtC1LCDRh9GC0L4g0LEgaWQg0YHQvtCy0L/QsNC00LDQu9C+INGBINC90LDQt9Cy0LDQvdC40LXQvCDQutC70LDRgdGB0LBcbiAgICB0aGlzLl9lbGVtZW50RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gICAgLy/Qt9Cw0LHRgNCw0YHRi9Cy0LDQtdC8INGC0LXQutGBINC+0YjQuNCx0L7QuiDQuNC3INCy0LDQu9C40LTQsNGG0LjQuCDQsiDQvdC+0LLRg9GOINC60L7QvdGB0YLQsNC90YLRg1xuICAgIHRoaXMuX3RleHRFcnJvciA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAvL9C00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBINC+0YjQuNCx0LrQuCDQuiDQuNC90L/Rg9GC0YNcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9wb3B1cElucHV0RXJyb3IpO1xuICAgIC8v0LIg0YLQtdC60YHRgiBzcGFuINC/0L7QtCDQuNC90L/Rg9GC0L7QvCDQt9Cw0LrQuNC00YvQstCw0LXQvCDRgtC10LrRgdGCINC+0YjQuNCx0LrQuFxuICAgIHRoaXMuX2VsZW1lbnRFcnJvci50ZXh0Q29udGVudCA9IHRoaXMuX3RleHRFcnJvcjtcbiAgfTtcblxuICBfaGlkZUlucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fcG9wdXBJbnB1dEVycm9yKTtcbiAgICB0aGlzLl9lbGVtZW50RXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9O1xuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoaW5wdXQpID0+IHtcbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dCk7XG4gICAgfVxuICB9O1xuICBcbiAgLy/QntCR0KDQkNCR0J7QotCn0JjQmtCYINCS0JDQm9CY0JTQndCe0KHQotCYXG4gIF92YWxpZGF0ZUZvcm1JbnB1dHMgPSAoKSA9PiB7XG4gICAgLy/RgdC+0LfQtNCw0LXQvCDQvNCw0YHRgdC40LIg0LjQtyDQuNC90L/Rg9GC0L7QslxuICAgIHRoaXMuX2Zvcm1JbnB1dHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3BvcHVwSW5wdXQpXG4gICAgKTtcbiAgICAvL9C+0L/RgNC10LTQtdC70Y/QtdC8INC60L3QvtC/0LrRgyBcItGB0L7RhdGA0LDQvdC40YLRjC/QvtGC0L/RgNCw0LLQuNGC0YxcIiDQsiDQv9GA0L7RhNC40LvQtVxuICAgIHRoaXMuX3BvcHVwU3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZVxuICAgICk7XG4gICAgdGhpcy52YWxpZGF0ZUJ1dHRvbigpO1xuICBcbiAgICB0aGlzLl9mb3JtSW5wdXRzLmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgLy/QstC10YjQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINC90LAg0LjQvdC/0YPRgtGLICjRjdC70LXQvNC10L3RgtGLINC80LDRgdGB0LjQstCwIC/QuNC90L/Rg9GC0YsvIFwidGhpcy5fZm9ybUlucHV0c1wiKVxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlQnV0dG9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX3ZhbGlkYXRlRm9ybUlucHV0cygpOyBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiLyog0LrQu9Cw0YHRgSBQb3B1cCwg0LrQvtGC0L7RgNGL0Lkg0L7RgtCy0LXRh9Cw0LXRgiDQt9CwINC+0YLQutGA0YvRgtC40LUg0Lgg0LfQsNC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LBcbtCf0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC10LTQuNC90YHRgtCy0LXQvdC90YvQuSDQv9Cw0YDQsNC80LXRgtGAIOKAlCDRgdC10LvQtdC60YLQvtGAINC/0L7Qv9Cw0L/QsCAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cEVsZW1lbnQpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBwb3B1cEVsZW1lbnQ7XG4gICAgLyogISEhINCS0JDQltCd0J4g0JTQtdC70LDQtdC8INC/0YDQuNCy0Y/Qt9C60YMg0YEg0L/QvtC80L7RidGM0Y4g0LzQtdGC0L7QtNCwIFwiYmluZFwiINCx0LXQtyDQvdC10LPQviDQvdC1INCx0YPQtNC10YJcbiAgICDQv9C10YDQtdC00L7QstCw0YLRjNGB0Y8g0LIg0LTRgNGD0LPQvtC5INC80LXRgtC+0LQsINGC0LDQvCDQu9C40YjRjCDQsdGD0LTQtdGCIFwidW5kZWZpbmVkXCIgKi9cbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYnV0dG9uU3VibWl0UG9wdXAgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fc3VibWl0LWJ1dHRvblwiKTtcbiAgfVxuXG5cbiAgLy8g0L7RgtCy0LXRh9Cw0Y7RgiDQt9CwINC+0YLQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XG4gICAgLyrQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC90LDQtNC+INC00LXQu9Cw0YLRjCDQv9GA0LjQstGP0LfQutGDINGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQsCBcImJpbmRcIiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LVcbiAgICDQotCw0LrQttC1INC80L7QttC90L4g0L/RgNC+0YHRgtC+INC30LTQtdGB0Ywg0L3QsNC/0LjRgdCw0YLRjCAoZXZ0KSA9PiB0aGlzLl9oYW5kbGVFc2NDbG9zZShldnQpICovXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICAgIGNvbnNvbGUubG9nKCfRgdGA0LDQsdC+0YLQsNC70L4g0L7Qv9C10L0g0LIg0L/QvtC/0LDQvycpXG4gIH1cblxuICAvLyDQvtGC0LLQtdGH0LDRjtGCINC30LDQunDRi9GC0LjQtSDQv9C+0L/QsNC/0LBcbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgLy/RgdC+0LTQtdGA0LbQuNGCINC70L7Qs9C40LrRgyDQt9Cw0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsCDQutC70LDQstC40YjQtdC5IEVzYy5cbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG5cbiAgLyog0LTQvtCx0LDQstC70Y/QtdGCINGB0LvRg9GI0LDRgtC10LvRjCDQutC70LjQutCwINC40LrQvtC90LrQtSDQt9Cw0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsC5cbiAgINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgtCw0LrQttC1INC30LDQutGA0YvQstCw0LXRgtGB0Y8g0L/RgNC4INC60LvQuNC60LUg0L3QsCDQt9Cw0YLQtdC80L3RkdC90L3Rg9GOXG4gICDQvtCx0LvQsNGB0YLRjCDQstC+0LrRgNGD0LMg0YTQvtGA0LzRiyAqL1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL9C30LDQutGA0YvRgtGMINC/0L7Qv9Cw0L9cbiAgICB0aGlzLl9idXR0b25DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2Nsb3NlLWljb25cIik7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfb3BlbmVkXCIpIHx8XG4gICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX2Nsb3NlLWljb25cIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gdGhpcy5fYnV0dG9uQ2xvc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICB0aGlzLmNsb3NlKCk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgICBcbiAgICAvL9C30LDQutGA0YvRgtC40LUg0L3QsCDQv9Cw0YDQsNC90LbRg1xuICAgIC8vIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgIC8vICAgaWYgKGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgLy8gICAgIHRoaXMuY2xvc2UoKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwRWxlbWVudCwgY2FsYmFja2xTdWJtaXRGb3JtKSB7XG4gICAgc3VwZXIocG9wdXBFbGVtZW50KTtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBwb3B1cEVsZW1lbnQ7XG4gICAgdGhpcy5fY2FsYmFja2xTdWJtaXRGb3JtID0gY2FsYmFja2xTdWJtaXRGb3JtO1xuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2lucHV0XCIpO1xuICB9XG5cbiAgLy/RgdC+0LHQuNGA0LDQtdGCINC00LDQvdC90YvQtSDQstGB0LXRhSDQv9C+0LvQtdC5INGE0L7RgNC80Ysg0Lgg0YPQutC70LDQtNGL0LLQtdGCINC40YUg0LIg0L7QsdGK0LXQutGCICjQtNCw0L3QvdGL0LUgbmFtZSDQuCBzdWJ0aXRsZSkuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goXG4gICAgICAoaW5wdXQpID0+ICh0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWUpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fZm9ybVZhbHVlcztcbiAgfVxuXG4gIHBvcHVwV2l0aENvbmZpcm0oY2FsYmFja2xTdWJtaXRGb3JtKSB7XG4gICAgdGhpcy5fY2FsYmFja2xTdWJtaXRGb3JtID0gY2FsYmFja2xTdWJtaXRGb3JtO1xuICB9XG5cbiAgLy/Qn9C10YDQtdC30LDQv9C40YHRi9Cy0LDQtdGCINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQvNC10YLQvtC0IHNldEV2ZW50TGlzdGVuZXJzLlxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL9Cf0LXRgNC10LfQsNC/0LjRgdGL0LLQsNC10YIg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC80LXRgtC+0LQgc2V0RXZlbnRMaXN0ZW5lcnMuXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAvL9GB0YLQsNCy0LjRgiDRgdC70YPRiNCw0YLQtdC70Ywg0L3QsCDRhNC+0YDQvNC1LCDQvdCwINC60L3QvtC/0LrRgyAoYnV0dG9uKSDQuCDQtdGB0LvQuCDQvdCw0LbQsNGC0YwsINGC0L4g0LHRg9C00LXRgiDRgdC70LXQtNGD0YnQtdC1OlxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2NhbGJhY2tsU3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8v0J/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0LXRgiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LzQtdGC0L7QtCBjbG9zZSwg0YLQsNC6XG4gIC8v0LrQsNC6INC/0YDQuCDQt9Cw0LrRgNGL0YLQuNC4INC/0L7Qv9Cw0L/QsCDRhNC+0YDQvNCwINC00L7Qu9C20L3QsCDQtdGJ0ZEg0Lgg0YHQsdGA0LDRgdGL0LLQsNGC0YzRgdGPXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgICBzdXBlci5jbG9zZSgpO1xuICB9XG5cbiAgYnV0dG9uVGV4dENoYW5nZShzYXZlLCB0ZXh0QnV0dG9uLCB0ZXh0VGltZW91dFNhdmUpIHtcbiAgICBpZiAoc2F2ZSkge1xuICAgICAgdGhpcy5fYnV0dG9uU3VibWl0UG9wdXAudGV4dENvbnRlbnQgPSB0ZXh0VGltZW91dFNhdmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1dHRvblN1Ym1pdFBvcHVwLnRleHRDb250ZW50ID0gdGV4dEJ1dHRvbjtcbiAgICB9XG4gIH1cbn1cbiIsIi8qINCa0LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L3QsNGB0LvQtdC00YPQtdGCINC+0YIgUG9wdXAuINCt0YLQvtGCINC60LvQsNGB0YEg0LTQvtCx0LDQstC70Y/QtdGCINC90L7QstGL0LUg0LTQsNC90L3Ri9C1INCyXG4g0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC80LXRgtC+0LQgb3Blbi4g0JIg0LzQtdGC0L7QtNC1IG9wZW4g0LrQu9Cw0YHRgdCwIFBvcHVwV2l0aEltYWdlXG4gINC90YPQttC90L4g0LLRgdGC0LDQstC70Y/RgtGMIDMg0LLQtdGJ0LhcblxuICAxKSDQodGB0YvQu9C60YMg0L3QsCDQutCw0YDRgtC40L3QutGDID0+IHRoaXMuX3BvcHVwUGhvdG9CaWcuc3JjID0gbGluaztcbiAgMikg0KLQtdC60YHRgiBhdGwg0LrQsNGA0YLQuNC90LrQuCA9PiAgdGhpcy5fcG9wdXBQaG90b0JpZy5hbHQgPSB0ZXh0O1xuICAzKSDQotC10LrRgdGCINC+0L/QuNGB0LDQvdC40LUg0L/QvtC0INC60LDRgNGC0LjQvdC60L7QuSA9PiB0aGlzLl9wb3B1cFRpdGxlSW1hZ2UgPSBwb3B1cFRpdGxlSW1hZ2U7XG4gICAqL1xuXG4gIC8v0JjQvNC/0L7RgNGC0L7Qt9Cw0LzQtdGJ0LDQtdC8ICkpIFBvcHVwINC40Lcg0L3QsNGI0LXQuSDQttC1INC/0LDQv9C60LhcbiAgIGltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcblxuICAgLy/QoNCw0YHRiNC40YDRj9C10Lwg0YfRgtC+INCxINC00L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQtSDQt9C90LDRh9C10L3QuNGPXG4gICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcblxuICAgIGNvbnN0cnVjdG9yKHBvcHVwRWxlbWVudCkge1xuICAgICAgc3VwZXIgKHBvcHVwRWxlbWVudCk7XG4gICAgICBcbiAgICAgIHRoaXMuX3BvcHVwUGhvdG9CaWcgPSBwb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19waG90bycpO1xuICAgICAgdGhpcy5fcG9wdXBUaXRsZUltYWdlID0gcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGl0bGUtaW1nJyk7XG4gICAgfVxuXG4gIC8vINC+0YLQstC10YfQsNGO0YIg0LfQsCDQvtGC0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QsFxuICBvcGVuKHRleHQsIGxpbmspIHtcbiAgICAvL9C90LDQv9GA0LDQstC70Y/QtdC8INC00LDQvdC90YvQtSDQsiDQvtGC0LrRgNGL0YLRi9C5IFBvcHVwINC00LvRjyDQsdC+0LvRjNGI0L7QuSDQutCw0YDRgtC40L3QutC4IGxpbmsg0LggdGV4dFxuICAgIHRoaXMuX3BvcHVwUGhvdG9CaWcuc3JjID0gbGluaztcbiAgICB0aGlzLl9wb3B1cFBob3RvQmlnLmFsdCA9IHRleHQ7XG4gICAgdGhpcy5fcG9wdXBUaXRsZUltYWdlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH0gXG5cbn0iLCIvL9C+0YLQstC10YfQsNC10YIg0LfQsCDQvtGC0YDQuNGB0L7QstC60YMg0Y3Qu9C10LzQtdC90YLQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtVxuXG4vKiAg0J/QtdGA0LLRi9C8INC/0LDRgNCw0LzQtdGC0YDQvtC8INC60L7QvdGB0YLRgNGD0LrRgtC+0YDQsCDQv9GA0LjQvdC40LzQsNC10YIg0L7QsdGK0LXQutGCINGBINC00LLRg9C80Y8g0YHQstC+0LnRgdGC0LLQsNC80Lg6IGl0ZW1zINC4IHJlbmRlcmVyLiBcbiAg0KHQstC+0LnRgdGC0LLQviBpdGVtcyDigJQg0Y3RgtC+INC80LDRgdGB0LjQsiDQtNCw0L3QvdGL0YUgKNCSINC90LDRiNC10Lwg0YHQu9GD0YfQsNC1INC30LTQtdGB0Ywg0Y3RgtC+INC60LDRgNGC0L7Rh9C60Lgg0LrQvtGC0L7RgNGL0LUgXG4gICAg0L3QsNGF0L7QtNC40YLRgdGPINCyIGNhcmRzKSwg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDQtNC+0LHQsNCy0LjRgtGMINC90LAg0YHRgtGA0LDQvdC40YbRgyDQv9GA0Lgg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcbiAgINC60LvQsNGB0YHQsC4g0KHQstC+0LnRgdGC0LLQviByZW5kZXJlciDigJQg0Y3RgtC+INGE0YPQvdC60YbQuNGPLCDQutC+0YLQvtGA0LDRjyDQvtGC0LLQtdGH0LDQtdGCINC30LAg0YHQvtC30LTQsNC90LjQtSDQuCDQvtGC0YDQuNGB0L7QstC60YMg0LTQsNC90L3Ri9GFXG4gICAg0L3QsCDRgdGC0YDQsNC90LjRhtC1LlxuICDQktGC0L7RgNC+0Lkg0L/QsNGA0LDQvNC10YLRgCDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LAg4oCUINGB0LXQu9C10LrRgtC+0YAg0LrQvtC90YLQtdC50L3QtdGA0LAsINCyINC60L7RgtC+0YDRi9C5INC90YPQttC90L4g0LTQvtCx0LDQstC70Y/RgtGMIFxuICDRgdC+0LfQtNCw0L3QvdGL0LUg0Y3Qu9C10LzQtdC90YLRiy4gKi9cbmNsYXNzIFNlY3Rpb24ge1xuXG4gIGNvbnN0cnVjdG9yKHtpdGVtcyxyZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdHIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lclNlbGVjdHI7XG4gIH1cblxuXG4gIC8vINC+0YLQstC10YfQsNC10YIg0LfQsCDQvtGC0YDQuNGB0L7QstC60YMg0LLRgdC10YUg0Y3Qu9C10LzQtdC90YLQvtCyLiBcbiAgLy8g0J7RgtGA0LjRgdC+0LLQutCwINC60LDQttC00L7Qs9C+INC+0YLQtNC10LvRjNC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LAg0LTQvtC70LbQvdCwIFxuICAvLyDQvtGB0YPRidC10YHRgtCy0LvRj9GC0YzRgdGPINGE0YPQvdC60YbQuNC10LkgcmVuZGVyZXJcbiAgLy8g0L/QviDRhNCw0LrRgtGDINGF0LLQsNGC0LDQvdGD0LvQuCDQuNC3INC40L3QtNC10LrRgS5qcyDRhNGD0L3QutGG0LjRjiAg0Lgg0LfQsNC/0LjRhdC90YPQu9C4INGB0Y7QtNCwXG4gIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9IFxuXG4gIC8vINCh0L7QtNC10YDQttC40YIg0L/Rg9Cx0LvQuNGH0L3Ri9C5INC80LXRgtC+0LQgYWRkSXRlbSwg0LrQvtGC0L7RgNGL0LkgXG4gIC8v0L/RgNC40L3QuNC80LDQtdGCIERPTS3RjdC70LXQvNC10L3RgiDQuCDQtNC+0LHQsNCy0LvRj9C10YIg0LXQs9C+INCyINC60L7QvdGC0LXQudC90LXRgFxuICAvLyDQt9C00LXRgdGMINC80Ysg0LHRg9C00LXQvCDQtNC+0LHQsNCy0LvRj9GC0Ywg0LrQsNGA0YLQvtGH0LrQuCDQsiDQvdCw0YfQsNC70L4gXG4gIC8vINCyINCw0YDQs9GD0LzQtdC90YIg0LHRg9C00LXRgiDQstGB0YLQsNCy0LvRj9GC0YzRgdGPINCk0YPQvdC60YbQuNGPINC60LDRgNGC0L7Rh9C60LAg0YEg0LTQvtCx0LDQstC70LXQvdC40LXQvCDQtNCw0L3QvdGL0YUg0L3QsCDRgdCw0LnRglxuICBhZGRJdGVtKGl0ZW0pe1xuICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmQoaXRlbSk7XG4gIH1cblxuICAvL9C00LvRjyDQvdC+0LLRi9GFINC60LDRgNGCLCDRh9GC0L4g0LEg0LLQstC10YDRhdGDINC/0L7Rj9Cy0LvRj9C70L7RgdGMKNC/0L7QutCwINGC0L7Qu9GM0LrQviDRgtCw0LopXG4gIGFkZEl0ZW1OZXdjYXJkKGl0ZW0pe1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjsiLCIvLyAv0JrQu9Cw0YHRgSBVc2VySW5mbyDQvtGC0LLQtdGH0LDQtdGCXG4vL9C30LAg0YPQv9GA0LDQstC70LXQvdC40LUg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8INC40L3RhNC+0YDQvNCw0YbQuNC4INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtSDQvdCwINGB0YLRgNCw0L3QuNGG0LUuXG4vL9Cf0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC+0LHRitC10LrRgiDRgSDRgdC10LvQtdC60YLQvtGA0LDQvNC4INC00LLRg9GFINGN0LvQtdC80LXQvdGC0L7Qsjpcbi8vINGN0LvQtdC80LXQvdGC0LAg0LjQvNC10L3QuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0Lgg0Y3Qu9C10LzQtdC90YLQsCDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDRgdC10LHQtVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnROYW1lLCBlbGVtZW50SW5mbywgYXZhdGFyKSB7XG4gICAgdGhpcy5fZWxlbWVudE5hbWUgPSBlbGVtZW50TmFtZTtcbiAgICB0aGlzLl9lbGVtZW50SW5mbyA9IGVsZW1lbnRJbmZvO1xuICAgIHRoaXMuX2F2YXRhciA9IGF2YXRhcjtcbiAgfVxuXG4gIC8vINCt0YLQvtGCINC80LXRgtC+0LQg0L/RgNC40LPQvtC00LjRgtGB0Y8g0LrQvtCz0LTQsCDQtNCw0L3QvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4gIC8vINC90YPQttC90L4g0LHRg9C00LXRgiDQv9C+0LTRgdGC0LDQstC40YLRjCDQsiDRhNC+0YDQvNGDINC/0YDQuCDQvtGC0LrRgNGL0YLQuNC4LlxuICBnZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5fZWxlbWVudE5hbWUudGV4dENvbnRlbnQsXG4gICAgICBhYm91dDogdGhpcy5fZWxlbWVudEluZm8udGV4dENvbnRlbnQsXG4gICAgICBhdmF0YXI6IHRoaXMuX2F2YXRhci5zcmMsXG4gICAgfTtcbiAgfVxuXG4gIC8v0LrQvtGC0L7RgNGL0Lkg0L/RgNC40L3QuNC80LDQtdGCINC90L7QstGL0LUg0LTQsNC90L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuCDQtNC+0LHQsNCy0LvRj9C10YIg0LjRhSDQvdCwINGB0YLRgNCw0L3QuNGG0YMuXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgYWJvdXQsIGF2YXRhciB9KSB7XG4gICAgdGhpcy5fZWxlbWVudE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuX2VsZW1lbnRJbmZvLnRleHRDb250ZW50ID0gYWJvdXQ7XG4gICAgdGhpcy5fYXZhdGFyLnNyYyA9IGF2YXRhcjtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25Db25maWcgPSB7XG4gIHBvcHVwOiBcIi5wb3B1cFwiLFxuICBwb3B1cEZvcm06IFwiLnBvcHVwX19mb3JtXCIsXG4gIHBvcHVwSW5wdXQ6IFwiLnBvcHVwX19pbnB1dFwiLFxuICBidXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlOiBcIi5wb3B1cF9fc3VibWl0LWJ1dHRvblwiLFxuICBwb3B1cEVsZW1lbnRFcnJvcjogXCJwb3B1cF9fZWxlbWVudC1lcnJvclwiLFxuICBwb3B1cElucHV0RXJyb3I6IFwicG9wdXBfX2lucHV0X2Vycm9yXCIsXG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBwb3B1cDogXCIucG9wdXBcIixcbiAgcHJvZmlsZUF2YXRhcjogXCIucHJvZmlsZV9fYXZhdGFyXCIsXG4gIGZvcm1VcGRhdGVDYXJkOiBcIiNmb3JtX3VwZGF0ZV9jYXJkXCIsXG4gIHRpdGxlOiBcIi5wcm9maWxlX190aXRsZVwiLFxuICBzdWJUaXRsZTogXCIucHJvZmlsZV9fc3VidGl0bGVcIixcbiAgcG9wdXBFZGl0UHJvZmlsZTogXCIjcG9wdXBfZWRpdF9wcm9maWxlXCIsXG4gIGJ1dHRvbkVkaXQ6IFwiI3Byb2ZpbGVCdXR0b25FZGl0XCIsXG4gIHN1YlRpdGxlRWRpdDogJy5wb3B1cF9faW5wdXRbbmFtZT1cInN1YnRpdGxlXCJdJyxcbiAgcG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlOiAnLnBvcHVwX19mb3JtW25hbWU9XCJwb3B1cEZvcm1FZGl0UG9maWxlVGFibGVcIl0nLFxuICB0aXRsZUVkaXQ6ICcucG9wdXBfX2lucHV0W25hbWU9XCJuYW1lXCJdJyxcbiAgcG9wdXBTdWJtaXRCdXR0b25zRGlzYWJsZTogXCIucG9wdXBfX3N1Ym1pdC1idXR0b25fZGlzYWJsZVwiLFxuICBidXR0b25BZGRCdXR0b246IFwiI3Byb2ZpbGVBZGRCdXR0b25cIixcbiAgcG9wdXBBZGQ6IFwiI3BvcHVwX2FkZFwiLFxuICB0ZXh0VmFsdWVQb3B1cFRpdGxlOiBcIiNpbnB1dC1pbWFnZS10aXRsZVwiLFxuICB0ZXh0VmFsdWVQb3B1cFN1YnRpdGxlOiBcIiNpbnB1dC1pbWFnZS11cmxcIixcbiAgZWxlbWVudHNDYXJkOiBcIi5lbGVtZW50c1wiLFxuICBwb3B1cEJpZ09wZW5JbWFnZTogXCIjcG9wdXAtcGhvdG9cIixcbiAgYnV0dG9uUG9wdXBCaWdJbWFnZUNsb3NlOiBcIi5wb3B1cF9fY2xvc2VbbmFtZT0nYnV0dG9uUG9wdXBCaWdJbWdDbG9zZSddXCIsXG4gIG5ld0VsZW1lbnRJZFRlbXBsYXRlOiBcIiNuZXdFbGVtZW50XCIsXG4gIHBvcHVwQ2xvc2U6IFwiLnBvcHVwX19jbG9zZVwiLFxuICBwb3B1cE9wZW5lZDogXCJwb3B1cF9vcGVuZWRcIixcbiAgZWxlbWVudFRleHQ6IFwiLmVsZW1lbnRfX3RleHRcIixcbiAgZWxlbWVudEltYWdlOiBcIi5lbGVtZW50X19pbWdcIixcbiAgcG9wdXBUZXh0Q29sb3JGb250R3JleTogXCJwb3B1cF9faW5wdXRfY29sb3ItZm9udF9ncmV5XCIsXG4gIHBvcHVwVGl0bGVJbWFnZTogXCIucG9wdXBfX3RpdGxlLWltZ1wiLFxuICBwb3B1cFBob3RvQmlnOiBcIi5wb3B1cF9fcGhvdG9cIixcbiAgZWxlbWVudExpa2U6IFwiLmVsZW1lbnRfX2xpa2VcIixcbiAgZWxlbWVudExpa2VBY3RpdmU6IFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIixcbiAgZWxlbWVudFRyYXNoOiBcIi5lbGVtZW50X190cmFzaFwiLFxuICBlbGVtZW50OiBcIi5lbGVtZW50XCIsXG4gIGZvcm1BZGQ6IFwiI2Zvcm1fYWRkXCIsXG4gIGlucHV0VGl0bGVQcm9maWxlOiBcIi5wb3B1cF9faW5wdXRbbmFtZT0nbmFtZSddXCIsXG4gIGlucHV0U3VidGl0bGVQcm9maWxlOiBcIi5wb3B1cF9faW5wdXRbbmFtZT0nc3VidGl0bGUnXVwiLFxuICBsaWtlQ291bnRlcjogXCIjbGlrZUNvdW50ZXJcIixcbiAgY2FyZERlbGV0ZTogXCIjcG9wdXBfZGVsZXRlX2NhcmRcIixcbiAgYnV0dG9uUHVzaFllczogXCIjYnV0dG9uX3B1c2hfeWVzXCIsXG4gIHBvcHVwQ2FyZERlbGV0ZTogXCIjcG9wdXBfZGVsZXRlX2NhcmRcIixcbiAgcG9wdXBVcGRhdGVBdmF0YXJJZDogXCIjcG9wdXBfdXBkYXRlX2F2YXRhclwiLFxuICBpbnB1dFByb2ZpbGVMaW5rQXZhdGFyOiBcIiNpbnB1dC1wcm9maWxlLWxpbmstYXZhdGFyXCIsXG4gIGhvc3Q6IFwiaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC01NVwiLFxuICB0b2tlbjogXCI1ODhlODczNS1jYzAwLTRmNmQtOGQ5Mi1kYTcxNWM1ZGIwY2FcIixcbiAgdXNlcklkOiBcImQwYWI1NzQwOTgxYjg1OTlmNWQxODNhNlwiLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqINCY0JzQn9Ce0KDQotCrICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbi8vaW1wb3J0IGluaXRpYWxDYXJkcyBmcm9tIFwiLi4vdXRpbHMvY2FyZHMuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCB7IHZhbGlkYXRpb25Db25maWcgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi91dGlscy91dGlscy5qc1wiO1xuLy9pbXBvcnQgeyBQb3B1cFdpdGhDb25maXJtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoQ29uZmlybWF0aW9uLmpzXCI7XG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xuXG4vL2ltcG9ydCB7IHBvcHVwRGVsZXRlQ2FyZCB9IGZyb20gXCIuLi8uLi9tZXN0by1tYWluIDQvc3JjL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiog0JrQntCd0KHQotCQ0J3QotCrICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuY29uc3QgYXBpID0gbmV3IEFwaShjb25maWcuaG9zdCwgY29uZmlnLnRva2VuKTtcblxuY29uc3QgcG9wdXBTdWJtaXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgdmFsaWRhdGlvbkNvbmZpZy5idXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlXG4pO1xuLy9jb25maWdcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcudGl0bGUpO1xuY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zdWJUaXRsZSk7XG5jb25zdCBwb3B1cEVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBFZGl0UHJvZmlsZSk7XG5jb25zdCBidXR0b25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuYnV0dG9uRWRpdCk7XG5jb25zdCBidXR0b25BZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5idXR0b25BZGRCdXR0b24pO1xuY29uc3QgcG9wdXBBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5wb3B1cEFkZCk7XG5jb25zdCBmb3JtQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuZm9ybUFkZCk7XG5jb25zdCBlbGVtZW50c0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5lbGVtZW50c0NhcmQpO1xuY29uc3QgcG9wdXBCaWdPcGVuSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5wb3B1cEJpZ09wZW5JbWFnZSk7XG5jb25zdCBuZXdFbGVtZW50VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBjb25maWcubmV3RWxlbWVudElkVGVtcGxhdGVcbikuY29udGVudDtcbmNvbnN0IGlucHV0VGl0bGVQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuaW5wdXRUaXRsZVByb2ZpbGUpO1xuY29uc3QgaW5wdXRTdWJ0aXRsZVByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBjb25maWcuaW5wdXRTdWJ0aXRsZVByb2ZpbGVcbik7XG4vL2NvbnN0IGxpa2VDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcubGlrZUNvdW50ZXIpO1xuY29uc3QgY2FyZERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmNhcmREZWxldGUpO1xuY29uc3QgcHJvZmlsZUF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnByb2ZpbGVBdmF0YXIpO1xuY29uc3QgcG9wdXBVcGRhdGVBdmF0YXJJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwVXBkYXRlQXZhdGFySWQpO1xuY29uc3QgaW5wdXRQcm9maWxlTGlua0F2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIGNvbmZpZy5pbnB1dFByb2ZpbGVMaW5rQXZhdGFyXG4pO1xuY29uc3QgZm9ybVVwZGF0ZUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5mb3JtVXBkYXRlQ2FyZCk7XG5jb25zdCBwb3B1cEZvcm1FZGl0UG9maWxlVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBjb25maWcucG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlXG4pO1xuY29uc3QgcG9wdXBDYXJkRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBDYXJkRGVsZXRlKTtcblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqINCf0YDQvtC80LjRgSBBTEwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxubGV0IHVzZXJJZDtcbmNvbnN0IHByb21pcyA9IFthcGkuZ2V0VXNlckluZm9ybSgpLCBhcGkuZ2V0Q2FyZHMoKV07XG5Qcm9taXNlLmFsbChwcm9taXMpXG4gIC50aGVuKChbdXNlclJlc3BvbnNlLCBjYXJkUmVzcG9uc2VdKSA9PiB7XG4gICAgdXNlcklkID0gdXNlclJlc3BvbnNlLl9pZDtcbiAgICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhjYXJkUmVzcG9uc2UpO1xuICAgIC8v0JXRgdC70Lgg0LjRgdC/0L7Qu9GM0LfRg9GOIHVzZXJJbmZvINC90LUg0L/RgNC40YXQvtC00LjQtCBzdWJ0aXRsZSDQsiDQv9GA0L7RhNC40LvRjCBwb3B1cFByb2ZpbGVFZGl0XG4gICAgdXNlckluZm8uc2V0VXNlckluZm8odXNlclJlc3BvbnNlKTtcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSk7XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiDQmtCb0JDQodCh0KsgKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogUG9wdXBXaXRoSW1hZ2UgKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy/Qn9C+0LTQutC70Y7Rh9Cw0LXQvCDQsdC+0LvRjNGI0LjQtSDQutCw0YDRgtC40L3QutC4XG5jb25zdCBwb3B1cEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKHBvcHVwQmlnT3BlbkltYWdlKTtcblxucG9wdXBJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xuY29uc3QgaGFuZGxlQ2FyZENsaWNrID0gKG5hbWUsIGxpbmspID0+IHtcbiAgcG9wdXBJbWFnZS5vcGVuKG5hbWUsIGxpbmspO1xufTtcblxuLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIdCS0J3QmNCc0JDQndCY0JUgLSDQktCd0JjQnNCQ0J3QmNCVICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG5cbi8vINCvINCi0JDQmiDQn9Ce0J3QmNCc0JDQriBQb3B1cFdpdGhDb25maXJtINCU0JXQm9CQ0KLQrCDQndCVINCd0KPQltCd0J4gLSDQndCVINCe0JHQr9CX0JDQotCV0JvQrNCd0J4sINCd0JDQodCi0JDQktCd0JjQmiDQn9Ce0JrQkNCX0KvQktCQ0Jsg0J/QniDQlNCg0KPQk9Ce0JzQoyDQlNCV0JvQkNCi0Kxcbi8vINCjINCd0JDQoSAgUG9wdXBXaXRoRm9ybSDQtdGB0YLRjCwg0LfQsNGH0LXQvCDQvdCw0Lwg0L3QvtCy0YvQuSDQutC70LDRgdGBINGB0L7Qt9C00LDQstCw0YLRjCwg0LLRgdGRINC20LUg0YLQsNC8INCz0L7RgtC+0LLQvlxuXG4vLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEh0JLQndCY0JzQkNCd0JjQlSAtINCS0J3QmNCc0JDQndCY0JUgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG5cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIENhcmQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy/QlNC10LvQsNC10Lwg0YTRg9C90LrRhtC40Y4g0YfRgtC+INCxINC00L7QsdCw0LLQu9GP0LvQuNGB0Ywg0LrQsNGA0YLQvtGH0LrQuCAo0JzQkNCh0KHQmNCSKVxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhKSB7XG4gIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChcbiAgICBkYXRhLFxuICAgIGNvbmZpZyxcbiAgICBoYW5kbGVDYXJkQ2xpY2ssXG4gICAgKGNhcmRJZCkgPT4ge1xuICAgICAgZGVsZXRlQ2FyZC5vcGVuKCk7XG4gICAgICBkZWxldGVDYXJkLnBvcHVwV2l0aENvbmZpcm0oKCkgPT4ge1xuICAgICAgICBhcGlcbiAgICAgICAgICAuZGVsZXRlQ2FyZChjYXJkSWQpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbmV3Q2FyZC5yZW1vdmVDYXJkKCk7XG4gICAgICAgICAgICBkZWxldGVDYXJkLmNsb3NlKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAoY2FyZElkKSA9PiB7XG4gICAgICBpZiAobmV3Q2FyZC5pc0xpa2VkKCkpIHtcbiAgICAgICAgYXBpXG4gICAgICAgICAgLmRlbGV0ZUxpa2VDYXJkKGNhcmRJZClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBuZXdDYXJkLmxpa2VDb3VudGVyKHJlcy5saWtlcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcItCb0LDQudC6INGD0LTQsNC70LjQu9GB0Y9cIik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXBpXG4gICAgICAgICAgLnB1dExpa2VDYXJkKGNhcmRJZClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBuZXdDYXJkLmxpa2VDb3VudGVyKHJlcy5saWtlcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcItCb0LDQudC6INC00L7QsdCw0LLQuNC70YHRj1wiKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuICApO1xuICByZXR1cm4gbmV3Q2FyZC5jcmVhdGVDYXJkKCk7XG59XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTZWN0aW9uICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy/QlNC10LvQsNC10Lwg0LrQvtC90YHRgtCw0L3RgtGDINC4INC40Lcg0LrQu9Cw0YHRgdCwLCDQv9GA0L7QutC40LTRi9Cy0LDQtdC8INC10LzRgyAoe9C80LDRgdGB0LjQsiDRgSDQutCw0YDRgtC+0YfQutCw0LzQuCwg0YTRg9C90LrRhtC40Y4g0LTQvtCx0LDQstC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LXQun0sXG4vL9C90LDQudC00LXQvdC90YvQuSDRgdC10LvQtdC60YLQvtGAKVxuY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgICAgLy/RhdCy0LDRgtCw0LXQvCDQvNC10YLQvtC0IFwiYWRkSXRlbVwiINC4INCy0YHRgtCw0LLQu9GP0LXQvCDQsiDQv9Cw0YDQsNC80LXRgtGAINGE0YPQvdC60YbQuNGOINC00L7QsdCw0LLQu9C10L3QuNC1INC60LDRgNGC0L7Rh9C10LogY3JlYXRlQ2FyZChpdGVtKVxuICAgICAgY2FyZExpc3QuYWRkSXRlbShjcmVhdGVDYXJkKGl0ZW0pKTtcbiAgICB9LFxuICAgIC8vINCQINC30LTQtdGB0Ywg0LTQvtCx0LDQstC70Y/QtdC8INGB0LXQu9C10LrRgtC+0YBcbiAgfSxcbiAgZWxlbWVudHNDYXJkXG4pO1xuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiDQktCr0JfQntCSINCa0JDQoNCi0J7Qp9CV0JogICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy/QvtCx0LXRgNC90YPQu9C4INCy0YvQt9C+0LIg0LIgQVBpINGBINC00LDQvdC90YvQvNC4INC60LDRgNGC0L7Rh9C10Log0LjQtyDRgdC10YDQstC10YDQsFxuLy8gYXBpXG4vLyAgIC5nZXRDYXJkcygpXG4vLyAgIC50aGVuKChjYXJkcykgPT4ge1xuLy8gICAgIC8v0LLRi9C30YvQstCw0LXQvCDQvNC10YLQvtC0IHJlbmRlcml0ZW1zKGMg0L/QsNGA0LDQvNC10YLRgNC+0Lwg0LzQsNGB0YHQuNCy0L7QvCDQutCw0YLQvtGH0LXQuilcbi8vICAgICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhjYXJkcyk7XG4vLyAgIH0pO1xuXG4vL9GB0L7Qt9C00LDQtdC8INC60L7QvdGB0YLQsNC90YLRgyDQuNC3INCa0LvQsNGB0YHQsCDQtNC70Y8g0J/RgNC+0YTQsNC50LvQsFxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8odGl0bGUsIHN1YlRpdGxlLCBwcm9maWxlQXZhdGFyKTtcblxuLy/Qv9C+0LvRg9GH0LDQtdC8INC00LDQvdC90YvQtSDQviDRjtC30LXRgNC1INGBINGB0LXRgNCy0LXRgNCwXG4vLyBhcGlcbi8vICAgLmdldFVzZXJJbmZvcm0oKVxuLy8gICAudGhlbigodXNlcikgPT4ge1xuLy8gICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHtcbi8vICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbi8vICAgICAgIGluZm86IHVzZXIuYWJvdXQsXG4vLyAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyLFxuLy8gICAgIH0pO1xuLy8gICB9KVxuLy8gICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogUG9wdXBXaXRoRm9ybSAgVXNlckluZm8gQ2FyZCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8v0J7QsdC90L7QstC70LXQvdC40LUg0LjQvNGPINC4INC+0L/QuNGB0LDQvdC40LUg0L/RgNC+0YTQsNC50LvQsFxuY29uc3QgcG9wdXBQcm9maWxlRWRpdCA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwRWRpdFByb2ZpbGUsIChyZXMpID0+IHtcbiAgcG9wdXBQcm9maWxlRWRpdC5idXR0b25UZXh0Q2hhbmdlKHRydWUsIFwi0KHQvtGF0YDQsNC90LjRgtGMXCIsIFwi0KHQvtGF0YDQsNC90LXQvdC40LUuLi5cIik7XG4gIC8v0L7RgtC/0YDQsNC70Y/QtdC8L9C/0L7Qu9GD0YfQsNC10Lwg0LTQsNC90L3Ri9C1INC/0L7QtCDRgNC10LrQtNCw0YLQuNGA0L7QstCw0L3QuNGOINC/0YDQvtCy0LjQu9GPINC40LzRjyDQuCDQvtC/0LjRgdCw0L3QuNC1XG4gIGFwaVxuICAgIC5lZGl0VXNlckluZm9ybShyZXMubmFtZSwgcmVzLnN1YnRpdGxlKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIC8v0LTQvtCx0LDQstC70Y/QtdC8INGB0Y7QtNCwINC4INCw0LLQsNGC0LDRgCwg0YfRgtC+INCxINC/0L7QtNCz0YDRg9C20LDQu9GB0Y8g0Lgg0L7QvSDQv9C+0YHQu9C1INC+0LHQvdC+0LLQu9C10L3QuNGPXG4gICAgICB1c2VySW5mby5zZXRVc2VySW5mbyh7XG4gICAgICAgIG5hbWU6IHJlcy5uYW1lLFxuICAgICAgICBhYm91dDogcmVzLmFib3V0LFxuICAgICAgICBhdmF0YXI6IHJlcy5hdmF0YXIsXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHBvcHVwUHJvZmlsZUVkaXQuY2xvc2UoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICAuZmluYWxseSgoKSA9PlxuICAgICAgcG9wdXBQcm9maWxlRWRpdC5idXR0b25UZXh0Q2hhbmdlKGZhbHNlLCBcItCh0L7RhdGA0LDQvdC40YLRjFwiLCBcItCh0L7RhdGA0LDQvdC10L3QuNC1Li4uXCIpXG4gICAgKTtcbn0pO1xucG9wdXBQcm9maWxlRWRpdC5zZXRFdmVudExpc3RlbmVycygpO1xuYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpbnB1dFRpdGxlUHJvZmlsZS52YWx1ZSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCkubmFtZTtcbiAgaW5wdXRTdWJ0aXRsZVByb2ZpbGUudmFsdWUgPSB1c2VySW5mby5nZXRVc2VySW5mbygpLmFib3V0O1xuICBwb3B1cFByb2ZpbGVFZGl0Lm9wZW4oKTtcbn0pO1xuXG4vL9Ce0LHQvdC+0LLQu9GP0LXQvCDQsNCy0LDRgtCw0YDQutGDXG5jb25zdCBhdmF0YXJVcGRhdGUgPSBuZXcgUG9wdXBXaXRoRm9ybShwb3B1cFVwZGF0ZUF2YXRhcklkLCAoaW5wdXQpID0+IHtcbiAgLy/QvtCx0LXRgNC90YPQu9C4INCyIGFwaSDQv9C10YDQtdC40LzQtdC90L7QstCw0L3QuNC1INGB0YHRi9C70LrQuCDQsNCy0LDRgtCw0YDQsCwg0L7QvdC+INC+0YLQv9GA0LDQstC70Y/QtdGC0YHRjyDQvdCwINGB0LXRgNCy0LXRgCwg0YfRgtC+INCxXG4gIC8v0L/QvtGC0L7QvCDQv9GA0LjRhdC+0LTQuNC70L4g0Lgg0LTQvtCx0LDQstC70Y/Qu9C+0YHRjCDQvdCwINGB0YLRgNCw0L3QuNGG0YNcbiAgYXZhdGFyVXBkYXRlLmJ1dHRvblRleHRDaGFuZ2UodHJ1ZSwgXCLQodC+0YXRgNCw0L3QuNGC0YxcIiwgXCLQodC+0YXRgNCw0L3QtdC90LjQtS4uLlwiKTtcbiAgYXBpXG4gICAgLnVwZGF0ZUF2YXRhcihpbnB1dC5hdmF0YXIpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oe1xuICAgICAgICBhdmF0YXI6IGlucHV0LmF2YXRhcixcbiAgICAgICAgbmFtZTogcmVzLm5hbWUsXG4gICAgICAgIGFib3V0OiByZXMuYWJvdXQsXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGF2YXRhclVwZGF0ZS5jbG9zZSgpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIC5maW5hbGx5KCgpID0+XG4gICAgICBhdmF0YXJVcGRhdGUuYnV0dG9uVGV4dENoYW5nZShmYWxzZSwgXCLQodC+0YXRgNCw0L3QuNGC0YxcIiwgXCLQodC+0YXRgNCw0L3QtdC90LjQtS4uLlwiKVxuICAgICk7XG59KTtcblxuYXZhdGFyVXBkYXRlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wcm9maWxlQXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIGlucHV0UHJvZmlsZUxpbmtBdmF0YXIudmFsdWUgPSB1c2VySW5mby5nZXRVc2VySW5mbygpLmF2YXRhcjtcbiAgYXZhdGFyVXBkYXRlLm9wZW4oKTtcbn0pO1xuXG4vL9CU0L7QsdCw0LLQu9GP0LXQvCDQutCw0YDRgtC+0YfQutGDINC90LAg0YHQtdGA0LLQtdGAXG5jb25zdCBwb3B1cEFkZENhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybShwb3B1cEFkZCwgKGlucHV0KSA9PiB7XG4gIC8v0L3Rg9C20L3QviDRh9GC0L4g0LEg0L/QvtGB0LvQtSDQvtC/0Y/RgtGMINC90LDQtNC/0LjRgdGMIFwi0YHQvtC30LTQsNGC0Ywg0LHRi9C70LBcIlxuICBwb3B1cEFkZENhcmQuYnV0dG9uVGV4dENoYW5nZSh0cnVlLCBcItCh0L7Qt9C00LDRgtGMXCIsIFwi0KHQvtGF0YDQsNC90LXQvdC40LUuLi5cIik7XG4gIGFwaVxuICAgIC5hZGROZXdDYXJkKGlucHV0Lm5hbWUsIGlucHV0LnN1YnRpdGxlKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGluZm9DYXJkID0gY3JlYXRlQ2FyZChyZXMpO1xuICAgICAgY2FyZExpc3QuYWRkSXRlbU5ld2NhcmQoaW5mb0NhcmQpO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgcG9wdXBBZGRDYXJkLmNsb3NlKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gICAgLmZpbmFsbHkoKCkgPT5cbiAgICAgIHBvcHVwQWRkQ2FyZC5idXR0b25UZXh0Q2hhbmdlKGZhbHNlLCBcItCh0L7Qt9C00LDRgtGMXCIsIFwi0KHQvtGF0YDQsNC90LXQvdC40LUuLi5cIilcbiAgICApO1xufSk7XG5cbi8vcG9wdXBBZGRDYXJkLl9nZXRJbnB1dFZhbHVlcygpO1xucG9wdXBBZGRDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8v0YPQtNCw0LvQtdC90LjQtSDQutCw0YDRgtC+0YfQutC4IHBvcHVwQ2FyZERlbGV0ZSAtXG5jb25zdCBkZWxldGVDYXJkID0gbmV3IFBvcHVwV2l0aEZvcm0ocG9wdXBDYXJkRGVsZXRlKTtcblxuLy/Qt9Cw0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QsFxuZGVsZXRlQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vL2NvbnNvbGUubG9nKHBvcHVwQWRkQ2FyZCk7XG4vL2NvbnNvbGUubG9nKGRlbGV0ZUNhcmQpO1xuLy8gMiBQT1BVUFxuLy8g0JLQutC70Y7Rh9Cw0LXQvCDQutC90L7Qv9C60YMsINC00L7RgdC70L7QstC90L4g0LTQvtCx0LDQstC70Y/QtdC8INC6INC60LvQsNGB0YHRgyBwb3B1cF9hZGQgKyDQutC70LDRgdGBIHBvcHVwLU9wZW5cbmJ1dHRvbkFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwb3B1cEFkZENhcmQub3BlbigpO1xufSk7XG5cbi8vY29uc3QgdGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmVsZW1lbnRUcmFzaCk7XG4vL2NvbnN0IGNvbmZpcm0gPSBuZXcgUG9wdXBXaXRoQ29uZmlybShcIi5wb3B1cF9kZWxldGVfY2FyZFwiKTtcbi8vIGNvbmZpcm0ud2hhdCgpO1xuLy9jb25maXJtLmxpc3RlbmVyRGVsZXRlQ2FyZCgpXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcy0g0JrQntCd0JXQpiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqINCS0JDQm9CY0JTQkNCm0JjQryAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vL9Ce0LHRj9C30LDRgtC10LvRjNC90L4g0L3Rg9C20L3QviDQv9GA0L7QsdGA0LDRgdGL0LLQsNGC0YwgKNC/0LDRgNCw0LzQtdGC0YDRiy/QsNGA0LPRg9C80LXQvdGC0Ysg0LjQtyDQmtC70LDRgWPQsC9pbmRleClcbi8v0YHQvtC30LTQsNC10Lwg0LrQvtC90YHRgtCw0L3RgtGDINC4INC60LvQsNGB0YHQsCDRgSDQv9Cw0YDQsNC80LXRgtGA0LDQvNC4IENvbmdpZyBjINC00LvRjyDQstCw0LvQuNC00LDRhtC40Lgg0LrQu9Cw0YHRgdC+0LIsINC4INGE0L7RgNC80YsgcG9wdXBcbmNvbnN0IHZhbGlkYXRpb25DYXJkID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvbkNvbmZpZywgZm9ybUFkZCk7XG52YWxpZGF0aW9uQ2FyZC5lbmFibGVWYWxpZGF0aW9uKCk7XG5jb25zdCB2YWxpZGF0aW9uUHJvZmlsZSA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuICB2YWxpZGF0aW9uQ29uZmlnLFxuICBwb3B1cEZvcm1FZGl0UG9maWxlVGFibGVcbik7XG52YWxpZGF0aW9uUHJvZmlsZS5lbmFibGVWYWxpZGF0aW9uKCk7XG5jb25zdCB2YWxpZGF0aW9uQXZhdGFyID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvbkNvbmZpZywgZm9ybVVwZGF0ZUNhcmQpO1xudmFsaWRhdGlvbkF2YXRhci5lbmFibGVWYWxpZGF0aW9uKCk7XG4iXSwibmFtZXMiOlsiQXBpIiwiaG9zdCIsInRva2VuIiwiX2hvc3QiLCJfdG9rZW4iLCJfY2hlY2tFcm9yckpzb24iLCJiaW5kIiwiX19nZXRIZWFkZXIiLCJfZ2V0SGVhZGVyIiwicmVzIiwib2siLCJqc29uIiwiRXJyb3IiLCJhdXRob3JpemF0aW9uIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsIm5hbWUiLCJhYm91dCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3TmFtZSIsIm5ld0xpbmsiLCJsaW5rIiwiY2FyZElkIiwiYXZhdGFyIiwiUG9wdXAiLCJDYXJkIiwiZGF0YSIsImNvbmZpZyIsImhhbmRsZUNhcmRDbGljayIsImhhbmRsZURlbGV0ZUNsaWNrIiwiaGFuZGxlTGlrZUNsaWNrIiwiX3RleHQiLCJfbGluayIsIl9saWtlcyIsImxpa2VzIiwiX2NhcmRJZCIsIl9pZCIsIl9lbGVtZW50VGV4dCIsImVsZW1lbnRUZXh0IiwiX2VsZW1lbnRJbWFnZVNlbGVjdG9yIiwiZWxlbWVudEltYWdlIiwiX2VsZW1lbnRUcmFzaFNlbGVjdG9yIiwiZWxlbWVudFRyYXNoIiwiX2VsZW1lbnRMaWtlU2VsZWN0b3IiLCJlbGVtZW50TGlrZSIsIl9lbGVtZW50TGlrZUFjdGl2ZSIsImVsZW1lbnRMaWtlQWN0aXZlIiwiX25ld0VsZW1lbnRJZFRlbXBsYXRlIiwibmV3RWxlbWVudElkVGVtcGxhdGUiLCJfbGlrZXNDb291bnQiLCJsaWtlQ291bnRlciIsIl9jYXJkRGVsZXRlSWQiLCJjYXJkRGVsZXRlIiwiX2J1dHRvblB1c2hZZXNJZCIsImJ1dHRvblB1c2hZZXMiLCJfbXlJZCIsInVzZXJJZCIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlTGlrZUNsaWNrIiwiX2hhbmRsZURlbGV0ZUNsaWNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50TGlrZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9jYXJkIiwicmVtb3ZlIiwiX2VsZW1lbnRJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfYnV0dG9uVHJhc2giLCJjb25zb2xlIiwibG9nIiwiX2xpa2VQdXNoIiwib3duZXIiLCJhZGQiLCJteUlkTGlrZUNhcmRzIiwiZmluZCIsImVsZW1lbnQiLCJteUlkTGlrZUNhcmQiLCJhZGRMaWtlcyIsIl9saWtlQ291bnRlciIsInRleHRDb250ZW50IiwibGVuZ3RoIiwiX2dldFRlbXBsYXRlIiwic3JjIiwiYWx0IiwiX2xpa2VNeVVzZXJDYXJkIiwiX2NoZWNrVXNlcklkIiwiX2FkZEV2ZW50TGlzdGVuZXIiLCJGb3JtVmFsaWRhdG9yIiwidmFsaWRhdGlvbkNvbmZpZyIsImZvcm0iLCJfaXNGb3JtVmFsaWQiLCJfZm9ybUlucHV0cyIsImV2ZXJ5IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9wb3B1cFN1Ym1pdEJ1dHRvbiIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImlucHV0RWxlbWVudCIsIl9lbGVtZW50RXJyb3IiLCJpZCIsIl90ZXh0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9wb3B1cElucHV0RXJyb3IiLCJpbnB1dCIsImNoZWNrVmFsaWRpdHkiLCJfc2hvd0lucHV0RXJyb3IiLCJfaGlkZUlucHV0RXJyb3IiLCJBcnJheSIsImZyb20iLCJfZm9ybSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfcG9wdXBJbnB1dCIsIl9idXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlIiwidmFsaWRhdGVCdXR0b24iLCJmb3JFYWNoIiwiZXZ0IiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl9wb3B1cEZvcm0iLCJwb3B1cEZvcm0iLCJfdmFsaWRhdGlvbkNvbmZpZyIsIl9wb3B1cEVsZW1lbnRFcnJvciIsInBvcHVwRWxlbWVudEVycm9yIiwicG9wdXBJbnB1dEVycm9yIiwicG9wdXBJbnB1dCIsImJ1dHRvbkZvcm1FZGl0UG9maWxlVGFibGUiLCJfdmFsaWRhdGVGb3JtSW5wdXRzIiwicG9wdXBFbGVtZW50IiwiX3BvcHVwRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsIl9idXR0b25TdWJtaXRQb3B1cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjbG9zZSIsIl9idXR0b25DbG9zZSIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImNhbGJhY2tsU3VibWl0Rm9ybSIsIl9jYWxiYWNrbFN1Ym1pdEZvcm0iLCJfaW5wdXRMaXN0IiwiX2Zvcm1WYWx1ZXMiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJzYXZlIiwidGV4dEJ1dHRvbiIsInRleHRUaW1lb3V0U2F2ZSIsIlBvcHVwV2l0aEltYWdlIiwiX3BvcHVwUGhvdG9CaWciLCJfcG9wdXBUaXRsZUltYWdlIiwidGV4dCIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RyIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJpdGVtIiwiYXBwZW5kIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwiZWxlbWVudE5hbWUiLCJlbGVtZW50SW5mbyIsIl9lbGVtZW50TmFtZSIsIl9lbGVtZW50SW5mbyIsIl9hdmF0YXIiLCJwb3B1cCIsInByb2ZpbGVBdmF0YXIiLCJmb3JtVXBkYXRlQ2FyZCIsInRpdGxlIiwic3ViVGl0bGUiLCJwb3B1cEVkaXRQcm9maWxlIiwiYnV0dG9uRWRpdCIsInN1YlRpdGxlRWRpdCIsInBvcHVwRm9ybUVkaXRQb2ZpbGVUYWJsZSIsInRpdGxlRWRpdCIsInBvcHVwU3VibWl0QnV0dG9uc0Rpc2FibGUiLCJidXR0b25BZGRCdXR0b24iLCJwb3B1cEFkZCIsInRleHRWYWx1ZVBvcHVwVGl0bGUiLCJ0ZXh0VmFsdWVQb3B1cFN1YnRpdGxlIiwiZWxlbWVudHNDYXJkIiwicG9wdXBCaWdPcGVuSW1hZ2UiLCJidXR0b25Qb3B1cEJpZ0ltYWdlQ2xvc2UiLCJwb3B1cENsb3NlIiwicG9wdXBPcGVuZWQiLCJwb3B1cFRleHRDb2xvckZvbnRHcmV5IiwicG9wdXBUaXRsZUltYWdlIiwicG9wdXBQaG90b0JpZyIsImZvcm1BZGQiLCJpbnB1dFRpdGxlUHJvZmlsZSIsImlucHV0U3VidGl0bGVQcm9maWxlIiwicG9wdXBDYXJkRGVsZXRlIiwicG9wdXBVcGRhdGVBdmF0YXJJZCIsImlucHV0UHJvZmlsZUxpbmtBdmF0YXIiLCJhcGkiLCJwb3B1cFN1Ym1pdEJ1dHRvbnMiLCJuZXdFbGVtZW50VGVtcGxhdGUiLCJwcm9taXMiLCJnZXRVc2VySW5mb3JtIiwiZ2V0Q2FyZHMiLCJQcm9taXNlIiwiYWxsIiwidXNlclJlc3BvbnNlIiwiY2FyZFJlc3BvbnNlIiwiY2FyZExpc3QiLCJyZW5kZXJJdGVtcyIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJlcnJvciIsInBvcHVwSW1hZ2UiLCJzZXRFdmVudExpc3RlbmVycyIsIm9wZW4iLCJjcmVhdGVDYXJkIiwibmV3Q2FyZCIsImRlbGV0ZUNhcmQiLCJwb3B1cFdpdGhDb25maXJtIiwicmVtb3ZlQ2FyZCIsImlzTGlrZWQiLCJkZWxldGVMaWtlQ2FyZCIsInB1dExpa2VDYXJkIiwiYWRkSXRlbSIsInBvcHVwUHJvZmlsZUVkaXQiLCJidXR0b25UZXh0Q2hhbmdlIiwiZWRpdFVzZXJJbmZvcm0iLCJzdWJ0aXRsZSIsImdldFVzZXJJbmZvIiwiYXZhdGFyVXBkYXRlIiwidXBkYXRlQXZhdGFyIiwicG9wdXBBZGRDYXJkIiwiYWRkTmV3Q2FyZCIsImluZm9DYXJkIiwiYWRkSXRlbU5ld2NhcmQiLCJ2YWxpZGF0aW9uQ2FyZCIsImVuYWJsZVZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uUHJvZmlsZSIsInZhbGlkYXRpb25BdmF0YXIiXSwic291cmNlUm9vdCI6IiJ9