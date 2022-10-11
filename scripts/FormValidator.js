//ФУНКЦИИ ВАЛИДНОСТИ
class FormValidator {
  //Обязательно нужно пробрасывать (параметры/аргументы из Класа/index)
//ВСЁ, ПОНЯЛ :)) - СПАСИБО!
  constructor(validationConfig, form) {
    this._popupForm = validationConfig.popupForm;
    this._validationConfig = validationConfig;
    this._popupElementError = validationConfig.popupElementError;
    this._popupInputError = validationConfig.popupInputError;
    this._popupInput = validationConfig.popupInput;
    this._buttonFormEditPofileTable =
      validationConfig.buttonFormEditPofileTable;
    this._form = form;
  }

  validateButton = () => {
    //пробегаемся по инпуту формы "formInputs" берем в них { validity } и проверяем на  validity.valid тру или фолс
    this._isFormValid = this._formInputs.every(
      ({ validity }) => validity.valid
    );
    //Если форма валидная включаем кнопку
    if (this._isFormValid) {
      this._popupSubmitButton.removeAttribute("disabled");
      //Если форма не валидная отключаем кнопку
    } else {
      this._popupSubmitButton.setAttribute("disabled", "disabled");
    }
  };

  _showInputError = (inputElement) => {
    this._elementError = document.querySelector(`.${inputElement.id}-error`);
    this._textError = inputElement.validationMessage;
    inputElement.classList.add(this._popupInputError);
    this._elementError.textContent = this._textError;
  };

  _hideInputError = (inputElement) => {
    this._elementError = document.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._popupInputError);
    this._elementError.textContent = "";
  };

  _checkInputValidity = (input) => {
    if (!input.checkValidity()) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  };
  
  //ОБРАБОТЧИКИ ВАЛИДНОСТИ
  _validateFormInputs = () => {
    //создаем массив из инпутов
    this._formInputs = Array.from(
      this._form.querySelectorAll(this._popupInput)
    );
    //определяем кнопку "сохранить/отправить" в профиле
    this._popupSubmitButton = this._form.querySelector(
      this._buttonFormEditPofileTable
    );
    this.validateButton();
  
    this._formInputs.forEach((inputElement) => {
      //вешаем слушатель на инпуты (элементы массива /инпуты/ "this._formInputs")
      inputElement.addEventListener("input", (evt) => {
        //  evt.preventDefault();
        this._checkInputValidity(inputElement);
        this.validateButton();
      });
    });
  };

  enableValidation() {
    this._validateFormInputs(); 
  }
}

export default FormValidator;
