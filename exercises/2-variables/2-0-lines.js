"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width
let height = context.canvas.height




let reeh = 10
let mzi = 20

function drawLines(){
    context.beginPath()
    context.moveTo(reeh,mzi)
    context.lineTo(400 -reeh , mzi) 
    context.lineTo(reeh,mzi * 2)
    context.lineTo(400-reeh , mzi *2)
    context.lineTo(reeh, mzi* 3)
    context.lineTo(400-reeh, mzi*3)
    
    context.stroke()
}

drawLines()