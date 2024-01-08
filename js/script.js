btn__home.onclick=()=>{
    let x =document.getElementById('home__menu');
    
    x.classList.remove("hide__menu");
    let y=document.getElementById('recommended');
        y.classList.remove("active");
}
function goBack (){
    let x =document.getElementById('home__menu');
    
    x.classList.remove("hide__menu");
    let y=document.getElementById('recommended');
        y.classList.remove("active");
    
    let z=document.getElementById('backBtn');
    z.classList.remove("active");
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
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
        id: 45,
        title:"Філадельфія",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, лосось, авокадо, огірок, сир Філадельфія",
        price: "150UAH",
        categoryIndex: 1,
        img: ""
    },
    {
        id: 46,
        title:"Філадельфія з креветкою",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, лосось, сир Філадельфія, креветки",
        price: "170UAH",
        categoryIndex: 1,
        img: "img/products/sushi/filadelfia_shrimp.jpg"
    },
    {
        id: 47,
        title:"Black Філадельфія",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, лосось, сир Філадельфія, огірок, ікра Масаго",
        price: "160UAH",
        categoryIndex: 1,
        img: ""
    },
    {
        id: 48,
        title:"Філадельфія вега",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, авокадо, кунжут, соус Унагі",
        price: "120UAH",
        categoryIndex: 1,
        img: ""
    },
    {
        id: 49,
        title:"Філадельфія з Вугрем",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, вугор, авокадо, кунжут",
        price: "150UAH",
        categoryIndex: 1,
        img: "img/products/sushi/filadelfia_eel.jpg"
    },
    {
        id: 50,
        title:"Філадельфія Масаго",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, лосось, сир Філадельфія, огірок, ікра Масаго",
        price: "140UAH",
        categoryIndex: 1,
        img: "img/products/sushi/filadelfia_masaho.jpg"
    },
    {
        id: 51,
        title:"Каліфорнія",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, авокадо, креветки, ікра Масаго",
        price: "150UAH",
        categoryIndex: 1,
        img: "img/products/sushi/californiia.jpg"
    },
    {
        id: 52,
        title:"Каліфорнія з Вугрем",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, авокадо, вугор, креветки, ікра Масаго",
        price: "150UAH",
        categoryIndex: 1,
        img: "img/products/sushi/californiia_eel.jpg"
    },
    {
        id: 53,
        title:"Каліфорнія Домінікана",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, авокадо, креветки, ікра Масаго",
        price: "150UAH",
        categoryIndex: 1,
        img: "img/products/sushi/californiia_dominikana.jpg"
    },
    {
        id: 54,
        title:"Рожевий Фламінго",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, мідії",
        price: "130UAH",
        categoryIndex: 1,
        img: "img/products/sushi/pink_flamingo.jpg"
    },
    {
        id: 55,
        title:"Зелений дракон з вугрем",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, вугор, авокадо, соус Унагі, кунжут",
        price: "170UAH",
        categoryIndex: 1,
        img: "img/products/sushi/green_dragon.jpg"
    },
    {
        id: 56,
        title:"Зелений дракон з креветкою",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, огірок, авокадо, креветки, соус Унагі, кунжут",
        price: "170UAH",
        categoryIndex: 1,
        img: "img/products/sushi/green_dragon_shrimp.jpg"
    },
    {
        id: 58,
        title:"Білий дракон",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, сир Філадельфія, лосось, тостерний сир, кунжут",
        price: "150UAH",
        categoryIndex: 1,
        img: "img/products/sushi/white_dragon.jpg"
    },
    {
        id: 71,
        title:"Сирний з креветкою",
        Category: "roly",
        article: "Роли",
        description: "Рис, норі, огірок, креветки, сир Філадельфія, тостерний сир, пармезан, соус Унагі",
        price: "150UAH",
        categoryIndex: 1,
        img: "img/products/sushi/cheese_shrimp.jpg"
    },
    {
        id: 81,
        title:"Запечений рол з лососем",
        Category: "roly",
        article: "Теплі роли",
        description: "Рис, сир Філадельфія, огірок, авокадо, лосось, соус Унагі, соус для запікання, кунжут",
        price: "150UAH",
        categoryIndex: 2,
        img: "img/products/sushi/warm_role_salmon.jpg"
    },
    {
        id: 82,
        title:'Запечений "Цезар"',
        Category: "roly",
        article: "Теплі роли",
        description: "Рис, сир Філадельфія, огірок, копчена курка, салата, соус Унагі, соус для запікання, кунжут",
        price: "150UAH",
        categoryIndex: 2,
        img: "img/products/sushi/warm_role_chicken.jpg"
    },
    {
        id: 83,
        title:"Запечений рол з креветкою",
        Category: "roly",
        article: "Теплі роли",
        description: "Рис, сир Філадельфія, огірок, креветки, соус для запікання",
        price: "150UAH",
        categoryIndex: 2,
        img: "img/products/sushi/warm_role_shrimp.jpg"
    },
    {
        id: 84,
        title:"Запечена мідія",
        Category: "roly",
        article: "Теплі роли",
        description: "Рис, сир Філадельфія, огірок, зелена цибуля, мідії, соус для запікання",
        price: "110UAH",
        categoryIndex: 2,
        img: "img/products/sushi/warm_role_mussel.jpg"
    },
    {
        id: 85,
        title:"Сет Асорті",
        Category: "roly",
        article: "Сети",
        description: "Рол Філадельфія/Філадельфія з креветками/Каліфорнія/Чікен/Боніто/Сирний/Норі макі/Макі Сурімі/Городина кунжут/Макі з огірком",
        price: "600UAH",
        categoryIndex: 3,
        img: "img/products/sushi/set_asorti.jpg"
    },
    {
        id: 86,
        title:'Сет "Філадельфія"',
        Category: "roly",
        article: "Сети",
        description: "Філадельфія з лососем/Філадельфія з креветкою/Філадельфія вега/Філадельфія масаго",
        price: "550UAH",
        categoryIndex: 3,
        img: "img/products/sushi/set_filadelfiia.jpg"
    },
    {
        id: 87,
        title:"Сет Торт",
        Category: "roly",
        article: "Сети",
        description: "Рол Філадельфія/рол Філадельфія з вугрем у кунжуті/рол Боніто/рол Каліфорнія/рол Норі макі",
        price: "630UAH",
        categoryIndex: 3,
        img: "img/products/sushi/set_cake.jpg"
    },
{
        id: 120,
        title:"Орео Айс",
        Category: "drinks",
        article: "Гарячі напої",
        description: 'Еспресо, молоко, морозиво, печиво "Орео", аерозольні вершки',
        price: "50UAH",
        categoryIndex: 8,
        img: "img/products/drinks/oreo_ice.jpg"
    },
    {
        id: 140,
        title:"ENJOY",
        Category: "drinks",
        article: "Алкогольні коктейлі",
        description: 'Джин, н/с шампанське, спрайт, сироп полуничний, солодка вата',
        price: "110UAH",
        categoryIndex: 12,
        img: "img/products/drinks/enjoy.jpg"
    },
    {
        id: 141,
        title:"Violet aperol",
        Category: "drinks",
        article: "Алкогольні коктейлі",
        description: 'Джин, н/с шампанське, спрайт, сироп Лаванда та чорниця, лід',
        price: "110UAH",
        categoryIndex: 12,
        img: "img/products/drinks/violet_aperol.jpg"
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
        const categoryId = item.category.replace(/[^a-zA-Z0-9-_]/g, '_');
    
        return `<a  href="#${categoryId}">${item.title}</a>`;
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
                <div class="col-sm-12 col-lg-4 col-md-6">
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
