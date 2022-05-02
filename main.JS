var predict1="";
var predict2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
 Webcam.snap(function (URI)
    {
        document.getElementById("result").innerHTML="<img src='"+URI+"' id='captured_image'>";
    }
 );
}
console.log("version",ml5.version);
   classfier=ml5.imageClassfier("https://teachablemachine.withgoogle.com/models/8Wc2yYfJf/);
       function modeloaded(){
           console.log("model is loaded");
       }
   function checks(){
            image=document.getElementById("captured_image");
            classfier.classify(image,gotresult);
        }

        