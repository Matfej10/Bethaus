// Генерация QR-кода
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://your-website.com",  // Замени на нужный URL
    width: 100,
    height: 100
});

// Создание листьев и их анимации
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = Math.random() * 4 + 3 + 's'; // скорость падения от 3 до 7 секунд
    leaf.style.opacity = Math.random();
    leaf.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.getElementById('leaves-container').appendChild(leaf);

    // Удаление листьев после завершения анимации
    setTimeout(() => {
        leaf.remove();
    }, 15000); // время совпадает с максимальной продолжительностью анимации
}

// Создание листьев каждые 500 миллисекунд
setInterval(createLeaf, 1900);
