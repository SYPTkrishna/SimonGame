$("button").click(function(event)
{
    var ch=event.currentTarget.className;
    if(ch=="btn green")
    {
        var audio=new Audio("green.mp3");
    }
    else if(ch=="btn red")
    {
        var audio=new Audio("red.mp3");
    }
    else if(ch=="btn yellow")
    {
        var audio=new Audio("yellow.mp3");
    }
    else 
    {
        var audio=new Audio("blue.mp3");
    }
    audio.play();
});