
//ФУНКЦИИ ВАЛИДНОСТИ
function validProfile() {
  //еще раз отключаем кнопку
  popupSubmitButton[0].setAttribute("disabled", "disabled");
  //снова делаем константу с массивом
  const inputPopupArr = Array.from(
    popupForm[0].querySelectorAll(enableValidation.popupInput)
  );
  const formIsValid = inputPopupArr.every(({ validity }) => validity.valid);
  //если валидно отправляем
  if (formIsValid) {
    title.textContent = titleEdit.value;
    subTitle.textContent = subTitleEdit.value;
    popupClose(popupEditProfile);
  }
}


//ЗАКРЫТИЯ ПОПАПА ДОПОЛНИТЕЛЬНЫЕ
//закрытие попапа нажатие на паранжу
function popupCloseOutPopup(popupElement, popupArr) {
  popupElement.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget) {
      popupArr.forEach((element) => {
        popupClose(element);
      });
    }
  });
}

//ЗАКРЫТИЕ ПОПАПА С ПОМОЩЬЮ ESC
function popupCloseKeydownEscape(popupArr) {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      popupArr.forEach((element) => {
        popupClose(element);
      });
    }
  });
}
//ЗАКРЫТИЕ ПОПАПА НАЖАТИЕМ НА ПАРАНЖУ
popup.forEach((popupElement) => {
  //закрытие попапа нажатие на паранжу
  popupCloseOutPopup(popupElement, popupArr);
  //Закрытие попапа с помощью esc
  popupCloseKeydownEscape(popupArr);
});




//ОБРАБОТЧИКИ ВАЛИДНОСТИ
popupForm.forEach((popupFormElement, index) => {
  const inputPopupArr = Array.from(
    popupFormElement.querySelectorAll(enableValidation.popupInput)
  );
  //берем массив инпутов "inputPopupArr" и перебираем foreach
  inputPopupArr.forEach((inputPopupArrElement) => {
    //в константу закидываем все классы "enableValidation.popupElementError" идущие после наших элементов(инпутов) в массиве
    const elementError = popupFormElement.querySelector(
      `#${inputPopupArrElement.id} + ${enableValidation.popupElementError}`
    );

    //вешаем слушатель на инпуты (элементы массива /инпуты/ "inputPopupArr")
    inputPopupArrElement.addEventListener("input", (evt) => {
      const inputTarget = evt.target;
      //const fieldIsValid = inputTarget.validity.valid;
      elementError.textContent = inputTarget.validationMessage;
      validButton(inputPopupArr, popupSubmitButton, index);
    });
  });
});
