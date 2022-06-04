const popupCloseButton = document.querySelector('.popup__close')
const Title = document.querySelector('.profile__title')
const SubTitle = document.querySelector('.profile__subtitle')
const popup = document.querySelector('.popup')
const buttonEdit = document.querySelector('.profile__button-edit')
const editTitle = document.querySelector('.popup__text')
const editSubTitle = document.querySelector('.popup__text:last-of-type')
const popupForm = document.querySelector('.popup__form')

//Включаем кнопку, дословно добавляем к классу popup + класс popup-Open
buttonEdit.addEventListener('click', function(){
  popup.classList.add("popup_opened"); 
  editTitle.value = Title.textContent;
  editSubTitle.value = SubTitle.textContent;
})

// Создаем функцию, удалять класс c flex
function closePopup(){
  popup.classList.remove("popup_opened");
}

//Закрываем наш попап крестиком без сохранения с помощью функции
popupCloseButton.addEventListener('click', closePopup);


//Здесь при нажатие кнопки сохранить мышкой и enter закроем и сохраним
popupForm.addEventListener('submit', function(event){
  console.log (event);
  event.preventDefault();
  Title.textContent = editTitle.value;
  SubTitle.textContent = editSubTitle.value;
  closePopup();
})
