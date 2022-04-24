nosex=0;
nosey=0;

function preload(){
mt=loadImage('https://i.postimg.cc/CxZCTr9p/pic-removebg-preview.png');
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}

function draw(){
    image(video,0,0,300,300);
    image(mt,nosex,nosey,50,30);
}

function take_snapshot(){
save('Image');
}

function modelLoaded(){
    console.log("PoseNet is Intialized");
}

function gotPoses(results){
    if(results.length>0){
        nosex=results[0].pose.nose.x-21;
        nosey=results[0].pose.nose.y+11;
        console.log(" x= "+nosex);
        console.log(" y= "+nosey);
    }
}