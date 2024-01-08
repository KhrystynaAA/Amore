btn__home.onclick=()=>{
    let x =document.getElementById('home__menu');
    
    x.classList.remove("hide__menu");
    let y=document.getElementById('recommended');
        y.classList.remove("active");
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
        
        const Category=e.currentTarget.dataset.id;
       /* const menuCategory = menu.filter((menuItem)=>{
            if(menuItem.Category==Category){
                return menuItem;
            }
        })*/
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
       // document.getElementById('recommended').scrollIntoView();
    })
})
filterBtnsBaner.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        let x=document.getElementById('burg__menu');
        x.className += " collapsed";
        x.ariaExpanded = "false";
        let y = document.getElementById('responsive');
        y.classList.remove("show");
        
    })
})
const menu = [
    {
        id: 1,
        title:"Аморе",
        Category: "pizza",
        article: "Піца",
        description: "Салямі, шинка, курка, помідор, сир, яйце (може бути без) ",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/amore.jpg"
    },
    {
        id: 2,
        title:"Монтана",
        Category: "pizza",
        article: "Піца",
        description: "Помідор, салямі, печериці, перець, кукурудза, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/montana.jpg"
    },
    {
        id: 3,
        title:"Тачіно",
        Category: "pizza",
        article: "Піца",
        description: "Курка, печериці, кукурудза, перець, цибуля, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/tachino.jpg"
    },
    {
        id: 4,
        title:"Капріча",
        Category: "pizza",
        article: "Піца",
        description: "Шинка, печериці, болгарський перець, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/capricha.jpg"
    },
    {
        id: 5,
        title:"Паза",
        Category: "pizza",
        article: "Піца",
        description: "Курка, креветки, болгарський перець, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 290UAH",
        categoryIndex: 5,
        img: "img/products/pizza/paza.jpg"
    },
    {
        id: 6,
        title:"IV сири (з грушею)",
        Category: "pizza",
        article: "Піца",
        description: "Моцарела, ементаль, горгонзола, пармезан, спеції",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 290UAH",
        categoryIndex: 5,
        img: "img/products/pizza/fourCheese.jpg"
    },
    {
        id: 7,
        title:"Полло",
        Category: "pizza",
        article: "Піца",
        description: "Курочка, моцарела, помідор, кукурудза",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/polo.jpg"
    },
    {
        id: 8,
        title:"Мексиканська",
        Category: "pizza",
        article: "Піца",
        description: "Курка, ананас, болгарський перець, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/mexykanska.jpg"
    },
    {
        id: 9,
        title:"Домашня",
        Category: "pizza",
        article: "Піца",
        description: "Курка, печериці, помідор, цибуля, пекінська капуста, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/domashnia.jpg"
    },
    {
        id: 10,
        title:"Карбонара",
        Category: "pizza",
        article: "Піца",
        description: "Сир, бекон, печериці, яйце, пармезан",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/carbonara.jpg"
    },
    {
        id: 11,
        title:"Салямі",
        Category: "pizza",
        article: "Піца",
        description: "Салямі, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 140UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/saliami.jpg"
    },
    {
        id: 12,
        title:"Маджоре",
        Category: "pizza",
        article: "Піца",
        description: "Філе лосося, перець, соус вершковий, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 280UAH",
        categoryIndex: 5,
        img: "img/products/pizza/majore.jpg"
    },
    {
        id: 13,
        title:"Тунець",
        Category: "pizza",
        article: "Піца",
        description: "Тунець, цибуля, болгарський перець, кукурудза, сир",
        price: "Діаметр 32см - 180UAH <br> Діаметр 50см - 270UAH",
        categoryIndex: 5,
        img: "img/products/pizza/tune.jpg"
    },
    {
        id: 14,
        title:"Лігурія",
        Category: "pizza",
        article: "Піца",
        description: "Шинка, печериці, болгарський перець, цибуля, сир + сирний соус",
        price: "Діаметр 32см - 150UAH ",
        categoryIndex: 5,
        img: "img/products/pizza/liguriia.jpg"
    },
    {
        id: 15,
        title:"Кальцоне (закрита піца)",
        Category: "pizza",
        article: "Піца",
        description: "Курка, шинка, печериці, болгарський перець, сир + пармезан",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH ",
        categoryIndex: 5,
        img: "img/products/pizza/calcone.jpg"
    },
    {
        id: 16,
        title:"Морський коктейль",
        Category: "pizza",
        article: "Піца",
        description: "Морепродукти, лимон, перець, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 180UAH <br> Діаметр 50см - 280UAH",
        categoryIndex: 5,
        img: "img/products/pizza/seaCocktail.jpg"
    },
    {
        id: 17,
        title:"Прошутто",
        Category: "pizza",
        article: "Піца",
        description: "Вершкова основа, печериці, оливки, прошутто, помідор, сир, пармезан",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 300UAH",
        categoryIndex: 5,
        img: "img/products/pizza/proshuto.jpg"
    },
    {
        id: 18,
        title:"Подих дракона <strong style='color: red;'>(ГОСТРА)</strong>",
        Category: "pizza",
        article: "Піца",
        description: "Чілі, салямі, оливки, помідор, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/podyhDragon.jpg"
    },
    {
        id: 19,
        title:"Прімавера",
        Category: "pizza",
        article: "Піца",
        description: "Шинка, печериці, квашений огірок, цибуля, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/primavera.jpg"
    },
    {
        id: 20,
        title:"Грибна",
        Category: "pizza",
        article: "Піца",
        description: "Олія, печериці, часник, сир, пармезан",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 140UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/mashroom.jpg"
    },
    {
        id: 21,
        title:"Чікен",
        Category: "pizza",
        article: "Піца",
        description: "Курка, шинка, болгарський перець, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 250UAH",
        categoryIndex: 5,
        img: "img/products/pizza/chicken.jpg"
    },
    {
        id: 22,
        title:"Сальса",
        Category: "pizza",
        article: "Піца",
        description: "Мисливські ковбаски, курка, в'ялені помідори, оливки зелені, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 170UAH <br> Діаметр 50см - 280UAH",
        categoryIndex: 5,
        img: "img/products/pizza/salsa.jpg"
    },
    {
        id: 23,
        title:"Полермо",
        Category: "pizza",
        article: "Піца",
        description: "Курка, салямі, помідор, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/polermo.jpg"
    },
    {
        id: 24,
        title:"М'ясна",
        Category: "pizza",
        article: "Піца",
        description: "Шинка, курка, салямі, бочок, мисливська ковбаска, часник, помідор, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 180UAH <br> Діаметр 50см - 280UAH",
        categoryIndex: 5,
        img: "img/products/pizza/meat.jpg"
    },
    {
        id: 25,
        title:"Асорті",
        Category: "pizza",
        article: "Піца",
        description: "Грибна/Салямі/Капріча/Домашня",
        price: "Діаметр 50см - 270UAH",
        categoryIndex: 5,
        img: "img/products/pizza/asorti.jpg"
    },
    {
        id: 26,
        title:"Маргарита",
        Category: "pizza",
        article: "Піца",
        description: "Соус, подвійний сир",
        price: "Діаметр 22см - 70UAH <br> Діаметр 32см - 130UAH",
        categoryIndex: 5,
        img: "img/products/pizza/margaryta.jpg"
    },
    {
        id: 27,
        title:"Б'янка",
        Category: "pizza",
        article: "Піца",
        description: "Вершковий соус, курка, печериці, дор Блю, моцарела, кукурудза, помідор",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 180UAH <br> Діаметр 50см - 280UAH",
        categoryIndex: 5,
        img: "img/products/pizza/bianka.jpg"
    },
    {
        id: 28,
        title:"Мисливська",
        Category: "pizza",
        article: "Піца",
        description: "Вершковий соус, мисливська ковбаска, часник, печериці, моцарела, квашений огірок",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 160UAH <br> Діаметр 50см - 260UAH",
        categoryIndex: 5,
        img: "img/products/pizza/myslyvska.jpg"
    },
    {
        id: 29,
        title:"Упаковка для піци",
        Category: "pizza",
        article: "Піца",
        description:"",
        price: "Діаметр 22см - 10UAH <br> Діаметр 32см - 15UAH",
        categoryIndex: 5,
        img: "img/products/pizza/case.jpg"
    },
    {
        id: 50,
        title:"Каліфорнія",
        Category: "roly",
        article: "Роли",
        description: "Сир, лосось, рис, огірок",
        price: "150UAH",
        categoryIndex: 1,
        img: "img/products/sushi/sushi1.png"
    },
    {
        id: 51,
        title:"філадельфія",
        Category: "roly",
        article: "Роли",
        description: "Сир, лосось, рис, огірок",
        price: "150UAH",
        categoryIndex: 2,
        img: "img/products/sushi/sushi1.png"
    },
]
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
        category: "free-alcohol-drinks"

    },
    {
        id: 8,
        title: "Гарячі напої",
        category: "warm-drinks"

    },
    {
        id: 9,
        title: "Безалкогольні коктейлі",
        category: "free-alcohol-cocteils"

    },
    {
        id: 10,
        title: "Молочні коктейлі",
        category: "milk-cocteils"

    },
    {
        id: 11,
        title: "Алкогольні напої",
        category: "alcohol-drinks"

    },
    {
        id: 12,
        title: "Алкогольні коктейлі",
        category: "alcohol-cocteils"

    },
    {
        id: 13,
        title: "Холодні напої",
        category: "cold-drinks"

    },
    {
        id: 14,
        title: "Sushi bowl",
        category: "sushi-bowl"

    },
    {
        id: 15,
        title: "Салати",
        category: "salads"

    },
    {
        id: 16,
        title: "Морозиво",
        category: "ice-cream"

    },
    {
        id: 17,
        title: "До пива",
        category: "beer-menu"

    },
]

