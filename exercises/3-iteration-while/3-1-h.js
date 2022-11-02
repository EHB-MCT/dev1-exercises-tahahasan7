"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawMoreConcentricCircles();
}

function drawMoreConcentricCircles() {
    context.lineWidth = 2;
    let i = 13;
    while (i > 0) {
        Utils.strokeCircle(200,200 ,5 + (i*15),0, Math. PI *2 );
        i -= 1
    }
}