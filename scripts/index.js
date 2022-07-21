//ПЕРЕМЕННЫЕ

const popupCloseButton = document.querySelector(".popup__close");
const title = document.querySelector(".profile__title");
const subTitle = document.querySelector(".profile__subtitle");
const popupEditProfile = document.querySelector("#popup_edit_profile");
const buttonEdit = document.querySelector(".profile__button-edit");
const titleEdit = document.querySelector('.popup__text[name="name"]');
const subTitleEdit = document.querySelector('.popup__text[name="subtitle"]');
// Делаем константу для для title карточки
const titleCard = document.querySelector(".element__text");
const popupFormEditPofileTable = document.querySelector('.popup__form[name="popupFormEditPofileTable"]');
const buttonAddButton = document.querySelector(".profile__add-button");
//Форма добавления ищем по айди и скидываем в константу
const popupAdd = document.querySelector("#popup_add");
//Сделали переменную с помощью id
//теперь делаем постоянную ищем нужный класс который находится там
const popupEditCloseButton = popupAdd.querySelector(".popup__close");
//console.log(popupEditCloseButton);
//Сделали переменную с помощью id для текста title и subtitle ДЛЯ ПЛОХОГО МЕТОДА
const textValuePopupTitle = document.querySelector("#text-input-title");
const textValuePopupSubtitle = document.querySelector("#text-input-subtitle");
//Кнопка like берем полность блок Elements
const elementsCardsAll = document.querySelector(".elements");
// const first = document.querySelector(".element");

//Сделали переменную с помощью id для текста title и subtitle
const templatePopform = document.querySelector(".template-todo");
//ДЛЯ POPUP c КАРТИНКОЙ
//Найдем наш попап с картинкой и закинем его в константу PopupImg
const popupImg = document.querySelector("#popup-photo");
//Найдем в этом попапе нашу кнопку "закрытие" с классом  popup__close
//и закинем это все в  popupClose
const buttonPopupBigImgClose = document.querySelector(".popup__close[name='buttonPopupBigImgClose']");

const popupPhoto = document.querySelector("#popup-photo");
const newElement = document.querySelector('#newElement');
// const elementsCardsAll = document.querySelector(".elements");
//создаем константу, из списка карточек Ul - li


//ФУНКЦИИ


// Создаем функцию, удалять класс c flex
function closePopupEdit() {
  popupAdd.classList.remove("popup_opened");
  //Корректируем текст
  // CorrectTextForm();
}

//ФУНКЦИЯ - Корректировка текста
const CorrectTextForm = (text) => {
  //Удаляем текст Value
  const RemoveTitle = document.getElementById("text-input-title");
  //Делаем там пустую строку
  RemoveTitle.value = "";
  // меняем цвет title
  textValuePopupTitle.classList.add("popup__text_color-font_grey");
  // при нажатии на value меняется цвет обратно серый subTitle
  textValuePopupSubtitle.classList.add("popup__text_color-font_grey");
  const RemoveSubitle = document.getElementById("text-input-subtitle");
  RemoveSubitle.value = "";
};

//Делаем константу(стрелочную функцию) с аргументами для проброса данных
//Титла картинки и ссылки на картинку



// const todor = newElement.content.cloneNode(true);
// todor.querySelector(".element__text").textContent = text;
// todor.querySelector(".element__img").src = src;


// const newElementAdd2 = newElementAdd.querySelector('.element');
// const rer = ()=> {
//   newElementAdd.querySelector(".element__text").textContent = text;
//   newElementAdd.querySelector(".element__img").src = src;
// //   };
// function creatTodo(text, src) {
  
//   newElementAdd.querySelector(".element__text").textContent = text;
//   newElementAdd.querySelector(".element__img").src = src;
// };

// function test(text, src){
//   newElementAdd.querySelector(".element__text").textContent = item.name;
//   newElementAdd.querySelector(".element__img").src = item.link;
// };
// test('work','ya.ru');



// Здесь мы перебираем массив методом forEach - аргументом выступает функция (item туда
// направляется каждый элемент массива, соответсвенно каждая итерации внутри функции, там мы
// и колдуем также как и в For цикле)
initialCards.forEach(function (item) {
  // обязательно вставлять cloneNode в цикл, иначе не будет заново клонироваться объект/элемент
  const newElementAdd = newElement.content.cloneNode(true);
  //берем нашу константу через къериселектор указываем какой класс берем, и то, что мы будем
  //колдавать с текстом "textContent" - туда забрасываем из массива, что указываем "item" 
  //и объект "name"
  newElementAdd.querySelector(".element__text").textContent = item.name;
   //берем нашу константу через къериселектор указываем какой класс берем, и то, что мы будем
  //колдавать с ссылкой "src" - туда забрасываем из массива, что указываем "item" 
  //и объект "link"
  newElementAdd.querySelector(".element__img").src = item.link;
//Затем перед карточками "elementsCardsAll" в начале выбрасываем это все c помощью prepend
  elementsCardsAll.prepend(newElementAdd);
  
});


//Функция изменения текста title в форме
function changeColorTextTitle() {
  //Удаляем текст Value
  let RemoveTitle = document.getElementById("text-input-title");
  //Делаем там пустую строку
  RemoveTitle.value = "";
  textValuePopupTitle.classList.remove("popup__text_color-font_grey");
}

//Функция изменения текста subTitle в форме
function changeColorTextSubtitle() {
  //Удаляем текст Value
  let RemoveSubitle = document.getElementById("text-input-subtitle");
  //Делаем там пустую строку
  RemoveSubitle.value = "";
  textValuePopupSubtitle.classList.remove("popup__text_color-font_grey");
}
// Создаем функцию, открывать Попап
function openPopup(){
  popupEditProfile.classList.add("popup_opened");
};

