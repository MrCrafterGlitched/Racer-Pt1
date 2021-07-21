var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
background_image="racing.jpg";
car1_image="car1.png";
car2_image="car2.jpg"
var car1_x=100;
var car1_y=100;
var car1_width=150;
var car1_height=80;
var car2_x=100;
var car2_y=200;
var car2_width=150;
var car2_height=80;
function Loader(){
bg_img=new Image();
bg_img.onload=upload_bg;
bg_img.src=background_image;
car1_img= new Image()
car1_img.onload= upload_car1;
car1_img.src= car1_image;
car2_img= new Image()
car2_img.onload= upload_car2;
car2_img.src= car2_image;
 }
 function upload_bg(){
     ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
 }
 function upload_car1() {
     ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height)
 }
 function upload_car2() {
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height)
 }
 window.addEventListener("keydown",my_keydown)
 function my_keydown(events) {
     keypressed=events.keyCode;
     console.log(keypressed)
     if (keypressed=="37") {
         move_Left()
     }
     if (keypressed=="38") {
        move_Up()
    }
    if (keypressed=="39") {
        move_Right()
    }
    if (keypressed=="40") {
        move_Down()
    }
 }
function move_Left() {
    if (rover_x>=0) {
        rover_x=rover_x-10;
        upload_bg();
        upload_rover();
    }
}
function move_Right() {
    if (rover_x<=900) {
        rover_x=rover_x+10;
        upload_bg();
        upload_rover();
    }
}
function move_Up() {
    if (rover_y>=0) {
        rover_y=rover_y-10;
        upload_bg();
        upload_rover();
    }
}
function move_Down() {
    if (rover_y<=400) {
        rover_y=rover_y+10;
        upload_bg();
        upload_rover();
    }
}