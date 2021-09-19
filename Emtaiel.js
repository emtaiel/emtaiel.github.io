const videoarray = [];
var i=0;

videoarray[0] = "https://drive.google.com/file/d/1v_9GFTcNoTSVCGsC9SSiUVVxZRd5jrlA/preview"; /*Mann der schreit*/
videoarray[1] = "https://drive.google.com/file/d/1hETvlEwiknl66ZoqcGOVRcTtHx27Nit4/preview";
videoarray[2] = "";
videoarray[3] = "";
videoarray[4] = "";

function wechsel()
{
    $(".player").attr("src",videoarray[i]);

    if(i==0)
    {
        i=1;
    }
    else
    {
        i=0;
    }
}