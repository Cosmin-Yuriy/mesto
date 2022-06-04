const popupCloseButton = document.querySelector('.popup__close')
const Title = document.querySelector('.profile__title')
const SubTitle = document.querySelector('.profile__subtitle')
const popup = document.querySelector('.popup')
const buttonEdit = document.querySelector('.profile__button-edit')
const editTitle = document.querySelector('.popup__text')
const editSubTitle = document.querySelector('.popup__text[name="subtitle"]')
console.log(editSubTitle)
const popupForm = document.querySelector('.popup__form')
// Из-за добавления type="button" меняем немного JS, я бы добавил TYPE="Submit", 
// так как мы будем всё таки это оправлять, но сказано - сделано:
let ButtonSave = document.getElementsByTagName("button")[8];
// console.log(ButtonSave);

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

//ПРИШЛОСЬ ПОМЕНЯТЬ / теперь работает если только на кнопку нажать, на ENTER не работает
//Здесь при нажатие кнопки сохранить мышкой и enter закроем и сохраним
ButtonSave.addEventListener('click', function(event){
  console.log (event);
  event.preventDefault();
  Title.textContent = editTitle.value;
  SubTitle.textContent = editSubTitle.value;
  closePopup();
})
