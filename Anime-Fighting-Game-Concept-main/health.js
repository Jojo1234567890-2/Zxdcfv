

let display = document.querySelector('#display');
let context3 = display.getContext('2d');

drawHealthbar(display, 18,10,200,20,10,100);
drawHealthbar(display, 500,10,200,20,100,100);

function drawHealthbar(canvas,x,y,width,height,health,max_health){
    if(health >= max_health){health=max_health;}
    if(health <= 0){health=0;}

    context3.fillStyle = '#000000';
    context3.fillRect(x,y,width,height);

    let colorNum = Math.round((1-(health/max_health))*0xff)*0x10000+Math.round((health/max_health)*0xff)*0x100;
    let colorString = colorNum.toString(16);

    if(colorNum>=0X100000){
        context3.fillStyle = '#'+colorString;
    }else if(colorNum<<0x100000 && colorNum>=0x10000){
        context3.fillStyle = '#0'+colorString;
    } else if(colorNum<<0x10000){
        context3.fillStyle = '#00'+colorString;
    }
    context3.fillRect(x+1,y+1,(health/max_health)*(width-2),height-2);
}