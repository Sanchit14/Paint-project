var canvas;


var database;
var position;
var clearDrawing;
var form;
let value = 0;
var pointer;

function setup(){
  canvas = createCanvas(500,500);
  fill(value);
  database = firebase.database();
  pointer=createSprite(250,250,30,30);
  
  drawing =[];

}

function draw(){
 
  background(51);

  fill(value);
  pointer.shapeColor="white";
    drawSprites();
  
  mouseDragged();
  mousePressed();
  }
  
   function mouseDragged() {
        
         pointer.x=mouseX;
         pointer.y=mouseY;
       
    drawing.push(pointer);
    
    }
    function mousePressed(){
      if(clearDrawing){
       drawing=[]; 
      }
    }