/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Card.js":
/*!*****************************!*\
  !*** ./src/scripts/Card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Card = /*#__PURE__*/function () {
  //убрал handleOpenPopup

  function Card(text, link, config, handleCardClick, newElementTemplate) {
    _classCallCheck(this, Card);
    this._text = text;
    this._link = link;
    this._config = config;
    this._elementText = config.elementText;
    this._elementImageSelector = config.elementImage;
    this._elementTrashSelector = config.elementTrash;
    this._elementLikeSelector = config.elementLike;
    this._elementLikeActive = config.elementLikeActive;
    // this._handleOpenPopup = handleOpenPopup;
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
      this._newTodoCard.remove();
      this._newTodoCard = null;
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

      //Здесь функция которую мы взяли передали из index.js (handleOpenPopup)
      // this._elementImage.addEventListener("click", () => {
      //   this._handleOpenPopup(this._text, this._link);
      // });
    }

    //Создаем карточки
  }, {
    key: "createCard",
    value: function createCard() {
      this._newTodoCard = this._getTemplate();
      this._newTodoCard.querySelector(this._elementText).textContent = this._text;

      //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
      this._elementImage = this._newTodoCard.querySelector(this._elementImageSelector);
      //Добавляем alt картинки из массива
      this._buttonTrash = this._newTodoCard.querySelector(this._elementTrashSelector);
      this._elementLike = this._newTodoCard.querySelector(this._elementLikeSelector);
      this._elementImage.src = this._link;
      this._elementImage.alt = this._text;

      //Вызываем слушателей
      this._addEventListener();
      return this._newTodoCard;
    }
  }]);
  return Card;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/scripts/FormValidator.js":
/*!**************************************!*\
  !*** ./src/scripts/FormValidator.js ***!
  \**************************************/
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
  //ВСЁ, ПОНЯЛ :)) - СПАСИБО!
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
          //  evt.preventDefault();
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

/***/ "./src/scripts/Popup.js":
/*!******************************!*\
  !*** ./src/scripts/Popup.js ***!
  \******************************/
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
  function Popup(selectrPopup) {
    _classCallCheck(this, Popup);
    this._selectrPopup = selectrPopup;
    /* !!! ВАЖНО Делаем привязку с помощью метода "bind" без него не будет
    передоваться в другой метод, там лишь будет "undefined" */
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // отвечают за открытие попапа
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._selectrPopup.classList.add("popup_opened");
      /*обязательно надо делать привязку с помощью метода "bind" в конструкторе
      Также можно просто здесь написать (evt) => this._handleEscClose(evt) */
      document.addEventListener("keydown", this._handleEscClose);
      console.log("Метод OPEN - WORK");
    }

    // отвечают закpытие попапа
  }, {
    key: "close",
    value: function close() {
      this._selectrPopup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose);
      console.log("Метод CLOSE - WORK");
    }

    //содержит логику закрытия попапа клавишей Esc.
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === "Escape") {
        // document.querySelectorAll(".popup").forEach((element) => {
        //   element.classList.remove("popup_opened");
        // });
        this.close();
        console.log("Метод _handleEscClose - WORK");
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
          console.log("Метод setEventListeners |КРЕСТИК| - WORK");
          _this.close();
        });
      });

      //закрытие на паранжу
      this._selectrPopup.addEventListener("click", function (evt) {
        if (evt.target === evt.currentTarget) {
          _this.close();
          console.log("Метод setEventListeners |ПАРАНЖА| - WORK");
        }
      });
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/scripts/PopupWithForm.js":
/*!**************************************!*\
  !*** ./src/scripts/PopupWithForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/Popup.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");
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
/* который наследует от Popup. Этот класс:
Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
*/



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(selectrPopup, calbacklSubmitForm) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, selectrPopup);
    _this._calbacklSubmitForm = calbacklSubmitForm;
    _this._popups = _index_js__WEBPACK_IMPORTED_MODULE_1__.popups;
    return _this;
  }

  //собирает данные всех полей формы.
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._inputs = '';
      this._input = document.querySelectorAll("input");
      this._input.forEach(function (input) {
        _this2._inputs = input;
      });
      console.log("Класс PopupWithForm - метод _getInputValues работает");
      return this._input;
    }

    //Перезаписывает родительский метод setEventListeners.
    //должен не только добавлять обработчик клика иконке закрытия,
    //но и добавлять обработчик сабмита формы
    //Как всегда, здесь в ПР8, без наставника ну никак не разобрать и понять, что нужно...
    //Сделали, но пока на 60% понимаю (не понятен колбек)
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      //Перезаписывает родительский метод setEventListeners.
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._popups.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this3._calbacklSubmitForm(_this3._getInputValues());
        _this3.close();
        console.log("Класс PopupWithForm - метод setEventListeners работает");
      });
    }

    //Перезаписывает родительский метод close, так
    //как при закрытии попапа форма должна ещё и сбрасываться
  }, {
    key: "close",
    value: function close() {
      this._popups.reset();
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
    //Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/PopupWithImage.js":
/*!***************************************!*\
  !*** ./src/scripts/PopupWithImage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/Popup.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");
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

  PS я очередной раз охреневаю над описанием ТЗ Яндекс практикум, такое ощущение,
  что в налоговой кто пишет требования и задания в ЯП это одни и те же люди...
   */
//Импортозамещаем )) Popup из нашей же папки

//пробрасываем наши константы


//Расширяем что б добавить новые значения
var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(selectrPopup) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, selectrPopup);
    _this._popupPhotoBig = _index_js__WEBPACK_IMPORTED_MODULE_1__.popupPhotoBig;
    _this._popupTitleImage = _index_js__WEBPACK_IMPORTED_MODULE_1__.popupTitleImage;
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
      console.log("Класс PopupWithImage - метод OPEN работает");
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/Section.js":
/*!********************************!*\
  !*** ./src/scripts/Section.js ***!
  \********************************/
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
    // this._items = items;
    this._renderer = renderer;
    this._container = containerSelectr;
  }

  // отвечает за отрисовку всех элементов. 
  // Отрисовка каждого отдельного элемента должна 
  // осуществляться функцией renderer
  // по факту хватанули из индекс.js функцию  и запихнули сюда
  _createClass(Section, [{
    key: "renderer",
    value: function renderer(items) {
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

/***/ "./src/scripts/UserInfo.js":
/*!*********************************!*\
  !*** ./src/scripts/UserInfo.js ***!
  \*********************************/
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

  // который возвращает объект с данными пользователя. 
  // Этот метод пригодится когда данные пользователя 
  // нужно будет подставить в форму при открытии.
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      console.log("Класс UserInfo - метод getUserInfo работает");
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
      console.log("Класс UserInfo - метод setUserInfo работает");
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//МАССИВЫ

//Массив из задания титлы картинки и ссылки на них
var initialCards = [{
  name: "Карачаевск",
  link: "./images/kirill-pershin-1088404-unsplash.jpg"
}, {
  name: "Домбай",
  link: "./images/kirill-pershin-1556355-unsplash.jpg"
}, {
  name: "Гора Эльбрус",
  link: "./images/kirill-pershin-1404681-unsplash.jpg"
}, {
  name: "Домбай",
  link: "./images/kirill-pershin-1556355-unsplash.jpg"
}, {
  name: "Гора Эльбрус",
  link: "./images/kirill-pershin-1404681-unsplash.jpg"
}, {
  name: "В.В. Путин",
  link: "images/putin.png"
}, {
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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popupPhotoBig": () => (/* binding */ popupPhotoBig),
/* harmony export */   "popupTitleImage": () => (/* binding */ popupTitleImage),
/* harmony export */   "popups": () => (/* binding */ popups)
/* harmony export */ });
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _UserInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInfo.js */ "./src/scripts/UserInfo.js");
/* harmony import */ var _PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupWithForm.js */ "./src/scripts/PopupWithForm.js");
/* harmony import */ var _PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopupWithImage.js */ "./src/scripts/PopupWithImage.js");
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/Popup.js");
/* harmony import */ var _Section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Section.js */ "./src/scripts/Section.js");
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards.js */ "./src/scripts/cards.js");
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Card.js */ "./src/scripts/Card.js");
/* harmony import */ var _FormValidator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormValidator.js */ "./src/scripts/FormValidator.js");









//ПЕРЕМЕННЫЕ
var validationConfig = {
  popup: ".popup",
  popupForm: ".popup__form",
  popupInput: ".popup__input",
  buttonFormEditPofileTable: ".popup__submit-button",
  popupElementError: "popup__element-error",
  popupInputError: "popup__input_error"
};

// Делаем для удобства объект
var config = {
  popup: ".popup",
  title: ".profile__title",
  subTitle: ".profile__subtitle",
  popupEditProfile: "#popup_edit_profile",
  buttonEdit: ".profile__button-edit",
  subTitleEdit: '.popup__input[name="subtitle"]',
  //начало попапа
  popupFormEditPofileTable: '.popup__form[name="popupFormEditPofileTable"]',
  titleEdit: '.popup__input[name="name"]',
  popupSubmitButtonsDisable: ".popup__submit-button_disable",
  //конец попапа
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
  formAdd: "#form_add"
};
//validationConfig

var popupSubmitButtons = document.querySelectorAll(validationConfig.buttonFormEditPofileTable);
//config
var popups = document.querySelectorAll(config.popup);
var title = document.querySelector(config.title);
var subTitle = document.querySelector(config.subTitle);
var popupEditProfile = document.querySelector(config.popupEditProfile);
var popupButtonCloseEditProfile = popupEditProfile.querySelector(config.popupClose);
var buttonEdit = document.querySelector(config.buttonEdit);
var titleEdit = document.querySelector(config.titleEdit);
var subTitleEdit = document.querySelector(config.subTitleEdit);
var popupFormEditPofileTable = document.querySelector(config.popupFormEditPofileTable);
var popupFormEditPofileTableInvalid = config.popupFormEditPofileTableInvalid;
var buttonAddButton = document.querySelector(config.buttonAddButton);

//Форма добавления ищем по айди и скидываем в константу
var popupAdd = document.querySelector(config.popupAdd);
var formAdd = document.querySelector(config.formAdd);
var popupEditCloseButton = popupAdd.querySelector(config.popupClose);
var textValuePopupTitle = document.querySelector(config.textValuePopupTitle);
var textValuePopupSubtitle = document.querySelector(config.textValuePopupSubtitle);
var elementsCard = document.querySelector(config.elementsCard);
//ДЛЯ POPUP c КАРТИНКОЙ
//Найдем наш попап с картинкой и закинем его в константу PopupImg
var popupBigOpenImage = document.querySelector(config.popupBigOpenImage);
//Найдем в этом попапе нашу кнопку "закрытие" с классом  popup__close
//и закинем это все в  closePopup
var buttonPopupBigImageClose = document.querySelector(config.buttonPopupBigImageClose);
var popupPhoto = document.querySelector(config.popupBigOpenImage);
var popupPhotoBig = popupPhoto.querySelector(config.popupPhotoBig);
var newElementTemplate = document.querySelector(config.newElementIdTemplate).content;
//класс где находится title большой картинки (там пока пусто)
var popupTitleImage = document.querySelector(config.popupTitleImage);
//массив из всех попапов

//  *****  ФУНКЦИИ  *****

//ЗАКРЫТИЕ ПОПАПА С ПОМОЩЬЮ ESC
// function closeByEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_opened");
//     closePopup(openedPopup);
//   }
// }

//Здесь делаем функцию для отправки ее в класс Card
//Сам уже забыл, как устроена - записывать надо было
// function handleOpenPopup(name, link) {
//   popupPhotoBig.src = link;
//   popupPhotoBig.alt = name;
//   popupTitleImage.textContent = name;
//   openPopup(popupBigOpenImage);

// }
// function openPopup(modalWindow){
//   const openPop = new Popup(modalWindow);
//   openPop.open(modalWindow);
// }

