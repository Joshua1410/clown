function preload() {
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCanvas(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw(){
    Image(video,0,0,300,300);
}

function take_snapshot(){
    save('myFilterImage.png');
}


function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCanvas(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = m15.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCanvas(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = m15.poseNet(video, modelLoaded);
    poseNet.log('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x ="+ nose.x);
        console.log("nose y ="+ nose.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose, noseX-15, noseY-15, 30, 30)
}

function take_snapshot(){
    save('myFilterImage.png');
}

noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/59vtCxyy/CLOWN-NOSE-removebg-preview.png');
}

