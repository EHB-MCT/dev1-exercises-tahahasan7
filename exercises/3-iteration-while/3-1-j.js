"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawConcentricPattern();
}

function drawConcentricPattern() {
    context.lineWidth = 2;
    let i = 0
    while (i<10) {
        let size = i*17
        Utils.strokeCircle(200,200 , size,0, Math. PI *2);
        Utils.strokeCircle(100,200 , size,0, Math. PI *2);
        Utils.strokeCircle(300,200 , size,0, Math. PI *2);
        i ++
    }
}