"use strict"
import context from "./context.js";

export function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1)
    context.lineTo(x2,y2)
    context.stroke();
}

export function strokeRect(x,y,width, height){
    context.beginPath()
    context.strokeStyle = "white"
    context.rect(x,y,width,height)
    context.stroke()
}

export function fillRect(x,y,width, height){
    context.beginPath()
    context.rect(x,y,width,height)
    context.fill()
}

export function strokeCircle(x, y, radius, startAngle, endAngle,direction){
    context.beginPath()
    context.arc(x, y, radius, startAngle, endAngle,direction);
    context.stroke();
}





export function fillAndStrokeCircle(x, y, radius, endAngle){
    context.beginPath()
    context.arc(x, y, radius, 0, endAngle);
    context.fill()
    context.stroke()
}





 /**
 * Draws a filled circle of which the center is at a x,y
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinare of the center of the circle 
 * @param {number} radius radius of the circle (half of the width)
 */
export function fillCircle(x, y, radius) {
    fillEllipse(x, y, radius, radius);
}
/**
 * Draws a stroked circle of which the center is at a x,y
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinare of the center of the circle 
 * @param {number} radius radius of the circle (half of the width)
 */
//export function strokeCircle(x, y, radius) {
    //strokeEllipse(x, y, radius, radius);
//}

/**
 * Draws a filled ellipse of which the center is at a x, y
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse 
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */
export function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
}

/**
 * Draws a stroked ellipse of which the center is at a x, y
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse 
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */
export function strokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.stroke();
}

//export function fillAndStrokeCircle(x, y, radius) {
   // fillCircle(x, y, radius);
   // strokeCircle(x, y, radius);
//}

export function fillAndStrokeEllipse(x, y, w, h) {
    fillEllipse(x, y, w, h);
    strokeCircle(x, y, w, h);
}



export function rgb(r,g,b){
    let rgb = "rgb("+r+","+g+","+b+")"
    return rgb
}


/**
 * function that returns a random whole number between a minimum and a maximumm value
 * @param {number} min minimum value
 * @param {number} max maximum value
 */
 export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rgba(r,g,b,a){
    let rgba = "rgb("+r+","+g+","+b+","+a+")"
    return rgba
}

/** function that formats an hsl value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */
 export function hsl(h, s, l) {
    let hsl =  "hsl(" + h + "," + s + "%," + l + "%)";
    return hsl
}

/** function that formats an hsla value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 * @param {number} a the alpha value (opacity) in percentage
 */
export function hsla(h, s, l, a) {
    let hsla= "hsl(" + h + "," + s + "%," + l + "%," + a + "%)";
    return hsla
}

export function claculateDistance(x1,y1,x2,y2){
    return Math.hypot(x2-x1,y2-y1)
}