var d = document;
var onces = 0;
var teaBug = d.getElementById('teaBug');
var phoneWQ = d.getElementById("phoneWQ")

function changeImgTea() {
    d.getElementById('cup2').setAttribute("class", "cup22");
    d.getElementById('cup').setAttribute("class", "cup_cup");
}
function teaUp() {
    teaBug.setAttribute("class", "teaBugUp")
}

function light() {
    d.getElementById("btShadow").setAttribute("class", "opacityUrurur");
    d.getElementById('bgBom').setAttribute("class", "bgBomActive");
    d.getElementById('textAppendName1').setAttribute("class", "");
}

function cupAndTeaHide() {
    teaBug.setAttribute("class", "opacityUrururq");
    d.getElementById("cup").setAttribute("class", "opacityUrurur");
    d.getElementById("cup2").setAttribute("class", "opacityUrururw");
    d.getElementById("textAppendName1").setAttribute("class", "opacityUrurur");

    function carShow() {
        d.getElementById("copiratete").setAttribute("class", "opacityUrururShow");
        d.getElementById("car").setAttribute("class", "carShow");
        d.getElementById("textCar").setAttribute("class", "opacityUrururShow");
        d.getElementById("btn").setAttribute("class", "btn");
    }
    setTimeout(carShow, 1000);
}

function startAnimation() {
    
        var t = new mads();
    
        t.tracker('E', 'shake');
        
        d.getElementById('textAppendName').setAttribute("class", "displayNone");
        teaBug.setAttribute("class", "teaBug1");
        setTimeout(changeImgTea, 1900);
        setTimeout(light, 4100);
        setTimeout(cupAndTeaHide, 6900);
        setTimeout(teaUp, 3500);
        phoneWQ.setAttribute("id", "displayNone");
}

function saa() {
    function start3() {
        phoneWQ.setAttribute("class", "phoneWQ2");
        phoneWQ.setAttribute("class", "opacityUrurur");
    }
    setTimeout(start3, 1000)
    phoneWQ.setAttribute("class", "phoneWQ1");
}
setTimeout(saa, 1000)

function deviceOrientationListener(event) {
    var betka = Math.round(event.beta);
    if (betka > 60 && onces == 0) {
        startAnimation();
        onces = 1+1;
    };
}
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", deviceOrientationListener);
}




/*Debug onclik*/
teaBug.onclick=function () {
    startAnimation();
    teaBug.onclick = function () {};
}