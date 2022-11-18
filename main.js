Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera= document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="Captured_Image" src="'+data_uri+'" />'
    });
}

console.log("ml5 version",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EcbOCjSls/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data_1="The First Prediction is "+predection_1;
    speak_data_2="The Second Prediction is "+predection_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    utterThis.rate=1;
    synth.speak(utterThis);
}

 function check(){
    img=document.getElementById("Captured_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);    
    }    
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        predection_1=results[0].label;
        predection_2=results[1].label;
        speak();
        if (results[0].label== "Victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if (results[0].label== "Horns"){
            document.getElementById("update_emoji").innerHTML="&#129304;";
        }
        if (results[0].label== "Thumbs down"){
            document.getElementById("update_emoji").innerHTML="&#128078;";
        }
        if (results[0].label== "Thumbs up"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if (results[0].label== "Awosome"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }

        if (results[1].label== "Victory"){
            document.getElementById("update_emoji2").innerHTML="&#9996;";
        }
        if (results[1].label== "Horns"){
            document.getElementById("update_emoji2").innerHTML="&#129311;";
        }
        if (results[1].label== "Thumbs down"){
            document.getElementById("update_emoji2").innerHTML="&#128078;";
        }
        if (results[1].label== "Thumbs up"){
            document.getElementById("update_emoji2").innerHTML="&#128077;";
        }
        if (results[1].label== "Awosome"){
            document.getElementById("update_emoji2").innerHTML="&#128076;";
        }
        }
 }
