const firstPage = ()=>{
    let x =document.getElementById('home__menu');
    
    x.classList.remove("hide__menu");
    let y=document.getElementById('recommended');
        y.classList.remove("active");
    
    let z=document.getElementById('backBtn');
    z.classList.remove("active");
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}
btn__home.onclick=()=>{
    firstPage();
}
backBtn.onclick=()=>{
    firstPage();
}
// Зберегти обрані товари в Session Storage
function saveSelectedItemsToSessionStorage(selectedItems) {
    sessionStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  }
  
  // Отримати обрані товари з Session Storage
  function getSelectedItemsFromSessionStorage() {
    const selectedItemsString = sessionStorage.getItem('selectedItems');
    return selectedItemsString ? JSON.parse(selectedItemsString) : [];
  }

const sectionCenter = document.querySelector('.recommended');
const filterBtns = document.querySelectorAll('.main__link');
const filterBtnsBaner = document.querySelectorAll('.nav__link');

filterBtns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        let x=document.getElementById('recommended');
        x.className += " active";
        let y = document.getElementById('home__menu');
        y.className += " hide__menu";
        let z=document.getElementById('backBtn');
        z.className +=" active";
        const Category=e.currentTarget.dataset.id;
        const sectionCategory = sections.filter((sectionItem)=>Category.includes(sectionItem.mainCategory));
        const sectionCategoryIndexes = sectionCategory.map(category => category.id);

       const menuCategory = menu.filter(menuItem => sectionCategoryIndexes.includes(menuItem.categoryIndex));

        
        displayMenusItem(sectionCategory, menuCategory);
       
        const elementPosition = document.getElementById('recommended').getBoundingClientRect().top;
        
        // Проводимо прокрутку до певної відстані вище від початку елемента
        window.scrollTo({
            top: window.scrollY + elementPosition - 150, // Встановлюємо відстань у 150 пікселів вище від верхнього краю елемента
            behavior: 'smooth'
        });
            //document.getElementById('recommended').scrollIntoView();
        })
})
liked__products.onclick=()=>{
    let x=document.getElementById('recommended');
    x.className += " active";
    let y = document.getElementById('home__menu');
    y.className += " hide__menu";
    let z=document.getElementById('backBtn');
    z.className +=" active";
    const menuCategory = menu.filter((menuItem) => {
        if(menuItem.selected){
            return menuItem;
        }});
    displaySelectedItem(menuCategory);
    
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
        
}
filterBtnsBaner.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        let x=document.getElementById('burg__menu');
        x.className += " collapsed";
        x.ariaExpanded = "false";
        let y = document.getElementById('responsive');
        y.classList.remove("show");
        
    })
})
// Оголошуємо глобальну змінну для меню
let menu = [];


const sections =[
    {
        id: 1,
        title: "Роли",
        category: "roly",
        mainCategory: "rolys"

    },
    {
        id: 2,
        title: "Теплі роли",
        category: "warm-roly",
        mainCategory: "rolys"

    },
    {
        id: 3,
        title: "Сети",
        category: "sety",
        mainCategory: "rolys"

    },
    {
        id: 4,
        title: "Спрінг роли",
        category: "spring-roly",
        mainCategory: "rolys"

    },
    {
        id: 5,
        title: "Піца",
        category: "pizza",
        mainCategory:"pizza"

    },
    {
        id: 6,
        title: "Склади свою піцу",
        category: "own-pizza",
        mainCategory: "pizza"

    },
    {
        id: 7,
        title: "Безалкогольні напої",
        category: "free-alcohol-drinks",
        mainCategory: "drinks"

    },
    {
        id: 8,
        title: "Гарячі напої",
        category: "warm-drinks",
        mainCategory: "drinks"

    },
    {
        id: 9,
        title: "Безалкогольні коктейлі",
        category: "free-alcohol-cocteils",
        mainCategory: "drinks"

    },
    {
        id: 10,
        title: "Молочні коктейлі",
        category: "milk-cocteils",
        mainCategory: "drinks"

    },
    {
        id: 11,
        title: "Алкогольні напої",
        category: "alcohol-drinks",
        mainCategory: "drinks"

    },
    {
        id: 12,
        title: "Алкогольні коктейлі",
        category: "alcohol-cocteils",
        mainCategory: "drinks"

    },
    {
        id: 13,
        title: "Холодні напої",
        category: "cold-drinks",
        mainCategory: "drinks"

    },
    {
        id: 14,
        title: "Sushi bowl",
        category: "sushi-bowl",
        mainCategory: "sushi-bowl"

    },
    {
        id: 15,
        title: "Салати",
        category: "salads",
        mainCategory: "salads"

    },
    {
        id: 16,
        title: "Морозиво",
        category: "ice-cream",
        mainCategory: "ice-cream"

    },
    {
        id: 17,
        title: "До пива",
        category: "beer-menu",
        mainCategory: "beer-menu"

    },
    {
        id: 18,
        title: "Бургери",
        category: "burgers",
        mainCategory: "burgers"

    },
    {
        id: 19,
        title: "Фритюр",
        category: "frytur",
        mainCategory: "frytur"

    },
    {
        id: 20,
        title: "Послуга відкоркуй",
        category: "open-service",
        mainCategory: "drinks"

    },
    {
        id: 21,
        title: "Упаковка",
        category: "sushi-pack",
        mainCategory: "rolys"

    },
]

