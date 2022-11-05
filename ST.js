img = "";
status1 = "";
objects = [];

function BackButton()
{
    window.location = 'index.html';
}

function preload()
{
    img = loadImage('study table.jpg');
}

function setup()
{
   canvas = createCanvas(700, 400);
   canvas.center();
   od = ml5.objectDetector("cocossd", modelLoaded);
   document.getElementById('status').innerHTML = "Status : Objects Detected";
}

function draw()
{
    image(img, 0, 0, canvas.width, canvas.height);
    if(status1 != "")
    {
       for(var i=0; i< objects.length; i++)
       {
       document.getElementById("status").innerHTML = "Status : Objects Detected";
       fill('red');
       t = objects[i].label;
       p = Math.floor(objects[i].confidence * 100);
       text(t + " " + p + "%", objects[i].x, objects[i].y);
       noFill();
       stroke('red');
       rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
    }
}

function modelLoaded()
{
    console.log('Model is Loaded');
    status1 = true;
    od.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
    
    objects = results;
}