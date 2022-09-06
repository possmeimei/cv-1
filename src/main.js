let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/*你好，我叫阿琛。
 *接下来，我演示我的前端功底，
 *首先，准备一个div
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来，我把div变成一个八卦图
 *首先，把div变成一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦图，太极生两仪
 *一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*形成两仪*/
#div1::before{
    width:100px;
    height:100px;
    left:0;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius:50%;
}
#div1::after{
    width:100px;
    height:100px;
    left:0;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}
`;

let n = 0;
let string2 = '';

let step = () => {
    setTimeout(() => {
        // 如果是回车，就换行；如果不是回车，就继续
        // string2 += string[n] === '\n' ? '<br>' : string[n];
        if (string[n] === '\n') {
            string2 = string2 + '<br>';
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        };
        if (n < string.length - 1) {
            // 如果不是最后一个，就继续
            n += 1;
            step();
        };
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0,999);
        html.scrollTo(0,999);
    }, 50);

};
step();