var nose_x
var nose_y
var clown_nose
function preload(){
    clown_nose = loadImage("mustache.png");
}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotResult)

}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,(nose_x-25),(nose_y+10),50,50)
    // fill(255,0,0)
    // stroke(255,0,0)
    // circle(nose_x,nose_y,10)
}
function take_snapshot(){
    save("Clown_Filter_Image.png")
}
function modelLoaded(){
    console.log("pose net is initialized")
}
function gotResult(results){
    if(results.length > 0){
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(results)
        console.log("nose_x = ",nose_x)
        console.log("nose_y = ",nose_y)
    }
}