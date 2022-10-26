"use strict"
import context from "./context.js";

export function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1)
    context.lineTo(x2,y2)
    context.stroke();
}


export function rgb(r,g,b){
    let rgb = "rgb("+r+","+g+","+b+")"
    retrun = rgb
}


export function rgba(r,g,b,a){
    let rgba = "rgb("+r+","+g+","+b+","+a+")"
    retrun = rgba
}