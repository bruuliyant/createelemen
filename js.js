let doc = document
let body = doc.querySelector('body')
let wrap = doc.querySelector('wrap')

let games = [
    {

        title: "God of War",
        img: "./img/i.webp",
        price: "2 822₽",
    },
    {
        title: "Minecraft",
        img: "./img/p1_3257714_2eb69143.webp",
        price: "3 762₽",
    },
    {
        title: "hogwarts legacy",
        img: "./img/637ecbd133647d777534bd0378f148e2.jpg",
        price: "2 351₽",
    },
    {
        title: "stanley parable",
        img: "./img/Landscape_2560x1440-6358e00645e12a49f3793f2c60f767f9.jpg",
        price: "1 128₽",
    }, {
        title: "doom",
        img: "./img/MLJj4bYgqMc.jpg",
        price: "188₽",
    },
    {

        title: "God of War",
        img: "./img/i.webp",
        price: "2 822₽",
    },
    {
        title: "Minecraft",
        img: "./img/p1_3257714_2eb69143.webp",
        price: "3 762₽",
    },
    {
        title: "hogwarts legacy",
        img: "./img/637ecbd133647d777534bd0378f148e2.jpg",
        price: "2 351₽",
    },
    {
        title: "stanley parable",
        img: "./img/Landscape_2560x1440-6358e00645e12a49f3793f2c60f767f9.jpg",
        price: "1 128₽",
    }, {
        title: "doom",
        img: "./img/MLJj4bYgqMc.jpg",
        price: "188₽",
    },
    {

        title: "God of War",
        img: "./img/i.webp",
        price: "2 822₽",
    },
    {
        title: "Minecraft",
        img: "./img/p1_3257714_2eb69143.webp",
        price: "3 762₽",
    },
    {
        title: "hogwarts legacy",
        img: "./img/637ecbd133647d777534bd0378f148e2.jpg",
        price: "2 351₽",
    },
    {
        title: "stanley parable",
        img: "./img/Landscape_2560x1440-6358e00645e12a49f3793f2c60f767f9.jpg",
        price: "1 128₽",
    }, {
        title: "doom",
        img: "./img/MLJj4bYgqMc.jpg",
        price: "188₽",
    },
    {

        title: "God of War",
        img: "./img/i.webp",
        price: "2 822₽",
    },
    {
        title: "Minecraft",
        img: "./img/p1_3257714_2eb69143.webp",
        price: "3 762₽",
    },
    {
        title: "hogwarts legacy",
        img: "./img/637ecbd133647d777534bd0378f148e2.jpg",
        price: "2 351₽",
    },
    {
        title: "stanley parable",
        img: "./img/Landscape_2560x1440-6358e00645e12a49f3793f2c60f767f9.jpg",
        price: "1 128₽",
    }, 
    {
        title: "doom",
        img: "./img/MLJj4bYgqMc.jpg",
        price: "1188₽",
    },
    {

        title: "God of War",
        img: "./img/i.webp",
        price: "2 822₽",
    },
    {
        title: "Minecraft",
        img: "./img/p1_3257714_2eb69143.webp",
        price: "3 762₽",
    },
    {
        title: "hogwarts legacy",
        img: "./img/637ecbd133647d777534bd0378f148e2.jpg",
        price: "2 351₽",
    },
    {
        title: "stanley parable",
        img: "./img/Landscape_2560x1440-6358e00645e12a49f3793f2c60f767f9.jpg",
        price: "1 128₽",
    }
]

for (let item of games) {
    let container = doc.createElement('div');
    let title = doc.createElement('p');
    let img = doc.createElement('img');
    let price = doc.createElement('p');

    title.innerText = item.title;
    img.src = item.img;
    price.innerText = item.price;

    container.classList.add('game-container');
    title.classList.add('a');
    img.classList.add('b');
    price.classList.add('c');

    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(price);

    body.appendChild(container);

}

