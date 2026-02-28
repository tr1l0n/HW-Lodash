let input = document.querySelector('.slider__input');
let image = document.querySelectorAll('.slider__image');
input.addEventListener('input', _.debounce(() => {
    let value = input.value;
    let x = value * 10;
    image.forEach((img) => {
        img.style.transform = `translateX(${-x}px)`;
    })
},50));


let box = document.getElementById('box');
let area = document.getElementById('area');
area.addEventListener('mousemove', _.debounce(event => {
    box.style.top = `${event.clientY-150}px`;
    box.style.left = `${event.clientX-20}px`;
},10));