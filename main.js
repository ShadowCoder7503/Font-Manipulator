noseX=0;
noseY=0;
leftHandX=0;
rightHandX=0;
difference=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded());
     poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is intialized!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
         leftHandX = results[0].pose.leftWrist.x;
        rightHandX = results[0].pose.rightWrist.x;
        difference = floor(leftHandX - rightHandX);
        console.log(difference);
        
    }
}
function draw(){
    background('#6C91C2');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
      textSize(difference);
       fill('#FFE787');
     text('Devarsh', 50, 400);
}

