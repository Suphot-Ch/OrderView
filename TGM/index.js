
// HOME
var CodeNumber;
var Codepng;
var pageNum;
var fuser = "user";
var fpass = "4392";
var html
var mfuser = '';
var mfpass = '';
var Xchecked;

function Viewpng(Cod) {
    Codepng = Cod;
    window.open('https://wwwnamesptcom.000webhostapp.com/images/TGM-' + Codepng + '.png');
}
function Viewpdf(Code) {
    CodeNumber = Code;
    html = 'TGM/order/TGM-' + CodeNumber + '.pdf';
    fuser = "admin";
    fpass = "pass";
    if (Xchecked == true) {
        document.getElementById("uname").value = mfuser;
        document.getElementById("psw").value = mfpass;
    }
    //window.open(html);
    //document.getElementById('id01').style.display='block';
}
function OrderOpen() {
    html = 'orderc.html';
    window.open(html);
    fuser = "admin";
    fpass = "pass";
    if (Xchecked == true) {
        document.getElementById("uname").value = mfuser;
        document.getElementById("psw").value = mfpass;
    }
    //document.getElementById('id01').style.display='block';
}
function ManualOpen() {
    html = 'manual.html';
    window.open(html);
    fuser = "user";
    fpass = "1234";
    if (Xchecked == true) {
        document.getElementById("uname").value = mfuser;
        document.getElementById("psw").value = mfpass;
    }
    //document.getElementById('id01').style.display='block';
}
function AssamblyOpen() {
    html = 'assembly.html';
    //window.open(html);
    fuser = "maketoorder";
    fpass = "mto2018";
    if (Xchecked == true) {
        document.getElementById("uname").value = mfuser;
        document.getElementById("psw").value = mfpass;
    }
    document.getElementById('id01').style.display = 'block';
}
function ChackUser() {
    if (document.getElementById("uname").value == fuser && document.getElementById("psw").value == fpass) {
        document.getElementById('id01').style.display = 'none';
        window.open(html);
        mfuser = fuser;
        mfpass = fpass;
        Xchecked = document.getElementById("remember").checked;
        document.getElementById("uname").value = "";
        document.getElementById("psw").value = "";
    }
    else {
        mfuser = fuser;
        mfpass = fpass;
        Xchecked = document.getElementById("remember").checked;
        document.getElementById("uname").value = "";
        document.getElementById("psw").value = "";
        document.getElementById('id01').style.display = 'block';
    }
}



// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}