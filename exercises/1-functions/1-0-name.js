"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();

function drawName() {

 context.strokeStyle ="red";
 context.lineWidth = 5;
 context.beginPath();
 context.moveTo(300,200);
 context.lineTo(300,450);
 context.moveTo(150,200);
 context.lineTo(450,200)
 context.stroke();



 context.strokeStyle = "blue"
 context.lineWidth = 5
 context.beginPath()
 context.moveTo(650,200)
 context.lineTo(550,450)
 context.moveTo(650,200)
 context.lineTo(750,450)
 context.moveTo(590,350)
 context.lineTo(710,350)
 context.stroke()

 context.strokeStyle = "green"
 context.lineWidth = 5
 context.beginPath()
 context.moveTo(850,200)
 context.lineTo(850,450)
 context.moveTo(1000,200)
 context.lineTo(1000,450)
 context.moveTo(850,350)
 context.lineTo(1000,350)
 context.stroke()


 

 
 context.strokeStyle = "purple";
 context.lineWidth = 5;
 context.beginPath()
 context.moveTo(1150,200)
 context.lineTo(1050,450)
 context.moveTo(1150,200)
 context.lineTo(1250,450)
 context.moveTo(1090,350)
 context.lineTo(1210,350)
 context.stroke()



 context.lineWidth = 6
 context.strokeStyle = "red"
 context.beginPath();
 context.fillStyle = "yellow";
 context.rect(50, 50, 100, 100);
 context.fill();
 context.stroke()

 context.beginPath()
 context.fillStyle = "blue";
 context.rect(200, 50, 100, 100);
 context.fill();


 }
