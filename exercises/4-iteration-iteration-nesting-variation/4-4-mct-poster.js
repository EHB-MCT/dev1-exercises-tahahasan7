"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let midWidth = width / 2;
let midHeight = height / 2;

drawPoster();

function drawPoster() {
    

    context.fillRect(0, 0, width, height);
    context.fillStyle = "white";
    context.fillRect(midWidth - 400, midHeight - 400, 800, 800);
    context.fillStyle = "black";
    context.textAlign = "center";



    for (let i = 0; i < 250; i++) {
        let color = Utils.hsla(0, 0, Utils.randomNumber(0, 100), Utils.randomNumber(0, 100));
        let y = Utils.randomNumber(midHeight - 400, midHeight + 350);
        let yOff = Utils.randomNumber(1, 50);
        let y2 = Utils.randomNumber(midHeight - 400, midHeight + 350);
        let yOff2 = Utils.randomNumber(1, 50);
        context.fillStyle = color;
        fillQuad(midWidth - 400, y, midWidth - 400, y + yOff, midWidth + 400, y2, midWidth + 400, y2 + yOff2);
        context.font = "normal " + Utils.randomNumber(8, 76) + "pt Arial";
        context.fillText("MCT", Utils.randomNumber(midWidth - 300, midWidth + 300), Utils.randomNumber(midHeight - 300, midHeight + 300));
    }


   
    context.fillStyle = "red";
    context.font = "bold 78pt Arial";
    context.fillText("ehb", midWidth, midHeight - 95);
    context.fillStyle = "white";
    context.font = "bold 64pt Arial";
    context.fillText("is da shit", midWidth, midHeight + 150);
    context.fillStyle = "black";
    context.font = "bold 120pt Arial";
    context.fillText("MCT", midWidth, midHeight + 60);
    fillTriangle(midWidth - 405, midHeight - 405, midWidth, midHeight - 401, midWidth - 401, midHeight);
    fillTriangle(midWidth + 405, midHeight - 405, midWidth, midHeight - 401, midWidth + 401, midHeight);
    fillTriangle(midWidth - 405, midHeight + 405, midWidth, midHeight + 401, midWidth - 401, midHeight);
    fillTriangle(midWidth + 405, midHeight + 405, midWidth, midHeight + 401, midWidth + 401, midHeight);
}



function fillQuad(x1, y1, x2, y2, x3, y3, x4, y4) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.lineTo(x4, y4);
    context.fill();
}

function fillTriangle(x1, y1, x2, y2, x3, y3) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.fill();
}