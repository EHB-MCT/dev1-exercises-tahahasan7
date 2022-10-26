"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


let width = context.canvas.width
let height = context.canvas.height
let color= context.fillStyle

 function squareSize(x,y,width,height, color){


    context.beginPath()
    context.fillStyle = color
    context.rect(x,y,width,height,color)
    context.fill()
    


 }
 
 squareSize(0,0,width,height,"#274472")
 squareSize(0,950,width, height, "skyblue")
 squareSize(width/3,0,width/3, height, "white")
 squareSize(0,height/4,width,height/4, "#FF5349")
