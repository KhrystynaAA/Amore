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
        const menuCategory = menu.filter((menuItem)=>{
            if(menuItem.Category==Category){
                return menuItem;
            }
        })
        displayMenusItem(menuCategory);
        document.getElementById('recommended').scrollIntoView();
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
        img: "img/products/pizza/amore.jpg"
    },
    {
        id: 2,
        title:"Монтана",
        Category: "pizza",
        article: "Піца",
        description: "Помідор, салямі, печериці, перець, кукурудза, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        img: "img/products/pizza/montana.jpg"
    },
    {
        id: 3,
        title:"Тачіно",
        Category: "pizza",
        article: "Піца",
        description: "Курка, печериці, кукурудза, перець, цибуля, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        img: "img/products/pizza/tachino.jpg"
    },
    {
        id: 4,
        title:"Капріча",
        Category: "pizza",
        article: "Піца",
        description: "Шинка, печериці, болгарський перець, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        img: "img/products/pizza/capricha.jpg"
    },
    {
        id: 5,
        title:"Паза",
        Category: "pizza",
        article: "Піца",
        description: "Курка, креветки, болгарський перець, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 290UAH",
        img: "img/products/pizza/paza.jpg"
    },
    {
        id: 6,
        title:"IV сири (з грушею)",
        Category: "pizza",
        article: "Піца",
        description: "Моцарела, ементаль, горгонзола, пармезан, спеції",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 290UAH",
        img: "img/products/pizza/fourCheese.jpg"
    },
    {
        id: 7,
        title:"Полло",
        Category: "pizza",
        article: "Піца",
        description: "Курочка, моцарела, помідор, кукурудза",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        img: "img/products/pizza/polo.jpg"
    },
    {
        id: 8,
        title:"Мексиканська",
        Category: "pizza",
        article: "Піца",
        description: "Курка, ананас, болгарський перець, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        img: "img/products/pizza/mexykanska.jpg"
    },
    {
        id: 9,
        title:"Домашня",
        Category: "pizza",
        article: "Піца",
        description: "Курка, печериці, помідор, цибуля, пекінська капуста, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        img: "img/products/pizza/domashnia.jpg"
    },
    {
        id: 10,
        title:"Карбонара",
        Category: "pizza",
        article: "Піца",
        description: "Сир, бекон, печериці, яйце, пармезан",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        img: "img/products/pizza/carbonara.jpg"
    },
    {
        id: 11,
        title:"Салямі",
        Category: "pizza",
        article: "Піца",
        description: "Салямі, сир",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 140UAH <br> Діаметр 50см - 260UAH",
        img: "img/products/pizza/saliami.jpg"
    },
    {
        id: 12,
        title:"Маджоре",
        Category: "pizza",
        article: "Піца",
        description: "Філе лосося, перець, соус вершковий, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 280UAH",
        img: "img/products/pizza/majore.jpg"
    },
    {
        id: 13,
        title:"Тунець",
        Category: "pizza",
        article: "Піца",
        description: "Тунець, цибуля, болгарський перець, кукурудза, сир",
        price: "Діаметр 32см - 180UAH <br> Діаметр 50см - 270UAH",
        img: "img/products/pizza/tune.jpg"
    },
    {
        id: 14,
        title:"Лігурія",
        Category: "pizza",
        article: "Піца",
        description: "Шинка, печериці, болгарський перець, цибуля, сир + сирний соус",
        price: "Діаметр 32см - 150UAH ",
        img: "img/products/pizza/liguriia.jpg"
    },
    {
        id: 15,
        title:"Кальцоне (закрита піца)",
        Category: "pizza",
        article: "Піца",
        description: "Курка, шинка, печериці, болгарський перець, сир + пармезан",
        price: "Діаметр 22см - 80UAH <br> Діаметр 32см - 150UAH ",
        img: "img/products/pizza/calcone.jpg"
    },
    {
        id: 16,
        title:"Морський коктейль",
        Category: "pizza",
        article: "Піца",
        description: "Морепродукти, лимон, перець, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 180UAH <br> Діаметр 50см - 280UAH",
        img: "img/products/pizza/seaCocktail.jpg"
    },
    {
        id: 17,
        title:"Прошутто",
        Category: "pizza",
        article: "Піца",
        description: "Вершкова основа, печериці, оливки, прошутто, помідор, сир, пармезан",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 200UAH <br> Діаметр 50см - 300UAH",
        img: "img/products/pizza/proshuto.jpg"
    },
    {
        id: 18,
        title:"Подих дракона <strong style='color: red;'>(ГОСТРА)</strong>",
        Category: "pizza",
        article: "Піца",
        description: "Чілі, салямі, оливки, помідор, сир",
        price: "Діаметр 22см - 100UAH <br> Діаметр 32см - 150UAH <br> Діаметр 50см - 260UAH",
        img: "img/products/pizza/podyhDragon.jpg"
    },
    
    {
        id: 50,
        title:"Каліфорнія",
        Category: "roly",
        article: "Роли",
        description: "Сир, лосось, рис, огірок",
        price: "150UAH",
        img: "img/products/sushi/sushi1.png"
    },
]

window.addEventListener("DOMContentLoaded", ()=>{
    displayMenusItem(menu);
});

function displayMenusItem(menuItem){
    let name__article;
    let displayMenusItem = menuItem.map((item)=>{
        name__article=item.article;
        return `      
        
			<div class="col-sm-12 col-lg-4 col-md-6 " >
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

    displayMenusItem = displayMenusItem.join("");
    sectionCenter.innerHTML = `<h2 class="recommended__title">${name__article}</h2>${displayMenusItem}`;
}