//ТЕСТИРУЕМ PopupWithForm
var test = new _PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
console.log(test._getInputValues());
console.log(popups);

//ТЕСТИРУЕМ Userinfo
var test2 = new _UserInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, subTitle);
console.log(test2.getUserInfo());
function handleCardClick(name, link) {
  var image = new _PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__["default"](popupBigOpenImage);
  image.open(name, link);
}
//Закрытие кнопки для добавления
// function disabledButton(){
// popupSubmitButtons.forEach((element) => {
//   element.setAttribute("disabled", "disabled");
// });
// }; 
//Подключаем Class 
//Добавление карточек

//Делаем функцию что б добавлялись карточки
function addCard(data) {
  var newCard = new _Card_js__WEBPACK_IMPORTED_MODULE_7__["default"](data.name, data.link, config, handleCardClick, newElementTemplate);
  return newCard.createCard();
}

//берет создание карточек "cardCreate" и с помощью цикла вставляет на страницу
// function renderInitialCards() {
//   initialCards.forEach((item) => {
//    // createCard(item);
//     elementsCard.prepend(addCard(item));
//   });
// }
// renderInitialCards();

//***ДОБАВЛЕНИЕ КАРТОЧЕК*** - КАК БЫ САМОМУ НЕ ЗАПУТАТЬСЯ :p

//Делаем константу и из класса, прокидываем ему ({массив с карточками, функцию добавление карточек},
//найденный селектор) 
var cardRender = new _Section_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  initialCards: _cards_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  renderer: function renderer(item) {
    //хватаем метод "addItem" и вставляем в параметр функцию добавление карточек addCard(item)
    cardRender.addItem(addCard(item));
  }
  // А здесь добавляем селектор
}, elementsCard);
//вызываем метод renderer(c параметром массивом каточек)
cardRender.renderer(_cards_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

//КОНЕЦ Добавление карточек из массива :)

// !!! Добавление данных в форму новых карточек
formAdd.addEventListener("submit", function (event) {
  event.preventDefault();

  //что б не перезагружалась страница

  var data = {
    name: textValuePopupTitle.value,
    link: textValuePopupSubtitle.value,
    alt: textValuePopupTitle.value
  };
  formAdd.reset();
  validationCard.validateButton();
  elementsCard.prepend(addCard(data));
  closePopup(popupAdd);
  //closePopup(popupAdd);
});

//Закончили добавлять карты

//Открыть/закрыть все попапы (кроме большой картинки) и нажатие на крестик

function openPopup(modalWindow) {
  var openPop = new _Popup_js__WEBPACK_IMPORTED_MODULE_4__["default"](modalWindow);
  openPop.open(modalWindow);
}
function closePopup(modalWindow) {
  var closePop = new _Popup_js__WEBPACK_IMPORTED_MODULE_4__["default"](modalWindow);
  closePop.close(modalWindow);
}
function eventListener(modalWindow) {
  var listeners = new _Popup_js__WEBPACK_IMPORTED_MODULE_4__["default"](modalWindow);
  listeners.setEventListeners(modalWindow);
  // console.log(modalWindow);
}

//слушатели закрытия
// профиль
eventListener(popupEditProfile);
// добавление картинки
eventListener(popupAdd);
// большая картинка 
eventListener(popupBigOpenImage);
// function openPopup(modalWindow) {
//   modalWindow.classList.add(config.popupOpened);
//   document.addEventListener("keydown", closeByEsc);
// }

// ОТКРЫВАЕМ ПОПАП
// popups.forEach(element => {

// });
// const openPopup = new Popup(popups);
// ЗАКРЫВАЕМ ПОПАП
//const closePopup = new Popup(popups[1]);
// function closePopup(modalWindow) {
//   modalWindow.classList.remove(config.popupOpened);
//   document.removeEventListener("keydown", closeByEsc);
// }

//Открыть/закрыть попап большой картинки

// buttonPopupBigImageClose.addEventListener("click", () => {
//  // closePopup.close(popupBigOpenImage);
//  closePopup(popupBigOpenImage);
// });

//  *****  ОБРАБОТЧИКИ *****

// Редактирование Титла
//Включаем кнопку, дословно добавляем к классу popup + класс popup-Open
//ЭТО НЕБОЛЬШОЕ ОТКЛОНЕНИЕ КОТОРОЕ ВСЕМ ПОНРАВИЛОСЬ И МЫ ЕГО ВЕЗДЕ ОСТАВИЛИ!!!!
buttonEdit.addEventListener("click", function () {
  openPopup(popupEditProfile);
  // const openPopup = new Popup(popupEditProfile);
  // openPopup.open(popupEditProfile);
  //openPopup(popupEditProfile);
  titleEdit.value = title.textContent;
  subTitleEdit.value = subTitle.textContent;
});

//Закрываем попап редактирования Титла без сохранения с помощью функции
// popupButtonCloseEditProfile.addEventListener("click", () => {
//   closePopup(popupEditProfile);
//   //closePopup(popupEditProfile);
//  // closePopup.close(popupEditProfile);
// });

//Форма редактирования и отправления Профиля TITLE / SUBTITLE
//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupFormEditPofileTable.addEventListener("submit", function (event) {
  event.preventDefault();
  title.textContent = titleEdit.value;
  subTitle.textContent = subTitleEdit.value;
  closePopup(popupEditProfile);
  //eventListener(popupEditProfile); 
});

// 2 POPUP
// Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", function () {
  openPopup(popupAdd);
  // openPopup(popupAdd);
});

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
//popupEditCloseButton.addEventListener("click", () => {
//   closePopup(popupAdd);
//   //closePopup(popupAdd);
// });

//eventListener(popupAdd); 
//ЗАКРЫТИЯ ПОПАПА ДОПОЛНИТЕЛЬНЫЕ
//закрытие попапа нажатие на паранжу
// const popupCloseOutPopup = (popupElement) => {
//   popupElement.addEventListener("click", (evt) => {
//     if (evt.target === evt.currentTarget) {
//       closePopup(popupElement);
//      // closePopup(popupElement);
//     }
//   });
// }

// //ЗАКРЫТИЕ ПОПАПА НАЖАТИЕМ НА ПАРАНЖУ
// popups.forEach((popupElement) => {
//   //закрытие попапа нажатие на паранжу
//   popupCloseOutPopup(popupElement);
// });

