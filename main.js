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
  }
  _createClass(Api, [{
    key: "getTasks",
    value: function getTasks() {
      return fetch("".concat(this._host, "/tasks"), {
        headers: {
          autorization: this._token
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Ошибка при загрузке');
      });
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Card = /*#__PURE__*/function () {
  function Card(text, link, config, handleCardClick, newElementTemplate) {
    _classCallCheck(this, Card);
    this._text = text;
    this._link = link;
    this._elementText = config.elementText;
    this._elementImageSelector = config.elementImage;
    this._elementTrashSelector = config.elementTrash;
    this._elementLikeSelector = config.elementLike;
    this._elementLikeActive = config.elementLikeActive;
    this._newElementIdTemplate = config.newElementIdTemplate;
    this._handleCardClick = handleCardClick;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      //Достаем template и клонируем (config.newElementIdTemplate не будет работать)
      return document.querySelector(this._newElementIdTemplate).content.querySelector(".element").cloneNode(true);
    }

    //метод удаление карточки
  }, {
    key: "_handleDeleteCard",
    value: function _handleDeleteCard() {
      this._card.remove();
      this._card = null;
    }

    //метод лайк карточки
  }, {
    key: "_likePush",
    value: function _likePush() {
      this._elementLike.classList.toggle(this._elementLikeActive);
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
        _this._handleDeleteCard();
      });

      //Лайкаем сердечки
      this._elementLike.addEventListener("click", function () {
        _this._likePush();
      });
    }

    //Создаем карточки
  }, {
    key: "createCard",
    value: function createCard() {
      this._card = this._getTemplate();
      this._card.querySelector(this._elementText).textContent = this._text;

      //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
      this._elementImage = this._card.querySelector(this._elementImageSelector);
      //Добавляем alt картинки из массива
      this._buttonTrash = this._card.querySelector(this._elementTrashSelector);
      this._elementLike = this._card.querySelector(this._elementLikeSelector);
      this._elementImage.src = this._link;
      this._elementImage.alt = this._text;

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
      _this._elementError = document.querySelector(".".concat(inputElement.id, "-error"));
      _this._textError = inputElement.validationMessage;
      inputElement.classList.add(_this._popupInputError);
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
  }

  // отвечают за открытие попапа
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupElement.classList.add("popup_opened");
      /*обязательно надо делать привязку с помощью метода "bind" в конструкторе
      Также можно просто здесь написать (evt) => this._handleEscClose(evt) */
      document.addEventListener("keydown", this._handleEscClose);
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
      //закрыть при нажатии на крестик
      this._buttonClose = document.querySelectorAll(".popup__close-icon");
      this._buttonClose.forEach(function (element) {
        element.addEventListener("click", function () {
          _this.close();
        });
      });

      //закрытие на паранжу
      this._popupElement.addEventListener("click", function (evt) {
        if (evt.target === evt.currentTarget) {
          _this.close();
        }
      });
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

    //Перезаписывает родительский метод setEventListeners.
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      //Перезаписывает родительский метод setEventListeners.
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this3._calbacklSubmitForm(_this3._getInputValues());
        _this3.close();
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
      console.log(this._popup);
      //направляем данные в открытый Popup для большой картинки link и text
      this._popupPhotoBig.src = link;
      this._popupPhotoBig.alt = text;
      this._popupTitleImage.textContent = text;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
      console.log("Класс PopupWithImage - метод OPEN работает");
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
  function UserInfo(elementName, elementInfo) {
    _classCallCheck(this, UserInfo);
    this._elementName = elementName;
    this._elementInfo = elementInfo;
  }

  // Этот метод пригодится когда данные пользователя 
  // нужно будет подставить в форму при открытии.
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._elementName.textContent,
        info: this._elementInfo.textContent
      };
    }

    //который принимает новые данные пользователя и добавляет их на страницу.
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref) {
      var name = _ref.name,
        info = _ref.info;
      this._elementName.textContent = name;
      this._elementInfo.textContent = info;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/utils/cards.js":
/*!****************************!*\
  !*** ./src/utils/cards.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//МАССИВЫ

//Массив из задания титлы картинки и ссылки на них
var initialCards = [{
  name: "Архыз",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
}, {
  name: "Челябинская область",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
}, {
  name: "Иваново",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
}, {
  name: "Камчатка",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
}, {
  name: "Холмогорский район",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
}, {
  name: "Байкал",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialCards);

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
  title: ".profile__title",
  subTitle: ".profile__subtitle",
  popupEditProfile: "#popup_edit_profile",
  buttonEdit: ".profile__button-edit",
  subTitleEdit: '.popup__input[name="subtitle"]',
  popupFormEditPofileTable: '.popup__form[name="popupFormEditPofileTable"]',
  titleEdit: '.popup__input[name="name"]',
  popupSubmitButtonsDisable: ".popup__submit-button_disable",
  buttonAddButton: ".profile__add-button",
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
  host: "https://mesto.nomoreparties.co/v1/cohort-55",
  token: "588e8735-cc00-4f6d-8d92-da715c5db0ca"
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
/* harmony import */ var _utils_cards_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cards.js */ "./src/utils/cards.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
//**************************** ИМПОРТЫ ****************************












//**************************** КОНСТАНТЫ ****************************

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_9__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.host, _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.token);
var popupSubmitButtons = document.querySelectorAll(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.validationConfig.buttonFormEditPofileTable);
//config
var popups = document.querySelectorAll(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popup);
var title = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.title);
var subTitle = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.subTitle);
var popupEditProfile = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popupEditProfile);
var popupButtonCloseEditProfile = popupEditProfile.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popupClose);
var buttonEdit = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.buttonEdit);
var titleEdit = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.titleEdit);
var subTitleEdit = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.subTitleEdit);
var popupFormEditPofileTable = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popupFormEditPofileTable);
var popupFormEditPofileTableInvalid = _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popupFormEditPofileTableInvalid;
var buttonAddButton = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.buttonAddButton);
var popupAdd = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popupAdd);
var formAdd = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.formAdd);
var popupEditCloseButton = popupAdd.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popupClose);
var textValuePopupTitle = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.textValuePopupTitle);
var textValuePopupSubtitle = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.textValuePopupSubtitle);
var elementsCard = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.elementsCard);
var popupBigOpenImage = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popupBigOpenImage);
var buttonPopupBigImageClose = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.buttonPopupBigImageClose);
var popupPhoto = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popupBigOpenImage);
var popupPhotoBig = popupPhoto.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popupPhotoBig);
var newElementTemplate = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.newElementIdTemplate).content;
var popupTitleImage = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.popupTitleImage);
var inputTitleProfile = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.inputTitleProfile);
var inputSubtitleProfile = document.querySelector(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config.inputSubtitleProfile);

//**************************** КЛАССЫ ****************************

//**************************** PopupWithImage ****************************
//Подключаем большие картинки
var popupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__["default"](popupBigOpenImage);
popupImage.setEventListeners();
var handleCardClick = function handleCardClick(name, link) {
  popupImage.open(name, link);
};

//**************************** Card ****************************

api.getTasks().then(function (items) {
  console.log('работает');
});

//Делаем функцию что б добавлялись карточки (МАССИВ)
function createCard(data) {
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"](data.name, data.link, _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.config, handleCardClick, newElementTemplate);
  return newCard.createCard();
}

//**************************** Section ****************************

//Делаем константу и из класса, прокидываем ему ({массив с карточками, функцию добавление карточек},
//найденный селектор)
var cardRender = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  initialCards: _utils_cards_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  renderer: function renderer(item) {
    //хватаем метод "addItem" и вставляем в параметр функцию добавление карточек createCard(item)
    cardRender.addItem(createCard(item));
  }
  // А здесь добавляем селектор
}, elementsCard);
//вызываем метод renderitems(c параметром массивом каточек)
cardRender.renderItems(_utils_cards_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, subTitle);

