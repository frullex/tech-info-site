// function r(from, to) {
//     return ~~(Math.random() * (to - from + 1) + from);
// }
// function pick() {
//     return arguments[r(0, arguments.length - 1)];
// }
// function getChar() {
//     return String.fromCharCode(pick(
//         r(0x3041, 0x30ff),
//         r(0x2000, 0x206f),
//         r(0x0020, 0x003f)
//     ));
// }
// function loop(fn, delay) {
//     let stamp = Date.now();
//     function _loop() {
//         if (Date.now() - stamp >= delay) {
//             fn(); stamp = Date.now();
//         }
//         requestAnimationFrame(_loop);
//     }
//     requestAnimationFrame(_loop);
// }
// class Char {
//     constructor() {
//         this.element = document.createElement('span');
//         this.mutate();
//     }
//     mutate() {
//         this.element.textContent = getChar();
//     }
// }
// class Trail {
//     constructor(list = [], options) {
//         this.list = list;
//         this.options = Object.assign(
//             { size: 10, offset: 0 }, options
//         );
//         this.body = [];
//         this.move();
//     }
//     traverse(fn) {
//         this.body.forEach((n, i) => {
//             let last = (i == this.body.length - 1);
//             if (n) fn(n, i, last);
//         });
//     }
//     move() {
//         this.body = [];
//         let { offset, size } = this.options;
//         for (let i = 0; i < size; ++i) {
//             let item = this.list[offset + i - size + 1];
//             this.body.push(item);
//         }
//         this.options.offset =
//             (offset + 1) % (this.list.length + size - 1);
//     }
// }
// class Rain {
//     constructor(options) {
//         this.element = document.createElement('p');
//         this.build(options);
//         if (options.target) {
//             options.target.appendChild(this.element);
//         }
//         this.drop();
//     }
//     build(options) {
//         let root = document.createDocumentFragment();
//         let chars = [];
//         for (let i = 0; i < options.row; ++i) {
//             let c = new Char();
//             root.appendChild(c.element);
//             chars.push(c);
//             if (Math.random() < .5) {
//                 loop(() => c.mutate(), r(1e3, 5e3));
//             }
//         }
//         this.trail = new Trail(chars, {
//             size: r(10, 30), offset: r(0, 100)
//         });
//         this.element.appendChild(root);
//     }
//     drop() {
//         let trail = this.trail;
//         let len = trail.body.length;
//         let delay = r(10, 80);
//         loop(() => {
//             trail.move();
//             trail.traverse((c, i, last) => {
//                 c.element.style = `
//             color: hsl(136, 100%, ${85 / len * (i + 1)}%)
//           `;
//                 if (last) {
//                     c.mutate();
//                     c.element.style = `
//               color: hsl(136, 100%, 85%);
//               text-shadow:
//                 0 0 .5em #fff,
//                 0 0 .5em currentColor;
//             `;
//                 }
//             });
//         }, delay);
//     }
// }

// const main = document.querySelector('robot');
// for (let i = 0; i < 50; ++i) {
//     new Rain({ target: main, row: 50 });
// }

var s = window.screen;  //Переменная для выясняющая размер вашего экрана 
var header = document.querySelector('header');
var width = q.width = s.width;
console.log(header);
console.log(q);
console.log(width);
var height = q.height = 250;
console.log(height);
console.log(header.width);
var letters = Array(256).join(1).split('');

var draw = function () {
    q.getContext('2d').fillStyle = 'rgba(0,0,0,.05)'; //Тут цвет фона
    q.getContext('2d').fillRect(0, 0, width, height);
    q.getContext('2d').fillStyle = '#0F0'; //Тут цвет букв
    letters.map(function (y_pos, index) {
        text = String.fromCharCode(65 + Math.random() * 33);
        x_pos = index * 10;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });
};
setInterval(draw, 33);

// // --Section two--
// /** 
//  * canvas 创建星空
//  */

// // 定义变量
// let canvas,
//     context,
//     // screenW,
//     // screenH,
//     divWidth,
//     divHeight,
//     stars = [];

// // 定义常量
// const FPS = 50,
//     numStars = 2000;
// window.onload = function () {
//     //获取canvas
//     canvas = document.getElementById('canvas');
//     // 设置画布
//     render();
//     //获取canvas执行上下文
//     context = canvas.getContext('2d');
//     // ===========组件应用层============
//     //创建星星
//     for (let i = 0; i < numStars; i++) {
//         let x = Math.round(Math.random() * divWidth); //screenW);
//         let y = Math.round(Math.random() * divHeight); //screenH);
//         let length = 1 + Math.random() * 2;
//         let opacity = Math.random();