window.addEventListener("DOMContentLoaded", ()=>{
    displayMenusItem(sections, menu);
});

function displayMenusItem(sectionItem, menuItems) {
    let subMenu = sectionItem.map((item) => {
        return `<a  href="#${item.category}">${item.title}</a>`;
    });
    
    subMenu = subMenu.join(" | ");
    let displayTitle = sectionItem.map((item) => {
        const filteredMenuItems = menuItems.filter((oneItem) => {
            if(oneItem.categoryIndex==item.id){
                return oneItem;
    }
});
        let displayMenusItem = filteredMenuItems.map((menuItem) => {
            return `      
                <div class="col-sm-12 col-lg-4 col-md-6" >
                    <div class="card-menu">
                        <img src=${menuItem.img} class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">
                                <h3 class="title">${menuItem.title}</h3>
                                <p class="Category">${menuItem.description}</p>
                                <p class="price">${menuItem.price}</p>
                            </p>
                        </div>
                    </div>
                </div>`;
        });
        displayMenusItem = displayMenusItem.join("");
        return `<div id="${item.category}"></div><h2 class="recommended__title" style="margin-top:50px;">${item.title}</h2>${displayMenusItem}<br>`;
    });

    displayTitle = displayTitle.join("");
    sectionCenter.innerHTML = `<nav class="d-inline">${subMenu}</nav><br>${displayTitle}`;
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