//**************************** PopupWithForm  UserInfo Card ****************************

//!!! У МЕНЯ УЖЕ ЕСТЬ КОНСТАНТА  "popupEditProfile" ПОЭТОМУ ДЕЛАЮ popupProfileEdit
var popupProfileEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"](popupEditProfile, function (input) {
  userInfo.setUserInfo({
    name: input.name,
    info: input.subtitle
  });
});
popupProfileEdit.setEventListeners();
buttonEdit.addEventListener("click", function () {
  inputTitleProfile.value = userInfo.getUserInfo().name;
  inputSubtitleProfile.value = userInfo.getUserInfo().info;
  popupProfileEdit.open();
});
var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"](popupAdd, function (input) {
  var infoCard = createCard({
    name: input.name,
    link: input.subtitle
  });
  cardRender.addItem(infoCard);
});
popupAddCard._getInputValues();
popupAddCard.setEventListeners();

// 2 POPUP
// Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", function () {
  popupAddCard.open();
});

//**************************** ВАЛИДАЦИЯ ****************************
//Обязательно нужно пробрасывать (параметры/аргументы из Класcа/index)
var validationCard = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.validationConfig, formAdd);
validationCard.enableValidation();
var validationProfile = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.validationConfig, popupEditProfile);
validationProfile.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCLEVBQUVzRixnQkFBZ0IsQ0FBQztBQUMvRStDLGlCQUFpQixDQUFDRCxnQkFBZ0IsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL2NhcmRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwaXtcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0b2tlbil7XG4gICAgICB0aGlzLl9ob3N0ID0gaG9zdDtcbiAgICAgIHRoaXMuX3Rva2VuID0gdG9rZW47XG4gICAgfVxuICAgIGdldFRhc2tzKCl7XG4gICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vdGFza3NgLHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGF1dG9yaXphdGlvbjogdGhpcy5fdG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYocmVzLm9rKXtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCfQntGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUnKTtcbiAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcGk7XG4iLCJjbGFzcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCBsaW5rLCBjb25maWcsIGhhbmRsZUNhcmRDbGljaywgbmV3RWxlbWVudFRlbXBsYXRlKSB7XG4gICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgdGhpcy5fbGluayA9IGxpbms7XG4gICAgdGhpcy5fZWxlbWVudFRleHQgPSBjb25maWcuZWxlbWVudFRleHQ7XG4gICAgdGhpcy5fZWxlbWVudEltYWdlU2VsZWN0b3IgPSBjb25maWcuZWxlbWVudEltYWdlO1xuICAgIHRoaXMuX2VsZW1lbnRUcmFzaFNlbGVjdG9yID0gY29uZmlnLmVsZW1lbnRUcmFzaDtcbiAgICB0aGlzLl9lbGVtZW50TGlrZVNlbGVjdG9yID0gY29uZmlnLmVsZW1lbnRMaWtlO1xuICAgIHRoaXMuX2VsZW1lbnRMaWtlQWN0aXZlID0gY29uZmlnLmVsZW1lbnRMaWtlQWN0aXZlO1xuICAgIHRoaXMuX25ld0VsZW1lbnRJZFRlbXBsYXRlID0gY29uZmlnLm5ld0VsZW1lbnRJZFRlbXBsYXRlO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuICBcblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgLy/QlNC+0YHRgtCw0LXQvCB0ZW1wbGF0ZSDQuCDQutC70L7QvdC40YDRg9C10LwgKGNvbmZpZy5uZXdFbGVtZW50SWRUZW1wbGF0ZSDQvdC1INCx0YPQtNC10YIg0YDQsNCx0L7RgtCw0YLRjClcbiAgICByZXR1cm4gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX25ld0VsZW1lbnRJZFRlbXBsYXRlKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50XCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICB9XG5cbiAgLy/QvNC10YLQvtC0INGD0LTQsNC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LrQuFxuICBfaGFuZGxlRGVsZXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9jYXJkLnJlbW92ZSgpO1xuICAgIHRoaXMuX2NhcmQgPSBudWxsO1xuICB9XG4gIFxuICAvL9C80LXRgtC+0LQg0LvQsNC50Log0LrQsNGA0YLQvtGH0LrQuFxuICBfbGlrZVB1c2goKSB7XG4gICAgdGhpcy5fZWxlbWVudExpa2UuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLl9lbGVtZW50TGlrZUFjdGl2ZSk7XG4gIH1cblxuICAvL9CU0L7QsdCw0LLQu9GP0LXQvCDRgdC70YPRiNCw0YLQtdC70LhcbiAgX2FkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgLy/Qv9C+INGE0LDQutGC0YMg0LfQsNC80LXQvdC40LvQuCBoYW5kbGVPcGVuUG9wdXAgLSDQvdC1INC/0L7QvdGP0Lsg0LfQsNGH0LXQvD8g0JrQsNC60LDRjyDRgNCw0LfQvdC40YbQsD9cbiAgICAvL9Ca0LDQutC+0LUg0KLQlyAtINCi0LDQutCw0Y8g0Lgg0YDQsNCx0L7RgtCwINCl0JdcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl90ZXh0LCB0aGlzLl9saW5rKTtcbiAgICB9KVxuXG4gICAgLy/Qo9C00LDQu9GP0LXQvCDQutCw0YDRgtC+0YfQutC4XG4gICAgdGhpcy5fYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoKTtcbiAgICB9KTtcblxuICAgIC8v0JvQsNC50LrQsNC10Lwg0YHQtdGA0LTQtdGH0LrQuFxuICAgIHRoaXMuX2VsZW1lbnRMaWtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9saWtlUHVzaCgpXG4gICAgfSk7XG4gIH1cblxuICAvL9Ch0L7Qt9C00LDQtdC8INC60LDRgNGC0L7Rh9C60LhcbiAgY3JlYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9jYXJkID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IodGhpcy5fZWxlbWVudFRleHQpLnRleHRDb250ZW50ID0gdGhpcy5fdGV4dDtcblxuICAgIC8v0KLQsNC60LbQtSDQtNC10LvQsNC10Lwg0LfQtNC10YHRjCwg0YPQutCw0LfRi9Cy0LDQtdC8LCDRh9GC0L4g0L3Rg9C20L3QviDQt9Cw0LrQuNC90YPRgtGMINCyIHNyYyDQuCDRgtGD0LTQsCDQutC40LTQsNC10Lwg0YHRgdGL0LvQutGDXG4gICAgdGhpcy5fZWxlbWVudEltYWdlID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fZWxlbWVudEltYWdlU2VsZWN0b3JcbiAgICApO1xuICAgIC8v0JTQvtCx0LDQstC70Y/QtdC8IGFsdCDQutCw0YDRgtC40L3QutC4INC40Lcg0LzQsNGB0YHQuNCy0LBcbiAgICB0aGlzLl9idXR0b25UcmFzaCA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX2VsZW1lbnRUcmFzaFNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9lbGVtZW50TGlrZSA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX2VsZW1lbnRMaWtlU2VsZWN0b3JcbiAgICApO1xuICAgIHRoaXMuX2VsZW1lbnRJbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2VsZW1lbnRJbWFnZS5hbHQgPSB0aGlzLl90ZXh0O1xuXG4gICAgLy/QktGL0LfRi9Cy0LDQtdC8INGB0LvRg9GI0LDRgtC10LvQtdC5XG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcigpO1xuICAgIHJldHVybiB0aGlzLl9jYXJkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvL9Ck0KPQndCa0KbQmNCYINCS0JDQm9CY0JTQndCe0KHQotCYXG5jbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgLy/QntCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC90YPQttC90L4g0L/RgNC+0LHRgNCw0YHRi9Cy0LDRgtGMICjQv9Cw0YDQsNC80LXRgtGA0Ysv0LDRgNCz0YPQvNC10L3RgtGLINC40Lcg0JrQu9Cw0YHQsC9pbmRleClcbiAgY29uc3RydWN0b3IodmFsaWRhdGlvbkNvbmZpZywgZm9ybSkge1xuICAgIHRoaXMuX3BvcHVwRm9ybSA9IHZhbGlkYXRpb25Db25maWcucG9wdXBGb3JtO1xuICAgIHRoaXMuX3ZhbGlkYXRpb25Db25maWcgPSB2YWxpZGF0aW9uQ29uZmlnO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudEVycm9yID0gdmFsaWRhdGlvbkNvbmZpZy5wb3B1cEVsZW1lbnRFcnJvcjtcbiAgICB0aGlzLl9wb3B1cElucHV0RXJyb3IgPSB2YWxpZGF0aW9uQ29uZmlnLnBvcHVwSW5wdXRFcnJvcjtcbiAgICB0aGlzLl9wb3B1cElucHV0ID0gdmFsaWRhdGlvbkNvbmZpZy5wb3B1cElucHV0O1xuICAgIHRoaXMuX2J1dHRvbkZvcm1FZGl0UG9maWxlVGFibGUgPVxuICAgICAgdmFsaWRhdGlvbkNvbmZpZy5idXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlO1xuICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xuICB9XG5cbiAgdmFsaWRhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgLy/Qv9GA0L7QsdC10LPQsNC10LzRgdGPINC/0L4g0LjQvdC/0YPRgtGDINGE0L7RgNC80YsgXCJmb3JtSW5wdXRzXCIg0LHQtdGA0LXQvCDQsiDQvdC40YUgeyB2YWxpZGl0eSB9INC4INC/0YDQvtCy0LXRgNGP0LXQvCDQvdCwICB2YWxpZGl0eS52YWxpZCDRgtGA0YMg0LjQu9C4INGE0L7Qu9GBXG4gICAgdGhpcy5faXNGb3JtVmFsaWQgPSB0aGlzLl9mb3JtSW5wdXRzLmV2ZXJ5KFxuICAgICAgKHsgdmFsaWRpdHkgfSkgPT4gdmFsaWRpdHkudmFsaWRcbiAgICApO1xuICAgIC8v0JXRgdC70Lgg0YTQvtGA0LzQsCDQstCw0LvQuNC00L3QsNGPINCy0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDXG4gICAgaWYgKHRoaXMuX2lzRm9ybVZhbGlkKSB7XG4gICAgICB0aGlzLl9wb3B1cFN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIC8v0JXRgdC70Lgg0YTQvtGA0LzQsCDQvdC1INCy0LDQu9C40LTQvdCw0Y8g0L7RgtC60LvRjtGH0LDQtdC8INC60L3QvtC/0LrRg1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3B1cFN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBfc2hvd0lucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuICAgIHRoaXMuX3RleHRFcnJvciA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9wb3B1cElucHV0RXJyb3IpO1xuICAgIHRoaXMuX2VsZW1lbnRFcnJvci50ZXh0Q29udGVudCA9IHRoaXMuX3RleHRFcnJvcjtcbiAgfTtcblxuICBfaGlkZUlucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fcG9wdXBJbnB1dEVycm9yKTtcbiAgICB0aGlzLl9lbGVtZW50RXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9O1xuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoaW5wdXQpID0+IHtcbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dCk7XG4gICAgfVxuICB9O1xuICBcbiAgLy/QntCR0KDQkNCR0J7QotCn0JjQmtCYINCS0JDQm9CY0JTQndCe0KHQotCYXG4gIF92YWxpZGF0ZUZvcm1JbnB1dHMgPSAoKSA9PiB7XG4gICAgLy/RgdC+0LfQtNCw0LXQvCDQvNCw0YHRgdC40LIg0LjQtyDQuNC90L/Rg9GC0L7QslxuICAgIHRoaXMuX2Zvcm1JbnB1dHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3BvcHVwSW5wdXQpXG4gICAgKTtcbiAgICAvL9C+0L/RgNC10LTQtdC70Y/QtdC8INC60L3QvtC/0LrRgyBcItGB0L7RhdGA0LDQvdC40YLRjC/QvtGC0L/RgNCw0LLQuNGC0YxcIiDQsiDQv9GA0L7RhNC40LvQtVxuICAgIHRoaXMuX3BvcHVwU3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZVxuICAgICk7XG4gICAgdGhpcy52YWxpZGF0ZUJ1dHRvbigpO1xuICBcbiAgICB0aGlzLl9mb3JtSW5wdXRzLmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgLy/QstC10YjQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINC90LAg0LjQvdC/0YPRgtGLICjRjdC70LXQvNC10L3RgtGLINC80LDRgdGB0LjQstCwIC/QuNC90L/Rg9GC0YsvIFwidGhpcy5fZm9ybUlucHV0c1wiKVxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlQnV0dG9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX3ZhbGlkYXRlRm9ybUlucHV0cygpOyBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiLyog0LrQu9Cw0YHRgSBQb3B1cCwg0LrQvtGC0L7RgNGL0Lkg0L7RgtCy0LXRh9Cw0LXRgiDQt9CwINC+0YLQutGA0YvRgtC40LUg0Lgg0LfQsNC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LBcbtCf0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC10LTQuNC90YHRgtCy0LXQvdC90YvQuSDQv9Cw0YDQsNC80LXRgtGAIOKAlCDRgdC10LvQtdC60YLQvtGAINC/0L7Qv9Cw0L/QsCAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cEVsZW1lbnQpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBwb3B1cEVsZW1lbnQ7XG4gICAgLyogISEhINCS0JDQltCd0J4g0JTQtdC70LDQtdC8INC/0YDQuNCy0Y/Qt9C60YMg0YEg0L/QvtC80L7RidGM0Y4g0LzQtdGC0L7QtNCwIFwiYmluZFwiINCx0LXQtyDQvdC10LPQviDQvdC1INCx0YPQtNC10YJcbiAgICDQv9C10YDQtdC00L7QstCw0YLRjNGB0Y8g0LIg0LTRgNGD0LPQvtC5INC80LXRgtC+0LQsINGC0LDQvCDQu9C40YjRjCDQsdGD0LTQtdGCIFwidW5kZWZpbmVkXCIgKi9cbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyDQvtGC0LLQtdGH0LDRjtGCINC30LAg0L7RgtC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LBcbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcbiAgICAvKtC+0LHRj9C30LDRgtC10LvRjNC90L4g0L3QsNC00L4g0LTQtdC70LDRgtGMINC/0YDQuNCy0Y/Qt9C60YMg0YEg0L/QvtC80L7RidGM0Y4g0LzQtdGC0L7QtNCwIFwiYmluZFwiINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtVxuICAgINCi0LDQutC20LUg0LzQvtC20L3QviDQv9GA0L7RgdGC0L4g0LfQtNC10YHRjCDQvdCw0L/QuNGB0LDRgtGMIChldnQpID0+IHRoaXMuX2hhbmRsZUVzY0Nsb3NlKGV2dCkgKi9cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICAvLyDQvtGC0LLQtdGH0LDRjtGCINC30LDQunDRi9GC0LjQtSDQv9C+0L/QsNC/0LBcbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgLy/RgdC+0LTQtdGA0LbQuNGCINC70L7Qs9C40LrRgyDQt9Cw0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsCDQutC70LDQstC40YjQtdC5IEVzYy5cbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG5cbiAgLyog0LTQvtCx0LDQstC70Y/QtdGCINGB0LvRg9GI0LDRgtC10LvRjCDQutC70LjQutCwINC40LrQvtC90LrQtSDQt9Cw0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsC5cbiAgINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgtCw0LrQttC1INC30LDQutGA0YvQstCw0LXRgtGB0Y8g0L/RgNC4INC60LvQuNC60LUg0L3QsCDQt9Cw0YLQtdC80L3RkdC90L3Rg9GOXG4gICDQvtCx0LvQsNGB0YLRjCDQstC+0LrRgNGD0LMg0YTQvtGA0LzRiyAqL1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL9C30LDQutGA0YvRgtGMINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60YDQtdGB0YLQuNC6XG4gICAgdGhpcy5fYnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19jbG9zZS1pY29uXCIpO1xuICAgIHRoaXMuX2J1dHRvbkNsb3NlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvL9C30LDQutGA0YvRgtC40LUg0L3QsCDQv9Cw0YDQsNC90LbRg1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cEVsZW1lbnQsIGNhbGJhY2tsU3VibWl0Rm9ybSkge1xuICAgIHN1cGVyKHBvcHVwRWxlbWVudCk7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gcG9wdXBFbGVtZW50O1xuICAgIHRoaXMuX2NhbGJhY2tsU3VibWl0Rm9ybSA9IGNhbGJhY2tsU3VibWl0Rm9ybTtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKTtcbiAgfVxuXG4gIC8v0YHQvtCx0LjRgNCw0LXRgiDQtNCw0L3QvdGL0LUg0LLRgdC10YUg0L/QvtC70LXQuSDRhNC+0YDQvNGLINC4INGD0LrQu9Cw0LTRi9Cy0LXRgiDQuNGFINCyINC+0LHRitC10LrRgiAo0LTQsNC90L3Ri9C1IG5hbWUg0Lggc3VidGl0bGUpLlxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0ID0+IHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XG4gIH1cblxuICAvL9Cf0LXRgNC10LfQsNC/0LjRgdGL0LLQsNC10YIg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC80LXRgtC+0LQgc2V0RXZlbnRMaXN0ZW5lcnMuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8v0J/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0LXRgiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LzQtdGC0L7QtCBzZXRFdmVudExpc3RlbmVycy5cbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2NhbGJhY2tsU3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8v0J/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0LXRgiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LzQtdGC0L7QtCBjbG9zZSwg0YLQsNC6XG4gIC8v0LrQsNC6INC/0YDQuCDQt9Cw0LrRgNGL0YLQuNC4INC/0L7Qv9Cw0L/QsCDRhNC+0YDQvNCwINC00L7Qu9C20L3QsCDQtdGJ0ZEg0Lgg0YHQsdGA0LDRgdGL0LLQsNGC0YzRgdGPXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgICBzdXBlci5jbG9zZSgpO1xuICB9XG59XG4iLCIvKiDQmtC70LDRgdGBINC60L7RgtC+0YDRi9C5INC90LDRgdC70LXQtNGD0LXRgiDQvtGCIFBvcHVwLiDQrdGC0L7RgiDQutC70LDRgdGBINC00L7QsdCw0LLQu9GP0LXRgiDQvdC+0LLRi9C1INC00LDQvdC90YvQtSDQslxuINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQvNC10YLQvtC0IG9wZW4uINCSINC80LXRgtC+0LTQtSBvcGVuINC60LvQsNGB0YHQsCBQb3B1cFdpdGhJbWFnZVxuICDQvdGD0LbQvdC+INCy0YHRgtCw0LLQu9GP0YLRjCAzINCy0LXRidC4XG5cbiAgMSkg0KHRgdGL0LvQutGDINC90LAg0LrQsNGA0YLQuNC90LrRgyA9PiB0aGlzLl9wb3B1cFBob3RvQmlnLnNyYyA9IGxpbms7XG4gIDIpINCi0LXQutGB0YIgYXRsINC60LDRgNGC0LjQvdC60LggPT4gIHRoaXMuX3BvcHVwUGhvdG9CaWcuYWx0ID0gdGV4dDtcbiAgMykg0KLQtdC60YHRgiDQvtC/0LjRgdCw0L3QuNC1INC/0L7QtCDQutCw0YDRgtC40L3QutC+0LkgPT4gdGhpcy5fcG9wdXBUaXRsZUltYWdlID0gcG9wdXBUaXRsZUltYWdlO1xuICAgKi9cblxuICAvL9CY0LzQv9C+0YDRgtC+0LfQsNC80LXRidCw0LXQvCApKSBQb3B1cCDQuNC3INC90LDRiNC10Lkg0LbQtSDQv9Cw0L/QutC4XG4gICBpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XG5cbiAgIC8v0KDQsNGB0YjQuNGA0Y/QtdC8INGH0YLQviDQsSDQtNC+0LHQsNCy0LjRgtGMINC90L7QstGL0LUg0LfQvdCw0YfQtdC90LjRj1xuICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3B1cEVsZW1lbnQpIHtcbiAgICAgIHN1cGVyIChwb3B1cEVsZW1lbnQpO1xuICAgICAgXG4gICAgICB0aGlzLl9wb3B1cFBob3RvQmlnID0gcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fcGhvdG8nKTtcbiAgICAgIHRoaXMuX3BvcHVwVGl0bGVJbWFnZSA9IHBvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RpdGxlLWltZycpO1xuICAgIH1cblxuICAvLyDQvtGC0LLQtdGH0LDRjtGCINC30LAg0L7RgtC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LBcbiAgb3Blbih0ZXh0LCBsaW5rKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5fcG9wdXApO1xuICAgIC8v0L3QsNC/0YDQsNCy0LvRj9C10Lwg0LTQsNC90L3Ri9C1INCyINC+0YLQutGA0YvRgtGL0LkgUG9wdXAg0LTQu9GPINCx0L7Qu9GM0YjQvtC5INC60LDRgNGC0LjQvdC60LggbGluayDQuCB0ZXh0XG4gICAgdGhpcy5fcG9wdXBQaG90b0JpZy5zcmMgPSBsaW5rO1xuICAgIHRoaXMuX3BvcHVwUGhvdG9CaWcuYWx0ID0gdGV4dDtcbiAgICB0aGlzLl9wb3B1cFRpdGxlSW1hZ2UudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgICBjb25zb2xlLmxvZyhcItCa0LvQsNGB0YEgUG9wdXBXaXRoSW1hZ2UgLSDQvNC10YLQvtC0IE9QRU4g0YDQsNCx0L7RgtCw0LXRglwiIClcbiAgfSBcblxufSIsIi8v0L7RgtCy0LXRh9Cw0LXRgiDQt9CwINC+0YLRgNC40YHQvtCy0LrRgyDRjdC70LXQvNC10L3RgtC+0LIg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG5cbi8qICDQn9C10YDQstGL0Lwg0L/QsNGA0LDQvNC10YLRgNC+0Lwg0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwINC/0YDQuNC90LjQvNCw0LXRgiDQvtCx0YrQtdC60YIg0YEg0LTQstGD0LzRjyDRgdCy0L7QudGB0YLQstCw0LzQuDogaXRlbXMg0LggcmVuZGVyZXIuIFxuICDQodCy0L7QudGB0YLQstC+IGl0ZW1zIOKAlCDRjdGC0L4g0LzQsNGB0YHQuNCyINC00LDQvdC90YvRhSAo0JIg0L3QsNGI0LXQvCDRgdC70YPRh9Cw0LUg0LfQtNC10YHRjCDRjdGC0L4g0LrQsNGA0YLQvtGH0LrQuCDQutC+0YLQvtGA0YvQtSBcbiAgICDQvdCw0YXQvtC00LjRgtGB0Y8g0LIgY2FyZHMpLCDQutC+0YLQvtGA0YvQtSDQvdGD0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0L3QsCDRgdGC0YDQsNC90LjRhtGDINC/0YDQuCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuFxuICAg0LrQu9Cw0YHRgdCwLiDQodCy0L7QudGB0YLQstC+IHJlbmRlcmVyIOKAlCDRjdGC0L4g0YTRg9C90LrRhtC40Y8sINC60L7RgtC+0YDQsNGPINC+0YLQstC10YfQsNC10YIg0LfQsCDRgdC+0LfQtNCw0L3QuNC1INC4INC+0YLRgNC40YHQvtCy0LrRgyDQtNCw0L3QvdGL0YVcbiAgICDQvdCwINGB0YLRgNCw0L3QuNGG0LUuXG4gINCS0YLQvtGA0L7QuSDQv9Cw0YDQsNC80LXRgtGAINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQsCDigJQg0YHQtdC70LXQutGC0L7RgCDQutC+0L3RgtC10LnQvdC10YDQsCwg0LIg0LrQvtGC0L7RgNGL0Lkg0L3Rg9C20L3QviDQtNC+0LHQsNCy0LvRj9GC0YwgXG4gINGB0L7Qt9C00LDQvdC90YvQtSDRjdC70LXQvNC10L3RgtGLLiAqL1xuY2xhc3MgU2VjdGlvbiB7XG5cbiAgY29uc3RydWN0b3Ioe2l0ZW1zLHJlbmRlcmVyfSwgY29udGFpbmVyU2VsZWN0cikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyU2VsZWN0cjtcbiAgfVxuXG5cbiAgLy8g0L7RgtCy0LXRh9Cw0LXRgiDQt9CwINC+0YLRgNC40YHQvtCy0LrRgyDQstGB0LXRhSDRjdC70LXQvNC10L3RgtC+0LIuIFxuICAvLyDQntGC0YDQuNGB0L7QstC60LAg0LrQsNC20LTQvtCz0L4g0L7RgtC00LXQu9GM0L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCDQtNC+0LvQttC90LAgXG4gIC8vINC+0YHRg9GJ0LXRgdGC0LLQu9GP0YLRjNGB0Y8g0YTRg9C90LrRhtC40LXQuSByZW5kZXJlclxuICAvLyDQv9C+INGE0LDQutGC0YMg0YXQstCw0YLQsNC90YPQu9C4INC40Lcg0LjQvdC00LXQutGBLmpzINGE0YPQvdC60YbQuNGOICDQuCDQt9Cw0L/QuNGF0L3Rg9C70Lgg0YHRjtC00LBcbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH0gXG5cbiAgLy8g0KHQvtC00LXRgNC20LjRgiDQv9GD0LHQu9C40YfQvdGL0Lkg0LzQtdGC0L7QtCBhZGRJdGVtLCDQutC+0YLQvtGA0YvQuSBcbiAgLy/Qv9GA0LjQvdC40LzQsNC10YIgRE9NLdGN0LvQtdC80LXQvdGCINC4INC00L7QsdCw0LLQu9GP0LXRgiDQtdCz0L4g0LIg0LrQvtC90YLQtdC50L3QtdGAXG4gIC8vINC30LTQtdGB0Ywg0LzRiyDQsdGD0LTQtdC8INC00L7QsdCw0LLQu9GP0YLRjCDQutCw0YDRgtC+0YfQutC4INCyINC90LDRh9Cw0LvQviBcbiAgLy8g0LIg0LDRgNCz0YPQvNC10L3RgiDQsdGD0LTQtdGCINCy0YHRgtCw0LLQu9GP0YLRjNGB0Y8g0KTRg9C90LrRhtC40Y8g0LrQsNGA0YLQvtGH0LrQsCDRgSDQtNC+0LHQsNCy0LvQtdC90LjQtdC8INC00LDQvdC90YvRhSDQvdCwINGB0LDQudGCXG4gIGFkZEl0ZW0oaXRlbSl7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoaXRlbSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uOyIsIi8vIC/QmtC70LDRgdGBIFVzZXJJbmZvINC+0YLQstC10YfQsNC10YIgXG4vL9C30LAg0YPQv9GA0LDQstC70LXQvdC40LUg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8INC40L3RhNC+0YDQvNCw0YbQuNC4INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtSDQvdCwINGB0YLRgNCw0L3QuNGG0LUuXG4vL9Cf0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC+0LHRitC10LrRgiDRgSDRgdC10LvQtdC60YLQvtGA0LDQvNC4INC00LLRg9GFINGN0LvQtdC80LXQvdGC0L7Qsjpcbi8vINGN0LvQtdC80LXQvdGC0LAg0LjQvNC10L3QuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0Lgg0Y3Qu9C10LzQtdC90YLQsCDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDRgdC10LHQtVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudE5hbWUsICBlbGVtZW50SW5mbykge1xuICAgIHRoaXMuX2VsZW1lbnROYW1lID0gZWxlbWVudE5hbWU7XG4gICAgdGhpcy5fZWxlbWVudEluZm8gPSBlbGVtZW50SW5mbztcbiAgfVxuXG4gIC8vINCt0YLQvtGCINC80LXRgtC+0LQg0L/RgNC40LPQvtC00LjRgtGB0Y8g0LrQvtCz0LTQsCDQtNCw0L3QvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIFxuICAvLyDQvdGD0LbQvdC+INCx0YPQtNC10YIg0L/QvtC00YHRgtCw0LLQuNGC0Ywg0LIg0YTQvtGA0LzRgyDQv9GA0Lgg0L7RgtC60YDRi9GC0LjQuC5cbiAgZ2V0VXNlckluZm8oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5fZWxlbWVudE5hbWUudGV4dENvbnRlbnQsXG4gICAgICBpbmZvOiB0aGlzLl9lbGVtZW50SW5mby50ZXh0Q29udGVudCxcbiAgICB9XG4gIH1cblxuLy/QutC+0YLQvtGA0YvQuSDQv9GA0LjQvdC40LzQsNC10YIg0L3QvtCy0YvQtSDQtNCw0L3QvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC4INC00L7QsdCw0LLQu9GP0LXRgiDQuNGFINC90LAg0YHRgtGA0LDQvdC40YbRgy5cbiAgc2V0VXNlckluZm8oe25hbWUsaW5mb30pe1xuICAgIHRoaXMuX2VsZW1lbnROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLl9lbGVtZW50SW5mby50ZXh0Q29udGVudCA9IGluZm87XG4gIH1cbiAgXG59IiwiLy/QnNCQ0KHQodCY0JLQq1xuXG4vL9Cc0LDRgdGB0LjQsiDQuNC3INC30LDQtNCw0L3QuNGPINGC0LjRgtC70Ysg0LrQsNGA0YLQuNC90LrQuCDQuCDRgdGB0YvQu9C60Lgg0L3QsCDQvdC40YVcbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiBcbiAge1xuICAgIG5hbWU6IFwi0JDRgNGF0YvQt1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2Fya2h5ei5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0KfQtdC70Y/QsdC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2NoZWx5YWJpbnNrLW9ibGFzdC5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0JjQstCw0L3QvtCy0L5cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9pdmFub3ZvLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLQmtCw0LzRh9Cw0YLQutCwXCIsXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2FtY2hhdGthLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLQpdC+0LvQvNC+0LPQvtGA0YHQutC40Lkg0YDQsNC50L7QvVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2tob2xtb2dvcnNreS1yYXlvbi5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0JHQsNC50LrQsNC7XCIsXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYmFpa2FsLmpwZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbENhcmRzOyIsImV4cG9ydCBjb25zdCB2YWxpZGF0aW9uQ29uZmlnID0ge1xuICBwb3B1cDogXCIucG9wdXBcIixcbiAgcG9wdXBGb3JtOiBcIi5wb3B1cF9fZm9ybVwiLFxuICBwb3B1cElucHV0OiBcIi5wb3B1cF9faW5wdXRcIixcbiAgYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZTogXCIucG9wdXBfX3N1Ym1pdC1idXR0b25cIixcbiAgcG9wdXBFbGVtZW50RXJyb3I6IFwicG9wdXBfX2VsZW1lbnQtZXJyb3JcIixcbiAgcG9wdXBJbnB1dEVycm9yOiBcInBvcHVwX19pbnB1dF9lcnJvclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgcG9wdXA6IFwiLnBvcHVwXCIsXG4gIHRpdGxlOiBcIi5wcm9maWxlX190aXRsZVwiLFxuICBzdWJUaXRsZTogXCIucHJvZmlsZV9fc3VidGl0bGVcIixcbiAgcG9wdXBFZGl0UHJvZmlsZTogXCIjcG9wdXBfZWRpdF9wcm9maWxlXCIsXG4gIGJ1dHRvbkVkaXQ6IFwiLnByb2ZpbGVfX2J1dHRvbi1lZGl0XCIsXG4gIHN1YlRpdGxlRWRpdDogJy5wb3B1cF9faW5wdXRbbmFtZT1cInN1YnRpdGxlXCJdJyxcbiAgcG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlOiAnLnBvcHVwX19mb3JtW25hbWU9XCJwb3B1cEZvcm1FZGl0UG9maWxlVGFibGVcIl0nLFxuICB0aXRsZUVkaXQ6ICcucG9wdXBfX2lucHV0W25hbWU9XCJuYW1lXCJdJyxcbiAgcG9wdXBTdWJtaXRCdXR0b25zRGlzYWJsZTogXCIucG9wdXBfX3N1Ym1pdC1idXR0b25fZGlzYWJsZVwiLFxuICBidXR0b25BZGRCdXR0b246IFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIixcbiAgcG9wdXBBZGQ6IFwiI3BvcHVwX2FkZFwiLFxuICB0ZXh0VmFsdWVQb3B1cFRpdGxlOiBcIiNpbnB1dC1pbWFnZS10aXRsZVwiLFxuICB0ZXh0VmFsdWVQb3B1cFN1YnRpdGxlOiBcIiNpbnB1dC1pbWFnZS11cmxcIixcbiAgZWxlbWVudHNDYXJkOiBcIi5lbGVtZW50c1wiLFxuICBwb3B1cEJpZ09wZW5JbWFnZTogXCIjcG9wdXAtcGhvdG9cIixcbiAgYnV0dG9uUG9wdXBCaWdJbWFnZUNsb3NlOiBcIi5wb3B1cF9fY2xvc2VbbmFtZT0nYnV0dG9uUG9wdXBCaWdJbWdDbG9zZSddXCIsXG4gIG5ld0VsZW1lbnRJZFRlbXBsYXRlOiBcIiNuZXdFbGVtZW50XCIsXG4gIHBvcHVwQ2xvc2U6IFwiLnBvcHVwX19jbG9zZVwiLFxuICBwb3B1cE9wZW5lZDogXCJwb3B1cF9vcGVuZWRcIixcbiAgZWxlbWVudFRleHQ6IFwiLmVsZW1lbnRfX3RleHRcIixcbiAgZWxlbWVudEltYWdlOiBcIi5lbGVtZW50X19pbWdcIixcbiAgcG9wdXBUZXh0Q29sb3JGb250R3JleTogXCJwb3B1cF9faW5wdXRfY29sb3ItZm9udF9ncmV5XCIsXG4gIHBvcHVwVGl0bGVJbWFnZTogXCIucG9wdXBfX3RpdGxlLWltZ1wiLFxuICBwb3B1cFBob3RvQmlnOiBcIi5wb3B1cF9fcGhvdG9cIixcbiAgZWxlbWVudExpa2U6IFwiLmVsZW1lbnRfX2xpa2VcIixcbiAgZWxlbWVudExpa2VBY3RpdmU6IFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIixcbiAgZWxlbWVudFRyYXNoOiBcIi5lbGVtZW50X190cmFzaFwiLFxuICBlbGVtZW50OiBcIi5lbGVtZW50XCIsXG4gIGZvcm1BZGQ6IFwiI2Zvcm1fYWRkXCIsXG4gIGlucHV0VGl0bGVQcm9maWxlOiBcIi5wb3B1cF9faW5wdXRbbmFtZT0nbmFtZSddXCIsXG4gIGlucHV0U3VidGl0bGVQcm9maWxlOiBcIi5wb3B1cF9faW5wdXRbbmFtZT0nc3VidGl0bGUnXVwiLFxuICBob3N0OiBcImh0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNTVcIixcbiAgdG9rZW46IFwiNTg4ZTg3MzUtY2MwMC00ZjZkLThkOTItZGE3MTVjNWRiMGNhXCIsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiog0JjQnNCf0J7QoNCi0KsgKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuaW1wb3J0ICBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBpbml0aWFsQ2FyZHMgZnJvbSBcIi4uL3V0aWxzL2NhcmRzLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgeyB2YWxpZGF0aW9uQ29uZmlnIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XG5cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqINCa0J7QndCh0KLQkNCd0KLQqyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoY29uZmlnLmhvc3QsIGNvbmZpZy50b2tlbik7XG5cbmNvbnN0IHBvcHVwU3VibWl0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gIHZhbGlkYXRpb25Db25maWcuYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZVxuKTtcbi8vY29uZmlnXG5jb25zdCBwb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5wb3B1cCk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnRpdGxlKTtcbmNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuc3ViVGl0bGUpO1xuY29uc3QgcG9wdXBFZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwRWRpdFByb2ZpbGUpO1xuY29uc3QgcG9wdXBCdXR0b25DbG9zZUVkaXRQcm9maWxlID0gcG9wdXBFZGl0UHJvZmlsZS5xdWVyeVNlbGVjdG9yKFxuICBjb25maWcucG9wdXBDbG9zZVxuKTtcbmNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5idXR0b25FZGl0KTtcbmNvbnN0IHRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnRpdGxlRWRpdCk7XG5jb25zdCBzdWJUaXRsZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zdWJUaXRsZUVkaXQpO1xuY29uc3QgcG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgY29uZmlnLnBvcHVwRm9ybUVkaXRQb2ZpbGVUYWJsZVxuKTtcbmNvbnN0IHBvcHVwRm9ybUVkaXRQb2ZpbGVUYWJsZUludmFsaWQgPSBjb25maWcucG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlSW52YWxpZDtcbmNvbnN0IGJ1dHRvbkFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmJ1dHRvbkFkZEJ1dHRvbik7XG5jb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwQWRkKTtcbmNvbnN0IGZvcm1BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5mb3JtQWRkKTtcbmNvbnN0IHBvcHVwRWRpdENsb3NlQnV0dG9uID0gcG9wdXBBZGQucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBDbG9zZSk7XG5jb25zdCB0ZXh0VmFsdWVQb3B1cFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcudGV4dFZhbHVlUG9wdXBUaXRsZSk7XG5jb25zdCB0ZXh0VmFsdWVQb3B1cFN1YnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgY29uZmlnLnRleHRWYWx1ZVBvcHVwU3VidGl0bGVcbik7XG5jb25zdCBlbGVtZW50c0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5lbGVtZW50c0NhcmQpO1xuY29uc3QgcG9wdXBCaWdPcGVuSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5wb3B1cEJpZ09wZW5JbWFnZSk7XG5jb25zdCBidXR0b25Qb3B1cEJpZ0ltYWdlQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBjb25maWcuYnV0dG9uUG9wdXBCaWdJbWFnZUNsb3NlXG4pO1xuY29uc3QgcG9wdXBQaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwQmlnT3BlbkltYWdlKTtcbmNvbnN0IHBvcHVwUGhvdG9CaWcgPSBwb3B1cFBob3RvLnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwUGhvdG9CaWcpO1xuY29uc3QgbmV3RWxlbWVudFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgY29uZmlnLm5ld0VsZW1lbnRJZFRlbXBsYXRlXG4pLmNvbnRlbnQ7XG5jb25zdCBwb3B1cFRpdGxlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5wb3B1cFRpdGxlSW1hZ2UpO1xuY29uc3QgaW5wdXRUaXRsZVByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5pbnB1dFRpdGxlUHJvZmlsZSk7XG5jb25zdCBpbnB1dFN1YnRpdGxlUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmlucHV0U3VidGl0bGVQcm9maWxlKTtcblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqINCa0JvQkNCh0KHQqyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBQb3B1cFdpdGhJbWFnZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vL9Cf0L7QtNC60LvRjtGH0LDQtdC8INCx0L7Qu9GM0YjQuNC1INC60LDRgNGC0LjQvdC60LhcbmNvbnN0IHBvcHVwSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UocG9wdXBCaWdPcGVuSW1hZ2UpO1xuXG5wb3B1cEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5jb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAobmFtZSwgbGluaykgPT4ge1xuICBwb3B1cEltYWdlLm9wZW4obmFtZSwgbGluayk7XG59O1xuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ2FyZCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmFwaS5nZXRUYXNrcygpXG4gIC50aGVuKChpdGVtcyk9PntcbiAgIGNvbnNvbGUubG9nKCfRgNCw0LHQvtGC0LDQtdGCJyk7XG5cbiAgfSlcblxuLy/QlNC10LvQsNC10Lwg0YTRg9C90LrRhtC40Y4g0YfRgtC+INCxINC00L7QsdCw0LLQu9GP0LvQuNGB0Ywg0LrQsNGA0YLQvtGH0LrQuCAo0JzQkNCh0KHQmNCSKVxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhKSB7XG4gIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChcbiAgICBkYXRhLm5hbWUsXG4gICAgZGF0YS5saW5rLFxuICAgIGNvbmZpZyxcbiAgICBoYW5kbGVDYXJkQ2xpY2ssXG4gICAgbmV3RWxlbWVudFRlbXBsYXRlXG4gICk7XG4gIHJldHVybiBuZXdDYXJkLmNyZWF0ZUNhcmQoKTtcbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIFNlY3Rpb24gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vL9CU0LXQu9Cw0LXQvCDQutC+0L3RgdGC0LDQvdGC0YMg0Lgg0LjQtyDQutC70LDRgdGB0LAsINC/0YDQvtC60LjQtNGL0LLQsNC10Lwg0LXQvNGDICh70LzQsNGB0YHQuNCyINGBINC60LDRgNGC0L7Rh9C60LDQvNC4LCDRhNGD0L3QutGG0LjRjiDQtNC+0LHQsNCy0LvQtdC90LjQtSDQutCw0YDRgtC+0YfQtdC6fSxcbi8v0L3QsNC50LTQtdC90L3Ri9C5INGB0LXQu9C10LrRgtC+0YApXG5jb25zdCBjYXJkUmVuZGVyID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICBpbml0aWFsQ2FyZHMsXG4gICAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4gICAgICAvL9GF0LLQsNGC0LDQtdC8INC80LXRgtC+0LQgXCJhZGRJdGVtXCIg0Lgg0LLRgdGC0LDQstC70Y/QtdC8INCyINC/0LDRgNCw0LzQtdGC0YAg0YTRg9C90LrRhtC40Y4g0LTQvtCx0LDQstC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LXQuiBjcmVhdGVDYXJkKGl0ZW0pXG4gICAgICBjYXJkUmVuZGVyLmFkZEl0ZW0oY3JlYXRlQ2FyZChpdGVtKSk7XG4gICAgfSxcbiAgICAvLyDQkCDQt9C00LXRgdGMINC00L7QsdCw0LLQu9GP0LXQvCDRgdC10LvQtdC60YLQvtGAXG4gIH0sXG4gIGVsZW1lbnRzQ2FyZFxuKTtcbi8v0LLRi9C30YvQstCw0LXQvCDQvNC10YLQvtC0IHJlbmRlcml0ZW1zKGMg0L/QsNGA0LDQvNC10YLRgNC+0Lwg0LzQsNGB0YHQuNCy0L7QvCDQutCw0YLQvtGH0LXQuilcbmNhcmRSZW5kZXIucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHRpdGxlLCBzdWJUaXRsZSk7XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBQb3B1cFdpdGhGb3JtICBVc2VySW5mbyBDYXJkICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8hISEg0KMg0JzQldCd0K8g0KPQltCVINCV0KHQotCsINCa0J7QndCh0KLQkNCd0KLQkCAgXCJwb3B1cEVkaXRQcm9maWxlXCIg0J/QntCt0KLQntCc0KMg0JTQldCb0JDQriBwb3B1cFByb2ZpbGVFZGl0XG5jb25zdCBwb3B1cFByb2ZpbGVFZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0ocG9wdXBFZGl0UHJvZmlsZSwgKGlucHV0KSA9PiB7XG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKHsgbmFtZTogaW5wdXQubmFtZSwgaW5mbzogaW5wdXQuc3VidGl0bGUgfSk7XG59KTtcblxucG9wdXBQcm9maWxlRWRpdC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5cbmJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaW5wdXRUaXRsZVByb2ZpbGUudmFsdWUgPSB1c2VySW5mby5nZXRVc2VySW5mbygpLm5hbWU7XG4gIGlucHV0U3VidGl0bGVQcm9maWxlLnZhbHVlID0gdXNlckluZm8uZ2V0VXNlckluZm8oKS5pbmZvO1xuICBwb3B1cFByb2ZpbGVFZGl0Lm9wZW4oKTtcbn0pO1xuXG5jb25zdCBwb3B1cEFkZENhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybShwb3B1cEFkZCwgKGlucHV0KSA9PiB7XG4gIGNvbnN0IGluZm9DYXJkID0gY3JlYXRlQ2FyZCh7XG4gICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgIGxpbms6IGlucHV0LnN1YnRpdGxlLFxuICB9KTtcbiAgY2FyZFJlbmRlci5hZGRJdGVtKGluZm9DYXJkKTtcbn0pO1xucG9wdXBBZGRDYXJkLl9nZXRJbnB1dFZhbHVlcygpO1xucG9wdXBBZGRDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIDIgUE9QVVBcbi8vINCS0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDLCDQtNC+0YHQu9C+0LLQvdC+INC00L7QsdCw0LLQu9GP0LXQvCDQuiDQutC70LDRgdGB0YMgcG9wdXBfYWRkICsg0LrQu9Cw0YHRgSBwb3B1cC1PcGVuXG5idXR0b25BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcG9wdXBBZGRDYXJkLm9wZW4oKTtcbn0pO1xuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiog0JLQkNCb0JjQlNCQ0KbQmNCvICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8v0J7QsdGP0LfQsNGC0LXQu9GM0L3QviDQvdGD0LbQvdC+INC/0YDQvtCx0YDQsNGB0YvQstCw0YLRjCAo0L/QsNGA0LDQvNC10YLRgNGLL9Cw0YDQs9GD0LzQtdC90YLRiyDQuNC3INCa0LvQsNGBY9CwL2luZGV4KVxuY29uc3QgdmFsaWRhdGlvbkNhcmQgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uQ29uZmlnLCBmb3JtQWRkKTtcbnZhbGlkYXRpb25DYXJkLmVuYWJsZVZhbGlkYXRpb24oKTtcbmNvbnN0IHZhbGlkYXRpb25Qcm9maWxlID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvbkNvbmZpZywgcG9wdXBFZGl0UHJvZmlsZSk7XG52YWxpZGF0aW9uUHJvZmlsZS5lbmFibGVWYWxpZGF0aW9uKCk7XG4iXSwibmFtZXMiOlsiQXBpIiwiaG9zdCIsInRva2VuIiwiX2hvc3QiLCJfdG9rZW4iLCJmZXRjaCIsImhlYWRlcnMiLCJhdXRvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiRXJyb3IiLCJDYXJkIiwidGV4dCIsImxpbmsiLCJjb25maWciLCJoYW5kbGVDYXJkQ2xpY2siLCJuZXdFbGVtZW50VGVtcGxhdGUiLCJfdGV4dCIsIl9saW5rIiwiX2VsZW1lbnRUZXh0IiwiZWxlbWVudFRleHQiLCJfZWxlbWVudEltYWdlU2VsZWN0b3IiLCJlbGVtZW50SW1hZ2UiLCJfZWxlbWVudFRyYXNoU2VsZWN0b3IiLCJlbGVtZW50VHJhc2giLCJfZWxlbWVudExpa2VTZWxlY3RvciIsImVsZW1lbnRMaWtlIiwiX2VsZW1lbnRMaWtlQWN0aXZlIiwiZWxlbWVudExpa2VBY3RpdmUiLCJfbmV3RWxlbWVudElkVGVtcGxhdGUiLCJuZXdFbGVtZW50SWRUZW1wbGF0ZSIsIl9oYW5kbGVDYXJkQ2xpY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2NhcmQiLCJyZW1vdmUiLCJfZWxlbWVudExpa2UiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfZWxlbWVudEltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9idXR0b25UcmFzaCIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX2xpa2VQdXNoIiwiX2dldFRlbXBsYXRlIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJfYWRkRXZlbnRMaXN0ZW5lciIsIkZvcm1WYWxpZGF0b3IiLCJ2YWxpZGF0aW9uQ29uZmlnIiwiZm9ybSIsIl9pc0Zvcm1WYWxpZCIsIl9mb3JtSW5wdXRzIiwiZXZlcnkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3BvcHVwU3VibWl0QnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaW5wdXRFbGVtZW50IiwiX2VsZW1lbnRFcnJvciIsImlkIiwiX3RleHRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiYWRkIiwiX3BvcHVwSW5wdXRFcnJvciIsImlucHV0IiwiY2hlY2tWYWxpZGl0eSIsIl9zaG93SW5wdXRFcnJvciIsIl9oaWRlSW5wdXRFcnJvciIsIkFycmF5IiwiZnJvbSIsIl9mb3JtIiwicXVlcnlTZWxlY3RvckFsbCIsIl9wb3B1cElucHV0IiwiX2J1dHRvbkZvcm1FZGl0UG9maWxlVGFibGUiLCJ2YWxpZGF0ZUJ1dHRvbiIsImZvckVhY2giLCJldnQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3BvcHVwRm9ybSIsInBvcHVwRm9ybSIsIl92YWxpZGF0aW9uQ29uZmlnIiwiX3BvcHVwRWxlbWVudEVycm9yIiwicG9wdXBFbGVtZW50RXJyb3IiLCJwb3B1cElucHV0RXJyb3IiLCJwb3B1cElucHV0IiwiYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZSIsIl92YWxpZGF0ZUZvcm1JbnB1dHMiLCJQb3B1cCIsInBvcHVwRWxlbWVudCIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsImNsb3NlIiwiX2J1dHRvbkNsb3NlIiwiZWxlbWVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJQb3B1cFdpdGhGb3JtIiwiY2FsYmFja2xTdWJtaXRGb3JtIiwiX2NhbGJhY2tsU3VibWl0Rm9ybSIsIl9pbnB1dExpc3QiLCJfZm9ybVZhbHVlcyIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cFBob3RvQmlnIiwiX3BvcHVwVGl0bGVJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJfcG9wdXAiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0ciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiaXRlbSIsInByZXBlbmQiLCJVc2VySW5mbyIsImVsZW1lbnROYW1lIiwiZWxlbWVudEluZm8iLCJfZWxlbWVudE5hbWUiLCJfZWxlbWVudEluZm8iLCJpbmZvIiwiaW5pdGlhbENhcmRzIiwicG9wdXAiLCJ0aXRsZSIsInN1YlRpdGxlIiwicG9wdXBFZGl0UHJvZmlsZSIsImJ1dHRvbkVkaXQiLCJzdWJUaXRsZUVkaXQiLCJwb3B1cEZvcm1FZGl0UG9maWxlVGFibGUiLCJ0aXRsZUVkaXQiLCJwb3B1cFN1Ym1pdEJ1dHRvbnNEaXNhYmxlIiwiYnV0dG9uQWRkQnV0dG9uIiwicG9wdXBBZGQiLCJ0ZXh0VmFsdWVQb3B1cFRpdGxlIiwidGV4dFZhbHVlUG9wdXBTdWJ0aXRsZSIsImVsZW1lbnRzQ2FyZCIsInBvcHVwQmlnT3BlbkltYWdlIiwiYnV0dG9uUG9wdXBCaWdJbWFnZUNsb3NlIiwicG9wdXBDbG9zZSIsInBvcHVwT3BlbmVkIiwicG9wdXBUZXh0Q29sb3JGb250R3JleSIsInBvcHVwVGl0bGVJbWFnZSIsInBvcHVwUGhvdG9CaWciLCJmb3JtQWRkIiwiaW5wdXRUaXRsZVByb2ZpbGUiLCJpbnB1dFN1YnRpdGxlUHJvZmlsZSIsImFwaSIsInBvcHVwU3VibWl0QnV0dG9ucyIsInBvcHVwcyIsInBvcHVwQnV0dG9uQ2xvc2VFZGl0UHJvZmlsZSIsInBvcHVwRm9ybUVkaXRQb2ZpbGVUYWJsZUludmFsaWQiLCJwb3B1cEVkaXRDbG9zZUJ1dHRvbiIsInBvcHVwUGhvdG8iLCJwb3B1cEltYWdlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJvcGVuIiwiZ2V0VGFza3MiLCJjcmVhdGVDYXJkIiwiZGF0YSIsIm5ld0NhcmQiLCJjYXJkUmVuZGVyIiwiYWRkSXRlbSIsInJlbmRlckl0ZW1zIiwidXNlckluZm8iLCJwb3B1cFByb2ZpbGVFZGl0Iiwic2V0VXNlckluZm8iLCJzdWJ0aXRsZSIsImdldFVzZXJJbmZvIiwicG9wdXBBZGRDYXJkIiwiaW5mb0NhcmQiLCJ2YWxpZGF0aW9uQ2FyZCIsImVuYWJsZVZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uUHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=