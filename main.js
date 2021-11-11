Webcam.set({
    width: 350,
    height: 300,
    imageFormat: 'png',
    pngQuality: 90
})

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap((img) =>{
        document.getElementById('result').innerHTML = "<img id='capturedImage' src='"+img+"'>";
    });
}

console.log("ml5 version: " + ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mEPMhyTue/model.json",mloaded);

function mloaded() {
    console.log("loaded");
}
/*

Code for next project

function result(error,result) {
    if (error) {
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("familyMenber").innerHTML = result[0].label;
        document.getElementById("confidence").innerHTML = ((result[0].confidence).toFixed(3) * 100) + "%";
    }
}

function verifyPerson() {
    img = document.getElementById("capturedImage");
    classifier.classify(img,result);
}
*/