/*
window.addEventListener("DOMContentLoaded", ()=>{
    displayMenusItem(sections, menu);
});*/



window.addEventListener("DOMContentLoaded", () => {
    // Завантажуємо дані з JSON файлу
    fetch('database.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Помилка завантаження бази даних");
            }
            return response.json(); // Перетворюємо текст у масив об'єктів
        })
        .then(data => {
            menu = data; // Записуємо завантажені дані у нашу змінну

            // Синхронізуємо з Session Storage, як це було у вашому коді
            const selectedItems = getSelectedItemsFromSessionStorage();
            menu.forEach(item => {
                item.selected = selectedItems.some(selectedItem => selectedItem.id === item.id);
            });

            // Відмальовуємо меню тільки після того, як дані завантажились
            displayMenusItem(sections, menu);
        })
        .catch(error => {
            console.error("Помилка:", error);
            // Тут можна вивести повідомлення для користувача, що меню не завантажилось
        });
});
function displayMenusItem(sectionItem, menuItems) {
    let subMenu;
    
    let subMenuContainer = document.createElement('div');
    if(sectionItem.length > 1) {
        subMenu = sectionItem.map((item) => {
        return `<a class="btn btn-coffee" href="#${item.category}">${item.title}</a>`;
    });
    subMenu = subMenu.join(" ");
   
    subMenuContainer.classList.add('sub-menu-container');
    subMenuContainer.innerHTML = subMenu;
}


    let displayTitle = sectionItem.map((item) => {
        const filteredMenuItems = menuItems.filter((oneItem) => {
            if(oneItem.categoryIndex==item.id){
                return oneItem;
    }
});
        let displayMenusItem = filteredMenuItems.map((menuItem) => {
            return `      
                <div class="col-sm-12 col-lg-4 col-md-6">
                    <div class="card-menu">
                        <img src=${menuItem.img ? menuItem.img : "img/icons/logoTab.png"} class="${menuItem.img ? '' : 'card-img-logo'} mx-auto d-block card-img-top">
                        <div class="card-body flex-grow-1">
                            <p class="card-text">
                                <p class="display-6">${menuItem.title}</p>
                                <p class="small text-muted "><em>${menuItem.weight}</em></p>
                                <p class="Category">${menuItem.description}</p>
                                <p class="price">${menuItem.price}</p>
                            </p>
                            <div class="d-flex justify-content-end align-items-center" id="select__btn">
                            <button class="btn" onclick="toggleSelectionMenu(${menuItem.id})">
                            <i class="${menuItem.selected ? 'fas' : 'far'} fa-heart fa-2x p-2"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        displayMenusItem = displayMenusItem.join("");
        return `<div id="${item.category}"></div><h2 class="recommended__title" style="margin-top:50px;">${item.title}</h2>${displayMenusItem}<br>`;
    });

    displayTitle = displayTitle.join("");
    sectionCenter.innerHTML = `<nav class="d-flex justify-content-center">${subMenuContainer.outerHTML}</nav><br>${displayTitle}`;
    
}
function toggleSelectionMenu(itemId) {
    
    // Знайдіть об'єкт меню за ідентифікатором
    const menuItem = menu.find(item => item.id === itemId);
    // Змініть значення властивості selected
    menuItem.selected = !menuItem.selected;
    
const selectedItems = menu.filter(item => item.selected);
saveSelectedItemsToSessionStorage(selectedItems);
    const menuSection = sections.find(item=>item.id === menuItem.categoryIndex);
    const Category=menuSection.mainCategory;
    const sectionCategory = sections.filter((sectionItem)=>Category.includes(sectionItem.mainCategory));
    const sectionCategoryIndexes = sectionCategory.map(category => category.id);

    const menuCategory = menu.filter(menuItem => sectionCategoryIndexes.includes(menuItem.categoryIndex));
    displayMenusItem(sectionCategory, menuCategory);

       
}
function displaySelectedItem(menuItems){
    let displayMenusItem = menuItems.map((menuItem) => {
        return `      
            <div class="col-sm-12 col-lg-6 col-md-12">
                <div class="selected-item">
                    
                   <div class=" d-flex justify-content-between">
                    <div class="card-body flex-grow-1">
                        <p class="card-text">
                            <p class="display-6">${menuItem.title}</p>
                            <p class="small text-muted"><em>${menuItem.weight}</em></p>
                            <p class="Category">${menuItem.description}</p>
                            <p class="price">${menuItem.price}</p>
                        </p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center p-2" style="max-width: 27%;"><img src=${menuItem.img ? menuItem.img : "img/icons/logoTab.png"} class="card-img-top"></div>
                    </div>
                    <div class="d-flex justify-content-end align-items-center" id="select__btn">
                    <button class="btn" onclick="toggleSelection(${menuItem.id})">
                    <i class="fas fa-heart fa-2x p-2"></i>
                </button>
            </div>
                </div>
                
            </div>`;
    });
    displayMenusItem = displayMenusItem.join("");
    sectionCenter.innerHTML = `<h2 class="recommended__title" style="margin-top:50px;">Обране</h2><br>${displayMenusItem}`;
}
function toggleSelection(itemId) {
    
    // Знайдіть об'єкт меню за ідентифікатором
    const menuItem = menu.find(item => item.id === itemId);

    // Змініть значення властивості selected
    menuItem.selected = !menuItem.selected;
    const selectedItems = menu.filter(item => item.selected);
    saveSelectedItemsToSessionStorage(selectedItems);
    displaySelectedItem(selectedItems);
   /* const menuCategory = menu.filter((menuItem) => {
        if(menuItem.selected){
            return menuItem;
        }});
    // Оновіть відображення обраного елемента
    displaySelectedItem(menuCategory);*/
}
// Також змініть window.onload, оскільки ми перенесли логіку Session Storage всередину fetch
window.onload = function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
};
/*window.onload = function () {
    const selectedItems = getSelectedItemsFromSessionStorage();
    menu.forEach(item => {
      item.selected = selectedItems.some(selectedItem => selectedItem.id === item.id);
    });
    
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
  };*/

// Отримати поточний день тижня (від 0 до 6, де 0 - неділя, 1 - понеділок, і так далі)
const currentDay = new Date().getDay();

// Створити масив днів тижня
const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// Знайти елемент дня тижня за ідентифікатором і підсвітити його
const highlightedDay = document.getElementById(daysOfWeek[currentDay]);
if (highlightedDay) {
    highlightedDay.style.fontSize = '1.2em'; 
    highlightedDay.style.fontWeight = 'bold';

}

/*function displaySubMenusItem(menuItem, subCategory){
    
    let name__article;
    let subCat = subCategory.map((category) => {
        return `<a href="#${category}">${category}</a>`;
    });
    
    subCat = subCat.join(" | ");
    let displaySubMenusItem = menuItem.map((item)=>{
        name__article=item.article;
        
        return `      
        
			<div class="col-sm-12 col-lg-4 col-md-6 id="${subCategory[item.categoryIndex]}" >
				<div class="card-menu">
					<img src=${item.img} class="card-img-top">
					<div class="card-body">
					  <p class="card-text">
                        <h3 class="title">${item.title}</h3>
                        <p class="Category">${item.description}</p>
                        <p class="price">${item.price}</p>
					</p>
					</div>
				  </div>
			</div>`;
    })

    displaySubMenusItem = displaySubMenusItem.join("");
    sectionCenter.innerHTML = `<h2 class="recommended__title">${subCat}<br>${name__article}</h2>${displaySubMenusItem}`;
}
/*<script>
  // Отримайте всі кнопки за класом
  var buttons = document.getElementsByClassName('main__link');

  // Отримайте контейнер для підкатегорій
  var subcategoriesContainer = document.getElementById('subcategories-container');

  // Створіть обробник подій для кожної кнопки
  Array.from(buttons).forEach(function(button) {
    button.addEventListener('click', function() {
      // Очистіть контейнер перед додаванням нового вмісту
      subcategoriesContainer.innerHTML = '';

      // Отримайте data-id з кнопки
      var categoryId = button.getAttribute('data-id');

      // Здійсніть дії відповідно до категорії
      switch (categoryId) {
        case 'roly':
          // Додайте підкатегорії для ролів
          subcategoriesContainer.innerHTML = '<p>Підкатегорії для Ролів</p>';
          break;
        case 'pizza':
          // Додайте підкатегорії для піци
          subcategoriesContainer.innerHTML = '<p>Підкатегорії для Піци</p>';
          break;
        // Додайте інші категорії, якщо потрібно
      }
    });
  });
</script>
*/
