//ФУНКЦИИ ВАЛИДНОСТИ

//пробегаемся по массиву инпутов "formInputs" берем в них { validity } и проверяем на  validity.valid тру или фолс
//   //возвращает true or false
function validateButton(formInputs, popupSubmitButtons) {
  //пробегаемся по массиву инпутов "formInputs" берем в них { validity } и проверяем на  validity.valid тру или фолс
  const isFormValid = formInputs.every(({ validity }) => validity.valid);
  if (isFormValid) {
    popupSubmitButtons.removeAttribute("disabled");
  } else {
    popupSubmitButtons.setAttribute("disabled", "disabled");
  }
}

const showInputError = (elementError, inputElement, textError, config) => {
  elementError.classList.add(config.popupElementError);
  inputElement.classList.add(config.popupInputError);
  elementError.textContent = textError;
};

const hideInputError = (elementError, inputElement,config) => {
  elementError.classList.remove(config.popupElementError);
  inputElement.classList.remove(config.popupInputError);
  elementError.textContent = "";
};

function checkInputValidity(input, elementError, textError, config) {
  if (!input.checkValidity()) {
    showInputError(elementError, input, textError, config);
  } else {
    hideInputError(elementError, input,config);
  }
}
//ОБРАБОТЧИКИ ВАЛИДНОСТИ

function validateFormInputs(validationConfig, form) {
  const formInputs = Array.from(
    form.querySelectorAll(validationConfig.popupInput)
  );
  const popupSubmitButtons = form.querySelector(
    validationConfig.buttonFormEditPofileTable
  );
  validateButton(formInputs, popupSubmitButtons);

  formInputs.forEach((inputElement) => {
    //в константу закидываем все классы "validationConfig.popupElementError" идущие после наших элементов(инпутов) в массиве
    const elementError = form.querySelector(`.${inputElement.id}-error`);
    //вешаем слушатель на инпуты (элементы массива /инпуты/ "formInputs")
    inputElement.addEventListener("input", (evt) => {
      evt.preventDefault();
      checkInputValidity(
        inputElement,
        elementError,
        inputElement.validationMessage,
        validationConfig
      );
      validateButton(formInputs, popupSubmitButtons);
    });
  });
}

//Активация
function enableValidation(validationConfig) {
  const formLists = Array.from(
    document.querySelectorAll(validationConfig.popupForm)
  );
  formLists.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {});
    validateFormInputs(validationConfig, formElement);
  });
}

enableValidation(validationConfig);