//***** ВАЛИДАЦИЯ *****
//Обязательно нужно пробрасывать (параметры/аргументы из Класcа/index)
var validationCard = new _FormValidator_js__WEBPACK_IMPORTED_MODULE_8__["default"](validationConfig, formAdd);
validationCard.enableValidation();
var validationProfile = new _FormValidator_js__WEBPACK_IMPORTED_MODULE_8__["default"](validationConfig, popupEditProfile);
validationProfile.enableValidation();
//КОНЕЦ ВАЛИДАЦИИ

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLGdCQUFnQixFQUFFd0csT0FBTyxDQUFDO0FBQ2xFbUIsY0FBYyxDQUFDUyxnQkFBZ0IsRUFBRTtBQUNsQyxJQUFNQyxpQkFBaUIsR0FBRyxJQUFJdEkseURBQWEsQ0FBQ0MsZ0JBQWdCLEVBQUV3RixnQkFBZ0IsQ0FBQztBQUMvRTZDLGlCQUFpQixDQUFDRCxnQkFBZ0IsRUFBRTtBQUN0Qzs7Ozs7Ozs7Ozs7QUM3VUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL3NjcmlwdHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NhcmRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhcmQge1xuICBcbiAgLy/Rg9Cx0YDQsNC7IGhhbmRsZU9wZW5Qb3B1cFxuXG4gIGNvbnN0cnVjdG9yKHRleHQsIGxpbmssIGNvbmZpZywgaGFuZGxlQ2FyZENsaWNrLCBuZXdFbGVtZW50VGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICB0aGlzLl9saW5rID0gbGluaztcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fZWxlbWVudFRleHQgPSBjb25maWcuZWxlbWVudFRleHQ7XG4gICAgdGhpcy5fZWxlbWVudEltYWdlU2VsZWN0b3IgPSBjb25maWcuZWxlbWVudEltYWdlO1xuICAgIHRoaXMuX2VsZW1lbnRUcmFzaFNlbGVjdG9yID0gY29uZmlnLmVsZW1lbnRUcmFzaDtcbiAgICB0aGlzLl9lbGVtZW50TGlrZVNlbGVjdG9yID0gY29uZmlnLmVsZW1lbnRMaWtlO1xuICAgIHRoaXMuX2VsZW1lbnRMaWtlQWN0aXZlID0gY29uZmlnLmVsZW1lbnRMaWtlQWN0aXZlO1xuICAgLy8gdGhpcy5faGFuZGxlT3BlblBvcHVwID0gaGFuZGxlT3BlblBvcHVwO1xuICAgIHRoaXMuX25ld0VsZW1lbnRJZFRlbXBsYXRlID0gY29uZmlnLm5ld0VsZW1lbnRJZFRlbXBsYXRlO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuICBcblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgLy/QlNC+0YHRgtCw0LXQvCB0ZW1wbGF0ZSDQuCDQutC70L7QvdC40YDRg9C10LwgKGNvbmZpZy5uZXdFbGVtZW50SWRUZW1wbGF0ZSDQvdC1INCx0YPQtNC10YIg0YDQsNCx0L7RgtCw0YLRjClcbiAgICByZXR1cm4gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX25ld0VsZW1lbnRJZFRlbXBsYXRlKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50XCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICB9XG5cbiAgLy/QvNC10YLQvtC0INGD0LTQsNC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LrQuFxuICBfaGFuZGxlRGVsZXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9uZXdUb2RvQ2FyZC5yZW1vdmUoKTtcbiAgICB0aGlzLl9uZXdUb2RvQ2FyZCA9IG51bGw7XG4gIH1cbiAgXG4gIC8v0LzQtdGC0L7QtCDQu9Cw0LnQuiDQutCw0YDRgtC+0YfQutC4XG4gIF9saWtlUHVzaCgpIHtcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuX2VsZW1lbnRMaWtlQWN0aXZlKTtcbiAgfVxuXG4gIC8v0JTQvtCx0LDQstC70Y/QtdC8INGB0LvRg9GI0LDRgtC10LvQuFxuICBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAvL9C/0L4g0YTQsNC60YLRgyDQt9Cw0LzQtdC90LjQu9C4IGhhbmRsZU9wZW5Qb3B1cCAtINC90LUg0L/QvtC90Y/QuyDQt9Cw0YfQtdC8PyDQmtCw0LrQsNGPINGA0LDQt9C90LjRhtCwP1xuICAgIC8v0JrQsNC60L7QtSDQotCXIC0g0KLQsNC60LDRjyDQuCDRgNCw0LHQvtGC0LAg0KXQl1xuICAgIHRoaXMuX2VsZW1lbnRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX3RleHQsIHRoaXMuX2xpbmspO1xuICAgIH0pXG5cbiAgICAvL9Cj0LTQsNC70Y/QtdC8INC60LDRgNGC0L7Rh9C60LhcbiAgICB0aGlzLl9idXR0b25UcmFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCgpO1xuICAgIH0pO1xuXG4gICAgLy/Qm9Cw0LnQutCw0LXQvCDRgdC10YDQtNC10YfQutC4XG4gICAgdGhpcy5fZWxlbWVudExpa2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2xpa2VQdXNoKClcbiAgICB9KTtcblxuICAgIC8v0JfQtNC10YHRjCDRhNGD0L3QutGG0LjRjyDQutC+0YLQvtGA0YPRjiDQvNGLINCy0LfRj9C70Lgg0L/QtdGA0LXQtNCw0LvQuCDQuNC3IGluZGV4LmpzIChoYW5kbGVPcGVuUG9wdXApXG4gICAgLy8gdGhpcy5fZWxlbWVudEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICB0aGlzLl9oYW5kbGVPcGVuUG9wdXAodGhpcy5fdGV4dCwgdGhpcy5fbGluayk7XG4gICAgLy8gfSk7XG4gIH1cblxuICAvL9Ch0L7Qt9C00LDQtdC8INC60LDRgNGC0L7Rh9C60LhcbiAgY3JlYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9uZXdUb2RvQ2FyZCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fbmV3VG9kb0NhcmQucXVlcnlTZWxlY3Rvcih0aGlzLl9lbGVtZW50VGV4dCkudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0O1xuXG4gICAgLy/QotCw0LrQttC1INC00LXQu9Cw0LXQvCDQt9C00LXRgdGMLCDRg9C60LDQt9GL0LLQsNC10LwsINGH0YLQviDQvdGD0LbQvdC+INC30LDQutC40L3Rg9GC0Ywg0LIgc3JjINC4INGC0YPQtNCwINC60LjQtNCw0LXQvCDRgdGB0YvQu9C60YNcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2UgPSB0aGlzLl9uZXdUb2RvQ2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fZWxlbWVudEltYWdlU2VsZWN0b3JcbiAgICApO1xuICAgIC8v0JTQvtCx0LDQstC70Y/QtdC8IGFsdCDQutCw0YDRgtC40L3QutC4INC40Lcg0LzQsNGB0YHQuNCy0LBcbiAgICB0aGlzLl9idXR0b25UcmFzaCA9IHRoaXMuX25ld1RvZG9DYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9lbGVtZW50VHJhc2hTZWxlY3RvclxuICAgICk7XG4gICAgdGhpcy5fZWxlbWVudExpa2UgPSB0aGlzLl9uZXdUb2RvQ2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fZWxlbWVudExpa2VTZWxlY3RvclxuICAgICk7XG4gICAgdGhpcy5fZWxlbWVudEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5fZWxlbWVudEltYWdlLmFsdCA9IHRoaXMuX3RleHQ7XG5cbiAgICAvL9CS0YvQt9GL0LLQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9C10LlcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XG4gICAgcmV0dXJuIHRoaXMuX25ld1RvZG9DYXJkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvL9Ck0KPQndCa0KbQmNCYINCS0JDQm9CY0JTQndCe0KHQotCYXG5jbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgLy/QntCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC90YPQttC90L4g0L/RgNC+0LHRgNCw0YHRi9Cy0LDRgtGMICjQv9Cw0YDQsNC80LXRgtGA0Ysv0LDRgNCz0YPQvNC10L3RgtGLINC40Lcg0JrQu9Cw0YHQsC9pbmRleClcbi8v0JLQodCBLCDQn9Ce0J3Qr9CbIDopKSAtINCh0J/QkNCh0JjQkdCeIVxuICBjb25zdHJ1Y3Rvcih2YWxpZGF0aW9uQ29uZmlnLCBmb3JtKSB7XG4gICAgdGhpcy5fcG9wdXBGb3JtID0gdmFsaWRhdGlvbkNvbmZpZy5wb3B1cEZvcm07XG4gICAgdGhpcy5fdmFsaWRhdGlvbkNvbmZpZyA9IHZhbGlkYXRpb25Db25maWc7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50RXJyb3IgPSB2YWxpZGF0aW9uQ29uZmlnLnBvcHVwRWxlbWVudEVycm9yO1xuICAgIHRoaXMuX3BvcHVwSW5wdXRFcnJvciA9IHZhbGlkYXRpb25Db25maWcucG9wdXBJbnB1dEVycm9yO1xuICAgIHRoaXMuX3BvcHVwSW5wdXQgPSB2YWxpZGF0aW9uQ29uZmlnLnBvcHVwSW5wdXQ7XG4gICAgdGhpcy5fYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZSA9XG4gICAgICB2YWxpZGF0aW9uQ29uZmlnLmJ1dHRvbkZvcm1FZGl0UG9maWxlVGFibGU7XG4gICAgdGhpcy5fZm9ybSA9IGZvcm07XG4gIH1cblxuICB2YWxpZGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAvL9C/0YDQvtCx0LXQs9Cw0LXQvNGB0Y8g0L/QviDQuNC90L/Rg9GC0YMg0YTQvtGA0LzRiyBcImZvcm1JbnB1dHNcIiDQsdC10YDQtdC8INCyINC90LjRhSB7IHZhbGlkaXR5IH0g0Lgg0L/RgNC+0LLQtdGA0Y/QtdC8INC90LAgIHZhbGlkaXR5LnZhbGlkINGC0YDRgyDQuNC70Lgg0YTQvtC70YFcbiAgICB0aGlzLl9pc0Zvcm1WYWxpZCA9IHRoaXMuX2Zvcm1JbnB1dHMuZXZlcnkoXG4gICAgICAoeyB2YWxpZGl0eSB9KSA9PiB2YWxpZGl0eS52YWxpZFxuICAgICk7XG4gICAgLy/QldGB0LvQuCDRhNC+0YDQvNCwINCy0LDQu9C40LTQvdCw0Y8g0LLQutC70Y7Rh9Cw0LXQvCDQutC90L7Qv9C60YNcbiAgICBpZiAodGhpcy5faXNGb3JtVmFsaWQpIHtcbiAgICAgIHRoaXMuX3BvcHVwU3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgLy/QldGB0LvQuCDRhNC+0YDQvNCwINC90LUg0LLQsNC70LjQtNC90LDRjyDQvtGC0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BvcHVwU3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICB9O1xuXG4gIF9zaG93SW5wdXRFcnJvciA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICB0aGlzLl9lbGVtZW50RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gICAgdGhpcy5fdGV4dEVycm9yID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3BvcHVwSW5wdXRFcnJvcik7XG4gICAgdGhpcy5fZWxlbWVudEVycm9yLnRleHRDb250ZW50ID0gdGhpcy5fdGV4dEVycm9yO1xuICB9O1xuXG4gIF9oaWRlSW5wdXRFcnJvciA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICB0aGlzLl9lbGVtZW50RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG5cbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9wb3B1cElucHV0RXJyb3IpO1xuICAgIHRoaXMuX2VsZW1lbnRFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChpbnB1dCkgPT4ge1xuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0KTtcbiAgICB9XG4gIH07XG4gIFxuICAvL9Ce0JHQoNCQ0JHQntCi0KfQmNCa0Jgg0JLQkNCb0JjQlNCd0J7QodCi0JhcbiAgX3ZhbGlkYXRlRm9ybUlucHV0cyA9ICgpID0+IHtcbiAgICAvL9GB0L7Qt9C00LDQtdC8INC80LDRgdGB0LjQsiDQuNC3INC40L3Qv9GD0YLQvtCyXG4gICAgdGhpcy5fZm9ybUlucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fcG9wdXBJbnB1dClcbiAgICApO1xuICAgIC8v0L7Qv9GA0LXQtNC10LvRj9C10Lwg0LrQvdC+0L/QutGDIFwi0YHQvtGF0YDQsNC90LjRgtGML9C+0YLQv9GA0LDQstC40YLRjFwiINCyINC/0YDQvtGE0LjQu9C1XG4gICAgdGhpcy5fcG9wdXBTdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9idXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlXG4gICAgKTtcbiAgICB0aGlzLnZhbGlkYXRlQnV0dG9uKCk7XG4gIFxuICAgIHRoaXMuX2Zvcm1JbnB1dHMuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAvL9Cy0LXRiNCw0LXQvCDRgdC70YPRiNCw0YLQtdC70Ywg0L3QsCDQuNC90L/Rg9GC0YsgKNGN0LvQtdC80LXQvdGC0Ysg0LzQsNGB0YHQuNCy0LAgL9C40L3Qv9GD0YLRiy8gXCJ0aGlzLl9mb3JtSW5wdXRzXCIpXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldnQpID0+IHtcbiAgICAgICAgLy8gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl92YWxpZGF0ZUZvcm1JbnB1dHMoKTsgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcbiIsIi8qINC60LvQsNGB0YEgUG9wdXAsINC60L7RgtC+0YDRi9C5INC+0YLQstC10YfQsNC10YIg0LfQsCDQvtGC0LrRgNGL0YLQuNC1INC4INC30LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwXG7Qn9GA0LjQvdC40LzQsNC10YIg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgCDQtdC00LjQvdGB0YLQstC10L3QvdGL0Lkg0L/QsNGA0LDQvNC10YLRgCDigJQg0YHQtdC70LXQutGC0L7RgCDQv9C+0L/QsNC/0LAgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0clBvcHVwKSB7XG4gICAgdGhpcy5fc2VsZWN0clBvcHVwID0gc2VsZWN0clBvcHVwO1xuICAgIC8qICEhISDQktCQ0JbQndCeINCU0LXQu9Cw0LXQvCDQv9GA0LjQstGP0LfQutGDINGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQsCBcImJpbmRcIiDQsdC10Lcg0L3QtdCz0L4g0L3QtSDQsdGD0LTQtdGCXG4gICAg0L/QtdGA0LXQtNC+0LLQsNGC0YzRgdGPINCyINC00YDRg9Cz0L7QuSDQvNC10YLQvtC0LCDRgtCw0Lwg0LvQuNGI0Ywg0LHRg9C00LXRgiBcInVuZGVmaW5lZFwiICovXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8g0L7RgtCy0LXRh9Cw0Y7RgiDQt9CwINC+0YLQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fc2VsZWN0clBvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XG4gICAgLyrQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC90LDQtNC+INC00LXQu9Cw0YLRjCDQv9GA0LjQstGP0LfQutGDINGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQsCBcImJpbmRcIiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LVcbiAgICDQotCw0LrQttC1INC80L7QttC90L4g0L/RgNC+0YHRgtC+INC30LTQtdGB0Ywg0L3QsNC/0LjRgdCw0YLRjCAoZXZ0KSA9PiB0aGlzLl9oYW5kbGVFc2NDbG9zZShldnQpICovXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICAgIGNvbnNvbGUubG9nKFwi0JzQtdGC0L7QtCBPUEVOIC0gV09SS1wiKTtcbiAgfVxuXG4gIC8vINC+0YLQstC10YfQsNGO0YIg0LfQsNC6cNGL0YLQuNC1INC/0L7Qv9Cw0L/QsFxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9zZWxlY3RyUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gICAgY29uc29sZS5sb2coXCLQnNC10YLQvtC0IENMT1NFIC0gV09SS1wiKTtcbiAgfVxuXG4gIC8v0YHQvtC00LXRgNC20LjRgiDQu9C+0LPQuNC60YMg0LfQsNC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LAg0LrQu9Cw0LLQuNGI0LXQuSBFc2MuXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cFwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAvLyAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcbiAgICAgIC8vIH0pO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgY29uc29sZS5sb2coXCLQnNC10YLQvtC0IF9oYW5kbGVFc2NDbG9zZSAtIFdPUktcIik7XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG5cbiAgLyog0LTQvtCx0LDQstC70Y/QtdGCINGB0LvRg9GI0LDRgtC10LvRjCDQutC70LjQutCwINC40LrQvtC90LrQtSDQt9Cw0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsC5cbiAgINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgtCw0LrQttC1INC30LDQutGA0YvQstCw0LXRgtGB0Y8g0L/RgNC4INC60LvQuNC60LUg0L3QsCDQt9Cw0YLQtdC80L3RkdC90L3Rg9GOXG4gICDQvtCx0LvQsNGB0YLRjCDQstC+0LrRgNGD0LMg0YTQvtGA0LzRiyAqL1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL9C30LDQutGA0YvRgtGMINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60YDQtdGB0YLQuNC6XG4gICAgdGhpcy5fYnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19jbG9zZS1pY29uXCIpO1xuICAgIHRoaXMuX2J1dHRvbkNsb3NlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCLQnNC10YLQvtC0IHNldEV2ZW50TGlzdGVuZXJzIHzQmtCg0JXQodCi0JjQmnwgLSBXT1JLXCIpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8v0LfQsNC60YDRi9GC0LjQtSDQvdCwINC/0LDRgNCw0L3QttGDXG4gICAgdGhpcy5fc2VsZWN0clBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gZXZ0LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcItCc0LXRgtC+0LQgc2V0RXZlbnRMaXN0ZW5lcnMgfNCf0JDQoNCQ0J3QltCQfCAtIFdPUktcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qINC60L7RgtC+0YDRi9C5INC90LDRgdC70LXQtNGD0LXRgiDQvtGCIFBvcHVwLiDQrdGC0L7RgiDQutC70LDRgdGBOlxu0JrRgNC+0LzQtSDRgdC10LvQtdC60YLQvtGA0LAg0L/QvtC/0LDQv9CwINC/0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC60L7Qu9Cx0Y3QuiDRgdCw0LHQvNC40YLQsCDRhNC+0YDQvNGLLlxuKi9cblxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5pbXBvcnQgeyBwb3B1cHMgfSBmcm9tICcuL2luZGV4LmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdHJQb3B1cCwgY2FsYmFja2xTdWJtaXRGb3JtKSB7XG4gICAgc3VwZXIoc2VsZWN0clBvcHVwKTtcbiAgICB0aGlzLl9jYWxiYWNrbFN1Ym1pdEZvcm0gPSBjYWxiYWNrbFN1Ym1pdEZvcm07XG4gICAgdGhpcy5fcG9wdXBzID0gcG9wdXBzO1xuICB9XG5cbiAgLy/RgdC+0LHQuNGA0LDQtdGCINC00LDQvdC90YvQtSDQstGB0LXRhSDQv9C+0LvQtdC5INGE0L7RgNC80YsuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICB0aGlzLl9pbnB1dHMgPSAnJztcbiAgICB0aGlzLl9pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICB0aGlzLl9pbnB1dC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5faW5wdXRzID0gaW5wdXQ7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCLQmtC70LDRgdGBIFBvcHVwV2l0aEZvcm0gLSDQvNC10YLQvtC0IF9nZXRJbnB1dFZhbHVlcyDRgNCw0LHQvtGC0LDQtdGCXCIgKVxuICAgIHJldHVybiB0aGlzLl9pbnB1dDtcbiAgfVxuXG4gIC8v0J/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0LXRgiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LzQtdGC0L7QtCBzZXRFdmVudExpc3RlbmVycy5cbiAgLy/QtNC+0LvQttC10L0g0L3QtSDRgtC+0LvRjNC60L4g0LTQvtCx0LDQstC70Y/RgtGMINC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0LjQutC+0L3QutC1INC30LDQutGA0YvRgtC40Y8sXG4gIC8v0L3QviDQuCDQtNC+0LHQsNCy0LvRj9GC0Ywg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQsNCx0LzQuNGC0LAg0YTQvtGA0LzRi1xuICAvL9Ca0LDQuiDQstGB0LXQs9C00LAsINC30LTQtdGB0Ywg0LIg0J/QoDgsINCx0LXQtyDQvdCw0YHRgtCw0LLQvdC40LrQsCDQvdGDINC90LjQutCw0Log0L3QtSDRgNCw0LfQvtCx0YDQsNGC0Ywg0Lgg0L/QvtC90Y/RgtGMLCDRh9GC0L4g0L3Rg9C20L3Qvi4uLlxuICAvL9Ch0LTQtdC70LDQu9C4LCDQvdC+INC/0L7QutCwINC90LAgNjAlINC/0L7QvdC40LzQsNGOICjQvdC1INC/0L7QvdGP0YLQtdC9INC60L7Qu9Cx0LXQuilcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgIC8v0J/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0LXRgiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LzQtdGC0L7QtCBzZXRFdmVudExpc3RlbmVycy5cbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3BvcHVwcy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2NhbGJhY2tsU3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwi0JrQu9Cw0YHRgSBQb3B1cFdpdGhGb3JtIC0g0LzQtdGC0L7QtCBzZXRFdmVudExpc3RlbmVycyDRgNCw0LHQvtGC0LDQtdGCXCIgKVxuICAgIH0pXG4gIH1cblxuXG4gIC8v0J/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0LXRgiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LzQtdGC0L7QtCBjbG9zZSwg0YLQsNC6XG4gIC8v0LrQsNC6INC/0YDQuCDQt9Cw0LrRgNGL0YLQuNC4INC/0L7Qv9Cw0L/QsCDRhNC+0YDQvNCwINC00L7Qu9C20L3QsCDQtdGJ0ZEg0Lgg0YHQsdGA0LDRgdGL0LLQsNGC0YzRgdGPXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwcy5yZXNldCgpO1xuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cbiAgLy/QlNC70Y8g0LrQsNC20LTQvtCz0L4g0L/QvtC/0LDQv9CwINGB0L7Qt9C00LDQstCw0LnRgtC1INGB0LLQvtC5INGN0LrQt9C10LzQv9C70Y/RgCDQutC70LDRgdGB0LAgUG9wdXBXaXRoRm9ybS5cbn1cbiIsIi8qINCa0LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L3QsNGB0LvQtdC00YPQtdGCINC+0YIgUG9wdXAuINCt0YLQvtGCINC60LvQsNGB0YEg0LTQvtCx0LDQstC70Y/QtdGCINC90L7QstGL0LUg0LTQsNC90L3Ri9C1INCyXG4g0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC80LXRgtC+0LQgb3Blbi4g0JIg0LzQtdGC0L7QtNC1IG9wZW4g0LrQu9Cw0YHRgdCwIFBvcHVwV2l0aEltYWdlXG4gINC90YPQttC90L4g0LLRgdGC0LDQstC70Y/RgtGMIDMg0LLQtdGJ0LhcblxuICAxKSDQodGB0YvQu9C60YMg0L3QsCDQutCw0YDRgtC40L3QutGDID0+IHRoaXMuX3BvcHVwUGhvdG9CaWcuc3JjID0gbGluaztcbiAgMikg0KLQtdC60YHRgiBhdGwg0LrQsNGA0YLQuNC90LrQuCA9PiAgdGhpcy5fcG9wdXBQaG90b0JpZy5hbHQgPSB0ZXh0O1xuICAzKSDQotC10LrRgdGCINC+0L/QuNGB0LDQvdC40LUg0L/QvtC0INC60LDRgNGC0LjQvdC60L7QuSA9PiB0aGlzLl9wb3B1cFRpdGxlSW1hZ2UgPSBwb3B1cFRpdGxlSW1hZ2U7XG5cbiAgUFMg0Y8g0L7Rh9C10YDQtdC00L3QvtC5INGA0LDQtyDQvtGF0YDQtdC90LXQstCw0Y4g0L3QsNC0INC+0L/QuNGB0LDQvdC40LXQvCDQotCXINCv0L3QtNC10LrRgSDQv9GA0LDQutGC0LjQutGD0LwsINGC0LDQutC+0LUg0L7RidGD0YnQtdC90LjQtSxcbiAg0YfRgtC+INCyINC90LDQu9C+0LPQvtCy0L7QuSDQutGC0L4g0L/QuNGI0LXRgiDRgtGA0LXQsdC+0LLQsNC90LjRjyDQuCDQt9Cw0LTQsNC90LjRjyDQsiDQr9CfINGN0YLQviDQvtC00L3QuCDQuCDRgtC1INC20LUg0LvRjtC00LguLi5cbiAgICovXG4gIC8v0JjQvNC/0L7RgNGC0L7Qt9Cw0LzQtdGJ0LDQtdC8ICkpIFBvcHVwINC40Lcg0L3QsNGI0LXQuSDQttC1INC/0LDQv9C60LhcbiAgIGltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcbiAgIC8v0L/RgNC+0LHRgNCw0YHRi9Cy0LDQtdC8INC90LDRiNC4INC60L7QvdGB0YLQsNC90YLRi1xuICAgaW1wb3J0IHsgcG9wdXBQaG90b0JpZywgcG9wdXBUaXRsZUltYWdlIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbiAgIC8v0KDQsNGB0YjQuNGA0Y/QtdC8INGH0YLQviDQsSDQtNC+0LHQsNCy0LjRgtGMINC90L7QstGL0LUg0LfQvdCw0YfQtdC90LjRj1xuICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RyUG9wdXApIHtcbiAgICAgIHN1cGVyIChzZWxlY3RyUG9wdXApO1xuICAgICAgdGhpcy5fcG9wdXBQaG90b0JpZyA9IHBvcHVwUGhvdG9CaWc7XG4gICAgICB0aGlzLl9wb3B1cFRpdGxlSW1hZ2UgPSBwb3B1cFRpdGxlSW1hZ2U7XG4gICAgfVxuXG4gIC8vINC+0YLQstC10YfQsNGO0YIg0LfQsCDQvtGC0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QsFxuICBvcGVuKHRleHQsIGxpbmspIHtcbiAgICAvL9C90LDQv9GA0LDQstC70Y/QtdC8INC00LDQvdC90YvQtSDQsiDQvtGC0LrRgNGL0YLRi9C5IFBvcHVwINC00LvRjyDQsdC+0LvRjNGI0L7QuSDQutCw0YDRgtC40L3QutC4IGxpbmsg0LggdGV4dFxuICAgIHRoaXMuX3BvcHVwUGhvdG9CaWcuc3JjID0gbGluaztcbiAgICB0aGlzLl9wb3B1cFBob3RvQmlnLmFsdCA9IHRleHQ7XG4gICAgdGhpcy5fcG9wdXBUaXRsZUltYWdlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgY29uc29sZS5sb2coXCLQmtC70LDRgdGBIFBvcHVwV2l0aEltYWdlIC0g0LzQtdGC0L7QtCBPUEVOINGA0LDQsdC+0YLQsNC10YJcIiApXG4gIH0gXG5cbn0iLCIvL9C+0YLQstC10YfQsNC10YIg0LfQsCDQvtGC0YDQuNGB0L7QstC60YMg0Y3Qu9C10LzQtdC90YLQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtVxuXG4vKiAg0J/QtdGA0LLRi9C8INC/0LDRgNCw0LzQtdGC0YDQvtC8INC60L7QvdGB0YLRgNGD0LrRgtC+0YDQsCDQv9GA0LjQvdC40LzQsNC10YIg0L7QsdGK0LXQutGCINGBINC00LLRg9C80Y8g0YHQstC+0LnRgdGC0LLQsNC80Lg6IGl0ZW1zINC4IHJlbmRlcmVyLiBcbiAg0KHQstC+0LnRgdGC0LLQviBpdGVtcyDigJQg0Y3RgtC+INC80LDRgdGB0LjQsiDQtNCw0L3QvdGL0YUgKNCSINC90LDRiNC10Lwg0YHQu9GD0YfQsNC1INC30LTQtdGB0Ywg0Y3RgtC+INC60LDRgNGC0L7Rh9C60Lgg0LrQvtGC0L7RgNGL0LUgXG4gICAg0L3QsNGF0L7QtNC40YLRgdGPINCyIGNhcmRzKSwg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDQtNC+0LHQsNCy0LjRgtGMINC90LAg0YHRgtGA0LDQvdC40YbRgyDQv9GA0Lgg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcbiAgINC60LvQsNGB0YHQsC4g0KHQstC+0LnRgdGC0LLQviByZW5kZXJlciDigJQg0Y3RgtC+INGE0YPQvdC60YbQuNGPLCDQutC+0YLQvtGA0LDRjyDQvtGC0LLQtdGH0LDQtdGCINC30LAg0YHQvtC30LTQsNC90LjQtSDQuCDQvtGC0YDQuNGB0L7QstC60YMg0LTQsNC90L3Ri9GFXG4gICAg0L3QsCDRgdGC0YDQsNC90LjRhtC1LlxuICDQktGC0L7RgNC+0Lkg0L/QsNGA0LDQvNC10YLRgCDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LAg4oCUINGB0LXQu9C10LrRgtC+0YAg0LrQvtC90YLQtdC50L3QtdGA0LAsINCyINC60L7RgtC+0YDRi9C5INC90YPQttC90L4g0LTQvtCx0LDQstC70Y/RgtGMIFxuICDRgdC+0LfQtNCw0L3QvdGL0LUg0Y3Qu9C10LzQtdC90YLRiy4gKi9cbmNsYXNzIFNlY3Rpb24ge1xuXG4gIGNvbnN0cnVjdG9yKHtpdGVtcyxyZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdHIpIHtcbiAgIC8vIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXJTZWxlY3RyO1xuICB9XG5cblxuICAvLyDQvtGC0LLQtdGH0LDQtdGCINC30LAg0L7RgtGA0LjRgdC+0LLQutGDINCy0YHQtdGFINGN0LvQtdC80LXQvdGC0L7Qsi4gXG4gIC8vINCe0YLRgNC40YHQvtCy0LrQsCDQutCw0LbQtNC+0LPQviDQvtGC0LTQtdC70YzQvdC+0LPQviDRjdC70LXQvNC10L3RgtCwINC00L7Qu9C20L3QsCBcbiAgLy8g0L7RgdGD0YnQtdGB0YLQstC70Y/RgtGM0YHRjyDRhNGD0L3QutGG0LjQtdC5IHJlbmRlcmVyXG4gIC8vINC/0L4g0YTQsNC60YLRgyDRhdCy0LDRgtCw0L3Rg9C70Lgg0LjQtyDQuNC90LTQtdC60YEuanMg0YTRg9C90LrRhtC40Y4gINC4INC30LDQv9C40YXQvdGD0LvQuCDRgdGO0LTQsFxuICByZW5kZXJlcihpdGVtcykge1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfSBcblxuICAvLyDQodC+0LTQtdGA0LbQuNGCINC/0YPQsdC70LjRh9C90YvQuSDQvNC10YLQvtC0IGFkZEl0ZW0sINC60L7RgtC+0YDRi9C5IFxuICAvL9C/0YDQuNC90LjQvNCw0LXRgiBET00t0Y3Qu9C10LzQtdC90YIg0Lgg0LTQvtCx0LDQstC70Y/QtdGCINC10LPQviDQsiDQutC+0L3RgtC10LnQvdC10YBcbiAgLy8g0LfQtNC10YHRjCDQvNGLINCx0YPQtNC10Lwg0LTQvtCx0LDQstC70Y/RgtGMINC60LDRgNGC0L7Rh9C60Lgg0LIg0L3QsNGH0LDQu9C+IFxuICAvLyDQsiDQsNGA0LPRg9C80LXQvdGCINCx0YPQtNC10YIg0LLRgdGC0LDQstC70Y/RgtGM0YHRjyDQpNGD0L3QutGG0LjRjyDQutCw0YDRgtC+0YfQutCwINGBINC00L7QsdCw0LLQu9C10L3QuNC10Lwg0LTQsNC90L3Ri9GFINC90LAg0YHQsNC50YJcbiAgYWRkSXRlbShpdGVtKXtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChpdGVtKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247IiwiLy8gL9Ca0LvQsNGB0YEgVXNlckluZm8g0L7RgtCy0LXRh9Cw0LXRgiBcbi8v0LfQsCDRg9C/0YDQsNCy0LvQtdC90LjQtSDQvtGC0L7QsdGA0LDQttC10L3QuNC10Lwg0LjQvdGE0L7RgNC80LDRhtC40Lgg0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C1INC90LAg0YHRgtGA0LDQvdC40YbQtS5cbi8v0J/RgNC40L3QuNC80LDQtdGCINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0L7QsdGK0LXQutGCINGBINGB0LXQu9C10LrRgtC+0YDQsNC80Lgg0LTQstGD0YUg0Y3Qu9C10LzQtdC90YLQvtCyOlxuLy8g0Y3Qu9C10LzQtdC90YLQsCDQuNC80LXQvdC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuCDRjdC70LXQvNC10L3RgtCwINC40L3RhNC+0YDQvNCw0YbQuNC4INC+INGB0LXQsdC1XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50TmFtZSwgIGVsZW1lbnRJbmZvKSB7XG4gICAgdGhpcy5fZWxlbWVudE5hbWUgPSBlbGVtZW50TmFtZTtcbiAgICB0aGlzLl9lbGVtZW50SW5mbyA9IGVsZW1lbnRJbmZvO1xuICB9XG5cblxuICAvLyDQutC+0YLQvtGA0YvQuSDQstC+0LfQstGA0LDRidCw0LXRgiDQvtCx0YrQtdC60YIg0YEg0LTQsNC90L3Ri9C80Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLiBcbiAgLy8g0K3RgtC+0YIg0LzQtdGC0L7QtCDQv9GA0LjQs9C+0LTQuNGC0YHRjyDQutC+0LPQtNCwINC00LDQvdC90YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8gXG4gIC8vINC90YPQttC90L4g0LHRg9C00LXRgiDQv9C+0LTRgdGC0LDQstC40YLRjCDQsiDRhNC+0YDQvNGDINC/0YDQuCDQvtGC0LrRgNGL0YLQuNC4LlxuICBnZXRVc2VySW5mbygpe1xuICAgIGNvbnNvbGUubG9nKFwi0JrQu9Cw0YHRgSBVc2VySW5mbyAtINC80LXRgtC+0LQgZ2V0VXNlckluZm8g0YDQsNCx0L7RgtCw0LXRglwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5fZWxlbWVudE5hbWUudGV4dENvbnRlbnQsXG4gICAgICBpbmZvOiB0aGlzLl9lbGVtZW50SW5mby50ZXh0Q29udGVudCxcbiAgICB9XG4gIH1cblxuLy/QutC+0YLQvtGA0YvQuSDQv9GA0LjQvdC40LzQsNC10YIg0L3QvtCy0YvQtSDQtNCw0L3QvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC4INC00L7QsdCw0LLQu9GP0LXRgiDQuNGFINC90LAg0YHRgtGA0LDQvdC40YbRgy5cbiAgc2V0VXNlckluZm8oe25hbWUsaW5mb30pe1xuICAgIHRoaXMuX2VsZW1lbnROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLl9lbGVtZW50SW5mby50ZXh0Q29udGVudCA9IGluZm87XG4gICAgY29uc29sZS5sb2coXCLQmtC70LDRgdGBIFVzZXJJbmZvIC0g0LzQtdGC0L7QtCBzZXRVc2VySW5mbyDRgNCw0LHQvtGC0LDQtdGCXCIpO1xuICB9XG4gIFxufSIsIi8v0JzQkNCh0KHQmNCS0KtcblxuLy/QnNCw0YHRgdC40LIg0LjQtyDQt9Cw0LTQsNC90LjRjyDRgtC40YLQu9GLINC60LDRgNGC0LjQvdC60Lgg0Lgg0YHRgdGL0LvQutC4INC90LAg0L3QuNGFXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcItCa0LDRgNCw0YfQsNC10LLRgdC6XCIsXG4gICAgbGluazogXCIuL2ltYWdlcy9raXJpbGwtcGVyc2hpbi0xMDg4NDA0LXVuc3BsYXNoLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLQlNC+0LzQsdCw0LlcIixcbiAgICBsaW5rOiBcIi4vaW1hZ2VzL2tpcmlsbC1wZXJzaGluLTE1NTYzNTUtdW5zcGxhc2guanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcItCT0L7RgNCwINCt0LvRjNCx0YDRg9GBXCIsXG4gICAgbGluazogXCIuL2ltYWdlcy9raXJpbGwtcGVyc2hpbi0xNDA0NjgxLXVuc3BsYXNoLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLQlNC+0LzQsdCw0LlcIixcbiAgICBsaW5rOiBcIi4vaW1hZ2VzL2tpcmlsbC1wZXJzaGluLTE1NTYzNTUtdW5zcGxhc2guanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcItCT0L7RgNCwINCt0LvRjNCx0YDRg9GBXCIsXG4gICAgbGluazogXCIuL2ltYWdlcy9raXJpbGwtcGVyc2hpbi0xNDA0NjgxLXVuc3BsYXNoLmpwZ1wiLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiBcItCSLtCSLiDQn9GD0YLQuNC9XCIsXG4gICAgbGluazogXCJpbWFnZXMvcHV0aW4ucG5nXCIsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwi0JDRgNGF0YvQt1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2Fya2h5ei5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0KfQtdC70Y/QsdC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2NoZWx5YWJpbnNrLW9ibGFzdC5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0JjQstCw0L3QvtCy0L5cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9pdmFub3ZvLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLQmtCw0LzRh9Cw0YLQutCwXCIsXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2FtY2hhdGthLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLQpdC+0LvQvNC+0LPQvtGA0YHQutC40Lkg0YDQsNC50L7QvVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2tob2xtb2dvcnNreS1yYXlvbi5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0JHQsNC50LrQsNC7XCIsXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYmFpa2FsLmpwZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbENhcmRzOyIsImltcG9ydCAgXCIuLi9wYWdlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4vUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuL1NlY3Rpb24uanNcIjtcbmltcG9ydCBpbml0aWFsQ2FyZHMgZnJvbSBcIi4vY2FyZHMuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmQuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuL0Zvcm1WYWxpZGF0b3IuanNcIjtcbi8v0J/QldCg0JXQnNCV0J3QndCr0JVcbmNvbnN0IHZhbGlkYXRpb25Db25maWcgPSB7XG4gIHBvcHVwOiBcIi5wb3B1cFwiLFxuICBwb3B1cEZvcm06IFwiLnBvcHVwX19mb3JtXCIsXG4gIHBvcHVwSW5wdXQ6IFwiLnBvcHVwX19pbnB1dFwiLFxuICBidXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlOiBcIi5wb3B1cF9fc3VibWl0LWJ1dHRvblwiLFxuICBwb3B1cEVsZW1lbnRFcnJvcjogXCJwb3B1cF9fZWxlbWVudC1lcnJvclwiLFxuICBwb3B1cElucHV0RXJyb3I6IFwicG9wdXBfX2lucHV0X2Vycm9yXCIsXG59O1xuXG4vLyDQlNC10LvQsNC10Lwg0LTQu9GPINGD0LTQvtCx0YHRgtCy0LAg0L7QsdGK0LXQutGCXG5jb25zdCBjb25maWcgPSB7XG4gIHBvcHVwOiBcIi5wb3B1cFwiLFxuICB0aXRsZTogXCIucHJvZmlsZV9fdGl0bGVcIixcbiAgc3ViVGl0bGU6IFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIsXG4gIHBvcHVwRWRpdFByb2ZpbGU6IFwiI3BvcHVwX2VkaXRfcHJvZmlsZVwiLFxuICBidXR0b25FZGl0OiBcIi5wcm9maWxlX19idXR0b24tZWRpdFwiLFxuICBzdWJUaXRsZUVkaXQ6ICcucG9wdXBfX2lucHV0W25hbWU9XCJzdWJ0aXRsZVwiXScsXG4gIC8v0L3QsNGH0LDQu9C+INC/0L7Qv9Cw0L/QsFxuICBwb3B1cEZvcm1FZGl0UG9maWxlVGFibGU6ICcucG9wdXBfX2Zvcm1bbmFtZT1cInBvcHVwRm9ybUVkaXRQb2ZpbGVUYWJsZVwiXScsXG4gIHRpdGxlRWRpdDogJy5wb3B1cF9faW5wdXRbbmFtZT1cIm5hbWVcIl0nLFxuICBwb3B1cFN1Ym1pdEJ1dHRvbnNEaXNhYmxlOiBcIi5wb3B1cF9fc3VibWl0LWJ1dHRvbl9kaXNhYmxlXCIsXG4gIC8v0LrQvtC90LXRhiDQv9C+0L/QsNC/0LBcbiAgYnV0dG9uQWRkQnV0dG9uOiBcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIsXG4gIHBvcHVwQWRkOiBcIiNwb3B1cF9hZGRcIixcbiAgdGV4dFZhbHVlUG9wdXBUaXRsZTogXCIjaW5wdXQtaW1hZ2UtdGl0bGVcIixcbiAgdGV4dFZhbHVlUG9wdXBTdWJ0aXRsZTogXCIjaW5wdXQtaW1hZ2UtdXJsXCIsXG4gIGVsZW1lbnRzQ2FyZDogXCIuZWxlbWVudHNcIixcbiAgcG9wdXBCaWdPcGVuSW1hZ2U6IFwiI3BvcHVwLXBob3RvXCIsXG4gIGJ1dHRvblBvcHVwQmlnSW1hZ2VDbG9zZTogXCIucG9wdXBfX2Nsb3NlW25hbWU9J2J1dHRvblBvcHVwQmlnSW1nQ2xvc2UnXVwiLFxuICBuZXdFbGVtZW50SWRUZW1wbGF0ZTogXCIjbmV3RWxlbWVudFwiLFxuICBwb3B1cENsb3NlOiBcIi5wb3B1cF9fY2xvc2VcIixcbiAgcG9wdXBPcGVuZWQ6IFwicG9wdXBfb3BlbmVkXCIsXG4gIGVsZW1lbnRUZXh0OiBcIi5lbGVtZW50X190ZXh0XCIsXG4gIGVsZW1lbnRJbWFnZTogXCIuZWxlbWVudF9faW1nXCIsXG4gIHBvcHVwVGV4dENvbG9yRm9udEdyZXk6IFwicG9wdXBfX2lucHV0X2NvbG9yLWZvbnRfZ3JleVwiLFxuICBwb3B1cFRpdGxlSW1hZ2U6IFwiLnBvcHVwX190aXRsZS1pbWdcIixcbiAgcG9wdXBQaG90b0JpZzogXCIucG9wdXBfX3Bob3RvXCIsXG4gIGVsZW1lbnRMaWtlOiBcIi5lbGVtZW50X19saWtlXCIsXG4gIGVsZW1lbnRMaWtlQWN0aXZlOiBcImVsZW1lbnRfX2xpa2VfYWN0aXZlXCIsXG4gIGVsZW1lbnRUcmFzaDogXCIuZWxlbWVudF9fdHJhc2hcIixcbiAgZWxlbWVudDogXCIuZWxlbWVudFwiLFxuICBmb3JtQWRkOiBcIiNmb3JtX2FkZFwiLFxufTtcbi8vdmFsaWRhdGlvbkNvbmZpZ1xuXG5jb25zdCBwb3B1cFN1Ym1pdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICB2YWxpZGF0aW9uQ29uZmlnLmJ1dHRvbkZvcm1FZGl0UG9maWxlVGFibGVcbik7XG4vL2NvbmZpZ1xuZXhwb3J0IGNvbnN0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLnBvcHVwKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcudGl0bGUpO1xuY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zdWJUaXRsZSk7XG5jb25zdCBwb3B1cEVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBFZGl0UHJvZmlsZSk7XG5jb25zdCBwb3B1cEJ1dHRvbkNsb3NlRWRpdFByb2ZpbGUgPSBwb3B1cEVkaXRQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoXG4gIGNvbmZpZy5wb3B1cENsb3NlXG4pO1xuY29uc3QgYnV0dG9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmJ1dHRvbkVkaXQpO1xuY29uc3QgdGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcudGl0bGVFZGl0KTtcbmNvbnN0IHN1YlRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnN1YlRpdGxlRWRpdCk7XG5jb25zdCBwb3B1cEZvcm1FZGl0UG9maWxlVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBjb25maWcucG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlXG4pO1xuXG5jb25zdCBwb3B1cEZvcm1FZGl0UG9maWxlVGFibGVJbnZhbGlkID0gY29uZmlnLnBvcHVwRm9ybUVkaXRQb2ZpbGVUYWJsZUludmFsaWQ7XG5jb25zdCBidXR0b25BZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5idXR0b25BZGRCdXR0b24pO1xuXG4vL9Ck0L7RgNC80LAg0LTQvtCx0LDQstC70LXQvdC40Y8g0LjRidC10Lwg0L/QviDQsNC50LTQuCDQuCDRgdC60LjQtNGL0LLQsNC10Lwg0LIg0LrQvtC90YHRgtCw0L3RgtGDXG5jb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwQWRkKTtcbmNvbnN0IGZvcm1BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5mb3JtQWRkKTtcbmNvbnN0IHBvcHVwRWRpdENsb3NlQnV0dG9uID0gcG9wdXBBZGQucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBDbG9zZSk7XG5jb25zdCB0ZXh0VmFsdWVQb3B1cFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcudGV4dFZhbHVlUG9wdXBUaXRsZSk7XG5jb25zdCB0ZXh0VmFsdWVQb3B1cFN1YnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgY29uZmlnLnRleHRWYWx1ZVBvcHVwU3VidGl0bGVcbik7XG5jb25zdCBlbGVtZW50c0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5lbGVtZW50c0NhcmQpO1xuLy/QlNCb0K8gUE9QVVAgYyDQmtCQ0KDQotCY0J3QmtCe0Jlcbi8v0J3QsNC50LTQtdC8INC90LDRiCDQv9C+0L/QsNC/INGBINC60LDRgNGC0LjQvdC60L7QuSDQuCDQt9Cw0LrQuNC90LXQvCDQtdCz0L4g0LIg0LrQvtC90YHRgtCw0L3RgtGDIFBvcHVwSW1nXG5jb25zdCBwb3B1cEJpZ09wZW5JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwQmlnT3BlbkltYWdlKTtcbi8v0J3QsNC50LTQtdC8INCyINGN0YLQvtC8INC/0L7Qv9Cw0L/QtSDQvdCw0YjRgyDQutC90L7Qv9C60YMgXCLQt9Cw0LrRgNGL0YLQuNC1XCIg0YEg0LrQu9Cw0YHRgdC+0LwgIHBvcHVwX19jbG9zZVxuLy/QuCDQt9Cw0LrQuNC90LXQvCDRjdGC0L4g0LLRgdC1INCyICBjbG9zZVBvcHVwXG5jb25zdCBidXR0b25Qb3B1cEJpZ0ltYWdlQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBjb25maWcuYnV0dG9uUG9wdXBCaWdJbWFnZUNsb3NlXG4pO1xuY29uc3QgcG9wdXBQaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwQmlnT3BlbkltYWdlKTtcbmV4cG9ydCBjb25zdCBwb3B1cFBob3RvQmlnID0gcG9wdXBQaG90by5xdWVyeVNlbGVjdG9yKGNvbmZpZy5wb3B1cFBob3RvQmlnKTtcbmNvbnN0IG5ld0VsZW1lbnRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIGNvbmZpZy5uZXdFbGVtZW50SWRUZW1wbGF0ZVxuKS5jb250ZW50O1xuLy/QutC70LDRgdGBINCz0LTQtSDQvdCw0YXQvtC00LjRgtGB0Y8gdGl0bGUg0LHQvtC70YzRiNC+0Lkg0LrQsNGA0YLQuNC90LrQuCAo0YLQsNC8INC/0L7QutCwINC/0YPRgdGC0L4pXG5leHBvcnQgY29uc3QgcG9wdXBUaXRsZUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBUaXRsZUltYWdlKTtcbi8v0LzQsNGB0YHQuNCyINC40Lcg0LLRgdC10YUg0L/QvtC/0LDQv9C+0LJcblxuLy8gICoqKioqICDQpNCj0J3QmtCm0JjQmCAgKioqKipcblxuLy/Ql9CQ0JrQoNCr0KLQmNCVINCf0J7Qn9CQ0J/QkCDQoSDQn9Ce0JzQntCp0KzQriBFU0Ncbi8vIGZ1bmN0aW9uIGNsb3NlQnlFc2MoZXZ0KSB7XG4vLyAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4vLyAgICAgY29uc3Qgb3BlbmVkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX29wZW5lZFwiKTtcbi8vICAgICBjbG9zZVBvcHVwKG9wZW5lZFBvcHVwKTtcbi8vICAgfVxuLy8gfVxuXG4vL9CX0LTQtdGB0Ywg0LTQtdC70LDQtdC8INGE0YPQvdC60YbQuNGOINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INC10LUg0LIg0LrQu9Cw0YHRgSBDYXJkXG4vL9Ch0LDQvCDRg9C20LUg0LfQsNCx0YvQuywg0LrQsNC6INGD0YHRgtGA0L7QtdC90LAgLSDQt9Cw0L/QuNGB0YvQstCw0YLRjCDQvdCw0LTQviDQsdGL0LvQvlxuLy8gZnVuY3Rpb24gaGFuZGxlT3BlblBvcHVwKG5hbWUsIGxpbmspIHtcbi8vICAgcG9wdXBQaG90b0JpZy5zcmMgPSBsaW5rO1xuLy8gICBwb3B1cFBob3RvQmlnLmFsdCA9IG5hbWU7XG4vLyAgIHBvcHVwVGl0bGVJbWFnZS50ZXh0Q29udGVudCA9IG5hbWU7XG4vLyAgIG9wZW5Qb3B1cChwb3B1cEJpZ09wZW5JbWFnZSk7XG5cbi8vIH1cbi8vIGZ1bmN0aW9uIG9wZW5Qb3B1cChtb2RhbFdpbmRvdyl7XG4vLyAgIGNvbnN0IG9wZW5Qb3AgPSBuZXcgUG9wdXAobW9kYWxXaW5kb3cpO1xuLy8gICBvcGVuUG9wLm9wZW4obW9kYWxXaW5kb3cpO1xuLy8gfVxuXG4vL9Ci0JXQodCi0JjQoNCj0JXQnCBQb3B1cFdpdGhGb3JtXG5jb25zdCB0ZXN0ID0gbmV3IFBvcHVwV2l0aEZvcm0oKTtcbmNvbnNvbGUubG9nKHRlc3QuX2dldElucHV0VmFsdWVzKCkpO1xuY29uc29sZS5sb2cocG9wdXBzKTtcblxuLy/QotCV0KHQotCY0KDQo9CV0JwgVXNlcmluZm9cbmNvbnN0IHRlc3QyID0gbmV3IFVzZXJJbmZvKHRpdGxlLCBzdWJUaXRsZSk7XG5jb25zb2xlLmxvZyh0ZXN0Mi5nZXRVc2VySW5mbygpKTtcblxuXG5mdW5jdGlvbiBoYW5kbGVDYXJkQ2xpY2sobmFtZSwgbGluaykge1xuICBjb25zdCBpbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShwb3B1cEJpZ09wZW5JbWFnZSlcbiAgaW1hZ2Uub3BlbihuYW1lLCBsaW5rKTtcblxufVxuLy/Ql9Cw0LrRgNGL0YLQuNC1INC60L3QvtC/0LrQuCDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y9cbi8vIGZ1bmN0aW9uIGRpc2FibGVkQnV0dG9uKCl7XG4vLyBwb3B1cFN1Ym1pdEJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuLy8gICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4vLyB9KTtcbi8vIH07IFxuLy/Qn9C+0LTQutC70Y7Rh9Cw0LXQvCBDbGFzcyBcbi8v0JTQvtCx0LDQstC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LXQulxuXG4vL9CU0LXQu9Cw0LXQvCDRhNGD0L3QutGG0LjRjiDRh9GC0L4g0LEg0LTQvtCx0LDQstC70Y/Qu9C40YHRjCDQutCw0YDRgtC+0YfQutC4XG5mdW5jdGlvbiBhZGRDYXJkKGRhdGEpIHtcbiAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKFxuICAgIGRhdGEubmFtZSxcbiAgICBkYXRhLmxpbmssXG4gICAgY29uZmlnLFxuICAgIGhhbmRsZUNhcmRDbGljayxcbiAgICBuZXdFbGVtZW50VGVtcGxhdGVcbiAgKTtcbiByZXR1cm4gbmV3Q2FyZC5jcmVhdGVDYXJkKCk7XG59XG5cbi8v0LHQtdGA0LXRgiDRgdC+0LfQtNCw0L3QuNC1INC60LDRgNGC0L7Rh9C10LogXCJjYXJkQ3JlYXRlXCIg0Lgg0YEg0L/QvtC80L7RidGM0Y4g0YbQuNC60LvQsCDQstGB0YLQsNCy0LvRj9C10YIg0L3QsCDRgdGC0YDQsNC90LjRhtGDXG4vLyBmdW5jdGlvbiByZW5kZXJJbml0aWFsQ2FyZHMoKSB7XG4vLyAgIGluaXRpYWxDYXJkcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyAgICAvLyBjcmVhdGVDYXJkKGl0ZW0pO1xuLy8gICAgIGVsZW1lbnRzQ2FyZC5wcmVwZW5kKGFkZENhcmQoaXRlbSkpO1xuLy8gICB9KTtcbi8vIH1cbi8vIHJlbmRlckluaXRpYWxDYXJkcygpO1xuXG5cbi8vKioq0JTQntCR0JDQktCb0JXQndCY0JUg0JrQkNCg0KLQntCn0JXQmioqKiAtINCa0JDQmiDQkdCrINCh0JDQnNCe0JzQoyDQndCVINCX0JDQn9Cj0KLQkNCi0KzQodCvIDpwXG5cbi8v0JTQtdC70LDQtdC8INC60L7QvdGB0YLQsNC90YLRgyDQuCDQuNC3INC60LvQsNGB0YHQsCwg0L/RgNC+0LrQuNC00YvQstCw0LXQvCDQtdC80YMgKHvQvNCw0YHRgdC40LIg0YEg0LrQsNGA0YLQvtGH0LrQsNC80LgsINGE0YPQvdC60YbQuNGOINC00L7QsdCw0LLQu9C10L3QuNC1INC60LDRgNGC0L7Rh9C10Lp9LFxuLy/QvdCw0LnQtNC10L3QvdGL0Lkg0YHQtdC70LXQutGC0L7RgCkgXG5jb25zdCBjYXJkUmVuZGVyID0gbmV3IFNlY3Rpb24oe1xuICBpbml0aWFsQ2FyZHMsXG4gIHJlbmRlcmVyOihpdGVtKSA9PiB7XG4vL9GF0LLQsNGC0LDQtdC8INC80LXRgtC+0LQgXCJhZGRJdGVtXCIg0Lgg0LLRgdGC0LDQstC70Y/QtdC8INCyINC/0LDRgNCw0LzQtdGC0YAg0YTRg9C90LrRhtC40Y4g0LTQvtCx0LDQstC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LXQuiBhZGRDYXJkKGl0ZW0pXG4gICAgY2FyZFJlbmRlci5hZGRJdGVtKGFkZENhcmQoaXRlbSkpO1xuICB9XG4gIC8vINCQINC30LTQtdGB0Ywg0LTQvtCx0LDQstC70Y/QtdC8INGB0LXQu9C10LrRgtC+0YBcbiAgfSwgZWxlbWVudHNDYXJkKTtcbi8v0LLRi9C30YvQstCw0LXQvCDQvNC10YLQvtC0IHJlbmRlcmVyKGMg0L/QsNGA0LDQvNC10YLRgNC+0Lwg0LzQsNGB0YHQuNCy0L7QvCDQutCw0YLQvtGH0LXQuilcbmNhcmRSZW5kZXIucmVuZGVyZXIoaW5pdGlhbENhcmRzKTtcblxuLy/QmtCe0J3QldCmINCU0L7QsdCw0LLQu9C10L3QuNC1INC60LDRgNGC0L7Rh9C10Log0LjQtyDQvNCw0YHRgdC40LLQsCA6KVxuXG5cbi8vICEhISDQlNC+0LHQsNCy0LvQtdC90LjQtSDQtNCw0L3QvdGL0YUg0LIg0YTQvtGA0LzRgyDQvdC+0LLRi9GFINC60LDRgNGC0L7Rh9C10LpcbmZvcm1BZGQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiBcbiAgLy/Rh9GC0L4g0LEg0L3QtSDQv9C10YDQtdC30LDQs9GA0YPQttCw0LvQsNGB0Ywg0YHRgtGA0LDQvdC40YbQsFxuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbmFtZTogdGV4dFZhbHVlUG9wdXBUaXRsZS52YWx1ZSxcbiAgICBsaW5rOiB0ZXh0VmFsdWVQb3B1cFN1YnRpdGxlLnZhbHVlLFxuICAgIGFsdDogdGV4dFZhbHVlUG9wdXBUaXRsZS52YWx1ZSxcbiAgfTtcbiAgICBcbiAgZm9ybUFkZC5yZXNldCgpO1xuICB2YWxpZGF0aW9uQ2FyZC52YWxpZGF0ZUJ1dHRvbigpO1xuICBlbGVtZW50c0NhcmQucHJlcGVuZChhZGRDYXJkKGRhdGEpKTtcbiAgY2xvc2VQb3B1cChwb3B1cEFkZCk7XG4gIC8vY2xvc2VQb3B1cChwb3B1cEFkZCk7XG4gIFxufSk7XG5cbi8v0JfQsNC60L7QvdGH0LjQu9C4INC00L7QsdCw0LLQu9GP0YLRjCDQutCw0YDRgtGLXG5cbi8v0J7RgtC60YDRi9GC0Ywv0LfQsNC60YDRi9GC0Ywg0LLRgdC1INC/0L7Qv9Cw0L/RiyAo0LrRgNC+0LzQtSDQsdC+0LvRjNGI0L7QuSDQutCw0YDRgtC40L3QutC4KSDQuCDQvdCw0LbQsNGC0LjQtSDQvdCwINC60YDQtdGB0YLQuNC6XG5cblxuZnVuY3Rpb24gb3BlblBvcHVwKG1vZGFsV2luZG93KXtcbiAgY29uc3Qgb3BlblBvcCA9IG5ldyBQb3B1cChtb2RhbFdpbmRvdyk7XG4gIG9wZW5Qb3Aub3Blbihtb2RhbFdpbmRvdyk7XG59XG5mdW5jdGlvbiBjbG9zZVBvcHVwKG1vZGFsV2luZG93KXtcbiAgY29uc3QgY2xvc2VQb3AgPSBuZXcgUG9wdXAobW9kYWxXaW5kb3cpO1xuICBjbG9zZVBvcC5jbG9zZShtb2RhbFdpbmRvdyk7XG59XG5cbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIobW9kYWxXaW5kb3cpe1xuICBjb25zdCBsaXN0ZW5lcnMgPSBuZXcgUG9wdXAobW9kYWxXaW5kb3cpO1xuICBsaXN0ZW5lcnMuc2V0RXZlbnRMaXN0ZW5lcnMobW9kYWxXaW5kb3cpO1xuIC8vIGNvbnNvbGUubG9nKG1vZGFsV2luZG93KTtcbn1cblxuLy/RgdC70YPRiNCw0YLQtdC70Lgg0LfQsNC60YDRi9GC0LjRj1xuLy8g0L/RgNC+0YTQuNC70YxcbmV2ZW50TGlzdGVuZXIocG9wdXBFZGl0UHJvZmlsZSk7IFxuLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0LrQsNGA0YLQuNC90LrQuFxuZXZlbnRMaXN0ZW5lcihwb3B1cEFkZCk7XG4vLyDQsdC+0LvRjNGI0LDRjyDQutCw0YDRgtC40L3QutCwIFxuZXZlbnRMaXN0ZW5lcihwb3B1cEJpZ09wZW5JbWFnZSk7IFxuLy8gZnVuY3Rpb24gb3BlblBvcHVwKG1vZGFsV2luZG93KSB7XG4vLyAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoY29uZmlnLnBvcHVwT3BlbmVkKTtcbi8vICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VCeUVzYyk7XG4vLyB9XG5cbi8vINCe0KLQmtCg0KvQktCQ0JXQnCDQn9Ce0J/QkNCfXG4vLyBwb3B1cHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgXG4vLyB9KTtcbi8vIGNvbnN0IG9wZW5Qb3B1cCA9IG5ldyBQb3B1cChwb3B1cHMpO1xuLy8g0JfQkNCa0KDQq9CS0JDQldCcINCf0J7Qn9CQ0J9cbi8vY29uc3QgY2xvc2VQb3B1cCA9IG5ldyBQb3B1cChwb3B1cHNbMV0pO1xuLy8gZnVuY3Rpb24gY2xvc2VQb3B1cChtb2RhbFdpbmRvdykge1xuLy8gICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5wb3B1cE9wZW5lZCk7XG4vLyAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlQnlFc2MpO1xuLy8gfVxuXG4vL9Ce0YLQutGA0YvRgtGML9C30LDQutGA0YvRgtGMINC/0L7Qv9Cw0L8g0LHQvtC70YzRiNC+0Lkg0LrQsNGA0YLQuNC90LrQuFxuXG4vLyBidXR0b25Qb3B1cEJpZ0ltYWdlQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAvLyBjbG9zZVBvcHVwLmNsb3NlKHBvcHVwQmlnT3BlbkltYWdlKTtcbi8vICBjbG9zZVBvcHVwKHBvcHVwQmlnT3BlbkltYWdlKTtcbi8vIH0pO1xuXG5cbi8vICAqKioqKiAg0J7QkdCg0JDQkdCe0KLQp9CY0JrQmCAqKioqKlxuXG4vLyDQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INCi0LjRgtC70LBcbi8v0JLQutC70Y7Rh9Cw0LXQvCDQutC90L7Qv9C60YMsINC00L7RgdC70L7QstC90L4g0LTQvtCx0LDQstC70Y/QtdC8INC6INC60LvQsNGB0YHRgyBwb3B1cCArINC60LvQsNGB0YEgcG9wdXAtT3BlblxuLy/QrdCi0J4g0J3QldCR0J7Qm9Cs0KjQntCVINCe0KLQmtCb0J7QndCV0J3QmNCVINCa0J7QotCe0KDQntCVINCS0KHQldCcINCf0J7QndCg0JDQktCY0JvQntCh0Kwg0Jgg0JzQqyDQldCT0J4g0JLQldCX0JTQlSDQntCh0KLQkNCS0JjQm9CYISEhIVxuYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuUG9wdXAocG9wdXBFZGl0UHJvZmlsZSk7XG4gIC8vIGNvbnN0IG9wZW5Qb3B1cCA9IG5ldyBQb3B1cChwb3B1cEVkaXRQcm9maWxlKTtcbiAgLy8gb3BlblBvcHVwLm9wZW4ocG9wdXBFZGl0UHJvZmlsZSk7XG4gIC8vb3BlblBvcHVwKHBvcHVwRWRpdFByb2ZpbGUpO1xuICB0aXRsZUVkaXQudmFsdWUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgc3ViVGl0bGVFZGl0LnZhbHVlID0gc3ViVGl0bGUudGV4dENvbnRlbnQ7XG59KTtcblxuLy/Ql9Cw0LrRgNGL0LLQsNC10Lwg0L/QvtC/0LDQvyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINCi0LjRgtC70LAg0LHQtdC3INGB0L7RhdGA0LDQvdC10L3QuNGPINGBINC/0L7QvNC+0YnRjNGOINGE0YPQvdC60YbQuNC4XG4vLyBwb3B1cEJ1dHRvbkNsb3NlRWRpdFByb2ZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgY2xvc2VQb3B1cChwb3B1cEVkaXRQcm9maWxlKTtcbi8vICAgLy9jbG9zZVBvcHVwKHBvcHVwRWRpdFByb2ZpbGUpO1xuLy8gIC8vIGNsb3NlUG9wdXAuY2xvc2UocG9wdXBFZGl0UHJvZmlsZSk7XG4vLyB9KTtcblxuXG5cbi8v0KTQvtGA0LzQsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC4INC+0YLQv9GA0LDQstC70LXQvdC40Y8g0J/RgNC+0YTQuNC70Y8gVElUTEUgLyBTVUJUSVRMRVxuLy/Ql9C00LXRgdGMINC/0YDQuCDQvdCw0LbQsNGC0LjQtSDQutC90L7Qv9C60Lgg0YHQvtGF0YDQsNC90LjRgtGMINC80YvRiNC60L7QuSDQuNC70LggZW50ZXIg0LfQsNC60YDQvtC10Lwg0Lgg0YHQvtGF0YDQsNC90LjQvFxucG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVFZGl0LnZhbHVlO1xuICBzdWJUaXRsZS50ZXh0Q29udGVudCA9IHN1YlRpdGxlRWRpdC52YWx1ZTtcbiAgY2xvc2VQb3B1cChwb3B1cEVkaXRQcm9maWxlKTtcbiAvL2V2ZW50TGlzdGVuZXIocG9wdXBFZGl0UHJvZmlsZSk7IFxufSk7XG5cbi8vIDIgUE9QVVBcbi8vINCS0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDLCDQtNC+0YHQu9C+0LLQvdC+INC00L7QsdCw0LLQu9GP0LXQvCDQuiDQutC70LDRgdGB0YMgcG9wdXBfYWRkICsg0LrQu9Cw0YHRgSBwb3B1cC1PcGVuXG5idXR0b25BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICBvcGVuUG9wdXAocG9wdXBBZGQpO1xuIC8vIG9wZW5Qb3B1cChwb3B1cEFkZCk7XG59KTtcblxuLy/Ql9C00LXRgdGMINC/0YDQuCDQvdCw0LbQsNGC0LjQtSDQutC90L7Qv9C60Lgg0YHQvtGF0YDQsNC90LjRgtGMINC80YvRiNC60L7QuSDQuNC70LggZW50ZXIg0LfQsNC60YDQvtC10Lwg0Lgg0YHQvtGF0YDQsNC90LjQvFxuIC8vcG9wdXBFZGl0Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgY2xvc2VQb3B1cChwb3B1cEFkZCk7XG4vLyAgIC8vY2xvc2VQb3B1cChwb3B1cEFkZCk7XG4vLyB9KTtcblxuLy9ldmVudExpc3RlbmVyKHBvcHVwQWRkKTsgXG4vL9CX0JDQmtCg0KvQotCY0K8g0J/QntCf0JDQn9CQINCU0J7Qn9Ce0JvQndCY0KLQldCb0KzQndCr0JVcbi8v0LfQsNC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LAg0L3QsNC20LDRgtC40LUg0L3QsCDQv9Cw0YDQsNC90LbRg1xuLy8gY29uc3QgcG9wdXBDbG9zZU91dFBvcHVwID0gKHBvcHVwRWxlbWVudCkgPT4ge1xuLy8gICBwb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbi8vICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gZXZ0LmN1cnJlbnRUYXJnZXQpIHtcbi8vICAgICAgIGNsb3NlUG9wdXAocG9wdXBFbGVtZW50KTtcbi8vICAgICAgLy8gY2xvc2VQb3B1cChwb3B1cEVsZW1lbnQpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG5cbi8vIC8v0JfQkNCa0KDQq9Ci0JjQlSDQn9Ce0J/QkNCf0JAg0J3QkNCW0JDQotCY0JXQnCDQndCQINCf0JDQoNCQ0J3QltCjXG4vLyBwb3B1cHMuZm9yRWFjaCgocG9wdXBFbGVtZW50KSA9PiB7XG4vLyAgIC8v0LfQsNC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LAg0L3QsNC20LDRgtC40LUg0L3QsCDQv9Cw0YDQsNC90LbRg1xuLy8gICBwb3B1cENsb3NlT3V0UG9wdXAocG9wdXBFbGVtZW50KTtcbi8vIH0pO1xuXG5cbi8vKioqKiog0JLQkNCb0JjQlNCQ0KbQmNCvICoqKioqXG4vL9Ce0LHRj9C30LDRgtC10LvRjNC90L4g0L3Rg9C20L3QviDQv9GA0L7QsdGA0LDRgdGL0LLQsNGC0YwgKNC/0LDRgNCw0LzQtdGC0YDRiy/QsNGA0LPRg9C80LXQvdGC0Ysg0LjQtyDQmtC70LDRgWPQsC9pbmRleClcbiAgY29uc3QgdmFsaWRhdGlvbkNhcmQgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uQ29uZmlnLCBmb3JtQWRkKTtcbiAgIHZhbGlkYXRpb25DYXJkLmVuYWJsZVZhbGlkYXRpb24oKTtcbiAgY29uc3QgdmFsaWRhdGlvblByb2ZpbGUgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uQ29uZmlnLCBwb3B1cEVkaXRQcm9maWxlKTtcbiAgdmFsaWRhdGlvblByb2ZpbGUuZW5hYmxlVmFsaWRhdGlvbigpO1xuLy/QmtCe0J3QldCmINCS0JDQm9CY0JTQkNCm0JjQmFxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiQ2FyZCIsInRleHQiLCJsaW5rIiwiY29uZmlnIiwiaGFuZGxlQ2FyZENsaWNrIiwibmV3RWxlbWVudFRlbXBsYXRlIiwiX3RleHQiLCJfbGluayIsIl9jb25maWciLCJfZWxlbWVudFRleHQiLCJlbGVtZW50VGV4dCIsIl9lbGVtZW50SW1hZ2VTZWxlY3RvciIsImVsZW1lbnRJbWFnZSIsIl9lbGVtZW50VHJhc2hTZWxlY3RvciIsImVsZW1lbnRUcmFzaCIsIl9lbGVtZW50TGlrZVNlbGVjdG9yIiwiZWxlbWVudExpa2UiLCJfZWxlbWVudExpa2VBY3RpdmUiLCJlbGVtZW50TGlrZUFjdGl2ZSIsIl9uZXdFbGVtZW50SWRUZW1wbGF0ZSIsIm5ld0VsZW1lbnRJZFRlbXBsYXRlIiwiX2hhbmRsZUNhcmRDbGljayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfbmV3VG9kb0NhcmQiLCJyZW1vdmUiLCJfZWxlbWVudExpa2UiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfZWxlbWVudEltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9idXR0b25UcmFzaCIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX2xpa2VQdXNoIiwiX2dldFRlbXBsYXRlIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJfYWRkRXZlbnRMaXN0ZW5lciIsIkZvcm1WYWxpZGF0b3IiLCJ2YWxpZGF0aW9uQ29uZmlnIiwiZm9ybSIsIl9pc0Zvcm1WYWxpZCIsIl9mb3JtSW5wdXRzIiwiZXZlcnkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3BvcHVwU3VibWl0QnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaW5wdXRFbGVtZW50IiwiX2VsZW1lbnRFcnJvciIsImlkIiwiX3RleHRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiYWRkIiwiX3BvcHVwSW5wdXRFcnJvciIsImlucHV0IiwiY2hlY2tWYWxpZGl0eSIsIl9zaG93SW5wdXRFcnJvciIsIl9oaWRlSW5wdXRFcnJvciIsIkFycmF5IiwiZnJvbSIsIl9mb3JtIiwicXVlcnlTZWxlY3RvckFsbCIsIl9wb3B1cElucHV0IiwiX2J1dHRvbkZvcm1FZGl0UG9maWxlVGFibGUiLCJ2YWxpZGF0ZUJ1dHRvbiIsImZvckVhY2giLCJldnQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3BvcHVwRm9ybSIsInBvcHVwRm9ybSIsIl92YWxpZGF0aW9uQ29uZmlnIiwiX3BvcHVwRWxlbWVudEVycm9yIiwicG9wdXBFbGVtZW50RXJyb3IiLCJwb3B1cElucHV0RXJyb3IiLCJwb3B1cElucHV0IiwiYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZSIsIl92YWxpZGF0ZUZvcm1JbnB1dHMiLCJQb3B1cCIsInNlbGVjdHJQb3B1cCIsIl9zZWxlY3RyUG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjbG9zZSIsIl9idXR0b25DbG9zZSIsImVsZW1lbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwicG9wdXBzIiwiUG9wdXBXaXRoRm9ybSIsImNhbGJhY2tsU3VibWl0Rm9ybSIsIl9jYWxiYWNrbFN1Ym1pdEZvcm0iLCJfcG9wdXBzIiwiX2lucHV0cyIsIl9pbnB1dCIsInByZXZlbnREZWZhdWx0IiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJwb3B1cFBob3RvQmlnIiwicG9wdXBUaXRsZUltYWdlIiwiUG9wdXBXaXRoSW1hZ2UiLCJfcG9wdXBQaG90b0JpZyIsIl9wb3B1cFRpdGxlSW1hZ2UiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0ciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiaXRlbSIsInByZXBlbmQiLCJVc2VySW5mbyIsImVsZW1lbnROYW1lIiwiZWxlbWVudEluZm8iLCJfZWxlbWVudE5hbWUiLCJfZWxlbWVudEluZm8iLCJuYW1lIiwiaW5mbyIsImluaXRpYWxDYXJkcyIsInBvcHVwIiwidGl0bGUiLCJzdWJUaXRsZSIsInBvcHVwRWRpdFByb2ZpbGUiLCJidXR0b25FZGl0Iiwic3ViVGl0bGVFZGl0IiwicG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlIiwidGl0bGVFZGl0IiwicG9wdXBTdWJtaXRCdXR0b25zRGlzYWJsZSIsImJ1dHRvbkFkZEJ1dHRvbiIsInBvcHVwQWRkIiwidGV4dFZhbHVlUG9wdXBUaXRsZSIsInRleHRWYWx1ZVBvcHVwU3VidGl0bGUiLCJlbGVtZW50c0NhcmQiLCJwb3B1cEJpZ09wZW5JbWFnZSIsImJ1dHRvblBvcHVwQmlnSW1hZ2VDbG9zZSIsInBvcHVwQ2xvc2UiLCJwb3B1cE9wZW5lZCIsInBvcHVwVGV4dENvbG9yRm9udEdyZXkiLCJmb3JtQWRkIiwicG9wdXBTdWJtaXRCdXR0b25zIiwicG9wdXBCdXR0b25DbG9zZUVkaXRQcm9maWxlIiwicG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlSW52YWxpZCIsInBvcHVwRWRpdENsb3NlQnV0dG9uIiwicG9wdXBQaG90byIsInRlc3QiLCJ0ZXN0MiIsImdldFVzZXJJbmZvIiwiaW1hZ2UiLCJvcGVuIiwiYWRkQ2FyZCIsImRhdGEiLCJuZXdDYXJkIiwiY3JlYXRlQ2FyZCIsImNhcmRSZW5kZXIiLCJhZGRJdGVtIiwiZXZlbnQiLCJ2YWx1ZSIsInZhbGlkYXRpb25DYXJkIiwiY2xvc2VQb3B1cCIsIm9wZW5Qb3B1cCIsIm1vZGFsV2luZG93Iiwib3BlblBvcCIsImNsb3NlUG9wIiwiZXZlbnRMaXN0ZW5lciIsImxpc3RlbmVycyIsInNldEV2ZW50TGlzdGVuZXJzIiwiZW5hYmxlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25Qcm9maWxlIl0sInNvdXJjZVJvb3QiOiIifQ==