//         // 创建星星实例
//         let star = new Star(x, y, length, opacity);
//         stars.push(star);
//     }

//     // 星星闪动
//     setInterval(animate, 1000 / FPS);
// }

// // ============组件定制层==============
// /**
//  * Star
//  * 
//  * @param int x
//  * @param int y
//  * @param int length
//  * @param float opacity
//  */

// // 星星构造函数
// function Star(x, y, length, opacity) {
//     this.x = parseInt(x);
//     this.y = parseInt(y);
//     this.length = parseInt(length);
//     this.opacity = opacity;
//     this.factor = 1;
//     this.increment = Math.random() * 0.03;
// }

// //对象原型方法
// /**
//  * 画星星
//  * 
//  * @param context
//  */
// Star.prototype.draw = function (context) {
//     context.rotate(Math.PI * 1 / 10);

//     //save the context
//     context.save();
//     //move into the middle of the canvas,just make room
//     context.translate(this.x, this.y);
//     //change the opacity
//     if (this.opacity > 1) {
//         this.factor = -1;
//     } else if (this.opacity <= 0) {
//         this.factor = 1;

//         // 更新一次星星位置
//         this.x = Math.round(Math.random() * divWidth);//screenW);
//         this.y = Math.round(Math.random() * divHeight);//screenH);
//     }

//     // factor 控制方面，淡入淡出，每次重绘，星星的透明度都在变化
//     this.opacity += this.increment * this.factor;

//     context.beginPath();
//     //画线
//     for (var i = 5; i > 0; i--) {
//         context.lineTo(0, this.length);
//         context.translate(0, this.length);
//         context.rotate(Math.PI * 2 / 10);
//         context.lineTo(0, -this.length);
//         context.translate(0, -this.length);
//         context.rotate(-(Math.PI * 6 / 10));
//     }

//     context.lineTo(0, this.length);
//     context.closePath();

//     context.fillStyle = 'rgba(255,255,200, ' + this.opacity + ')';
//     context.shadowBlur = 5;
//     context.shadowColor = '#ffff33';
//     context.fill();

//     context.restore();
// }

// /**
//  * 获取窗口大小信息
//  */
// // function getScreenInfo() {
// //     //获取窗口宽度
// //     if (window.innerWidth) {
// //         winWidth = window.innerWidth;
// //     } else if ((document.body) && (document.body.clientWidth)) {
// //         winWidth = document.body.clientWidth;
// //     }

// //     //获取窗口高度
// //     if (window.innerHeight) {
// //         winHeight = window.innerHeight;
// //     } else if ((document.body) && (document.body.clientHeight)) {
// //         winHeight = document.body.clientHeight;
// //     }

// //     //通过深入Document内部对body进行检测，获取窗口大小
// //     if (document.documentElement &&
// //         document.documentElement.clientHeight &&
// //         document.documentElement.clientWidth) {
// //         winHeight = document.documentElement.clientHeight;
// //         winWidth = document.documentElement.clientWidth;
// //     }

// //     // 将上述方法简化
// //     // screenW = window.innerWidth ||
// //     //     document.body.clientWidth ||
// //     //     document.documentElement.clientWidth;

// //     // screenH = window.innerHeight ||
// //     //     document.body.clientHeight ||
// //     //     document.documentElement.clientHeight;

// //     return {
// //         'winWidth': winWidth,
// //         'winHeight': winHeight
// //     }
// // }

// /**
//  * canvas设置，修复窗口变化，画布大小不变的问题
//  */
// function render() {
//     //获取屏幕大小
//     // screenW = getScreenInfo().winWidth;
//     // screenH = getScreenInfo().winHeight;
//     divWidth = s.width;//document.getElementById('robot').width;
//     divHeight = 400;// parseInt(document.getElementById('robot').height);


//     // 设置canvas
//     // canvas.setAttribute('width', screenW);
//     // canvas.setAttribute('height', screenH);

//     // canvas.width = screenW;
//     canvas.width = divWidth;
//     // canvas.height = screenH;
//     canvas.height = divHeight;

//     window.addEventListener('resize', render);
// }

// /**
//  * 星星闪动函数
//  */
// function animate() {
//     context.clearRect(0, 0, divWidth, divHeight); //screenW, screenH);
//     for (let i = 0; i < stars.length; i++) {
//         stars[i].draw(context);
//     }
// }