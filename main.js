/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  inputSubtitleProfile: ".popup__input[name='subtitle']"
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
//**************************** ИМПОРТЫ ****************************











//**************************** КОНСТАНТЫ ****************************

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07RUFDOUN5SSxZQUFZLENBQUNaLElBQUksRUFBRTtBQUNyQixDQUFDLENBQUM7O0FBRUY7QUFDQTtBQUNBLElBQU1jLGNBQWMsR0FBRyxJQUFJbEksb0VBQWEsQ0FBQ0MsNkRBQWdCLEVBQUV3RyxPQUFPLENBQUM7QUFDbkV5QixjQUFjLENBQUNDLGdCQUFnQixFQUFFO0FBQ2pDLElBQU1DLGlCQUFpQixHQUFHLElBQUlwSSxvRUFBYSxDQUFDQyw2REFBZ0IsRUFBRXNGLGdCQUFnQixDQUFDO0FBQy9FNkMsaUJBQWlCLENBQUNELGdCQUFnQixFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IodGV4dCwgbGluaywgY29uZmlnLCBoYW5kbGVDYXJkQ2xpY2ssIG5ld0VsZW1lbnRUZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgIHRoaXMuX2xpbmsgPSBsaW5rO1xuICAgIHRoaXMuX2VsZW1lbnRUZXh0ID0gY29uZmlnLmVsZW1lbnRUZXh0O1xuICAgIHRoaXMuX2VsZW1lbnRJbWFnZVNlbGVjdG9yID0gY29uZmlnLmVsZW1lbnRJbWFnZTtcbiAgICB0aGlzLl9lbGVtZW50VHJhc2hTZWxlY3RvciA9IGNvbmZpZy5lbGVtZW50VHJhc2g7XG4gICAgdGhpcy5fZWxlbWVudExpa2VTZWxlY3RvciA9IGNvbmZpZy5lbGVtZW50TGlrZTtcbiAgICB0aGlzLl9lbGVtZW50TGlrZUFjdGl2ZSA9IGNvbmZpZy5lbGVtZW50TGlrZUFjdGl2ZTtcbiAgICB0aGlzLl9uZXdFbGVtZW50SWRUZW1wbGF0ZSA9IGNvbmZpZy5uZXdFbGVtZW50SWRUZW1wbGF0ZTtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gIH1cbiAgXG5cbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIC8v0JTQvtGB0YLQsNC10LwgdGVtcGxhdGUg0Lgg0LrQu9C+0L3QuNGA0YPQtdC8IChjb25maWcubmV3RWxlbWVudElkVGVtcGxhdGUg0L3QtSDQsdGD0LTQtdGCINGA0LDQsdC+0YLQsNGC0YwpXG4gICAgcmV0dXJuIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9uZXdFbGVtZW50SWRUZW1wbGF0ZSlcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcbiAgfVxuXG4gIC8v0LzQtdGC0L7QtCDRg9C00LDQu9C10L3QuNC1INC60LDRgNGC0L7Rh9C60LhcbiAgX2hhbmRsZURlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy5fY2FyZC5yZW1vdmUoKTtcbiAgICB0aGlzLl9jYXJkID0gbnVsbDtcbiAgfVxuICBcbiAgLy/QvNC10YLQvtC0INC70LDQudC6INC60LDRgNGC0L7Rh9C60LhcbiAgX2xpa2VQdXNoKCkge1xuICAgIHRoaXMuX2VsZW1lbnRMaWtlLmNsYXNzTGlzdC50b2dnbGUodGhpcy5fZWxlbWVudExpa2VBY3RpdmUpO1xuICB9XG5cbiAgLy/QlNC+0LHQsNCy0LvRj9C10Lwg0YHQu9GD0YjQsNGC0LXQu9C4XG4gIF9hZGRFdmVudExpc3RlbmVyKCkge1xuICAgIC8v0L/QviDRhNCw0LrRgtGDINC30LDQvNC10L3QuNC70LggaGFuZGxlT3BlblBvcHVwIC0g0L3QtSDQv9C+0L3Rj9C7INC30LDRh9C10Lw/INCa0LDQutCw0Y8g0YDQsNC30L3QuNGG0LA/XG4gICAgLy/QmtCw0LrQvtC1INCi0JcgLSDQotCw0LrQsNGPINC4INGA0LDQsdC+0YLQsCDQpdCXXG4gICAgdGhpcy5fZWxlbWVudEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sodGhpcy5fdGV4dCwgdGhpcy5fbGluayk7XG4gICAgfSlcblxuICAgIC8v0KPQtNCw0LvRj9C10Lwg0LrQsNGA0YLQvtGH0LrQuFxuICAgIHRoaXMuX2J1dHRvblRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKCk7XG4gICAgfSk7XG5cbiAgICAvL9Cb0LDQudC60LDQtdC8INGB0LXRgNC00LXRh9C60LhcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fbGlrZVB1c2goKVxuICAgIH0pO1xuICB9XG5cbiAgLy/QodC+0LfQtNCw0LXQvCDQutCw0YDRgtC+0YfQutC4XG4gIGNyZWF0ZUNhcmQoKSB7XG4gICAgdGhpcy5fY2FyZCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKHRoaXMuX2VsZW1lbnRUZXh0KS50ZXh0Q29udGVudCA9IHRoaXMuX3RleHQ7XG5cbiAgICAvL9Ci0LDQutC20LUg0LTQtdC70LDQtdC8INC30LTQtdGB0YwsINGD0LrQsNC30YvQstCw0LXQvCwg0YfRgtC+INC90YPQttC90L4g0LfQsNC60LjQvdGD0YLRjCDQsiBzcmMg0Lgg0YLRg9C00LAg0LrQuNC00LDQtdC8INGB0YHRi9C70LrRg1xuICAgIHRoaXMuX2VsZW1lbnRJbWFnZSA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX2VsZW1lbnRJbWFnZVNlbGVjdG9yXG4gICAgKTtcbiAgICAvL9CU0L7QsdCw0LLQu9GP0LXQvCBhbHQg0LrQsNGA0YLQuNC90LrQuCDQuNC3INC80LDRgdGB0LjQstCwXG4gICAgdGhpcy5fYnV0dG9uVHJhc2ggPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9lbGVtZW50VHJhc2hTZWxlY3RvclxuICAgICk7XG4gICAgdGhpcy5fZWxlbWVudExpa2UgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9lbGVtZW50TGlrZVNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2UuYWx0ID0gdGhpcy5fdGV4dDtcblxuICAgIC8v0JLRi9C30YvQstCw0LXQvCDRgdC70YPRiNCw0YLQtdC70LXQuVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXIoKTtcbiAgICByZXR1cm4gdGhpcy5fY2FyZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLy/QpNCj0J3QmtCm0JjQmCDQktCQ0JvQmNCU0J3QntCh0KLQmFxuY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIC8v0J7QsdGP0LfQsNGC0LXQu9GM0L3QviDQvdGD0LbQvdC+INC/0YDQvtCx0YDQsNGB0YvQstCw0YLRjCAo0L/QsNGA0LDQvNC10YLRgNGLL9Cw0YDQs9GD0LzQtdC90YLRiyDQuNC3INCa0LvQsNGB0LAvaW5kZXgpXG4gIGNvbnN0cnVjdG9yKHZhbGlkYXRpb25Db25maWcsIGZvcm0pIHtcbiAgICB0aGlzLl9wb3B1cEZvcm0gPSB2YWxpZGF0aW9uQ29uZmlnLnBvcHVwRm9ybTtcbiAgICB0aGlzLl92YWxpZGF0aW9uQ29uZmlnID0gdmFsaWRhdGlvbkNvbmZpZztcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnRFcnJvciA9IHZhbGlkYXRpb25Db25maWcucG9wdXBFbGVtZW50RXJyb3I7XG4gICAgdGhpcy5fcG9wdXBJbnB1dEVycm9yID0gdmFsaWRhdGlvbkNvbmZpZy5wb3B1cElucHV0RXJyb3I7XG4gICAgdGhpcy5fcG9wdXBJbnB1dCA9IHZhbGlkYXRpb25Db25maWcucG9wdXBJbnB1dDtcbiAgICB0aGlzLl9idXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlID1cbiAgICAgIHZhbGlkYXRpb25Db25maWcuYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZTtcbiAgICB0aGlzLl9mb3JtID0gZm9ybTtcbiAgfVxuXG4gIHZhbGlkYXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIC8v0L/RgNC+0LHQtdCz0LDQtdC80YHRjyDQv9C+INC40L3Qv9GD0YLRgyDRhNC+0YDQvNGLIFwiZm9ybUlucHV0c1wiINCx0LXRgNC10Lwg0LIg0L3QuNGFIHsgdmFsaWRpdHkgfSDQuCDQv9GA0L7QstC10YDRj9C10Lwg0L3QsCAgdmFsaWRpdHkudmFsaWQg0YLRgNGDINC40LvQuCDRhNC+0LvRgVxuICAgIHRoaXMuX2lzRm9ybVZhbGlkID0gdGhpcy5fZm9ybUlucHV0cy5ldmVyeShcbiAgICAgICh7IHZhbGlkaXR5IH0pID0+IHZhbGlkaXR5LnZhbGlkXG4gICAgKTtcbiAgICAvL9CV0YHQu9C4INGE0L7RgNC80LAg0LLQsNC70LjQtNC90LDRjyDQstC60LvRjtGH0LDQtdC8INC60L3QvtC/0LrRg1xuICAgIGlmICh0aGlzLl9pc0Zvcm1WYWxpZCkge1xuICAgICAgdGhpcy5fcG9wdXBTdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAvL9CV0YHQu9C4INGE0L7RgNC80LAg0L3QtSDQstCw0LvQuNC00L3QsNGPINC+0YLQutC70Y7Rh9Cw0LXQvCDQutC90L7Qv9C60YNcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9wdXBTdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgICB0aGlzLl90ZXh0RXJyb3IgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fcG9wdXBJbnB1dEVycm9yKTtcbiAgICB0aGlzLl9lbGVtZW50RXJyb3IudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0RXJyb3I7XG4gIH07XG5cbiAgX2hpZGVJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcblxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3BvcHVwSW5wdXRFcnJvcik7XG4gICAgdGhpcy5fZWxlbWVudEVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfTtcblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXQpO1xuICAgIH1cbiAgfTtcbiAgXG4gIC8v0J7QkdCg0JDQkdCe0KLQp9CY0JrQmCDQktCQ0JvQmNCU0J3QntCh0KLQmFxuICBfdmFsaWRhdGVGb3JtSW5wdXRzID0gKCkgPT4ge1xuICAgIC8v0YHQvtC30LTQsNC10Lwg0LzQsNGB0YHQuNCyINC40Lcg0LjQvdC/0YPRgtC+0LJcbiAgICB0aGlzLl9mb3JtSW5wdXRzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9wb3B1cElucHV0KVxuICAgICk7XG4gICAgLy/QvtC/0YDQtdC00LXQu9GP0LXQvCDQutC90L7Qv9C60YMgXCLRgdC+0YXRgNCw0L3QuNGC0Ywv0L7RgtC/0YDQsNCy0LjRgtGMXCIg0LIg0L/RgNC+0YTQuNC70LVcbiAgICB0aGlzLl9wb3B1cFN1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX2J1dHRvbkZvcm1FZGl0UG9maWxlVGFibGVcbiAgICApO1xuICAgIHRoaXMudmFsaWRhdGVCdXR0b24oKTtcbiAgXG4gICAgdGhpcy5fZm9ybUlucHV0cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIC8v0LLQtdGI0LDQtdC8INGB0LvRg9GI0LDRgtC10LvRjCDQvdCwINC40L3Qv9GD0YLRiyAo0Y3Qu9C10LzQtdC90YLRiyDQvNCw0YHRgdC40LLQsCAv0LjQvdC/0YPRgtGLLyBcInRoaXMuX2Zvcm1JbnB1dHNcIilcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2dCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl92YWxpZGF0ZUZvcm1JbnB1dHMoKTsgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcbiIsIi8qINC60LvQsNGB0YEgUG9wdXAsINC60L7RgtC+0YDRi9C5INC+0YLQstC10YfQsNC10YIg0LfQsCDQvtGC0LrRgNGL0YLQuNC1INC4INC30LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwXG7Qn9GA0LjQvdC40LzQsNC10YIg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgCDQtdC00LjQvdGB0YLQstC10L3QvdGL0Lkg0L/QsNGA0LDQvNC10YLRgCDigJQg0YHQtdC70LXQutGC0L7RgCDQv9C+0L/QsNC/0LAgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBFbGVtZW50KSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gcG9wdXBFbGVtZW50O1xuICAgIC8qICEhISDQktCQ0JbQndCeINCU0LXQu9Cw0LXQvCDQv9GA0LjQstGP0LfQutGDINGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQsCBcImJpbmRcIiDQsdC10Lcg0L3QtdCz0L4g0L3QtSDQsdGD0LTQtdGCXG4gICAg0L/QtdGA0LXQtNC+0LLQsNGC0YzRgdGPINCyINC00YDRg9Cz0L7QuSDQvNC10YLQvtC0LCDRgtCw0Lwg0LvQuNGI0Ywg0LHRg9C00LXRgiBcInVuZGVmaW5lZFwiICovXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8g0L7RgtCy0LXRh9Cw0Y7RgiDQt9CwINC+0YLQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XG4gICAgLyrQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC90LDQtNC+INC00LXQu9Cw0YLRjCDQv9GA0LjQstGP0LfQutGDINGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQsCBcImJpbmRcIiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LVcbiAgICDQotCw0LrQttC1INC80L7QttC90L4g0L/RgNC+0YHRgtC+INC30LTQtdGB0Ywg0L3QsNC/0LjRgdCw0YLRjCAoZXZ0KSA9PiB0aGlzLl9oYW5kbGVFc2NDbG9zZShldnQpICovXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgLy8g0L7RgtCy0LXRh9Cw0Y7RgiDQt9Cw0Lpw0YvRgtC40LUg0L/QvtC/0LDQv9CwXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIC8v0YHQvtC00LXRgNC20LjRgiDQu9C+0LPQuNC60YMg0LfQsNC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LAg0LrQu9Cw0LLQuNGI0LXQuSBFc2MuXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuXG4gIC8qINC00L7QsdCw0LLQu9GP0LXRgiDRgdC70YPRiNCw0YLQtdC70Ywg0LrQu9C40LrQsCDQuNC60L7QvdC60LUg0LfQsNC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LAuXG4gICDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YLQsNC60LbQtSDQt9Cw0LrRgNGL0LLQsNC10YLRgdGPINC/0YDQuCDQutC70LjQutC1INC90LAg0LfQsNGC0LXQvNC90ZHQvdC90YPRjlxuICAg0L7QsdC70LDRgdGC0Ywg0LLQvtC60YDRg9CzINGE0L7RgNC80YsgKi9cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy/Qt9Cw0LrRgNGL0YLRjCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutGA0LXRgdGC0LjQulxuICAgIHRoaXMuX2J1dHRvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fY2xvc2UtaWNvblwiKTtcbiAgICB0aGlzLl9idXR0b25DbG9zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy/Qt9Cw0LrRgNGL0YLQuNC1INC90LAg0L/QsNGA0LDQvdC20YNcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBldnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBFbGVtZW50LCBjYWxiYWNrbFN1Ym1pdEZvcm0pIHtcbiAgICBzdXBlcihwb3B1cEVsZW1lbnQpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IHBvcHVwRWxlbWVudDtcbiAgICB0aGlzLl9jYWxiYWNrbFN1Ym1pdEZvcm0gPSBjYWxiYWNrbFN1Ym1pdEZvcm07XG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIik7XG4gIH1cblxuICAvL9GB0L7QsdC40YDQsNC10YIg0LTQsNC90L3Ri9C1INCy0YHQtdGFINC/0L7Qu9C10Lkg0YTQvtGA0LzRiyDQuCDRg9C60LvQsNC00YvQstC10YIg0LjRhSDQsiDQvtCx0YrQtdC60YIgKNC00LDQvdC90YvQtSBuYW1lINC4IHN1YnRpdGxlKS5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChpbnB1dCA9PiB0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWUpO1xuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xuICB9XG5cbiAgLy/Qn9C10YDQtdC30LDQv9C40YHRi9Cy0LDQtdGCINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQvNC10YLQvtC0IHNldEV2ZW50TGlzdGVuZXJzLlxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL9Cf0LXRgNC10LfQsNC/0LjRgdGL0LLQsNC10YIg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC80LXRgtC+0LQgc2V0RXZlbnRMaXN0ZW5lcnMuXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9jYWxiYWNrbFN1Ym1pdEZvcm0odGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvL9Cf0LXRgNC10LfQsNC/0LjRgdGL0LLQsNC10YIg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC80LXRgtC+0LQgY2xvc2UsINGC0LDQulxuICAvL9C60LDQuiDQv9GA0Lgg0LfQsNC60YDRi9GC0LjQuCDQv9C+0L/QsNC/0LAg0YTQvtGA0LzQsCDQtNC+0LvQttC90LAg0LXRidGRINC4INGB0LHRgNCw0YHRi9Cy0LDRgtGM0YHRj1xuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgfVxufVxuIiwiLyog0JrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQvdCw0YHQu9C10LTRg9C10YIg0L7RgiBQb3B1cC4g0K3RgtC+0YIg0LrQu9Cw0YHRgSDQtNC+0LHQsNCy0LvRj9C10YIg0L3QvtCy0YvQtSDQtNCw0L3QvdGL0LUg0LJcbiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LzQtdGC0L7QtCBvcGVuLiDQkiDQvNC10YLQvtC00LUgb3BlbiDQutC70LDRgdGB0LAgUG9wdXBXaXRoSW1hZ2VcbiAg0L3Rg9C20L3QviDQstGB0YLQsNCy0LvRj9GC0YwgMyDQstC10YnQuFxuXG4gIDEpINCh0YHRi9C70LrRgyDQvdCwINC60LDRgNGC0LjQvdC60YMgPT4gdGhpcy5fcG9wdXBQaG90b0JpZy5zcmMgPSBsaW5rO1xuICAyKSDQotC10LrRgdGCIGF0bCDQutCw0YDRgtC40L3QutC4ID0+ICB0aGlzLl9wb3B1cFBob3RvQmlnLmFsdCA9IHRleHQ7XG4gIDMpINCi0LXQutGB0YIg0L7Qv9C40YHQsNC90LjQtSDQv9C+0LQg0LrQsNGA0YLQuNC90LrQvtC5ID0+IHRoaXMuX3BvcHVwVGl0bGVJbWFnZSA9IHBvcHVwVGl0bGVJbWFnZTtcbiAgICovXG5cbiAgLy/QmNC80L/QvtGA0YLQvtC30LDQvNC10YnQsNC10LwgKSkgUG9wdXAg0LjQtyDQvdCw0YjQtdC5INC20LUg0L/QsNC/0LrQuFxuICAgaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xuXG4gICAvL9Cg0LDRgdGI0LjRgNGP0LXQvCDRh9GC0L4g0LEg0LTQvtCx0LDQstC40YLRjCDQvdC+0LLRi9C1INC30L3QsNGH0LXQvdC40Y9cbiAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuXG4gICAgY29uc3RydWN0b3IocG9wdXBFbGVtZW50KSB7XG4gICAgICBzdXBlciAocG9wdXBFbGVtZW50KTtcbiAgICAgIFxuICAgICAgdGhpcy5fcG9wdXBQaG90b0JpZyA9IHBvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3Bob3RvJyk7XG4gICAgICB0aGlzLl9wb3B1cFRpdGxlSW1hZ2UgPSBwb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX190aXRsZS1pbWcnKTtcbiAgICB9XG5cbiAgLy8g0L7RgtCy0LXRh9Cw0Y7RgiDQt9CwINC+0YLQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwXG4gIG9wZW4odGV4dCwgbGluaykge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX3BvcHVwKTtcbiAgICAvL9C90LDQv9GA0LDQstC70Y/QtdC8INC00LDQvdC90YvQtSDQsiDQvtGC0LrRgNGL0YLRi9C5IFBvcHVwINC00LvRjyDQsdC+0LvRjNGI0L7QuSDQutCw0YDRgtC40L3QutC4IGxpbmsg0LggdGV4dFxuICAgIHRoaXMuX3BvcHVwUGhvdG9CaWcuc3JjID0gbGluaztcbiAgICB0aGlzLl9wb3B1cFBob3RvQmlnLmFsdCA9IHRleHQ7XG4gICAgdGhpcy5fcG9wdXBUaXRsZUltYWdlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgY29uc29sZS5sb2coXCLQmtC70LDRgdGBIFBvcHVwV2l0aEltYWdlIC0g0LzQtdGC0L7QtCBPUEVOINGA0LDQsdC+0YLQsNC10YJcIiApXG4gIH0gXG5cbn0iLCIvL9C+0YLQstC10YfQsNC10YIg0LfQsCDQvtGC0YDQuNGB0L7QstC60YMg0Y3Qu9C10LzQtdC90YLQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtVxuXG4vKiAg0J/QtdGA0LLRi9C8INC/0LDRgNCw0LzQtdGC0YDQvtC8INC60L7QvdGB0YLRgNGD0LrRgtC+0YDQsCDQv9GA0LjQvdC40LzQsNC10YIg0L7QsdGK0LXQutGCINGBINC00LLRg9C80Y8g0YHQstC+0LnRgdGC0LLQsNC80Lg6IGl0ZW1zINC4IHJlbmRlcmVyLiBcbiAg0KHQstC+0LnRgdGC0LLQviBpdGVtcyDigJQg0Y3RgtC+INC80LDRgdGB0LjQsiDQtNCw0L3QvdGL0YUgKNCSINC90LDRiNC10Lwg0YHQu9GD0YfQsNC1INC30LTQtdGB0Ywg0Y3RgtC+INC60LDRgNGC0L7Rh9C60Lgg0LrQvtGC0L7RgNGL0LUgXG4gICAg0L3QsNGF0L7QtNC40YLRgdGPINCyIGNhcmRzKSwg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDQtNC+0LHQsNCy0LjRgtGMINC90LAg0YHRgtGA0LDQvdC40YbRgyDQv9GA0Lgg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcbiAgINC60LvQsNGB0YHQsC4g0KHQstC+0LnRgdGC0LLQviByZW5kZXJlciDigJQg0Y3RgtC+INGE0YPQvdC60YbQuNGPLCDQutC+0YLQvtGA0LDRjyDQvtGC0LLQtdGH0LDQtdGCINC30LAg0YHQvtC30LTQsNC90LjQtSDQuCDQvtGC0YDQuNGB0L7QstC60YMg0LTQsNC90L3Ri9GFXG4gICAg0L3QsCDRgdGC0YDQsNC90LjRhtC1LlxuICDQktGC0L7RgNC+0Lkg0L/QsNGA0LDQvNC10YLRgCDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LAg4oCUINGB0LXQu9C10LrRgtC+0YAg0LrQvtC90YLQtdC50L3QtdGA0LAsINCyINC60L7RgtC+0YDRi9C5INC90YPQttC90L4g0LTQvtCx0LDQstC70Y/RgtGMIFxuICDRgdC+0LfQtNCw0L3QvdGL0LUg0Y3Qu9C10LzQtdC90YLRiy4gKi9cbmNsYXNzIFNlY3Rpb24ge1xuXG4gIGNvbnN0cnVjdG9yKHtpdGVtcyxyZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdHIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lclNlbGVjdHI7XG4gIH1cblxuXG4gIC8vINC+0YLQstC10YfQsNC10YIg0LfQsCDQvtGC0YDQuNGB0L7QstC60YMg0LLRgdC10YUg0Y3Qu9C10LzQtdC90YLQvtCyLiBcbiAgLy8g0J7RgtGA0LjRgdC+0LLQutCwINC60LDQttC00L7Qs9C+INC+0YLQtNC10LvRjNC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LAg0LTQvtC70LbQvdCwIFxuICAvLyDQvtGB0YPRidC10YHRgtCy0LvRj9GC0YzRgdGPINGE0YPQvdC60YbQuNC10LkgcmVuZGVyZXJcbiAgLy8g0L/QviDRhNCw0LrRgtGDINGF0LLQsNGC0LDQvdGD0LvQuCDQuNC3INC40L3QtNC10LrRgS5qcyDRhNGD0L3QutGG0LjRjiAg0Lgg0LfQsNC/0LjRhdC90YPQu9C4INGB0Y7QtNCwXG4gIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9IFxuXG4gIC8vINCh0L7QtNC10YDQttC40YIg0L/Rg9Cx0LvQuNGH0L3Ri9C5INC80LXRgtC+0LQgYWRkSXRlbSwg0LrQvtGC0L7RgNGL0LkgXG4gIC8v0L/RgNC40L3QuNC80LDQtdGCIERPTS3RjdC70LXQvNC10L3RgiDQuCDQtNC+0LHQsNCy0LvRj9C10YIg0LXQs9C+INCyINC60L7QvdGC0LXQudC90LXRgFxuICAvLyDQt9C00LXRgdGMINC80Ysg0LHRg9C00LXQvCDQtNC+0LHQsNCy0LvRj9GC0Ywg0LrQsNGA0YLQvtGH0LrQuCDQsiDQvdCw0YfQsNC70L4gXG4gIC8vINCyINCw0YDQs9GD0LzQtdC90YIg0LHRg9C00LXRgiDQstGB0YLQsNCy0LvRj9GC0YzRgdGPINCk0YPQvdC60YbQuNGPINC60LDRgNGC0L7Rh9C60LAg0YEg0LTQvtCx0LDQstC70LXQvdC40LXQvCDQtNCw0L3QvdGL0YUg0L3QsCDRgdCw0LnRglxuICBhZGRJdGVtKGl0ZW0pe1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjsiLCIvLyAv0JrQu9Cw0YHRgSBVc2VySW5mbyDQvtGC0LLQtdGH0LDQtdGCIFxuLy/Qt9CwINGD0L/RgNCw0LLQu9C10L3QuNC1INC+0YLQvtCx0YDQsNC20LXQvdC40LXQvCDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70LUg0L3QsCDRgdGC0YDQsNC90LjRhtC1LlxuLy/Qn9GA0LjQvdC40LzQsNC10YIg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgCDQvtCx0YrQtdC60YIg0YEg0YHQtdC70LXQutGC0L7RgNCw0LzQuCDQtNCy0YPRhSDRjdC70LXQvNC10L3RgtC+0LI6XG4vLyDRjdC70LXQvNC10L3RgtCwINC40LzQtdC90Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC4INGN0LvQtdC80LXQvdGC0LAg0LjQvdGE0L7RgNC80LDRhtC40Lgg0L4g0YHQtdCx0LVcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnROYW1lLCAgZWxlbWVudEluZm8pIHtcbiAgICB0aGlzLl9lbGVtZW50TmFtZSA9IGVsZW1lbnROYW1lO1xuICAgIHRoaXMuX2VsZW1lbnRJbmZvID0gZWxlbWVudEluZm87XG4gIH1cblxuICAvLyDQrdGC0L7RgiDQvNC10YLQvtC0INC/0YDQuNCz0L7QtNC40YLRgdGPINC60L7Qs9C00LAg0LTQsNC90L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyBcbiAgLy8g0L3Rg9C20L3QviDQsdGD0LTQtdGCINC/0L7QtNGB0YLQsNCy0LjRgtGMINCyINGE0L7RgNC80YMg0L/RgNC4INC+0YLQutGA0YvRgtC40LguXG4gIGdldFVzZXJJbmZvKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMuX2VsZW1lbnROYW1lLnRleHRDb250ZW50LFxuICAgICAgaW5mbzogdGhpcy5fZWxlbWVudEluZm8udGV4dENvbnRlbnQsXG4gICAgfVxuICB9XG5cbi8v0LrQvtGC0L7RgNGL0Lkg0L/RgNC40L3QuNC80LDQtdGCINC90L7QstGL0LUg0LTQsNC90L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuCDQtNC+0LHQsNCy0LvRj9C10YIg0LjRhSDQvdCwINGB0YLRgNCw0L3QuNGG0YMuXG4gIHNldFVzZXJJbmZvKHtuYW1lLGluZm99KXtcbiAgICB0aGlzLl9lbGVtZW50TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGhpcy5fZWxlbWVudEluZm8udGV4dENvbnRlbnQgPSBpbmZvO1xuICB9XG4gIFxufSIsIi8v0JzQkNCh0KHQmNCS0KtcblxuLy/QnNCw0YHRgdC40LIg0LjQtyDQt9Cw0LTQsNC90LjRjyDRgtC40YLQu9GLINC60LDRgNGC0LjQvdC60Lgg0Lgg0YHRgdGL0LvQutC4INC90LAg0L3QuNGFXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gXG4gIHtcbiAgICBuYW1lOiBcItCQ0YDRhdGL0LdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9hcmtoeXouanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcItCn0LXQu9GP0LHQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YxcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9jaGVseWFiaW5zay1vYmxhc3QuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcItCY0LLQsNC90L7QstC+XCIsXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvaXZhbm92by5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0JrQsNC80YfQsNGC0LrQsFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2thbWNoYXRrYS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0KXQvtC70LzQvtCz0L7RgNGB0LrQuNC5INGA0LDQudC+0L1cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9raG9sbW9nb3Jza3ktcmF5b24uanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcItCR0LDQudC60LDQu1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2JhaWthbC5qcGdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxDYXJkczsiLCJleHBvcnQgY29uc3QgdmFsaWRhdGlvbkNvbmZpZyA9IHtcbiAgcG9wdXA6IFwiLnBvcHVwXCIsXG4gIHBvcHVwRm9ybTogXCIucG9wdXBfX2Zvcm1cIixcbiAgcG9wdXBJbnB1dDogXCIucG9wdXBfX2lucHV0XCIsXG4gIGJ1dHRvbkZvcm1FZGl0UG9maWxlVGFibGU6IFwiLnBvcHVwX19zdWJtaXQtYnV0dG9uXCIsXG4gIHBvcHVwRWxlbWVudEVycm9yOiBcInBvcHVwX19lbGVtZW50LWVycm9yXCIsXG4gIHBvcHVwSW5wdXRFcnJvcjogXCJwb3B1cF9faW5wdXRfZXJyb3JcIixcbn07XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIHBvcHVwOiBcIi5wb3B1cFwiLFxuICB0aXRsZTogXCIucHJvZmlsZV9fdGl0bGVcIixcbiAgc3ViVGl0bGU6IFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIsXG4gIHBvcHVwRWRpdFByb2ZpbGU6IFwiI3BvcHVwX2VkaXRfcHJvZmlsZVwiLFxuICBidXR0b25FZGl0OiBcIi5wcm9maWxlX19idXR0b24tZWRpdFwiLFxuICBzdWJUaXRsZUVkaXQ6ICcucG9wdXBfX2lucHV0W25hbWU9XCJzdWJ0aXRsZVwiXScsXG4gIHBvcHVwRm9ybUVkaXRQb2ZpbGVUYWJsZTogJy5wb3B1cF9fZm9ybVtuYW1lPVwicG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlXCJdJyxcbiAgdGl0bGVFZGl0OiAnLnBvcHVwX19pbnB1dFtuYW1lPVwibmFtZVwiXScsXG4gIHBvcHVwU3VibWl0QnV0dG9uc0Rpc2FibGU6IFwiLnBvcHVwX19zdWJtaXQtYnV0dG9uX2Rpc2FibGVcIixcbiAgYnV0dG9uQWRkQnV0dG9uOiBcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIsXG4gIHBvcHVwQWRkOiBcIiNwb3B1cF9hZGRcIixcbiAgdGV4dFZhbHVlUG9wdXBUaXRsZTogXCIjaW5wdXQtaW1hZ2UtdGl0bGVcIixcbiAgdGV4dFZhbHVlUG9wdXBTdWJ0aXRsZTogXCIjaW5wdXQtaW1hZ2UtdXJsXCIsXG4gIGVsZW1lbnRzQ2FyZDogXCIuZWxlbWVudHNcIixcbiAgcG9wdXBCaWdPcGVuSW1hZ2U6IFwiI3BvcHVwLXBob3RvXCIsXG4gIGJ1dHRvblBvcHVwQmlnSW1hZ2VDbG9zZTogXCIucG9wdXBfX2Nsb3NlW25hbWU9J2J1dHRvblBvcHVwQmlnSW1nQ2xvc2UnXVwiLFxuICBuZXdFbGVtZW50SWRUZW1wbGF0ZTogXCIjbmV3RWxlbWVudFwiLFxuICBwb3B1cENsb3NlOiBcIi5wb3B1cF9fY2xvc2VcIixcbiAgcG9wdXBPcGVuZWQ6IFwicG9wdXBfb3BlbmVkXCIsXG4gIGVsZW1lbnRUZXh0OiBcIi5lbGVtZW50X190ZXh0XCIsXG4gIGVsZW1lbnRJbWFnZTogXCIuZWxlbWVudF9faW1nXCIsXG4gIHBvcHVwVGV4dENvbG9yRm9udEdyZXk6IFwicG9wdXBfX2lucHV0X2NvbG9yLWZvbnRfZ3JleVwiLFxuICBwb3B1cFRpdGxlSW1hZ2U6IFwiLnBvcHVwX190aXRsZS1pbWdcIixcbiAgcG9wdXBQaG90b0JpZzogXCIucG9wdXBfX3Bob3RvXCIsXG4gIGVsZW1lbnRMaWtlOiBcIi5lbGVtZW50X19saWtlXCIsXG4gIGVsZW1lbnRMaWtlQWN0aXZlOiBcImVsZW1lbnRfX2xpa2VfYWN0aXZlXCIsXG4gIGVsZW1lbnRUcmFzaDogXCIuZWxlbWVudF9fdHJhc2hcIixcbiAgZWxlbWVudDogXCIuZWxlbWVudFwiLFxuICBmb3JtQWRkOiBcIiNmb3JtX2FkZFwiLFxuICBpbnB1dFRpdGxlUHJvZmlsZTogXCIucG9wdXBfX2lucHV0W25hbWU9J25hbWUnXVwiLFxuICBpbnB1dFN1YnRpdGxlUHJvZmlsZTogXCIucG9wdXBfX2lucHV0W25hbWU9J3N1YnRpdGxlJ11cIixcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiog0JjQnNCf0J7QoNCi0KsgKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuaW1wb3J0ICBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBpbml0aWFsQ2FyZHMgZnJvbSBcIi4uL3V0aWxzL2NhcmRzLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgeyB2YWxpZGF0aW9uQ29uZmlnIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiog0JrQntCd0KHQotCQ0J3QotCrICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuY29uc3QgcG9wdXBTdWJtaXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgdmFsaWRhdGlvbkNvbmZpZy5idXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlXG4pO1xuLy9jb25maWdcbmNvbnN0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLnBvcHVwKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcudGl0bGUpO1xuY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zdWJUaXRsZSk7XG5jb25zdCBwb3B1cEVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBFZGl0UHJvZmlsZSk7XG5jb25zdCBwb3B1cEJ1dHRvbkNsb3NlRWRpdFByb2ZpbGUgPSBwb3B1cEVkaXRQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoXG4gIGNvbmZpZy5wb3B1cENsb3NlXG4pO1xuY29uc3QgYnV0dG9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmJ1dHRvbkVkaXQpO1xuY29uc3QgdGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcudGl0bGVFZGl0KTtcbmNvbnN0IHN1YlRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnN1YlRpdGxlRWRpdCk7XG5jb25zdCBwb3B1cEZvcm1FZGl0UG9maWxlVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBjb25maWcucG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlXG4pO1xuY29uc3QgcG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlSW52YWxpZCA9IGNvbmZpZy5wb3B1cEZvcm1FZGl0UG9maWxlVGFibGVJbnZhbGlkO1xuY29uc3QgYnV0dG9uQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuYnV0dG9uQWRkQnV0dG9uKTtcbmNvbnN0IHBvcHVwQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBBZGQpO1xuY29uc3QgZm9ybUFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmZvcm1BZGQpO1xuY29uc3QgcG9wdXBFZGl0Q2xvc2VCdXR0b24gPSBwb3B1cEFkZC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5wb3B1cENsb3NlKTtcbmNvbnN0IHRleHRWYWx1ZVBvcHVwVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy50ZXh0VmFsdWVQb3B1cFRpdGxlKTtcbmNvbnN0IHRleHRWYWx1ZVBvcHVwU3VidGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBjb25maWcudGV4dFZhbHVlUG9wdXBTdWJ0aXRsZVxuKTtcbmNvbnN0IGVsZW1lbnRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmVsZW1lbnRzQ2FyZCk7XG5jb25zdCBwb3B1cEJpZ09wZW5JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwQmlnT3BlbkltYWdlKTtcbmNvbnN0IGJ1dHRvblBvcHVwQmlnSW1hZ2VDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIGNvbmZpZy5idXR0b25Qb3B1cEJpZ0ltYWdlQ2xvc2Vcbik7XG5jb25zdCBwb3B1cFBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBCaWdPcGVuSW1hZ2UpO1xuY29uc3QgcG9wdXBQaG90b0JpZyA9IHBvcHVwUGhvdG8ucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBQaG90b0JpZyk7XG5jb25zdCBuZXdFbGVtZW50VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBjb25maWcubmV3RWxlbWVudElkVGVtcGxhdGVcbikuY29udGVudDtcbmNvbnN0IHBvcHVwVGl0bGVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwVGl0bGVJbWFnZSk7XG5jb25zdCBpbnB1dFRpdGxlUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmlucHV0VGl0bGVQcm9maWxlKTtcbmNvbnN0IGlucHV0U3VidGl0bGVQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuaW5wdXRTdWJ0aXRsZVByb2ZpbGUpO1xuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiog0JrQm9CQ0KHQodCrICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIFBvcHVwV2l0aEltYWdlICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8v0J/QvtC00LrQu9GO0YfQsNC10Lwg0LHQvtC70YzRiNC40LUg0LrQsNGA0YLQuNC90LrQuFxuY29uc3QgcG9wdXBJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShwb3B1cEJpZ09wZW5JbWFnZSk7XG5cbnBvcHVwSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmNvbnN0IGhhbmRsZUNhcmRDbGljayA9IChuYW1lLCBsaW5rKSA9PiB7XG4gIHBvcHVwSW1hZ2Uub3BlbihuYW1lLCBsaW5rKTtcbn07XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDYXJkICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy/QlNC10LvQsNC10Lwg0YTRg9C90LrRhtC40Y4g0YfRgtC+INCxINC00L7QsdCw0LLQu9GP0LvQuNGB0Ywg0LrQsNGA0YLQvtGH0LrQuCAo0JzQkNCh0KHQmNCSKVxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhKSB7XG4gIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChcbiAgICBkYXRhLm5hbWUsXG4gICAgZGF0YS5saW5rLFxuICAgIGNvbmZpZyxcbiAgICBoYW5kbGVDYXJkQ2xpY2ssXG4gICAgbmV3RWxlbWVudFRlbXBsYXRlXG4gICk7XG4gIHJldHVybiBuZXdDYXJkLmNyZWF0ZUNhcmQoKTtcbn1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIFNlY3Rpb24gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vL9CU0LXQu9Cw0LXQvCDQutC+0L3RgdGC0LDQvdGC0YMg0Lgg0LjQtyDQutC70LDRgdGB0LAsINC/0YDQvtC60LjQtNGL0LLQsNC10Lwg0LXQvNGDICh70LzQsNGB0YHQuNCyINGBINC60LDRgNGC0L7Rh9C60LDQvNC4LCDRhNGD0L3QutGG0LjRjiDQtNC+0LHQsNCy0LvQtdC90LjQtSDQutCw0YDRgtC+0YfQtdC6fSxcbi8v0L3QsNC50LTQtdC90L3Ri9C5INGB0LXQu9C10LrRgtC+0YApXG5jb25zdCBjYXJkUmVuZGVyID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICBpbml0aWFsQ2FyZHMsXG4gICAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4gICAgICAvL9GF0LLQsNGC0LDQtdC8INC80LXRgtC+0LQgXCJhZGRJdGVtXCIg0Lgg0LLRgdGC0LDQstC70Y/QtdC8INCyINC/0LDRgNCw0LzQtdGC0YAg0YTRg9C90LrRhtC40Y4g0LTQvtCx0LDQstC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LXQuiBjcmVhdGVDYXJkKGl0ZW0pXG4gICAgICBjYXJkUmVuZGVyLmFkZEl0ZW0oY3JlYXRlQ2FyZChpdGVtKSk7XG4gICAgfSxcbiAgICAvLyDQkCDQt9C00LXRgdGMINC00L7QsdCw0LLQu9GP0LXQvCDRgdC10LvQtdC60YLQvtGAXG4gIH0sXG4gIGVsZW1lbnRzQ2FyZFxuKTtcbi8v0LLRi9C30YvQstCw0LXQvCDQvNC10YLQvtC0IHJlbmRlcml0ZW1zKGMg0L/QsNGA0LDQvNC10YLRgNC+0Lwg0LzQsNGB0YHQuNCy0L7QvCDQutCw0YLQvtGH0LXQuilcbmNhcmRSZW5kZXIucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHRpdGxlLCBzdWJUaXRsZSk7XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBQb3B1cFdpdGhGb3JtICBVc2VySW5mbyBDYXJkICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8hISEg0KMg0JzQldCd0K8g0KPQltCVINCV0KHQotCsINCa0J7QndCh0KLQkNCd0KLQkCAgXCJwb3B1cEVkaXRQcm9maWxlXCIg0J/QntCt0KLQntCc0KMg0JTQldCb0JDQriBwb3B1cFByb2ZpbGVFZGl0XG5jb25zdCBwb3B1cFByb2ZpbGVFZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0ocG9wdXBFZGl0UHJvZmlsZSwgKGlucHV0KSA9PiB7XG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKHsgbmFtZTogaW5wdXQubmFtZSwgaW5mbzogaW5wdXQuc3VidGl0bGUgfSk7XG59KTtcblxucG9wdXBQcm9maWxlRWRpdC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5cbmJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaW5wdXRUaXRsZVByb2ZpbGUudmFsdWUgPSB1c2VySW5mby5nZXRVc2VySW5mbygpLm5hbWU7XG4gIGlucHV0U3VidGl0bGVQcm9maWxlLnZhbHVlID0gdXNlckluZm8uZ2V0VXNlckluZm8oKS5pbmZvO1xuICBwb3B1cFByb2ZpbGVFZGl0Lm9wZW4oKTtcbn0pO1xuXG5jb25zdCBwb3B1cEFkZENhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybShwb3B1cEFkZCwgKGlucHV0KSA9PiB7XG4gIGNvbnN0IGluZm9DYXJkID0gY3JlYXRlQ2FyZCh7XG4gICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgIGxpbms6IGlucHV0LnN1YnRpdGxlLFxuICB9KTtcbiAgY2FyZFJlbmRlci5hZGRJdGVtKGluZm9DYXJkKTtcbn0pO1xucG9wdXBBZGRDYXJkLl9nZXRJbnB1dFZhbHVlcygpO1xucG9wdXBBZGRDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIDIgUE9QVVBcbi8vINCS0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDLCDQtNC+0YHQu9C+0LLQvdC+INC00L7QsdCw0LLQu9GP0LXQvCDQuiDQutC70LDRgdGB0YMgcG9wdXBfYWRkICsg0LrQu9Cw0YHRgSBwb3B1cC1PcGVuXG5idXR0b25BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcG9wdXBBZGRDYXJkLm9wZW4oKTtcbn0pO1xuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiog0JLQkNCb0JjQlNCQ0KbQmNCvICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8v0J7QsdGP0LfQsNGC0LXQu9GM0L3QviDQvdGD0LbQvdC+INC/0YDQvtCx0YDQsNGB0YvQstCw0YLRjCAo0L/QsNGA0LDQvNC10YLRgNGLL9Cw0YDQs9GD0LzQtdC90YLRiyDQuNC3INCa0LvQsNGBY9CwL2luZGV4KVxuY29uc3QgdmFsaWRhdGlvbkNhcmQgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uQ29uZmlnLCBmb3JtQWRkKTtcbnZhbGlkYXRpb25DYXJkLmVuYWJsZVZhbGlkYXRpb24oKTtcbmNvbnN0IHZhbGlkYXRpb25Qcm9maWxlID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvbkNvbmZpZywgcG9wdXBFZGl0UHJvZmlsZSk7XG52YWxpZGF0aW9uUHJvZmlsZS5lbmFibGVWYWxpZGF0aW9uKCk7XG4iXSwibmFtZXMiOlsiQ2FyZCIsInRleHQiLCJsaW5rIiwiY29uZmlnIiwiaGFuZGxlQ2FyZENsaWNrIiwibmV3RWxlbWVudFRlbXBsYXRlIiwiX3RleHQiLCJfbGluayIsIl9lbGVtZW50VGV4dCIsImVsZW1lbnRUZXh0IiwiX2VsZW1lbnRJbWFnZVNlbGVjdG9yIiwiZWxlbWVudEltYWdlIiwiX2VsZW1lbnRUcmFzaFNlbGVjdG9yIiwiZWxlbWVudFRyYXNoIiwiX2VsZW1lbnRMaWtlU2VsZWN0b3IiLCJlbGVtZW50TGlrZSIsIl9lbGVtZW50TGlrZUFjdGl2ZSIsImVsZW1lbnRMaWtlQWN0aXZlIiwiX25ld0VsZW1lbnRJZFRlbXBsYXRlIiwibmV3RWxlbWVudElkVGVtcGxhdGUiLCJfaGFuZGxlQ2FyZENsaWNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9jYXJkIiwicmVtb3ZlIiwiX2VsZW1lbnRMaWtlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnRJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfYnV0dG9uVHJhc2giLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9saWtlUHVzaCIsIl9nZXRUZW1wbGF0ZSIsInRleHRDb250ZW50Iiwic3JjIiwiYWx0IiwiX2FkZEV2ZW50TGlzdGVuZXIiLCJGb3JtVmFsaWRhdG9yIiwidmFsaWRhdGlvbkNvbmZpZyIsImZvcm0iLCJfaXNGb3JtVmFsaWQiLCJfZm9ybUlucHV0cyIsImV2ZXJ5IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9wb3B1cFN1Ym1pdEJ1dHRvbiIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImlucHV0RWxlbWVudCIsIl9lbGVtZW50RXJyb3IiLCJpZCIsIl90ZXh0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImFkZCIsIl9wb3B1cElucHV0RXJyb3IiLCJpbnB1dCIsImNoZWNrVmFsaWRpdHkiLCJfc2hvd0lucHV0RXJyb3IiLCJfaGlkZUlucHV0RXJyb3IiLCJBcnJheSIsImZyb20iLCJfZm9ybSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfcG9wdXBJbnB1dCIsIl9idXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlIiwidmFsaWRhdGVCdXR0b24iLCJmb3JFYWNoIiwiZXZ0IiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl9wb3B1cEZvcm0iLCJwb3B1cEZvcm0iLCJfdmFsaWRhdGlvbkNvbmZpZyIsIl9wb3B1cEVsZW1lbnRFcnJvciIsInBvcHVwRWxlbWVudEVycm9yIiwicG9wdXBJbnB1dEVycm9yIiwicG9wdXBJbnB1dCIsImJ1dHRvbkZvcm1FZGl0UG9maWxlVGFibGUiLCJfdmFsaWRhdGVGb3JtSW5wdXRzIiwiUG9wdXAiLCJwb3B1cEVsZW1lbnQiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjbG9zZSIsIl9idXR0b25DbG9zZSIsImVsZW1lbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiUG9wdXBXaXRoRm9ybSIsImNhbGJhY2tsU3VibWl0Rm9ybSIsIl9jYWxiYWNrbFN1Ym1pdEZvcm0iLCJfaW5wdXRMaXN0IiwiX2Zvcm1WYWx1ZXMiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfcG9wdXBQaG90b0JpZyIsIl9wb3B1cFRpdGxlSW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiX3BvcHVwIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdHIiLCJpdGVtcyIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsIml0ZW0iLCJwcmVwZW5kIiwiVXNlckluZm8iLCJlbGVtZW50TmFtZSIsImVsZW1lbnRJbmZvIiwiX2VsZW1lbnROYW1lIiwiX2VsZW1lbnRJbmZvIiwiaW5mbyIsImluaXRpYWxDYXJkcyIsInBvcHVwIiwidGl0bGUiLCJzdWJUaXRsZSIsInBvcHVwRWRpdFByb2ZpbGUiLCJidXR0b25FZGl0Iiwic3ViVGl0bGVFZGl0IiwicG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlIiwidGl0bGVFZGl0IiwicG9wdXBTdWJtaXRCdXR0b25zRGlzYWJsZSIsImJ1dHRvbkFkZEJ1dHRvbiIsInBvcHVwQWRkIiwidGV4dFZhbHVlUG9wdXBUaXRsZSIsInRleHRWYWx1ZVBvcHVwU3VidGl0bGUiLCJlbGVtZW50c0NhcmQiLCJwb3B1cEJpZ09wZW5JbWFnZSIsImJ1dHRvblBvcHVwQmlnSW1hZ2VDbG9zZSIsInBvcHVwQ2xvc2UiLCJwb3B1cE9wZW5lZCIsInBvcHVwVGV4dENvbG9yRm9udEdyZXkiLCJwb3B1cFRpdGxlSW1hZ2UiLCJwb3B1cFBob3RvQmlnIiwiZm9ybUFkZCIsImlucHV0VGl0bGVQcm9maWxlIiwiaW5wdXRTdWJ0aXRsZVByb2ZpbGUiLCJwb3B1cFN1Ym1pdEJ1dHRvbnMiLCJwb3B1cHMiLCJwb3B1cEJ1dHRvbkNsb3NlRWRpdFByb2ZpbGUiLCJwb3B1cEZvcm1FZGl0UG9maWxlVGFibGVJbnZhbGlkIiwicG9wdXBFZGl0Q2xvc2VCdXR0b24iLCJwb3B1cFBob3RvIiwicG9wdXBJbWFnZSIsInNldEV2ZW50TGlzdGVuZXJzIiwib3BlbiIsImNyZWF0ZUNhcmQiLCJkYXRhIiwibmV3Q2FyZCIsImNhcmRSZW5kZXIiLCJhZGRJdGVtIiwicmVuZGVySXRlbXMiLCJ1c2VySW5mbyIsInBvcHVwUHJvZmlsZUVkaXQiLCJzZXRVc2VySW5mbyIsInN1YnRpdGxlIiwiZ2V0VXNlckluZm8iLCJwb3B1cEFkZENhcmQiLCJpbmZvQ2FyZCIsInZhbGlkYXRpb25DYXJkIiwiZW5hYmxlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25Qcm9maWxlIl0sInNvdXJjZVJvb3QiOiIifQ==