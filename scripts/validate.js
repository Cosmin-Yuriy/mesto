//ФУНКЦИИ ВАЛИДНОСТИ
function validProfile() {
  //еще раз отключаем кнопку
  popupFormEditPofileTable.setAttribute("disabled", "disabled");
  //снова делаем константу с массивом
  const inputPopupArr = Array.from(
    popupFormEditPofileTable.querySelectorAll(validationConfig.popupInput)
  );
  const formIsValid = inputPopupArr.every(({ validity }) => validity.valid);
  //если валидно отправляем
  if (formIsValid) {
    title.textContent = titleEdit.value;
    subTitle.textContent = subTitleEdit.value;
    closePopup(popupEditProfile);
  }
}

//пробегаемся по массиву инпутов "inputPopupArr" берем в них { validity } и проверяем на  validity.valid тру или фолс
//   //возвращает true or false
function validButton(inputPopupArr, popupSubmitButton) {
  //пробегаемся по массиву инпутов "inputPopupArr" берем в них { validity } и проверяем на  validity.valid тру или фолс
  //возврощает true or false
  const formIsValid = inputPopupArr.every(({ validity }) => validity.valid);
  if (formIsValid) {
    popupSubmitButton.removeAttribute("disabled");
  } else {
    popupSubmitButton.setAttribute("disabled", "disabled");
  }
}

const showInputError = (elementError, inputElement, textError) => {
  elementError.classList.add(validationConfig.popupElementError);
  elementError.textContent = textError;
};

const hideInputError = (elementError,inputElement) => {
  elementError.classList.remove(validationConfig.popupElementError);
  elementError.textContent = '';
};

function checkInputValidity(input,elementError,textError){
  if (!input.checkValidity()){
    showInputError(elementError,input,textError);
  } else {
    hideInputError(elementError, input);
  }
}
//ОБРАБОТЧИКИ ВАЛИДНОСТИ

function inputValid(validationConfig, form) {
  const inputPopupArr = Array.from(form.querySelectorAll(validationConfig.popupInput));
  const popupSubmitButton = form.querySelector(
    validationConfig.buttonFormEditPofileTable
  );
  validButton(inputPopupArr, popupSubmitButton); 

  inputPopupArr.forEach((inputElement) => {
    //в константу закидываем все классы "validationConfig.popupElementError" идущие после наших элементов(инпутов) в массиве
    const elementError = form.querySelector(`.${inputElement.id}-error`);
    //вешаем слушатель на инпуты (элементы массива /инпуты/ "inputPopupArr")
    inputElement.addEventListener("input", () => {
     checkInputValidity(inputElement, elementError, inputElement.validationMessage);
      validButton(inputPopupArr, popupSubmitButton);
    });
  });
};

//Активация
function enableValidation(validationConfig) {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.popupForm)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    inputValid(validationConfig, formElement);
  });
}

enableValidation(validationConfig);
