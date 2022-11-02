"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);

    drawDiagonalGrid();
}

function drawDiagonalGrid() {

    let i =0
    let offset = 50
    let step = 200


    while (i <= 6 ) {
        Utils.drawLine(offset+(i*25),step+(i*25),step+(i*25),offset+(i*25));
        Utils.drawLine(offset+(i*25),step-(i*25),200+(i*25),350-(i*25))
        i++
    }
}