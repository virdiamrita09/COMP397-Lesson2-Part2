/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />


// Game framefowrk variable
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;

//game variable
var helloLable: createjs.Text; //create a refrence

function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); //Frame Rates
    createjs.Ticker.on("tick", gameLoop);

}

//Our Main Game Loop -refreshed 60 fps
function gameLoop() {
    stage.update();
}
// our Main game function
function main() {
    console.log("Game is Running");
    helloLable = new createjs.Text("hello world", "40 px Consolas, #000000");
    helloLable.regX = helloLable.getMeasuredWidth() * 0.5;
    helloLable.regY = helloLable.getMeasuredHeight() * 0.5;
    helloLable.regX = 106;
    stage.addChild(helloLable);

}

