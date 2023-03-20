let radius = 30;
let radiusB = 30;
let leftCirc; 
let downCirc; 
let randRad; 
let randX;
let randY;
let words = ['the end','oops...','ouch!','ANNIHILATED','BOOM!','Bye Terry!'];
let word;
function setup(){
    createCanvas(720, 400);
    leftCirc = 600;
    downCirc = 0;
  
   word = random(words);
}
function draw(){
    background(150);


    noStroke();
      fill(200, 100, 50);
    circle(leftCirc, downCirc, radiusB, radiusB);

    radiusB = radiusB + 1.3;   
    
    fill(100, 0, 100);
    circle(leftCirc, downCirc, radius, radius);

    radius++;
    leftCirc--;
    downCirc++;

  


    //leftCirc = letCirc - 0.5; 
    fill(50,100,50);
    rect(0, 300, 750, 100);

    fill(20,200,20)
    ellipse(106, 146, 80, 55);

    quad(120, 170, 136, 136, 300, 190, 270, 235);
   
    ellipse(350,220, 250, 120) 

    quad(235, 240, 275, 265, 255, 345, 230, 345);

    quad(425, 200, 470, 230, 455, 345, 430, 345);

    triangle(470, 230, 520, 200, 465, 200);

    fill(0);
    circle(100, 150, 10, 10);
  if (downCirc > 250) {
       background(200);
       fill(random(170,200), random(170,200), random(170,200));
       circle(randX, randY, randRad, randRad);
       fill(100);
       textSize(30);
        text(word, 200, 200);
    }
     randX = random(50, 700);
    randY = random(50,350);
    randRad = random(100,300);
   // fill(200,100, 50);
   // triangle(593, 85, 645, 62, 612, 106);


   
// animate above two, to grow and or move with time
   
    fill(100);
    //helperCoordinates();
}

    function helperCoordinates() {
        text(
            '(' +
            floor(mouseX) +
            ',' +
            floor(mouseY) +
            ')' ,
            mouseX,
            mouseY
        );
    }
