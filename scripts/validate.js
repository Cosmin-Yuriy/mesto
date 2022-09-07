//ФУНКЦИИ ВАЛИДНОСТИ

//пробегаемся по массиву инпутов "inputPopupArr" берем в них { validity } и проверяем на  validity.valid тру или фолс
//   //возвращает true or false
function validateButton(inputPopupArr, popupSubmitButtons) {
  //пробегаемся по массиву инпутов "inputPopupArr" берем в них { validity } и проверяем на  validity.valid тру или фолс
  //возврощает true or false
  const isFormValid = inputPopupArr.every(({ validity }) => validity.valid);
  if (isFormValid) {
    popupSubmitButtons.removeAttribute("disabled");
  } else {
    popupSubmitButtons.setAttribute("disabled", "disabled");
  }
}

const showInputError = (elementError, inputElement, textError) => {
  elementError.classList.add(validationConfig.popupElementError);
  inputElement.classList.add(validationConfig.popupInputError);
  elementError.textContent = textError;
};

const hideInputError = (elementError, inputElement) => {
  elementError.classList.remove(validationConfig.popupElementError);
  inputElement.classList.remove(validationConfig.popupInputError);
  elementError.textContent = "";
};

function checkInputValidity(input, elementError, textError) {
  if (!input.checkValidity()) {
    showInputError(elementError, input, textError);
  } else {
    hideInputError(elementError, input);
  }
}
//ОБРАБОТЧИКИ ВАЛИДНОСТИ

function formInputs(validationConfig, form) {
  const inputPopupArr = Array.from(
    form.querySelectorAll(validationConfig.popupInput)
  );
  const popupSubmitButtons = form.querySelector(
    validationConfig.buttonFormEditPofileTable
  );
  validateButton(inputPopupArr, popupSubmitButtons);

  inputPopupArr.forEach((inputElement) => {
    //в константу закидываем все классы "validationConfig.popupElementError" идущие после наших элементов(инпутов) в массиве
    const elementError = form.querySelector(`.${inputElement.id}-error`);
    //вешаем слушатель на инпуты (элементы массива /инпуты/ "inputPopupArr")
    inputElement.addEventListener("input", (evt) => {
      evt.preventDefault();
      checkInputValidity(
        inputElement,
        elementError,
        inputElement.validationMessage
      );
      validateButton(inputPopupArr, popupSubmitButtons);
    });
  });
}

//Активация
function enableValidation(validationConfig) {
  const formLists = Array.from(
    document.querySelectorAll(validationConfig.popupForm)
  );
  formLists.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
    });
    formInputs(validationConfig, formElement);
  });
}

enableValidation(validationConfig);
