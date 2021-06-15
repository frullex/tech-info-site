// --Script rain--
let s = window.screen;  //Переменная для выясняющая размер вашего экрана 
let height;
let height_two;
let header = document.querySelector('header');
let header_two = document.querySelector('.header_two');
console.log(header_two);
let width;
let width_two;
height_two = canvas_two.height = header_two.clientHeight;
width_two = canvas_two.width = header_two.clientWidth;

height = q.height = header.clientHeight; //250;
width = q.width = header.clientWidth;//s.width;
console.log(header);
console.log(q);
console.log(width);
console.log(height);
// console.log(header.width);

window.addEventListener('resize', function (event) {
    Event.preventDefault
    header = document.querySelector('header');
    height = q.height = header.clientHeight; //250;
    width = q.width = header.clientWidth;//s.width;

    height_two = canvas_two.height = header_two.clientHeight;
    width_two = canvas_two.width = header_two.clientWidth;



});

let letters = Array(256).join(1).split('');

let draw = function () {
    q.getContext('2d').fillStyle = 'rgba(0,0,0,.05)'; //Тут цвет фона
    q.getContext('2d').fillRect(0, 0, width, height);
    q.getContext('2d').fillStyle = '#0F0'; //Тут цвет букв
    letters.map(function (y_pos, index) {
        let text = String.fromCharCode(65 + Math.random() * 33);
        x_pos = index * 10;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });
};
setInterval(draw, 33);
// --end--rain--
let letters_two = Array(256).join(7).split('');

let draw_two = function () {
    canvas_two.getContext('2d').fillStyle = 'rgba(0,0,0,.05)'; //Тут цвет фона
    canvas_two.getContext('2d').fillRect(0, 0, width_two, height_two);
    canvas_two.getContext('2d').fillStyle = '#0F0'; //Тут цвет букв
    letters_two.map(function (x_pos, index) {
        let text = String.fromCharCode(65 + Math.random() * 33);
        y_pos = index * 7;
        canvas_two.getContext('2d').font = 'bold 15px serif';
        canvas_two.getContext('2d').fillText(text, x_pos, y_pos);
        letters_two[index] = (x_pos > 758 + Math.random() * 1e4) ? 0 : x_pos + 10;
    });
};
setInterval(draw_two, 75);