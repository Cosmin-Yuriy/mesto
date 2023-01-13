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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//Импортозамещаем )) Popup из нашей же папки

var Card = /*#__PURE__*/function () {
  function Card(data, config, handleCardClick, newElementTemplate, deleteCardServer, handleLikeClick) {
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
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._likesCoount = config.likeCounter;
    this._cardDeleteId = config.cardDelete;
    this._buttonPushYesId = config.buttonPushYes;
    this._myId = config.userId;
    this._deleteCardServer = deleteCardServer;
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
    value: function () {
      var _handleDeleteCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  this._deleteCardServer(this._cardId);
                  this._card.remove();
                  this._card = null;
                } catch (error) {
                  console.log("ошибка с удалением карточки");
                }
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function _handleDeleteCard() {
        return _handleDeleteCard2.apply(this, arguments);
      }
      return _handleDeleteCard;
    }() //метод лайк карточки
  }, {
    key: "_likePush",
    value: function _likePush() {
      this._elementLike.classList.toggle(this._elementLikeActive);
    }

    //метод слушателей для удалений card
  }, {
    key: "_listenerDeleteCard",
    value: function _listenerDeleteCard() {
      var _this = this;
      this._cardDelete = document.querySelector(this._cardDeleteId);
      this._buttonPushYes = document.querySelector(this._buttonPushYesId);
      var popupCardDelete = new _Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._cardDelete);
      popupCardDelete.setEventListeners();
      popupCardDelete.open();
      this._buttonPushYes.addEventListener("click", function () {
        _this._handleDeleteCard();
        popupCardDelete.close();
      });
    }

    //Добавляем слушатели
  }, {
    key: "_addEventListener",
    value: function _addEventListener() {
      var _this2 = this;
      //по факту заменили handleOpenPopup - не понял зачем? Какая разница?
      //Какое ТЗ - Такая и работа ХЗ
      this._elementImage.addEventListener("click", function () {
        _this2._handleCardClick(_this2._text, _this2._link);
      });

      //Удаляем карточки
      this._buttonTrash.addEventListener("click", function (event) {
        event.preventDefault();
        _this2._listenerDeleteCard();
      });

      //Лайкаем сердечки
      this._elementLike.addEventListener("click", function () {
        _this2._likePush();
        _this2._handleLikeClick(_this2._cardId);
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
      var _this3 = this;
      var myIdLikeCards = this._likes.find(function (element) {
        return element._id === _this3._myId;
      });
      return myIdLikeCards;
    }

    //МЕТОД - закрашивает мои лайки
    //Если мой айди совпадает с айди лайкнушего картинку,
    // то закрашиваем сердце  "this._elementLikeActive"
  }, {
    key: "_likeMyUserCard",
    value: function _likeMyUserCard() {
      var _this4 = this;
      var myIdLikeCard = this._likes.find(function (element) {
        return element._id === _this4._myId;
      });
      //  console.log(myIdLikeCard)
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
        info: this._elementInfo.textContent,
        avatar: this._avatar.src
        // name: this._elementName,
        // info: this._elementInfo,
      };
    }

    //который принимает новые данные пользователя и добавляет их на страницу.
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref) {
      var name = _ref.name,
        info = _ref.info,
        avatar = _ref.avatar;
      this._elementName.textContent = name;
      this._elementInfo.textContent = info;
      this._avatar.src = avatar;
      // console.log(avatar);
      // this._elementInfo = info;
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
//**************************** ИМПОРТЫ ****************************





//import initialCards from "../utils/cards.js";





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
//**************************** КЛАССЫ ****************************

//**************************** PopupWithImage ****************************
//Подключаем большие картинки
var popupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__["default"](popupBigOpenImage);
popupImage.setEventListeners();
var handleCardClick = function handleCardClick(name, link) {
  popupImage.open(name, link);
};

// const handleLikeClick = (cardId) => {
//   if (newCard.isLiked()) {
//     api.deleteLikeCard(cardId)
//     .then(res => {
//       console.log('Лайк удалился');
//     })
//   }
//  else {
//    api.putLikeCard(cardId)
//    .then(res => {
//     console.log('Лайк добавился');
//    });
//  }
// };

var deleteCardServer = function deleteCardServer(id) {
  api.deleteCard(id).then();
};
//**************************** Card ****************************
//Делаем функцию что б добавлялись карточки (МАССИВ)
function createCard(data) {
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_5__["default"](data, _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.config, handleCardClick, newElementTemplate, deleteCardServer, function (cardId) {
    if (newCard.isLiked()) {
      api.deleteLikeCard(cardId).then(function (res) {
        newCard.likeCounter(res.likes);
        console.log("Лайк удалился");
      });
    } else {
      api.putLikeCard(cardId).then(function (res) {
        newCard.likeCounter(res.likes);
        console.log("Лайк добавился");
      });
    }
  }
  //handleLikeClick
  );

  return newCard.createCard();
}

//**************************** Section ****************************

//Делаем константу и из класса, прокидываем ему ({массив с карточками, функцию добавление карточек},
//найденный селектор)
var cardRender = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  renderer: function renderer(item) {
    //хватаем метод "addItem" и вставляем в параметр функцию добавление карточек createCard(item)
    cardRender.addItem(createCard(item));
  }
  // А здесь добавляем селектор
}, elementsCard);

//****************************** ВЫЗОВ КАРТОЧЕК  **********************************

//обернули вызов в APi с данными карточек из сервера
api.getCards().then(function (cards) {
  //вызываем метод renderitems(c параметром массивом каточек)
  cardRender.renderItems(cards);
});

//создаем константу из Класса для Профайла
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, subTitle, profileAvatar);

//получаем данные о юзере с сервера
api.getUserInform().then(function (user) {
  userInfo.setUserInfo({
    name: user.name,
    info: user.about,
    avatar: user.avatar
  });
});

//**************************** PopupWithForm  UserInfo Card ****************************

//Обновление имя и описание профайла
var popupProfileEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"](popupEditProfile, function (res) {
  popupProfileEdit.buttonTextChange(true, "Сохранить", "Сохранение...");
  //отпраляем/получаем данные под рекдатированию провиля имя и описание
  api.editUserInform(res.name, res.subtitle).then(function (res) {
    //добавляем сюда и аватар, что б подгружался и он после обновления
    userInfo.setUserInfo({
      name: res.name,
      info: res.about,
      avatar: res.avatar
    });
    popupProfileEdit.buttonTextChange(false, "Сохранить", "Сохранение...");
  });
});
popupProfileEdit.setEventListeners();
buttonEdit.addEventListener("click", function () {
  inputTitleProfile.value = userInfo.getUserInfo().name;
  inputSubtitleProfile.value = userInfo.getUserInfo().info;
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
      info: res.about
    });
    avatarUpdate.buttonTextChange(false, "Сохранить", "Сохранение...");
  });
});
avatarUpdate.setEventListeners();
profileAvatar.addEventListener("click", function () {
  inputProfileLinkAvatar.value = userInfo.getUserInfo().avatar;
  avatarUpdate.open();
});

//Добавляем карточку на сервер
var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"](popupAdd, function (input) {
  //нужно что б после опять надпись "создать была"
  popupAddCard.buttonTextChange(true, "Создать", "Сохранение...");
  api.addNewCard(input.name, input.subtitle).then(function (res) {
    var infoCard = createCard({
      name: res.name,
      link: res.link,
      //здесь отправляю данные дополнительные
      owner: res.owner,
      likes: res.likes
    });
    popupAddCard.buttonTextChange(false, "Создать", "Сохранение...");
    cardRender.addItemNewcard(infoCard);
  });
});
popupAddCard._getInputValues();
popupAddCard.setEventListeners();

// 2 POPUP
// Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", function () {
  popupAddCard.open();
});
//------------------------------ КОНЕЦ ------------------------------

