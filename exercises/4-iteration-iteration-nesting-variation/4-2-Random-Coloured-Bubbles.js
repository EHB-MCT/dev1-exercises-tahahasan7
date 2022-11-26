"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;


let margin = 200
context.fillRect(0,0, width, height)
let bubblesAmount = 200


drawBubbles()

function drawBubbles(){

    for(let i=0; i<bubblesAmount; i++){
      
      
        let randomX  = margin + Math.random() * (width - margin*2 )
        let randomY= margin + Math.random() * (height - margin *2)
        let randomHue= Math.random() * 180
        let randomSize = 10 +Math.random() * 40
        context.fillStyle = Utils.hsla (randomHue, 50,50,50)
        Utils.fillCircle( randomX ,randomY,randomSize)
    
    }


}

