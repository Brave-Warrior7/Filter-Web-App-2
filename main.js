nose_x=0;
nose_y=0;

function preload(){

}


function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
 image(video, 0, 0, 400, 300);
}

function take_snapshot(){
    save('myFilter.png');
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
 if(results.length > 0){
     console.log(results);
     nose_x=results[0].pose.nose.x;
     nose_y=results[0].pose.nose.y;
     console.log("nose-x is", nose_x);
     console.log("nose-y is", nose_y);
 }

}