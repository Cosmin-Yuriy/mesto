
//ФУНКЦИИ ВАЛИДНОСТИ
function validProfile() {
  //еще раз отключаем кнопку
  popupFormEditPofileTable.setAttribute("disabled", "disabled");
  //снова делаем константу с массивом
  const inputPopupArr = Array.from(popupFormEditPofileTable.querySelectorAll(validationConfig.popupInput));
  const formIsValid = inputPopupArr.every(({ validity }) => validity.valid);
  //если валидно отправляем
  if (formIsValid) {
    title.textContent = titleEdit.value;
    subTitle.textContent = subTitleEdit.value;
    closePopup(popupEditProfile);
  }
}




//ОБРАБОТЧИКИ ВАЛИДНОСТИ

//наверное сюда нужно popups вместо popupForm!!!
function inputValid(validationConfig){
  popupForm.forEach((popupFormElement, index) => {const inputPopupArr = Array.from(
    popupFormElement.querySelectorAll(validationConfig.popupInput)
  );
  //берем массив инпутов "inputPopupArr" и перебираем foreach
  inputPopupArr.forEach((inputPopupArrElement) => {
    //в константу закидываем все классы "validationConfig.popupElementError" идущие после наших элементов(инпутов) в массиве
    const elementError = popupFormElement.querySelector(`#${inputPopupArrElement.id} + ${validationConfig.popupElementError}`);

    //вешаем слушатель на инпуты (элементы массива /инпуты/ "inputPopupArr")
    inputPopupArrElement.addEventListener("input", (evt) => {
      const inputTarget = evt.target;
      elementError.textContent = inputTarget.validationMessage;
      validButton(inputPopupArr, popupSubmitButton, index);
    });
  });
});
};


//Активация
function enableValidation (validationConfig) {
  const formList = Array.from(document.querySelectorAll(validationConfig.popup));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit',  (evt) => {
    evt.preventDefault();
   });
   inputValid(validationConfig);
  });
};

enableValidation(validationConfig);