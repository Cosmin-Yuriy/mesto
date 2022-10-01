//ФУНКЦИИ ВАЛИДНОСТИ
class FormValidator {
  constructor(config, popupForm){
    this._config = config;
    this._popupForm = popupForm;
  }


//пробегаемся по массиву инпутов "formInputs" берем в них { validity } и проверяем на  validity.valid тру или фолс
//   //возвращает true or false
  _validateButton(formInputs, popupSubmitButtons) {
  //пробегаемся по массиву инпутов "formInputs" берем в них { validity } и проверяем на  validity.valid тру или фолс
  const isFormValid = formInputs.every(({ validity }) => validity.valid);
 
  if (isFormValid) {
    popupSubmitButtons.removeAttribute("disabled");
  } else {
    popupSubmitButtons.setAttribute("disabled", "disabled");
  }
}

_showInputError = (elementError, inputElement, textError, config) => {
  elementError.classList.add(config.popupElementError);
  inputElement.classList.add(config.popupInputError);
  elementError.textContent = textError;
};

_hideInputError = (elementError, inputElement,config) => {
  elementError.classList.remove(config.popupElementError);
  inputElement.classList.remove(config.popupInputError);
  elementError.textContent = "";
};

_checkInputValidity(input, elementError, textError, config) {
  if (!input.checkValidity()) {
    this._showInputError(elementError, input, textError, config);
  } else {
    this._hideInputError(elementError, input,config);
  }
}
//ОБРАБОТЧИКИ ВАЛИДНОСТИ



_validateFormInputs(validationConfig, form) {
  const formInputs = Array.from(
    form.querySelectorAll(validationConfig.popupInput)
  );
  const popupSubmitButtons = form.querySelector(
    validationConfig.buttonFormEditPofileTable
  );
  this._validateButton(formInputs, popupSubmitButtons);

  formInputs.forEach((inputElement) => {
    //в константу закидываем все классы "validationConfig.popupElementError" идущие после наших элементов(инпутов) в массиве
    const elementError = form.querySelector(`.${inputElement.id}-error`);
    //вешаем слушатель на инпуты (элементы массива /инпуты/ "formInputs")
    inputElement.addEventListener("input", (evt) => {
    
      evt.preventDefault();
      this._checkInputValidity(
        inputElement,
        elementError,
        inputElement.validationMessage,
        validationConfig
      );
      this._validateButton(formInputs, popupSubmitButtons);
    });
  });
}


///Активация
enableValidation() {
  const formLists = Array.from(
    document.querySelectorAll(validationConfig.popupForm)
  );
  formLists.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {});
    this._validateFormInputs(validationConfig, formElement);
  });
}
 


};


const newValidation = new FormValidator();

newValidation.enableValidation();


export default FormValidator;