// Создаем функцию, удалять класс c flex
function closePopup() {
  popupEditProfile.classList.remove("popup_opened");
}

//ОБРАБОТЧИКИ

// при нажатии на value меняется цвет title
const TextEditNewForm = textValuePopupTitle.addEventListener(
  "click",
  changeColorTextTitle
);

// при нажатии на value меняется цвет subTitle
textValuePopupSubtitle.addEventListener("click", 
  changeColorTextSubtitle
);

// 1 POPUP
//Включаем кнопку, дословно добавляем к классу popup + класс popup-Open
buttonEdit.addEventListener("click", function () {
  openPopup();
  // popupEditProfile.classList.add("popup_opened");
  titleEdit.value = title.textContent;
  subTitleEdit.value = subTitle.textContent;
});

//Закрываем наш попап крестиком без сохранения с помощью функции
popupCloseButton.addEventListener("click", closePopup);

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupFormEditPofileTable.addEventListener("submit", function (event) {
  event.preventDefault();
  title.textContent = titleEdit.value;
  subTitle.textContent = subTitleEdit.value;
  closePopup();
});

// 2 POPUP
//Форма редактирования
//Включаем кнопку, дословно добавляем к классу popup_add + класс popup-Open
buttonAddButton.addEventListener("click", function () {
  popupAdd.classList.add("popup_opened");
});

//Закрываем наш попап edit крестиком без сохранения с помощью функции
popupEditCloseButton.addEventListener("click", closePopupEdit);

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupFormEditPofileTable.addEventListener("submit", function (event) {
  event.preventDefault();
  closePopupEdit();
});

//ФУНКЦИЯ - Добавление данных форму

//Здесь при нажатие кнопки сохранить мышкой или enter закроем и сохраним
popupAdd.addEventListener("submit", function (event) {
  //что б не перезагружалась страница
  event.preventDefault();
  //Константа, что текст Титла, что ввели в форме
  const titleCardNew = textValuePopupTitle.value;
  //Константа, ссылка на картинку, что ввели в форме
  const link = textValuePopupSubtitle.value;
  //Перекидываем в константу темлейт, открываем его - clone(true)
  const todoNewCard = templatePopform.content.cloneNode(true);
 
  //теперь находим класс Тайтла в контстанте todoNewCard, с помощью textContent кладем туда нашу константу с title
  todoNewCard.querySelector(".element__text").textContent = titleCardNew;
  //Также делаем здесь, указываем, что нужно закинуть в src и туда кидаем ссылку
  todoNewCard.querySelector(".element__img").src = link;
  //Теперь берем константу где указан блок Ul "Elements", перед вложением li (prepend) укладываем нашу измененную константу
  elementsCardsAll.prepend(todoNewCard);
  closePopupEdit();
  //  Функция - корректировка текста
  CorrectTextForm();
});

// ЧЕРНОЕ СЕРДЦЕ при КЛИКЕ

//При клике на сердце за этим следит evt
elementsCardsAll.addEventListener("click", function (evt) {
  // будет найден с помощью targe имеено этот класс - кидаем его в константу Pushlike
  //будет следить за все где нажмем, то что есть в классе "elements"
  const clickLike = evt.target;
//смотрим через classlist (получаем список классов в "clickLike"), и с помощбю toogle -
//если нету класса "element__like_active", то его добавляем, если есть убираем
if (clickLike.classList.contains("element__like")) {
clickLike.classList.toggle("element__like_active");
}
});

//При клике на Trash за этим следит evt
elementsCardsAll.addEventListener("click", function (evt) {
  // будет найден с помощью target (ссылка на объект, которым было
  //инициировано событие. Например, если событие произошло на поле
  // ввода, мы получим ссылку на этот DOM элемент.) именно этот
  // класс - кидаем его в константу Pushlike
  const clickTrash = evt.target;

  if (clickTrash.classList.contains("element__trash")) {
    //ищет ближайший родительский 
    clickTrash.closest('.element').remove();
  }
});

//При клике на картинку за этим следит evt
elementsCardsAll.addEventListener("click", function (evt) {
  // будет найден с помощью target (ссылка на объект, которым было
  //инициировано событие. Например, если событие произошло на поле
  // ввода, мы получим ссылку на этот DOM элемент.) именно этот
  // класс - кидаем его в константу
  const clickImg = evt.target;
  //Если мы кликнули на картинку, а в ней, кликнутой есть стиль element__img,
  // то сделаем следующее:
  if (clickImg.classList.contains("element__img")) {
    //Убираем наш  dispalay none c добавлением класса popup_opened в наш попап
    popupImg.classList.add("popup_opened");

    // Создаем функцию, удалять класс popup_opened
    const closePopupEdit = () => {
      //удаляем класс popup_opened из попапа с id popup-photo
      popupImg.classList.remove("popup_opened");
    };
    //Закрываем наш попап крестиком с помощью функции (если событие произошло нажали на крестик
    // buttonPopupBigImgClose в нем класс popup__close)
    buttonPopupBigImgClose.addEventListener("click", closePopupEdit);
    // console.log('наша попа клоуз');
    //закидываем ссылку фото Элемента на которую нажали
    const link = (element__img = clickImg.src);
    //Теперь эту сслыку забрасываем в наш попап в src
    popupImg.querySelector(".popup__photo").src = link;
  }
});
