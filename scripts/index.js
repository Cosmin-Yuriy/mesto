const popupCloseButton = document.querySelector('.popup__close')
const Title = document.querySelector('.title')
const SubTitle = document.querySelector('.subtitle')
const popup = document.querySelector('.popup')
const buttonEdit = document.querySelector('.button-edit')
const editTitle = document.querySelector('.popup__text')
const editSubTitle = document.querySelector('.popup__text:last-of-type')
const popupForm = document.querySelector('.popup__container')

//Включаем кнопку, дословно добавляем к классу popup + класс popup-Open
buttonEdit.addEventListener('click', function(){
  popup.classList.add("popup_opened"); 
})

// Закрываем наш попап крестиком без сохранения (удаляем класс c flex)
popupCloseButton.addEventListener('click', function(){
  popup.classList.remove("popup_opened");
})

//Здесь при нажатие кнопки сохранить мышкой и enter закроем и сохраним
popupForm.addEventListener('submit', function(event){
  console.log (event);
  event.preventDefault();
  Title.textContent = editTitle.value;
  SubTitle.textContent = editSubTitle.value;
  popup.classList.remove("popup_opened");
})
