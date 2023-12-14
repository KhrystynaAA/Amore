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
        title:"Каліфорнія",
        Category: "roly",
        article: "Роли",
        description: "Сир, лосось, рис, огірок",
        price: "150UAH",
        img: "img/products/sushi/sushi1.png"
    },
    {
        id: 2,
        title:"Аморе",
        Category: "pizza",
        article: "Піца",
        description: "Сир, помідор, кукурудза, печериці",
        price: "120UAH",
        img: "img/products/pizza/pizza1.png"
    },
]

window.addEventListener("DOMContentLoaded", ()=>{
    displayMenusItem(menu);
});

function displayMenusItem(menuItem){
    let displayMenusItem = menuItem.map((item)=>{
        return `
        <h2 class="recommended__title">${item.article}</h2>

        <div class="recommended__products" id="menu__products">
          
        <article class="product">
          <img
            src=${item.img}
            alt="Bose portable Smart speaker"
            class="product__photo"
          >
          <h3 class="title">${item.title}</h3>
          <p class="Category">${item.description}</p>
          <p class="price">${item.price}</p>
        </article>
        </div>`;
    })

    displayMenusItem = displayMenusItem.join("");
    sectionCenter.innerHTML = displayMenusItem;
}
