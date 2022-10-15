"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");




let x = 333
let y = 333
let width = 666
let height = 666
function moha(x,y,width,height){
    let r = Math.floor(Math.random()*225)
    let g = Math.floor(Math.random()*225)
    let b = Math.floor(Math.random()*225)
    let color = "rgb("+r+","+g+","+b+")"
console.log(r,g,b)


    context.beginPath()
    context.fillStyle = color
    context.rect(x,y,width,height)
    context.fill()
    
    
    
 


}
//vindt het midden waar je de eerste vierkant ook tekent gebasseerd op de gegevens van de eerste vierkant(achgergrond)
moha(x,y,width,height)
moha(x + width/2 - 222/2 , y + height/2 - 222/2, 222,222 )
moha(x + width/2 - 123/2 , y + height/2 - 123/2, 123,123 )
moha(x + width/2 - 66/2 , y + height/2 - 66/2, 66,66 )
moha(x + width/2 - 38/2 , y + height/2 - 38/2, 38,38 )






/*
werkt niet
moha(x + width/2 - (width-88)/2 ,y + height/2 - (height-88)/2,width-88,height-88)
moha(x + width/2 - (width-66)/2 ,y + height/2 - (height-66)/2,width-66,height-66)
moha(x + width/2 - (width-55)/2 ,y + height/2 - (height-55)/2,width-55,height-55)
moha(x + width/2 - width-99/2 ,y + height/2 - height-99/2,width-99,height-99)


werkt wel ma moet je aanpassen voor elke niewe widhth en height
moha(x,y,400,400)
moha(x + 400/2 - 300/2 ,y + 400/2 - 300/2,300,300)
moha(x + 400/2 - 200/2 ,y + 400/2 - 200/2,200,200)
moha(x + 400/2 - 100/2 ,y + 400/2 - 100/2,100,100)
moha(x + 400/2 - 50/2 ,y + 400/2 - 50/2,50,50) 
moha()







*/