//**************************** ВАЛИДАЦИЯ ****************************
//Обязательно нужно пробрасывать (параметры/аргументы из Класcа/index)
var validationCard = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_6__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.validationConfig, formAdd);
validationCard.enableValidation();
var validationProfile = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_6__["default"](_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.validationConfig, popupEditProfile);
validationProfile.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTJHLEtBQUssQ0FBQytHLFFBQVEsQ0FBQyxDQUFDM04sSUFBSSxDQUFDLFVBQUNQLEdBQUcsRUFBSztJQUN2RCxJQUFNd08sUUFBUSxHQUFHdkIsVUFBVSxDQUFDO01BQzFCek0sSUFBSSxFQUFFUixHQUFHLENBQUNRLElBQUk7TUFDZFEsSUFBSSxFQUFFaEIsR0FBRyxDQUFDZ0IsSUFBSTtNQUNkO01BQ0FrRSxLQUFLLEVBQUVsRixHQUFHLENBQUNrRixLQUFLO01BQ2hCcEQsS0FBSyxFQUFFOUIsR0FBRyxDQUFDOEI7SUFDYixDQUFDLENBQUM7SUFDRndNLFlBQVksQ0FBQ04sZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUM7SUFDaEVWLFVBQVUsQ0FBQ21CLGNBQWMsQ0FBQ0QsUUFBUSxDQUFDO0VBQ3JDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGRixZQUFZLENBQUMxRSxlQUFlLEVBQUU7QUFDOUIwRSxZQUFZLENBQUMvSixpQkFBaUIsRUFBRTs7QUFFaEM7QUFDQTtBQUNBcUgsZUFBZSxDQUFDbkgsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDOUM2SixZQUFZLENBQUM5SixJQUFJLEVBQUU7QUFDckIsQ0FBQyxDQUFDO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBLElBQU1rSyxjQUFjLEdBQUcsSUFBSXhJLG9FQUFhLENBQUNDLDZEQUFnQixFQUFFcUcsT0FBTyxDQUFDO0FBQ25Fa0MsY0FBYyxDQUFDQyxnQkFBZ0IsRUFBRTtBQUNqQyxJQUFNQyxpQkFBaUIsR0FBRyxJQUFJMUksb0VBQWEsQ0FBQ0MsNkRBQWdCLEVBQUVtRixnQkFBZ0IsQ0FBQztBQUMvRXNELGlCQUFpQixDQUFDRCxnQkFBZ0IsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKGhvc3QsIHRva2VuKSB7XG4gICAgdGhpcy5faG9zdCA9IGhvc3Q7XG4gICAgdGhpcy5fdG9rZW4gPSB0b2tlbjtcbiAgICB0aGlzLl9jaGVja0Vyb3JySnNvbiA9IHRoaXMuX2NoZWNrRXJvcnJKc29uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fX2dldEhlYWRlciA9IHRoaXMuX2dldEhlYWRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy/QvNC10YLQvtC0INCx0YPQtNC10YIg0LLRi9C00LDQstCw0YLRjCDQv9GA0L7QvNC40YEg0LXRgdC70Lgg0L7Quiwg0LjQu9C4INC/0L7QutCw0LfRi9Cy0LDRgtGMINC+0YjQuNCx0LrRg1xuICBfY2hlY2tFcm9yckpzb24ocmVzKSB7XG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcItCe0YjQuNCx0LrQsCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtVwiKTtcbiAgfVxuXG4gIC8v0LzQtdGC0L7QtCDQsdGD0LTQtdGCINCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNGC0YzRgdGPXG4gIF9nZXRIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX3Rva2VuLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfTtcbiAgfVxuXG4gIC8v0LzQtdGC0L7QtCDQv9C+0LvRg9GH0LDQtdGC0YHRjyDQuNC90YTQviDQviDRjtC30LXRgNC1XG4gIGdldFVzZXJJbmZvcm0oKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L3VzZXJzL21lYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5fX2dldEhlYWRlcigpLFxuICAgIH0pLnRoZW4odGhpcy5fY2hlY2tFcm9yckpzb24pO1xuICB9XG5cbi8v0LzQtdGC0L7QtCDQv9C+0LvRg9GH0LDQtdGCINC60LDRgNGC0YtcbiAgZ2V0Q2FyZHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5fX2dldEhlYWRlcigpLFxuICAgIH0pLnRoZW4odGhpcy5fY2hlY2tFcm9yckpzb24pO1xuICB9XG5cbi8v0JzQtdGC0L7QtCDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDQuNC30LzQtdC90LXQvdC40Y8g0Y7Qt9C10YDQsFxuICBlZGl0VXNlckluZm9ybShuYW1lLCBhYm91dCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9ob3N0fS91c2Vycy9tZWAsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5fX2dldEhlYWRlcigpLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBhYm91dDogYWJvdXQsXG4gICAgICB9KSxcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrRXJvcnJKc29uKTtcbiAgfVxuXG4gIC8v0LzQtdGC0L7QtCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQvdC+0LLQvtC5INC60LDRgNGC0L7Rh9C60LhcbiAgYWRkTmV3Q2FyZChuZXdOYW1lLCBuZXdMaW5rKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX19nZXRIZWFkZXIoKSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZTogbmV3TmFtZSxcbiAgICAgICAgbGluazogbmV3TGluayxcbiAgICAgICAgLy8gb3duZXJfaWQ6IFwiMFwiLFxuICAgICAgfSksXG4gICAgfSkudGhlbih0aGlzLl9jaGVja0Vyb3JySnNvbik7XG4gIH1cblxuICAvL9C80LXRgtC+0LQg0YPQtNCw0LvQtdC90LjRjyDQutCw0YDRgtC+0YfQutC4XG4gIGRlbGV0ZUNhcmQoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX19nZXRIZWFkZXIoKSxcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrRXJvcnJKc29uKTtcbiAgfVxuXG4gIC8v0LzQtdGC0L7QtCDQu9Cw0LnQutCwINC60LDRgNGC0L7Rh9C60LhcbiAgcHV0TGlrZUNhcmQoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2hvc3R9L2NhcmRzLyR7Y2FyZElkfS9saWtlc2AsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX19nZXRIZWFkZXIoKSxcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrRXJvcnJKc29uKTtcbiAgfVxuXG4gIC8v0LzQtdGC0L7QtCDRg9C00LDQu9C10L3QuNGPINC70LDQudC60LAg0LrQsNGA0YLQvtGH0LrQuFxuICBkZWxldGVMaWtlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5faG9zdH0vY2FyZHMvJHtjYXJkSWR9L2xpa2VzYCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5fX2dldEhlYWRlcigpLCBcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrRXJvcnJKc29uKTtcbiAgfVxuXG4gIC8v0L7QsdC90L7QstC70LXQvdC40LUg0LDQstCw0YLQsNGA0LBcbiAgdXBkYXRlQXZhdGFyKGF2YXRhcikge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9ob3N0fS91c2Vycy9tZS9hdmF0YXJgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX19nZXRIZWFkZXIoKSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYXZhdGFyLFxuICAgICAgfSksXG4gICAgfSkudGhlbih0aGlzLl9jaGVja0Vyb3JySnNvbik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBpO1xuIiwiLy/QmNC80L/QvtGA0YLQvtC30LDQvNC10YnQsNC10LwgKSkgUG9wdXAg0LjQtyDQvdCw0YjQtdC5INC20LUg0L/QsNC/0LrQuFxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZGF0YSxcbiAgICBjb25maWcsXG4gICAgaGFuZGxlQ2FyZENsaWNrLFxuICAgIG5ld0VsZW1lbnRUZW1wbGF0ZSxcbiAgICBkZWxldGVDYXJkU2VydmVyLFxuICAgIGhhbmRsZUxpa2VDbGlja1xuICApIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3RleHQgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGRhdGEubGluaztcbiAgICAvLyAgdGhpcy51c2VySWQgPSBkYXRhLm93bmVyLl9pZFxuICAgIHRoaXMuX2xpa2VzID0gZGF0YS5saWtlcztcbiAgICB0aGlzLl9jYXJkSWQgPSBkYXRhLl9pZDtcbiAgICB0aGlzLl9lbGVtZW50VGV4dCA9IGNvbmZpZy5lbGVtZW50VGV4dDtcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2VTZWxlY3RvciA9IGNvbmZpZy5lbGVtZW50SW1hZ2U7XG4gICAgdGhpcy5fZWxlbWVudFRyYXNoU2VsZWN0b3IgPSBjb25maWcuZWxlbWVudFRyYXNoO1xuICAgIHRoaXMuX2VsZW1lbnRMaWtlU2VsZWN0b3IgPSBjb25maWcuZWxlbWVudExpa2U7XG4gICAgdGhpcy5fZWxlbWVudExpa2VBY3RpdmUgPSBjb25maWcuZWxlbWVudExpa2VBY3RpdmU7XG4gICAgdGhpcy5fbmV3RWxlbWVudElkVGVtcGxhdGUgPSBjb25maWcubmV3RWxlbWVudElkVGVtcGxhdGU7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcbiAgICB0aGlzLl9saWtlc0Nvb3VudCA9IGNvbmZpZy5saWtlQ291bnRlcjtcbiAgICB0aGlzLl9jYXJkRGVsZXRlSWQgPSBjb25maWcuY2FyZERlbGV0ZTtcbiAgICB0aGlzLl9idXR0b25QdXNoWWVzSWQgPSBjb25maWcuYnV0dG9uUHVzaFllcztcbiAgICB0aGlzLl9teUlkID0gY29uZmlnLnVzZXJJZDtcbiAgICB0aGlzLl9kZWxldGVDYXJkU2VydmVyID0gZGVsZXRlQ2FyZFNlcnZlcjtcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICAvL9CU0L7RgdGC0LDQtdC8IHRlbXBsYXRlINC4INC60LvQvtC90LjRgNGD0LXQvCAoY29uZmlnLm5ld0VsZW1lbnRJZFRlbXBsYXRlINC90LUg0LHRg9C00LXRgiDRgNCw0LHQvtGC0LDRgtGMKVxuICAgIHJldHVybiBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fbmV3RWxlbWVudElkVGVtcGxhdGUpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cblxuICAvL9C80LXRgtC+0LQg0YPQtNCw0LvQtdC90LjQtSDQutCw0YDRgtC+0YfQutC4XG4gIGFzeW5jIF9oYW5kbGVEZWxldGVDYXJkKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9kZWxldGVDYXJkU2VydmVyKHRoaXMuX2NhcmRJZCk7XG4gICAgICB0aGlzLl9jYXJkLnJlbW92ZSgpO1xuICAgICAgdGhpcy5fY2FyZCA9IG51bGw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi0L7RiNC40LHQutCwINGBINGD0LTQsNC70LXQvdC40LXQvCDQutCw0YDRgtC+0YfQutC4XCIpO1xuICAgIH1cbiAgfVxuXG4gIC8v0LzQtdGC0L7QtCDQu9Cw0LnQuiDQutCw0YDRgtC+0YfQutC4XG4gIF9saWtlUHVzaCgpIHtcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuX2VsZW1lbnRMaWtlQWN0aXZlKTtcbiAgfVxuXG4gIC8v0LzQtdGC0L7QtCDRgdC70YPRiNCw0YLQtdC70LXQuSDQtNC70Y8g0YPQtNCw0LvQtdC90LjQuSBjYXJkXG4gIF9saXN0ZW5lckRlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy5fY2FyZERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZERlbGV0ZUlkKTtcbiAgICB0aGlzLl9idXR0b25QdXNoWWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9idXR0b25QdXNoWWVzSWQpO1xuICAgIGNvbnN0IHBvcHVwQ2FyZERlbGV0ZSA9IG5ldyBQb3B1cCh0aGlzLl9jYXJkRGVsZXRlKTtcbiAgICBwb3B1cENhcmREZWxldGUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBwb3B1cENhcmREZWxldGUub3BlbigpO1xuICAgIHRoaXMuX2J1dHRvblB1c2hZZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoKTtcbiAgICAgIHBvcHVwQ2FyZERlbGV0ZS5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy/QlNC+0LHQsNCy0LvRj9C10Lwg0YHQu9GD0YjQsNGC0LXQu9C4XG4gIF9hZGRFdmVudExpc3RlbmVyKCkge1xuICAgIC8v0L/QviDRhNCw0LrRgtGDINC30LDQvNC10L3QuNC70LggaGFuZGxlT3BlblBvcHVwIC0g0L3QtSDQv9C+0L3Rj9C7INC30LDRh9C10Lw/INCa0LDQutCw0Y8g0YDQsNC30L3QuNGG0LA/XG4gICAgLy/QmtCw0LrQvtC1INCi0JcgLSDQotCw0LrQsNGPINC4INGA0LDQsdC+0YLQsCDQpdCXXG4gICAgdGhpcy5fZWxlbWVudEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sodGhpcy5fdGV4dCwgdGhpcy5fbGluayk7XG4gICAgfSk7XG5cbiAgICAvL9Cj0LTQsNC70Y/QtdC8INC60LDRgNGC0L7Rh9C60LhcbiAgICB0aGlzLl9idXR0b25UcmFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fbGlzdGVuZXJEZWxldGVDYXJkKCk7XG4gICAgfSk7XG5cbiAgICAvL9Cb0LDQudC60LDQtdC8INGB0LXRgNC00LXRh9C60LhcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fbGlrZVB1c2goKTtcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayh0aGlzLl9jYXJkSWQpO1xuICAgIH0pO1xuICB9XG5cbiAgX2NoZWNrVXNlcklkKCkge1xuICAgIGlmICh0aGlzLmRhdGEub3duZXIuX2lkICE9PSB0aGlzLl9teUlkKSB7XG4gICAgICB0aGlzLl9jYXJkXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2VsZW1lbnRUcmFzaFNlbGVjdG9yKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImVsZW1lbnRfX3RyYXNoX2hpZGRlblwiKTtcbiAgICB9XG4gIH1cblxuICBpc0xpa2VkKCl7XG4gICAgY29uc3QgbXlJZExpa2VDYXJkcyA9IHRoaXMuX2xpa2VzLmZpbmQoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5faWQgPT09IHRoaXMuX215SWRcbiAgICApO1xuICAgIHJldHVybiBteUlkTGlrZUNhcmRzO1xuICB9XG5cblxuICAgIC8v0JzQldCi0J7QlCAtINC30LDQutGA0LDRiNC40LLQsNC10YIg0LzQvtC4INC70LDQudC60LhcbiAgICAvL9CV0YHQu9C4INC80L7QuSDQsNC50LTQuCDRgdC+0LLQv9Cw0LTQsNC10YIg0YEg0LDQudC00Lgg0LvQsNC50LrQvdGD0YjQtdCz0L4g0LrQsNGA0YLQuNC90LrRgyxcbiAgICAvLyDRgtC+INC30LDQutGA0LDRiNC40LLQsNC10Lwg0YHQtdGA0LTRhtC1ICBcInRoaXMuX2VsZW1lbnRMaWtlQWN0aXZlXCJcbiAgX2xpa2VNeVVzZXJDYXJkKCkge1xuICAgIGNvbnN0IG15SWRMaWtlQ2FyZCA9IHRoaXMuX2xpa2VzLmZpbmQoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5faWQgPT09IHRoaXMuX215SWRcbiAgICApO1xuICAvLyAgY29uc29sZS5sb2cobXlJZExpa2VDYXJkKVxuICAgIGlmIChteUlkTGlrZUNhcmQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRMaWtlLmNsYXNzTGlzdC5hZGQodGhpcy5fZWxlbWVudExpa2VBY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gICAgLy/QvNC10YLQvtC0INGB0YfQuNGC0LDQtdGCINC4INC00L7QsdCw0LLQu9GP0LXRgiDQu9Cw0LnQutC4XG4gICAgbGlrZUNvdW50ZXIoYWRkTGlrZXMpe1xuICAgICAgdGhpcy5fbGlrZXMgPSBhZGRMaWtlcztcbiAgICAvL9Cy0YvRgtCw0YHQutC40LLQsNC10Lwg0YHRh9C10YLRh9C40Log0LvQsNC50LrQvtCyICjQtdGB0LvQuCDRgdC00LXQu9Cw0YLRjCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLi4uLiDRgtC+INCx0YPQtNC10YIg0LLRi9C00LDQstCw0YLRjCDQvtGI0LjQsdC60YMpXG4gICAgdGhpcy5fbGlrZUNvdW50ZXIgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IodGhpcy5fbGlrZXNDb291bnQpO1xuICAgIHRoaXMuX2xpa2VDb3VudGVyLnRleHRDb250ZW50ID0gdGhpcy5fbGlrZXMubGVuZ3RoO1xuICAgIH1cbiAgLy/QodC+0LfQtNCw0LXQvCDQutCw0YDRgtC+0YfQutC4XG5cbiAgY3JlYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9jYXJkID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IodGhpcy5fZWxlbWVudFRleHQpLnRleHRDb250ZW50ID0gdGhpcy5fdGV4dDtcblxuICAgIC8v0KLQsNC60LbQtSDQtNC10LvQsNC10Lwg0LfQtNC10YHRjCwg0YPQutCw0LfRi9Cy0LDQtdC8LCDRh9GC0L4g0L3Rg9C20L3QviDQt9Cw0LrQuNC90YPRgtGMINCyIHNyYyDQuCDRgtGD0LTQsCDQutC40LTQsNC10Lwg0YHRgdGL0LvQutGDXG4gICAgdGhpcy5fZWxlbWVudEltYWdlID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKHRoaXMuX2VsZW1lbnRJbWFnZVNlbGVjdG9yKTtcblxuICAgIHRoaXMuX2J1dHRvblRyYXNoID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKHRoaXMuX2VsZW1lbnRUcmFzaFNlbGVjdG9yKTtcbiAgICB0aGlzLl9lbGVtZW50TGlrZSA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3Rvcih0aGlzLl9lbGVtZW50TGlrZVNlbGVjdG9yKTtcblxuICBcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2UuYWx0ID0gdGhpcy5fdGV4dDtcbiAgICBcbiAgICAvL9C80LXRgtC+0LQg0YHRh9C40YLQsNC10YIg0Lgg0LTQvtCx0LDQstC70Y/QtdGCINC70LDQudC60LhcbiAgICB0aGlzLmxpa2VDb3VudGVyKHRoaXMuX2xpa2VzKTtcbiAgICAvL9C80LXRgtC+0LQg0LfQsNC60YDQsNGI0LjQstCw0LXRgiDQvNC+0Lgg0LvQsNC50LrQuFxuICAgIHRoaXMuX2xpa2VNeVVzZXJDYXJkKCk7XG4gICAgLy/Qv9GA0L7QstC10YDQutCwINC00LvRjyDQutC+0YDQt9C40L3RiyAtINC/0L7QutCw0LfRi9Cy0LDQtdGCINC00LvRjyDRgdCy0L7QuNGFINC60LDRgNGC0L7Rh9C10LpcbiAgICB0aGlzLl9jaGVja1VzZXJJZCgpO1xuICAgIC8v0JLRi9C30YvQstCw0LXQvCDRgdC70YPRiNCw0YLQtdC70LXQuVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXIoKTtcblxuICAgIHJldHVybiB0aGlzLl9jYXJkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvL9Ck0KPQndCa0KbQmNCYINCS0JDQm9CY0JTQndCe0KHQotCYXG5jbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgLy/QntCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC90YPQttC90L4g0L/RgNC+0LHRgNCw0YHRi9Cy0LDRgtGMICjQv9Cw0YDQsNC80LXRgtGA0Ysv0LDRgNCz0YPQvNC10L3RgtGLINC40Lcg0JrQu9Cw0YHQsC9pbmRleClcbiAgY29uc3RydWN0b3IodmFsaWRhdGlvbkNvbmZpZywgZm9ybSkge1xuICAgIHRoaXMuX3BvcHVwRm9ybSA9IHZhbGlkYXRpb25Db25maWcucG9wdXBGb3JtO1xuICAgIHRoaXMuX3ZhbGlkYXRpb25Db25maWcgPSB2YWxpZGF0aW9uQ29uZmlnO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudEVycm9yID0gdmFsaWRhdGlvbkNvbmZpZy5wb3B1cEVsZW1lbnRFcnJvcjtcbiAgICB0aGlzLl9wb3B1cElucHV0RXJyb3IgPSB2YWxpZGF0aW9uQ29uZmlnLnBvcHVwSW5wdXRFcnJvcjtcbiAgICB0aGlzLl9wb3B1cElucHV0ID0gdmFsaWRhdGlvbkNvbmZpZy5wb3B1cElucHV0O1xuICAgIHRoaXMuX2J1dHRvbkZvcm1FZGl0UG9maWxlVGFibGUgPVxuICAgICAgdmFsaWRhdGlvbkNvbmZpZy5idXR0b25Gb3JtRWRpdFBvZmlsZVRhYmxlO1xuICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xuICB9XG5cbiAgdmFsaWRhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgLy/Qv9GA0L7QsdC10LPQsNC10LzRgdGPINC/0L4g0LjQvdC/0YPRgtGDINGE0L7RgNC80YsgXCJmb3JtSW5wdXRzXCIg0LHQtdGA0LXQvCDQsiDQvdC40YUgeyB2YWxpZGl0eSB9INC4INC/0YDQvtCy0LXRgNGP0LXQvCDQvdCwICB2YWxpZGl0eS52YWxpZCDRgtGA0YMg0LjQu9C4INGE0L7Qu9GBXG4gICAgdGhpcy5faXNGb3JtVmFsaWQgPSB0aGlzLl9mb3JtSW5wdXRzLmV2ZXJ5KFxuICAgICAgKHsgdmFsaWRpdHkgfSkgPT4gdmFsaWRpdHkudmFsaWRcbiAgICApO1xuICAgIC8v0JXRgdC70Lgg0YTQvtGA0LzQsCDQstCw0LvQuNC00L3QsNGPINCy0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDXG4gICAgaWYgKHRoaXMuX2lzRm9ybVZhbGlkKSB7XG4gICAgICB0aGlzLl9wb3B1cFN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIC8v0JXRgdC70Lgg0YTQvtGA0LzQsCDQvdC1INCy0LDQu9C40LTQvdCw0Y8g0L7RgtC60LvRjtGH0LDQtdC8INC60L3QvtC/0LrRg1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3B1cFN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBfc2hvd0lucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuICAgIHRoaXMuX3RleHRFcnJvciA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9wb3B1cElucHV0RXJyb3IpO1xuICAgIHRoaXMuX2VsZW1lbnRFcnJvci50ZXh0Q29udGVudCA9IHRoaXMuX3RleHRFcnJvcjtcbiAgfTtcblxuICBfaGlkZUlucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fcG9wdXBJbnB1dEVycm9yKTtcbiAgICB0aGlzLl9lbGVtZW50RXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9O1xuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoaW5wdXQpID0+IHtcbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dCk7XG4gICAgfVxuICB9O1xuICBcbiAgLy/QntCR0KDQkNCR0J7QotCn0JjQmtCYINCS0JDQm9CY0JTQndCe0KHQotCYXG4gIF92YWxpZGF0ZUZvcm1JbnB1dHMgPSAoKSA9PiB7XG4gICAgLy/RgdC+0LfQtNCw0LXQvCDQvNCw0YHRgdC40LIg0LjQtyDQuNC90L/Rg9GC0L7QslxuICAgIHRoaXMuX2Zvcm1JbnB1dHMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3BvcHVwSW5wdXQpXG4gICAgKTtcbiAgICAvL9C+0L/RgNC10LTQtdC70Y/QtdC8INC60L3QvtC/0LrRgyBcItGB0L7RhdGA0LDQvdC40YLRjC/QvtGC0L/RgNCw0LLQuNGC0YxcIiDQsiDQv9GA0L7RhNC40LvQtVxuICAgIHRoaXMuX3BvcHVwU3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZVxuICAgICk7XG4gICAgdGhpcy52YWxpZGF0ZUJ1dHRvbigpO1xuICBcbiAgICB0aGlzLl9mb3JtSW5wdXRzLmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgLy/QstC10YjQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINC90LAg0LjQvdC/0YPRgtGLICjRjdC70LXQvNC10L3RgtGLINC80LDRgdGB0LjQstCwIC/QuNC90L/Rg9GC0YsvIFwidGhpcy5fZm9ybUlucHV0c1wiKVxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlQnV0dG9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX3ZhbGlkYXRlRm9ybUlucHV0cygpOyBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiLyog0LrQu9Cw0YHRgSBQb3B1cCwg0LrQvtGC0L7RgNGL0Lkg0L7RgtCy0LXRh9Cw0LXRgiDQt9CwINC+0YLQutGA0YvRgtC40LUg0Lgg0LfQsNC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LBcbtCf0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC10LTQuNC90YHRgtCy0LXQvdC90YvQuSDQv9Cw0YDQsNC80LXRgtGAIOKAlCDRgdC10LvQtdC60YLQvtGAINC/0L7Qv9Cw0L/QsCAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cEVsZW1lbnQsICkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IHBvcHVwRWxlbWVudDtcbiAgICAvKiAhISEg0JLQkNCW0J3QniDQlNC10LvQsNC10Lwg0L/RgNC40LLRj9C30LrRgyDRgSDQv9C+0LzQvtGJ0YzRjiDQvNC10YLQvtC00LAgXCJiaW5kXCIg0LHQtdC3INC90LXQs9C+INC90LUg0LHRg9C00LXRglxuICAgINC/0LXRgNC10LTQvtCy0LDRgtGM0YHRjyDQsiDQtNGA0YPQs9C+0Lkg0LzQtdGC0L7QtCwg0YLQsNC8INC70LjRiNGMINCx0YPQtNC10YIgXCJ1bmRlZmluZWRcIiAqL1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9idXR0b25TdWJtaXRQb3B1cCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19zdWJtaXQtYnV0dG9uXCIpO1xuICB9XG5cblxuICAvLyDQvtGC0LLQtdGH0LDRjtGCINC30LAg0L7RgtC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LBcbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcbiAgICAvKtC+0LHRj9C30LDRgtC10LvRjNC90L4g0L3QsNC00L4g0LTQtdC70LDRgtGMINC/0YDQuNCy0Y/Qt9C60YMg0YEg0L/QvtC80L7RidGM0Y4g0LzQtdGC0L7QtNCwIFwiYmluZFwiINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtVxuICAgINCi0LDQutC20LUg0LzQvtC20L3QviDQv9GA0L7RgdGC0L4g0LfQtNC10YHRjCDQvdCw0L/QuNGB0LDRgtGMIChldnQpID0+IHRoaXMuX2hhbmRsZUVzY0Nsb3NlKGV2dCkgKi9cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICAvLyDQvtGC0LLQtdGH0LDRjtGCINC30LDQunDRi9GC0LjQtSDQv9C+0L/QsNC/0LBcbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgLy/RgdC+0LTQtdGA0LbQuNGCINC70L7Qs9C40LrRgyDQt9Cw0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsCDQutC70LDQstC40YjQtdC5IEVzYy5cbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG5cbiAgLyog0LTQvtCx0LDQstC70Y/QtdGCINGB0LvRg9GI0LDRgtC10LvRjCDQutC70LjQutCwINC40LrQvtC90LrQtSDQt9Cw0LrRgNGL0YLQuNGPINC/0L7Qv9Cw0L/QsC5cbiAgINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgtCw0LrQttC1INC30LDQutGA0YvQstCw0LXRgtGB0Y8g0L/RgNC4INC60LvQuNC60LUg0L3QsCDQt9Cw0YLQtdC80L3RkdC90L3Rg9GOXG4gICDQvtCx0LvQsNGB0YLRjCDQstC+0LrRgNGD0LMg0YTQvtGA0LzRiyAqL1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL9C30LDQutGA0YvRgtGMINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60YDQtdGB0YLQuNC6XG4gICAgdGhpcy5fYnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19jbG9zZS1pY29uXCIpO1xuICAgIHRoaXMuX2J1dHRvbkNsb3NlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvL9C30LDQutGA0YvRgtC40LUg0L3QsCDQv9Cw0YDQsNC90LbRg1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGJ1dHRvblRleHRDaGFuZ2Uoc2F2ZSwgdGV4dEJ1dHRvbiwgdGV4dFRpbWVvdXRTYXZlKSB7XG4gICAgaWYgKHNhdmUpIHtcbiAgICAgIHRoaXMuX2J1dHRvblN1Ym1pdFBvcHVwLnRleHRDb250ZW50ID0gdGV4dFRpbWVvdXRTYXZlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idXR0b25TdWJtaXRQb3B1cC50ZXh0Q29udGVudCA9IHRleHRCdXR0b247XG4gICAgfVxuICB9XG5cblxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cEVsZW1lbnQsIGNhbGJhY2tsU3VibWl0Rm9ybSkge1xuICAgIHN1cGVyKHBvcHVwRWxlbWVudCk7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gcG9wdXBFbGVtZW50O1xuICAgIHRoaXMuX2NhbGJhY2tsU3VibWl0Rm9ybSA9IGNhbGJhY2tsU3VibWl0Rm9ybTtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKTtcbiAgfVxuICBcbiAgLy/RgdC+0LHQuNGA0LDQtdGCINC00LDQvdC90YvQtSDQstGB0LXRhSDQv9C+0LvQtdC5INGE0L7RgNC80Ysg0Lgg0YPQutC70LDQtNGL0LLQtdGCINC40YUg0LIg0L7QsdGK0LXQutGCICjQtNCw0L3QvdGL0LUgbmFtZSDQuCBzdWJ0aXRsZSkuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goaW5wdXQgPT4gdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5fZm9ybVZhbHVlcztcbiAgfVxuXG4gIC8v0J/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0LXRgiDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LzQtdGC0L7QtCBzZXRFdmVudExpc3RlbmVycy5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy/Qn9C10YDQtdC30LDQv9C40YHRi9Cy0LDQtdGCINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQvNC10YLQvtC0IHNldEV2ZW50TGlzdGVuZXJzLlxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fY2FsYmFja2xTdWJtaXRGb3JtKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy/Qn9C10YDQtdC30LDQv9C40YHRi9Cy0LDQtdGCINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQvNC10YLQvtC0IGNsb3NlLCDRgtCw0LpcbiAgLy/QutCw0Log0L/RgNC4INC30LDQutGA0YvRgtC40Lgg0L/QvtC/0LDQv9CwINGE0L7RgNC80LAg0LTQvtC70LbQvdCwINC10YnRkSDQuCDRgdCx0YDQsNGB0YvQstCw0YLRjNGB0Y9cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cbn1cbiIsIi8qINCa0LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L3QsNGB0LvQtdC00YPQtdGCINC+0YIgUG9wdXAuINCt0YLQvtGCINC60LvQsNGB0YEg0LTQvtCx0LDQstC70Y/QtdGCINC90L7QstGL0LUg0LTQsNC90L3Ri9C1INCyXG4g0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC80LXRgtC+0LQgb3Blbi4g0JIg0LzQtdGC0L7QtNC1IG9wZW4g0LrQu9Cw0YHRgdCwIFBvcHVwV2l0aEltYWdlXG4gINC90YPQttC90L4g0LLRgdGC0LDQstC70Y/RgtGMIDMg0LLQtdGJ0LhcblxuICAxKSDQodGB0YvQu9C60YMg0L3QsCDQutCw0YDRgtC40L3QutGDID0+IHRoaXMuX3BvcHVwUGhvdG9CaWcuc3JjID0gbGluaztcbiAgMikg0KLQtdC60YHRgiBhdGwg0LrQsNGA0YLQuNC90LrQuCA9PiAgdGhpcy5fcG9wdXBQaG90b0JpZy5hbHQgPSB0ZXh0O1xuICAzKSDQotC10LrRgdGCINC+0L/QuNGB0LDQvdC40LUg0L/QvtC0INC60LDRgNGC0LjQvdC60L7QuSA9PiB0aGlzLl9wb3B1cFRpdGxlSW1hZ2UgPSBwb3B1cFRpdGxlSW1hZ2U7XG4gICAqL1xuXG4gIC8v0JjQvNC/0L7RgNGC0L7Qt9Cw0LzQtdGJ0LDQtdC8ICkpIFBvcHVwINC40Lcg0L3QsNGI0LXQuSDQttC1INC/0LDQv9C60LhcbiAgIGltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcblxuICAgLy/QoNCw0YHRiNC40YDRj9C10Lwg0YfRgtC+INCxINC00L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQtSDQt9C90LDRh9C10L3QuNGPXG4gICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcblxuICAgIGNvbnN0cnVjdG9yKHBvcHVwRWxlbWVudCkge1xuICAgICAgc3VwZXIgKHBvcHVwRWxlbWVudCk7XG4gICAgICBcbiAgICAgIHRoaXMuX3BvcHVwUGhvdG9CaWcgPSBwb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19waG90bycpO1xuICAgICAgdGhpcy5fcG9wdXBUaXRsZUltYWdlID0gcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGl0bGUtaW1nJyk7XG4gICAgfVxuXG4gIC8vINC+0YLQstC10YfQsNGO0YIg0LfQsCDQvtGC0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QsFxuICBvcGVuKHRleHQsIGxpbmspIHtcbiAgICAvL9C90LDQv9GA0LDQstC70Y/QtdC8INC00LDQvdC90YvQtSDQsiDQvtGC0LrRgNGL0YLRi9C5IFBvcHVwINC00LvRjyDQsdC+0LvRjNGI0L7QuSDQutCw0YDRgtC40L3QutC4IGxpbmsg0LggdGV4dFxuICAgIHRoaXMuX3BvcHVwUGhvdG9CaWcuc3JjID0gbGluaztcbiAgICB0aGlzLl9wb3B1cFBob3RvQmlnLmFsdCA9IHRleHQ7XG4gICAgdGhpcy5fcG9wdXBUaXRsZUltYWdlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH0gXG5cbn0iLCIvL9C+0YLQstC10YfQsNC10YIg0LfQsCDQvtGC0YDQuNGB0L7QstC60YMg0Y3Qu9C10LzQtdC90YLQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtVxuXG4vKiAg0J/QtdGA0LLRi9C8INC/0LDRgNCw0LzQtdGC0YDQvtC8INC60L7QvdGB0YLRgNGD0LrRgtC+0YDQsCDQv9GA0LjQvdC40LzQsNC10YIg0L7QsdGK0LXQutGCINGBINC00LLRg9C80Y8g0YHQstC+0LnRgdGC0LLQsNC80Lg6IGl0ZW1zINC4IHJlbmRlcmVyLiBcbiAg0KHQstC+0LnRgdGC0LLQviBpdGVtcyDigJQg0Y3RgtC+INC80LDRgdGB0LjQsiDQtNCw0L3QvdGL0YUgKNCSINC90LDRiNC10Lwg0YHQu9GD0YfQsNC1INC30LTQtdGB0Ywg0Y3RgtC+INC60LDRgNGC0L7Rh9C60Lgg0LrQvtGC0L7RgNGL0LUgXG4gICAg0L3QsNGF0L7QtNC40YLRgdGPINCyIGNhcmRzKSwg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDQtNC+0LHQsNCy0LjRgtGMINC90LAg0YHRgtGA0LDQvdC40YbRgyDQv9GA0Lgg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcbiAgINC60LvQsNGB0YHQsC4g0KHQstC+0LnRgdGC0LLQviByZW5kZXJlciDigJQg0Y3RgtC+INGE0YPQvdC60YbQuNGPLCDQutC+0YLQvtGA0LDRjyDQvtGC0LLQtdGH0LDQtdGCINC30LAg0YHQvtC30LTQsNC90LjQtSDQuCDQvtGC0YDQuNGB0L7QstC60YMg0LTQsNC90L3Ri9GFXG4gICAg0L3QsCDRgdGC0YDQsNC90LjRhtC1LlxuICDQktGC0L7RgNC+0Lkg0L/QsNGA0LDQvNC10YLRgCDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LAg4oCUINGB0LXQu9C10LrRgtC+0YAg0LrQvtC90YLQtdC50L3QtdGA0LAsINCyINC60L7RgtC+0YDRi9C5INC90YPQttC90L4g0LTQvtCx0LDQstC70Y/RgtGMIFxuICDRgdC+0LfQtNCw0L3QvdGL0LUg0Y3Qu9C10LzQtdC90YLRiy4gKi9cbmNsYXNzIFNlY3Rpb24ge1xuXG4gIGNvbnN0cnVjdG9yKHtpdGVtcyxyZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdHIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lclNlbGVjdHI7XG4gIH1cblxuXG4gIC8vINC+0YLQstC10YfQsNC10YIg0LfQsCDQvtGC0YDQuNGB0L7QstC60YMg0LLRgdC10YUg0Y3Qu9C10LzQtdC90YLQvtCyLiBcbiAgLy8g0J7RgtGA0LjRgdC+0LLQutCwINC60LDQttC00L7Qs9C+INC+0YLQtNC10LvRjNC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LAg0LTQvtC70LbQvdCwIFxuICAvLyDQvtGB0YPRidC10YHRgtCy0LvRj9GC0YzRgdGPINGE0YPQvdC60YbQuNC10LkgcmVuZGVyZXJcbiAgLy8g0L/QviDRhNCw0LrRgtGDINGF0LLQsNGC0LDQvdGD0LvQuCDQuNC3INC40L3QtNC10LrRgS5qcyDRhNGD0L3QutGG0LjRjiAg0Lgg0LfQsNC/0LjRhdC90YPQu9C4INGB0Y7QtNCwXG4gIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9IFxuXG4gIC8vINCh0L7QtNC10YDQttC40YIg0L/Rg9Cx0LvQuNGH0L3Ri9C5INC80LXRgtC+0LQgYWRkSXRlbSwg0LrQvtGC0L7RgNGL0LkgXG4gIC8v0L/RgNC40L3QuNC80LDQtdGCIERPTS3RjdC70LXQvNC10L3RgiDQuCDQtNC+0LHQsNCy0LvRj9C10YIg0LXQs9C+INCyINC60L7QvdGC0LXQudC90LXRgFxuICAvLyDQt9C00LXRgdGMINC80Ysg0LHRg9C00LXQvCDQtNC+0LHQsNCy0LvRj9GC0Ywg0LrQsNGA0YLQvtGH0LrQuCDQsiDQvdCw0YfQsNC70L4gXG4gIC8vINCyINCw0YDQs9GD0LzQtdC90YIg0LHRg9C00LXRgiDQstGB0YLQsNCy0LvRj9GC0YzRgdGPINCk0YPQvdC60YbQuNGPINC60LDRgNGC0L7Rh9C60LAg0YEg0LTQvtCx0LDQstC70LXQvdC40LXQvCDQtNCw0L3QvdGL0YUg0L3QsCDRgdCw0LnRglxuICBhZGRJdGVtKGl0ZW0pe1xuICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmQoaXRlbSk7XG4gIH1cblxuICAvL9C00LvRjyDQvdC+0LLRi9GFINC60LDRgNGCLCDRh9GC0L4g0LEg0LLQstC10YDRhdGDINC/0L7Rj9Cy0LvRj9C70L7RgdGMKNC/0L7QutCwINGC0L7Qu9GM0LrQviDRgtCw0LopXG4gIGFkZEl0ZW1OZXdjYXJkKGl0ZW0pe1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjsiLCIvLyAv0JrQu9Cw0YHRgSBVc2VySW5mbyDQvtGC0LLQtdGH0LDQtdGCXG4vL9C30LAg0YPQv9GA0LDQstC70LXQvdC40LUg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8INC40L3RhNC+0YDQvNCw0YbQuNC4INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtSDQvdCwINGB0YLRgNCw0L3QuNGG0LUuXG4vL9Cf0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC+0LHRitC10LrRgiDRgSDRgdC10LvQtdC60YLQvtGA0LDQvNC4INC00LLRg9GFINGN0LvQtdC80LXQvdGC0L7Qsjpcbi8vINGN0LvQtdC80LXQvdGC0LAg0LjQvNC10L3QuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0Lgg0Y3Qu9C10LzQtdC90YLQsCDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDRgdC10LHQtVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnROYW1lLCBlbGVtZW50SW5mbywgYXZhdGFyKSB7XG4gICAgdGhpcy5fZWxlbWVudE5hbWUgPSBlbGVtZW50TmFtZTtcbiAgICB0aGlzLl9lbGVtZW50SW5mbyA9IGVsZW1lbnRJbmZvO1xuICAgIHRoaXMuX2F2YXRhciA9IGF2YXRhcjtcbiAgfVxuXG4gIC8vINCt0YLQvtGCINC80LXRgtC+0LQg0L/RgNC40LPQvtC00LjRgtGB0Y8g0LrQvtCz0LTQsCDQtNCw0L3QvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4gIC8vINC90YPQttC90L4g0LHRg9C00LXRgiDQv9C+0LTRgdGC0LDQstC40YLRjCDQsiDRhNC+0YDQvNGDINC/0YDQuCDQvtGC0LrRgNGL0YLQuNC4LlxuICBnZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5fZWxlbWVudE5hbWUudGV4dENvbnRlbnQsXG4gICAgICBpbmZvOiB0aGlzLl9lbGVtZW50SW5mby50ZXh0Q29udGVudCxcbiAgICAgIGF2YXRhcjogdGhpcy5fYXZhdGFyLnNyYyxcbiAgICAgIC8vIG5hbWU6IHRoaXMuX2VsZW1lbnROYW1lLFxuICAgICAgLy8gaW5mbzogdGhpcy5fZWxlbWVudEluZm8sXG4gICAgfTtcbiAgfVxuXG4gIC8v0LrQvtGC0L7RgNGL0Lkg0L/RgNC40L3QuNC80LDQtdGCINC90L7QstGL0LUg0LTQsNC90L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuCDQtNC+0LHQsNCy0LvRj9C10YIg0LjRhSDQvdCwINGB0YLRgNCw0L3QuNGG0YMuXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgaW5mbywgYXZhdGFyIH0pIHtcbiAgICB0aGlzLl9lbGVtZW50TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGhpcy5fZWxlbWVudEluZm8udGV4dENvbnRlbnQgPSBpbmZvO1xuICAgIHRoaXMuX2F2YXRhci5zcmMgPSBhdmF0YXI7XG4gICAgLy8gY29uc29sZS5sb2coYXZhdGFyKTtcbiAgICAvLyB0aGlzLl9lbGVtZW50SW5mbyA9IGluZm87XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCB2YWxpZGF0aW9uQ29uZmlnID0ge1xuICBwb3B1cDogXCIucG9wdXBcIixcbiAgcG9wdXBGb3JtOiBcIi5wb3B1cF9fZm9ybVwiLFxuICBwb3B1cElucHV0OiBcIi5wb3B1cF9faW5wdXRcIixcbiAgYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZTogXCIucG9wdXBfX3N1Ym1pdC1idXR0b25cIixcbiAgcG9wdXBFbGVtZW50RXJyb3I6IFwicG9wdXBfX2VsZW1lbnQtZXJyb3JcIixcbiAgcG9wdXBJbnB1dEVycm9yOiBcInBvcHVwX19pbnB1dF9lcnJvclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgcG9wdXA6IFwiLnBvcHVwXCIsXG4gIHByb2ZpbGVBdmF0YXI6IFwiLnByb2ZpbGVfX2F2YXRhclwiLFxuICB0aXRsZTogXCIucHJvZmlsZV9fdGl0bGVcIixcbiAgc3ViVGl0bGU6IFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIsXG4gIHBvcHVwRWRpdFByb2ZpbGU6IFwiI3BvcHVwX2VkaXRfcHJvZmlsZVwiLFxuICBidXR0b25FZGl0OiBcIiNwcm9maWxlQnV0dG9uRWRpdFwiLFxuICBzdWJUaXRsZUVkaXQ6ICcucG9wdXBfX2lucHV0W25hbWU9XCJzdWJ0aXRsZVwiXScsXG4gIHBvcHVwRm9ybUVkaXRQb2ZpbGVUYWJsZTogJy5wb3B1cF9fZm9ybVtuYW1lPVwicG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlXCJdJyxcbiAgdGl0bGVFZGl0OiAnLnBvcHVwX19pbnB1dFtuYW1lPVwibmFtZVwiXScsXG4gIHBvcHVwU3VibWl0QnV0dG9uc0Rpc2FibGU6IFwiLnBvcHVwX19zdWJtaXQtYnV0dG9uX2Rpc2FibGVcIixcbiAgYnV0dG9uQWRkQnV0dG9uOiBcIiNwcm9maWxlQWRkQnV0dG9uXCIsXG4gIHBvcHVwQWRkOiBcIiNwb3B1cF9hZGRcIixcbiAgdGV4dFZhbHVlUG9wdXBUaXRsZTogXCIjaW5wdXQtaW1hZ2UtdGl0bGVcIixcbiAgdGV4dFZhbHVlUG9wdXBTdWJ0aXRsZTogXCIjaW5wdXQtaW1hZ2UtdXJsXCIsXG4gIGVsZW1lbnRzQ2FyZDogXCIuZWxlbWVudHNcIixcbiAgcG9wdXBCaWdPcGVuSW1hZ2U6IFwiI3BvcHVwLXBob3RvXCIsXG4gIGJ1dHRvblBvcHVwQmlnSW1hZ2VDbG9zZTogXCIucG9wdXBfX2Nsb3NlW25hbWU9J2J1dHRvblBvcHVwQmlnSW1nQ2xvc2UnXVwiLFxuICBuZXdFbGVtZW50SWRUZW1wbGF0ZTogXCIjbmV3RWxlbWVudFwiLFxuICBwb3B1cENsb3NlOiBcIi5wb3B1cF9fY2xvc2VcIixcbiAgcG9wdXBPcGVuZWQ6IFwicG9wdXBfb3BlbmVkXCIsXG4gIGVsZW1lbnRUZXh0OiBcIi5lbGVtZW50X190ZXh0XCIsXG4gIGVsZW1lbnRJbWFnZTogXCIuZWxlbWVudF9faW1nXCIsXG4gIHBvcHVwVGV4dENvbG9yRm9udEdyZXk6IFwicG9wdXBfX2lucHV0X2NvbG9yLWZvbnRfZ3JleVwiLFxuICBwb3B1cFRpdGxlSW1hZ2U6IFwiLnBvcHVwX190aXRsZS1pbWdcIixcbiAgcG9wdXBQaG90b0JpZzogXCIucG9wdXBfX3Bob3RvXCIsXG4gIGVsZW1lbnRMaWtlOiBcIi5lbGVtZW50X19saWtlXCIsXG4gIGVsZW1lbnRMaWtlQWN0aXZlOiBcImVsZW1lbnRfX2xpa2VfYWN0aXZlXCIsXG4gIGVsZW1lbnRUcmFzaDogXCIuZWxlbWVudF9fdHJhc2hcIixcbiAgZWxlbWVudDogXCIuZWxlbWVudFwiLFxuICBmb3JtQWRkOiBcIiNmb3JtX2FkZFwiLFxuICBpbnB1dFRpdGxlUHJvZmlsZTogXCIucG9wdXBfX2lucHV0W25hbWU9J25hbWUnXVwiLFxuICBpbnB1dFN1YnRpdGxlUHJvZmlsZTogXCIucG9wdXBfX2lucHV0W25hbWU9J3N1YnRpdGxlJ11cIixcbiAgbGlrZUNvdW50ZXI6IFwiI2xpa2VDb3VudGVyXCIsXG4gIGNhcmREZWxldGU6IFwiI3BvcHVwX2RlbGV0ZV9jYXJkXCIsXG4gIGJ1dHRvblB1c2hZZXM6IFwiI2J1dHRvbl9wdXNoX3llc1wiLFxuICBwb3B1cFVwZGF0ZUF2YXRhcklkOiBcIiNwb3B1cF91cGRhdGVfYXZhdGFyXCIsXG4gIGlucHV0UHJvZmlsZUxpbmtBdmF0YXI6IFwiI2lucHV0LXByb2ZpbGUtbGluay1hdmF0YXJcIixcbiAgaG9zdDogXCJodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTU1XCIsXG4gIHRva2VuOiBcIjU4OGU4NzM1LWNjMDAtNGY2ZC04ZDkyLWRhNzE1YzVkYjBjYVwiLFxuICB1c2VySWQ6IFwiZDBhYjU3NDA5ODFiODU5OWY1ZDE4M2E2XCIsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiog0JjQnNCf0J7QoNCi0KsgKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuaW1wb3J0ICBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbi8vaW1wb3J0IGluaXRpYWxDYXJkcyBmcm9tIFwiLi4vdXRpbHMvY2FyZHMuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCB7IHZhbGlkYXRpb25Db25maWcgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi91dGlscy91dGlscy5qc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGkuanNcIjtcbi8vaW1wb3J0IHsgcG9wdXBEZWxldGVDYXJkIH0gZnJvbSBcIi4uLy4uL21lc3RvLW1haW4gNC9zcmMvdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiDQmtCe0J3QodCi0JDQndCi0KsgKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5jb25zdCBhcGkgPSBuZXcgQXBpKGNvbmZpZy5ob3N0LCBjb25maWcudG9rZW4pO1xuXG5jb25zdCBwb3B1cFN1Ym1pdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICB2YWxpZGF0aW9uQ29uZmlnLmJ1dHRvbkZvcm1FZGl0UG9maWxlVGFibGVcbik7XG4vL2NvbmZpZ1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy50aXRsZSk7XG5jb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnN1YlRpdGxlKTtcbmNvbnN0IHBvcHVwRWRpdFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5wb3B1cEVkaXRQcm9maWxlKTtcbmNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5idXR0b25FZGl0KTtcbmNvbnN0IGJ1dHRvbkFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmJ1dHRvbkFkZEJ1dHRvbik7XG5jb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwQWRkKTtcbmNvbnN0IGZvcm1BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5mb3JtQWRkKTtcbmNvbnN0IGVsZW1lbnRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmVsZW1lbnRzQ2FyZCk7XG5jb25zdCBwb3B1cEJpZ09wZW5JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnBvcHVwQmlnT3BlbkltYWdlKTtcbmNvbnN0IG5ld0VsZW1lbnRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIGNvbmZpZy5uZXdFbGVtZW50SWRUZW1wbGF0ZVxuKS5jb250ZW50O1xuY29uc3QgaW5wdXRUaXRsZVByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5pbnB1dFRpdGxlUHJvZmlsZSk7XG5jb25zdCBpbnB1dFN1YnRpdGxlUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIGNvbmZpZy5pbnB1dFN1YnRpdGxlUHJvZmlsZVxuKTtcbi8vY29uc3QgbGlrZUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5saWtlQ291bnRlcik7XG5jb25zdCBjYXJkRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuY2FyZERlbGV0ZSk7XG5jb25zdCBwcm9maWxlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucHJvZmlsZUF2YXRhcik7XG5jb25zdCBwb3B1cFVwZGF0ZUF2YXRhcklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucG9wdXBVcGRhdGVBdmF0YXJJZCk7XG5jb25zdCBpbnB1dFByb2ZpbGVMaW5rQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgY29uZmlnLmlucHV0UHJvZmlsZUxpbmtBdmF0YXJcbik7XG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiog0JrQm9CQ0KHQodCrICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIFBvcHVwV2l0aEltYWdlICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8v0J/QvtC00LrQu9GO0YfQsNC10Lwg0LHQvtC70YzRiNC40LUg0LrQsNGA0YLQuNC90LrQuFxuY29uc3QgcG9wdXBJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShwb3B1cEJpZ09wZW5JbWFnZSk7XG5cbnBvcHVwSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmNvbnN0IGhhbmRsZUNhcmRDbGljayA9IChuYW1lLCBsaW5rKSA9PiB7XG4gIHBvcHVwSW1hZ2Uub3BlbihuYW1lLCBsaW5rKTtcbn07XG5cbi8vIGNvbnN0IGhhbmRsZUxpa2VDbGljayA9IChjYXJkSWQpID0+IHtcbi8vICAgaWYgKG5ld0NhcmQuaXNMaWtlZCgpKSB7XG4vLyAgICAgYXBpLmRlbGV0ZUxpa2VDYXJkKGNhcmRJZClcbi8vICAgICAudGhlbihyZXMgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coJ9Cb0LDQudC6INGD0LTQsNC70LjQu9GB0Y8nKTtcbi8vICAgICB9KVxuLy8gICB9XG4vLyAgZWxzZSB7XG4vLyAgICBhcGkucHV0TGlrZUNhcmQoY2FyZElkKVxuLy8gICAgLnRoZW4ocmVzID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygn0JvQsNC50Log0LTQvtCx0LDQstC40LvRgdGPJyk7XG4vLyAgICB9KTtcbi8vICB9XG4vLyB9O1xuXG5jb25zdCBkZWxldGVDYXJkU2VydmVyID0gKGlkKSA9PiB7XG4gIGFwaS5kZWxldGVDYXJkKGlkKS50aGVuKCk7XG59O1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIENhcmQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy/QlNC10LvQsNC10Lwg0YTRg9C90LrRhtC40Y4g0YfRgtC+INCxINC00L7QsdCw0LLQu9GP0LvQuNGB0Ywg0LrQsNGA0YLQvtGH0LrQuCAo0JzQkNCh0KHQmNCSKVxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhKSB7XG4gIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChcbiAgICBkYXRhLFxuICAgIGNvbmZpZyxcbiAgICBoYW5kbGVDYXJkQ2xpY2ssXG4gICAgbmV3RWxlbWVudFRlbXBsYXRlLFxuICAgIGRlbGV0ZUNhcmRTZXJ2ZXIsXG4gICAgKGNhcmRJZCkgPT4ge1xuICAgICAgaWYgKG5ld0NhcmQuaXNMaWtlZCgpKSB7XG4gICAgICAgIGFwaS5kZWxldGVMaWtlQ2FyZChjYXJkSWQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIG5ld0NhcmQubGlrZUNvdW50ZXIocmVzLmxpa2VzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcItCb0LDQudC6INGD0LTQsNC70LjQu9GB0Y9cIik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXBpLnB1dExpa2VDYXJkKGNhcmRJZCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgbmV3Q2FyZC5saWtlQ291bnRlcihyZXMubGlrZXMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwi0JvQsNC50Log0LTQvtCx0LDQstC40LvRgdGPXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9oYW5kbGVMaWtlQ2xpY2tcbiAgKTtcbiAgcmV0dXJuIG5ld0NhcmQuY3JlYXRlQ2FyZCgpO1xufVxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogU2VjdGlvbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8v0JTQtdC70LDQtdC8INC60L7QvdGB0YLQsNC90YLRgyDQuCDQuNC3INC60LvQsNGB0YHQsCwg0L/RgNC+0LrQuNC00YvQstCw0LXQvCDQtdC80YMgKHvQvNCw0YHRgdC40LIg0YEg0LrQsNGA0YLQvtGH0LrQsNC80LgsINGE0YPQvdC60YbQuNGOINC00L7QsdCw0LLQu9C10L3QuNC1INC60LDRgNGC0L7Rh9C10Lp9LFxuLy/QvdCw0LnQtNC10L3QvdGL0Lkg0YHQtdC70LXQutGC0L7RgClcbmNvbnN0IGNhcmRSZW5kZXIgPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgICAgLy/RhdCy0LDRgtCw0LXQvCDQvNC10YLQvtC0IFwiYWRkSXRlbVwiINC4INCy0YHRgtCw0LLQu9GP0LXQvCDQsiDQv9Cw0YDQsNC80LXRgtGAINGE0YPQvdC60YbQuNGOINC00L7QsdCw0LLQu9C10L3QuNC1INC60LDRgNGC0L7Rh9C10LogY3JlYXRlQ2FyZChpdGVtKVxuICAgICAgY2FyZFJlbmRlci5hZGRJdGVtKGNyZWF0ZUNhcmQoaXRlbSkpO1xuICAgIH0sXG4gICAgLy8g0JAg0LfQtNC10YHRjCDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQtdC70LXQutGC0L7RgFxuICB9LFxuICBlbGVtZW50c0NhcmRcbik7XG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqINCS0KvQl9Ce0JIg0JrQkNCg0KLQntCn0JXQmiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vL9C+0LHQtdGA0L3Rg9C70Lgg0LLRi9C30L7QsiDQsiBBUGkg0YEg0LTQsNC90L3Ri9C80Lgg0LrQsNGA0YLQvtGH0LXQuiDQuNC3INGB0LXRgNCy0LXRgNCwXG5hcGkuZ2V0Q2FyZHMoKS50aGVuKChjYXJkcykgPT4ge1xuICAvL9Cy0YvQt9GL0LLQsNC10Lwg0LzQtdGC0L7QtCByZW5kZXJpdGVtcyhjINC/0LDRgNCw0LzQtdGC0YDQvtC8INC80LDRgdGB0LjQstC+0Lwg0LrQsNGC0L7Rh9C10LopXG4gIGNhcmRSZW5kZXIucmVuZGVySXRlbXMoY2FyZHMpO1xufSk7XG5cbi8v0YHQvtC30LTQsNC10Lwg0LrQvtC90YHRgtCw0L3RgtGDINC40Lcg0JrQu9Cw0YHRgdCwINC00LvRjyDQn9GA0L7RhNCw0LnQu9CwXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh0aXRsZSwgc3ViVGl0bGUsIHByb2ZpbGVBdmF0YXIpO1xuXG4vL9C/0L7Qu9GD0YfQsNC10Lwg0LTQsNC90L3Ri9C1INC+INGO0LfQtdGA0LUg0YEg0YHQtdGA0LLQtdGA0LBcbmFwaS5nZXRVc2VySW5mb3JtKCkudGhlbigodXNlcikgPT4ge1xuICB1c2VySW5mby5zZXRVc2VySW5mbyh7XG4gICAgbmFtZTogdXNlci5uYW1lLFxuICAgIGluZm86IHVzZXIuYWJvdXQsXG4gICAgYXZhdGFyOiB1c2VyLmF2YXRhcixcbiAgfSk7XG59KTtcblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIFBvcHVwV2l0aEZvcm0gIFVzZXJJbmZvIENhcmQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vL9Ce0LHQvdC+0LLQu9C10L3QuNC1INC40LzRjyDQuCDQvtC/0LjRgdCw0L3QuNC1INC/0YDQvtGE0LDQudC70LBcbmNvbnN0IHBvcHVwUHJvZmlsZUVkaXQgPSBuZXcgUG9wdXBXaXRoRm9ybShwb3B1cEVkaXRQcm9maWxlLCAocmVzKSA9PiB7XG4gIHBvcHVwUHJvZmlsZUVkaXQuYnV0dG9uVGV4dENoYW5nZSh0cnVlLCBcItCh0L7RhdGA0LDQvdC40YLRjFwiLCBcItCh0L7RhdGA0LDQvdC10L3QuNC1Li4uXCIpO1xuICAvL9C+0YLQv9GA0LDQu9GP0LXQvC/Qv9C+0LvRg9GH0LDQtdC8INC00LDQvdC90YvQtSDQv9C+0LQg0YDQtdC60LTQsNGC0LjRgNC+0LLQsNC90LjRjiDQv9GA0L7QstC40LvRjyDQuNC80Y8g0Lgg0L7Qv9C40YHQsNC90LjQtVxuICBhcGkuZWRpdFVzZXJJbmZvcm0ocmVzLm5hbWUsIHJlcy5zdWJ0aXRsZSkudGhlbigocmVzKSA9PiB7XG4gICAgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0YHRjtC00LAg0Lgg0LDQstCw0YLQsNGALCDRh9GC0L4g0LEg0L/QvtC00LPRgNGD0LbQsNC70YHRjyDQuCDQvtC9INC/0L7RgdC70LUg0L7QsdC90L7QstC70LXQvdC40Y9cbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyh7XG4gICAgICBuYW1lOiByZXMubmFtZSxcbiAgICAgIGluZm86IHJlcy5hYm91dCxcbiAgICAgIGF2YXRhcjogcmVzLmF2YXRhcixcbiAgICB9KTtcbiAgICBwb3B1cFByb2ZpbGVFZGl0LmJ1dHRvblRleHRDaGFuZ2UoZmFsc2UsIFwi0KHQvtGF0YDQsNC90LjRgtGMXCIsIFwi0KHQvtGF0YDQsNC90LXQvdC40LUuLi5cIik7XG4gIH0pO1xufSk7XG5wb3B1cFByb2ZpbGVFZGl0LnNldEV2ZW50TGlzdGVuZXJzKCk7XG5idXR0b25FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlucHV0VGl0bGVQcm9maWxlLnZhbHVlID0gdXNlckluZm8uZ2V0VXNlckluZm8oKS5uYW1lO1xuICBpbnB1dFN1YnRpdGxlUHJvZmlsZS52YWx1ZSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCkuaW5mbztcbiAgcG9wdXBQcm9maWxlRWRpdC5vcGVuKCk7XG59KTtcblxuLy/QntCx0L3QvtCy0LvRj9C10Lwg0LDQstCw0YLQsNGA0LrRg1xuY29uc3QgYXZhdGFyVXBkYXRlID0gbmV3IFBvcHVwV2l0aEZvcm0ocG9wdXBVcGRhdGVBdmF0YXJJZCwgKGlucHV0KSA9PiB7XG4gIC8v0L7QsdC10YDQvdGD0LvQuCDQsiBhcGkg0L/QtdGA0LXQuNC80LXQvdC+0LLQsNC90LjQtSDRgdGB0YvQu9C60Lgg0LDQstCw0YLQsNGA0LAsINC+0L3QviDQvtGC0L/RgNCw0LLQu9GP0LXRgtGB0Y8g0L3QsCDRgdC10YDQstC10YAsINGH0YLQviDQsVxuICAvL9C/0L7RgtC+0Lwg0L/RgNC40YXQvtC00LjQu9C+INC4INC00L7QsdCw0LLQu9GP0LvQvtGB0Ywg0L3QsCDRgdGC0YDQsNC90LjRhtGDXG4gIGF2YXRhclVwZGF0ZS5idXR0b25UZXh0Q2hhbmdlKHRydWUsIFwi0KHQvtGF0YDQsNC90LjRgtGMXCIsIFwi0KHQvtGF0YDQsNC90LXQvdC40LUuLi5cIik7XG4gIGFwaS51cGRhdGVBdmF0YXIoaW5wdXQuYXZhdGFyKS50aGVuKChyZXMpID0+IHtcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyh7XG4gICAgICBhdmF0YXI6IGlucHV0LmF2YXRhcixcbiAgICAgIG5hbWU6IHJlcy5uYW1lLFxuICAgICAgaW5mbzogcmVzLmFib3V0LFxuICAgIH0pO1xuICAgIGF2YXRhclVwZGF0ZS5idXR0b25UZXh0Q2hhbmdlKGZhbHNlLCBcItCh0L7RhdGA0LDQvdC40YLRjFwiLCBcItCh0L7RhdGA0LDQvdC10L3QuNC1Li4uXCIpO1xuICB9KTtcbn0pO1xuXG5hdmF0YXJVcGRhdGUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnByb2ZpbGVBdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaW5wdXRQcm9maWxlTGlua0F2YXRhci52YWx1ZSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCkuYXZhdGFyO1xuICBhdmF0YXJVcGRhdGUub3BlbigpO1xufSk7XG5cbi8v0JTQvtCx0LDQstC70Y/QtdC8INC60LDRgNGC0L7Rh9C60YMg0L3QsCDRgdC10YDQstC10YBcbmNvbnN0IHBvcHVwQWRkQ2FyZCA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwQWRkLCAoaW5wdXQpID0+IHtcbiAgLy/QvdGD0LbQvdC+INGH0YLQviDQsSDQv9C+0YHQu9C1INC+0L/Rj9GC0Ywg0L3QsNC00L/QuNGB0YwgXCLRgdC+0LfQtNCw0YLRjCDQsdGL0LvQsFwiXG4gIHBvcHVwQWRkQ2FyZC5idXR0b25UZXh0Q2hhbmdlKHRydWUsIFwi0KHQvtC30LTQsNGC0YxcIiwgXCLQodC+0YXRgNCw0L3QtdC90LjQtS4uLlwiKTtcbiAgYXBpLmFkZE5ld0NhcmQoaW5wdXQubmFtZSwgaW5wdXQuc3VidGl0bGUpLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnN0IGluZm9DYXJkID0gY3JlYXRlQ2FyZCh7XG4gICAgICBuYW1lOiByZXMubmFtZSxcbiAgICAgIGxpbms6IHJlcy5saW5rLFxuICAgICAgLy/Qt9C00LXRgdGMINC+0YLQv9GA0LDQstC70Y/RjiDQtNCw0L3QvdGL0LUg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtVxuICAgICAgb3duZXI6IHJlcy5vd25lcixcbiAgICAgIGxpa2VzOiByZXMubGlrZXMsXG4gICAgfSk7XG4gICAgcG9wdXBBZGRDYXJkLmJ1dHRvblRleHRDaGFuZ2UoZmFsc2UsIFwi0KHQvtC30LTQsNGC0YxcIiwgXCLQodC+0YXRgNCw0L3QtdC90LjQtS4uLlwiKTtcbiAgICBjYXJkUmVuZGVyLmFkZEl0ZW1OZXdjYXJkKGluZm9DYXJkKTtcbiAgfSk7XG59KTtcblxucG9wdXBBZGRDYXJkLl9nZXRJbnB1dFZhbHVlcygpO1xucG9wdXBBZGRDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIDIgUE9QVVBcbi8vINCS0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDLCDQtNC+0YHQu9C+0LLQvdC+INC00L7QsdCw0LLQu9GP0LXQvCDQuiDQutC70LDRgdGB0YMgcG9wdXBfYWRkICsg0LrQu9Cw0YHRgSBwb3B1cC1PcGVuXG5idXR0b25BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcG9wdXBBZGRDYXJkLm9wZW4oKTtcbn0pO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0g0JrQntCd0JXQpiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqINCS0JDQm9CY0JTQkNCm0JjQryAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vL9Ce0LHRj9C30LDRgtC10LvRjNC90L4g0L3Rg9C20L3QviDQv9GA0L7QsdGA0LDRgdGL0LLQsNGC0YwgKNC/0LDRgNCw0LzQtdGC0YDRiy/QsNGA0LPRg9C80LXQvdGC0Ysg0LjQtyDQmtC70LDRgWPQsC9pbmRleClcbmNvbnN0IHZhbGlkYXRpb25DYXJkID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvbkNvbmZpZywgZm9ybUFkZCk7XG52YWxpZGF0aW9uQ2FyZC5lbmFibGVWYWxpZGF0aW9uKCk7XG5jb25zdCB2YWxpZGF0aW9uUHJvZmlsZSA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25Db25maWcsIHBvcHVwRWRpdFByb2ZpbGUpO1xudmFsaWRhdGlvblByb2ZpbGUuZW5hYmxlVmFsaWRhdGlvbigpO1xuIl0sIm5hbWVzIjpbIkFwaSIsImhvc3QiLCJ0b2tlbiIsIl9ob3N0IiwiX3Rva2VuIiwiX2NoZWNrRXJvcnJKc29uIiwiYmluZCIsIl9fZ2V0SGVhZGVyIiwiX2dldEhlYWRlciIsInJlcyIsIm9rIiwianNvbiIsIkVycm9yIiwiYXV0aG9yaXphdGlvbiIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJuYW1lIiwiYWJvdXQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld05hbWUiLCJuZXdMaW5rIiwibGluayIsImNhcmRJZCIsImF2YXRhciIsIlBvcHVwIiwiQ2FyZCIsImRhdGEiLCJjb25maWciLCJoYW5kbGVDYXJkQ2xpY2siLCJuZXdFbGVtZW50VGVtcGxhdGUiLCJkZWxldGVDYXJkU2VydmVyIiwiaGFuZGxlTGlrZUNsaWNrIiwiX3RleHQiLCJfbGluayIsIl9saWtlcyIsImxpa2VzIiwiX2NhcmRJZCIsIl9pZCIsIl9lbGVtZW50VGV4dCIsImVsZW1lbnRUZXh0IiwiX2VsZW1lbnRJbWFnZVNlbGVjdG9yIiwiZWxlbWVudEltYWdlIiwiX2VsZW1lbnRUcmFzaFNlbGVjdG9yIiwiZWxlbWVudFRyYXNoIiwiX2VsZW1lbnRMaWtlU2VsZWN0b3IiLCJlbGVtZW50TGlrZSIsIl9lbGVtZW50TGlrZUFjdGl2ZSIsImVsZW1lbnRMaWtlQWN0aXZlIiwiX25ld0VsZW1lbnRJZFRlbXBsYXRlIiwibmV3RWxlbWVudElkVGVtcGxhdGUiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2hhbmRsZUxpa2VDbGljayIsIl9saWtlc0Nvb3VudCIsImxpa2VDb3VudGVyIiwiX2NhcmREZWxldGVJZCIsImNhcmREZWxldGUiLCJfYnV0dG9uUHVzaFllc0lkIiwiYnV0dG9uUHVzaFllcyIsIl9teUlkIiwidXNlcklkIiwiX2RlbGV0ZUNhcmRTZXJ2ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2NhcmQiLCJyZW1vdmUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJfZWxlbWVudExpa2UiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfY2FyZERlbGV0ZSIsIl9idXR0b25QdXNoWWVzIiwicG9wdXBDYXJkRGVsZXRlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJvcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVEZWxldGVDYXJkIiwiY2xvc2UiLCJfZWxlbWVudEltYWdlIiwiX2J1dHRvblRyYXNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9saXN0ZW5lckRlbGV0ZUNhcmQiLCJfbGlrZVB1c2giLCJvd25lciIsImFkZCIsIm15SWRMaWtlQ2FyZHMiLCJmaW5kIiwiZWxlbWVudCIsIm15SWRMaWtlQ2FyZCIsImFkZExpa2VzIiwiX2xpa2VDb3VudGVyIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJfZ2V0VGVtcGxhdGUiLCJzcmMiLCJhbHQiLCJfbGlrZU15VXNlckNhcmQiLCJfY2hlY2tVc2VySWQiLCJfYWRkRXZlbnRMaXN0ZW5lciIsIkZvcm1WYWxpZGF0b3IiLCJ2YWxpZGF0aW9uQ29uZmlnIiwiZm9ybSIsIl9pc0Zvcm1WYWxpZCIsIl9mb3JtSW5wdXRzIiwiZXZlcnkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3BvcHVwU3VibWl0QnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaW5wdXRFbGVtZW50IiwiX2VsZW1lbnRFcnJvciIsImlkIiwiX3RleHRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX3BvcHVwSW5wdXRFcnJvciIsImlucHV0IiwiY2hlY2tWYWxpZGl0eSIsIl9zaG93SW5wdXRFcnJvciIsIl9oaWRlSW5wdXRFcnJvciIsIkFycmF5IiwiZnJvbSIsIl9mb3JtIiwicXVlcnlTZWxlY3RvckFsbCIsIl9wb3B1cElucHV0IiwiX2J1dHRvbkZvcm1FZGl0UG9maWxlVGFibGUiLCJ2YWxpZGF0ZUJ1dHRvbiIsImZvckVhY2giLCJldnQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3BvcHVwRm9ybSIsInBvcHVwRm9ybSIsIl92YWxpZGF0aW9uQ29uZmlnIiwiX3BvcHVwRWxlbWVudEVycm9yIiwicG9wdXBFbGVtZW50RXJyb3IiLCJwb3B1cElucHV0RXJyb3IiLCJwb3B1cElucHV0IiwiYnV0dG9uRm9ybUVkaXRQb2ZpbGVUYWJsZSIsIl92YWxpZGF0ZUZvcm1JbnB1dHMiLCJwb3B1cEVsZW1lbnQiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiX2J1dHRvblN1Ym1pdFBvcHVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsIl9idXR0b25DbG9zZSIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJzYXZlIiwidGV4dEJ1dHRvbiIsInRleHRUaW1lb3V0U2F2ZSIsIlBvcHVwV2l0aEZvcm0iLCJjYWxiYWNrbFN1Ym1pdEZvcm0iLCJfY2FsYmFja2xTdWJtaXRGb3JtIiwiX2lucHV0TGlzdCIsIl9mb3JtVmFsdWVzIiwidmFsdWUiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX3BvcHVwUGhvdG9CaWciLCJfcG9wdXBUaXRsZUltYWdlIiwidGV4dCIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RyIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJpdGVtIiwiYXBwZW5kIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwiZWxlbWVudE5hbWUiLCJlbGVtZW50SW5mbyIsIl9lbGVtZW50TmFtZSIsIl9lbGVtZW50SW5mbyIsIl9hdmF0YXIiLCJpbmZvIiwicG9wdXAiLCJwcm9maWxlQXZhdGFyIiwidGl0bGUiLCJzdWJUaXRsZSIsInBvcHVwRWRpdFByb2ZpbGUiLCJidXR0b25FZGl0Iiwic3ViVGl0bGVFZGl0IiwicG9wdXBGb3JtRWRpdFBvZmlsZVRhYmxlIiwidGl0bGVFZGl0IiwicG9wdXBTdWJtaXRCdXR0b25zRGlzYWJsZSIsImJ1dHRvbkFkZEJ1dHRvbiIsInBvcHVwQWRkIiwidGV4dFZhbHVlUG9wdXBUaXRsZSIsInRleHRWYWx1ZVBvcHVwU3VidGl0bGUiLCJlbGVtZW50c0NhcmQiLCJwb3B1cEJpZ09wZW5JbWFnZSIsImJ1dHRvblBvcHVwQmlnSW1hZ2VDbG9zZSIsInBvcHVwQ2xvc2UiLCJwb3B1cE9wZW5lZCIsInBvcHVwVGV4dENvbG9yRm9udEdyZXkiLCJwb3B1cFRpdGxlSW1hZ2UiLCJwb3B1cFBob3RvQmlnIiwiZm9ybUFkZCIsImlucHV0VGl0bGVQcm9maWxlIiwiaW5wdXRTdWJ0aXRsZVByb2ZpbGUiLCJwb3B1cFVwZGF0ZUF2YXRhcklkIiwiaW5wdXRQcm9maWxlTGlua0F2YXRhciIsImFwaSIsInBvcHVwU3VibWl0QnV0dG9ucyIsInBvcHVwSW1hZ2UiLCJkZWxldGVDYXJkIiwiY3JlYXRlQ2FyZCIsIm5ld0NhcmQiLCJpc0xpa2VkIiwiZGVsZXRlTGlrZUNhcmQiLCJwdXRMaWtlQ2FyZCIsImNhcmRSZW5kZXIiLCJhZGRJdGVtIiwiZ2V0Q2FyZHMiLCJjYXJkcyIsInJlbmRlckl0ZW1zIiwidXNlckluZm8iLCJnZXRVc2VySW5mb3JtIiwidXNlciIsInNldFVzZXJJbmZvIiwicG9wdXBQcm9maWxlRWRpdCIsImJ1dHRvblRleHRDaGFuZ2UiLCJlZGl0VXNlckluZm9ybSIsInN1YnRpdGxlIiwiZ2V0VXNlckluZm8iLCJhdmF0YXJVcGRhdGUiLCJ1cGRhdGVBdmF0YXIiLCJwb3B1cEFkZENhcmQiLCJhZGROZXdDYXJkIiwiaW5mb0NhcmQiLCJhZGRJdGVtTmV3Y2FyZCIsInZhbGlkYXRpb25DYXJkIiwiZW5hYmxlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25Qcm9maWxlIl0sInNvdXJjZVJvb3QiOiIifQ==