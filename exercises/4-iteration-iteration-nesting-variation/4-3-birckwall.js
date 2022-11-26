"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width
let heigth =  context.canvas.height




drawbricks()
function drawbricks (){
    for(let i = 0; i < 6; i++){
        for(let j = 0; j<6 ; j++){
            let margin = 50
            context.fillStyle= "darkred"
            Utils.fillRect( margin + i * (350 +10) , margin  + j * (160+20),350,150)
    
         }
    }

}