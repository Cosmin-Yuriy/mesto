//ФУНКЦИИ ВАЛИДНОСТИ
class FormValidator {
  //Обязательно нужно пробрасывать (параметры/аргументы из Класа/index)
  constructor(config, validationConfig, form){
    this._config = config;
   // this._popupForm = popupForm;
    this._popupForm = validationConfig.popupForm;
    this._title = config.title;
    this._validationConfig = validationConfig;
    this._popupElementError = validationConfig.popupElementError;
    this._popupInputError = validationConfig.popupInputError;
    this._popupInput = validationConfig.popupInput;
    this._buttonFormEditPofileTable = validationConfig.buttonFormEditPofileTable;
    this._form = form;
  //  this._textError = textError;
  }




//пробегаемся по массиву инпутов "this._formInputs" берем в них { validity } и проверяем на  validity.valid тру или фолс
  //возвращает true or false
  _validateButton() {
  //пробегаемся по массиву инпутов "formInputs" берем в них { validity } и проверяем на  validity.valid тру или фолс
  this._isFormValid = this._formInputs.every(({ validity }) => validity.valid);
 
  if (this._isFormValid) {
    this._popupSubmitButtons.removeAttribute("disabled");
  } else {
    this._popupSubmitButtons.setAttribute("disabled", "disabled");
  }
}

_showInputError = (inputElement) => {
 // console.log(form);
 //this._test = form.querySelector(`.${inputElement.id}-error`);
   console.log(this._form);
//console.log(inputElement);
  this._textError = inputElement.validationMessage;
  this._elementError.classList.add(this._popupElementError);
  inputElement.classList.add(this._popupInputError);
  this._elementError.textContent = this._textError;
};

_hideInputError = (inputElement) => {
  //console.log(form);
  this._elementError.classList.remove(this._popupElementError);
  inputElement.classList.remove(this._popupInputError);
  this._elementError.textContent = "";
};

_checkInputValidity = (input) => {
  if (!input.checkValidity()) {
    this._showInputError(input);
  } else {
    this._hideInputError(input);
  }
}
//ОБРАБОТЧИКИ ВАЛИДНОСТИ


_validateFormInputs = (form) => {
 // console.log(this._buttonFormEditPofileTable);
  this._formInputs = Array.from(
    form.querySelectorAll(this._popupInput)
  );
  this._popupSubmitButtons = form.querySelector(
    this._buttonFormEditPofileTable
  );
  this._validateButton();

  this._formInputs.forEach((inputElement) => {
    //в константу закидываем все классы "validationConfig.popupElementError" идущие после наших элементов(инпутов) в массиве
     this._elementError = form.querySelector(`.${inputElement.id}-error`);

    //вешаем слушатель на инпуты (элементы массива /инпуты/ "this._formInputs")
    inputElement.addEventListener("input", (evt) => {
    
    //  evt.preventDefault();
      this._checkInputValidity(
        inputElement
      );
      this._validateButton();
    });
  });
}


// ///Активация
// enableValidation() {
//   const formLists = Array.from(
//     document.querySelectorAll(this._popupForm)
//   );
//   formLists.forEach((formElement) => {
//     formElement.addEventListener("submit", (evt) => {});
//     this._validateFormInputs(validationConfig, formElement);
//   });
// }
 


};



// const newValidation = new FormValidator();
// newValidation._test();
//newValidation.enableValidation();

//Почему-то не работает export - imort
export default FormValidator;