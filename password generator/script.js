//initial lenght set
document.getElementById("inputTile").value=8;
//refresh
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });
//show/hide requirements
const reqButton=document.getElementById("reqButton");
var showHideClicked=true;
reqButton.addEventListener("click",e=>{
    if(showHideClicked==false)
    {
        document.getElementById("reqButton").innerHTML="Hide";
        showHideClicked=true;
        document.getElementById("showHide").style.display="block";
    }
    else
    {
        document.getElementById("reqButton").innerHTML="Show";
        showHideClicked=false;
        document.getElementById("showHide").style.display="none";
    }
});
//requirements clicking
var passlenght, specialSymbols=false, upLetters=false ,password;
const s2N=document.getElementById("sect2N");
const s2Y=document.getElementById("sect2Y");
const s3N=document.getElementById("sect3N");
const s3Y=document.getElementById("sect3Y");
s2N.addEventListener("click",e=>{
    document.getElementById("sect2N").style.backgroundColor="rgb(245, 245, 245)";
    document.getElementById("sect2N").style.color="red";
    document.getElementById("sect2Y").style.backgroundColor="transparent";
    document.getElementById("sect2Y").style.color="black";
    specialSymbols=false;
});
s2Y.addEventListener("click",e=>{
    document.getElementById("sect2N").style.backgroundColor="transparent";
    document.getElementById("sect2N").style.color="black";
    document.getElementById("sect2Y").style.backgroundColor="rgb(245, 245, 245)";
    document.getElementById("sect2Y").style.color="green";
    specialSymbols=true;
});
s3N.addEventListener("click",e=>{
    document.getElementById("sect3N").style.backgroundColor="rgb(245, 245, 245)";
    document.getElementById("sect3N").style.color="red";
    document.getElementById("sect3Y").style.backgroundColor="transparent";
    document.getElementById("sect3Y").style.color="black";
    upLetters=false;
});
s3Y.addEventListener("click",e=>{
    document.getElementById("sect3N").style.backgroundColor="transparent";
    document.getElementById("sect3N").style.color="black";
    document.getElementById("sect3Y").style.backgroundColor="rgb(245, 245, 245)";
    document.getElementById("sect3Y").style.color="green";
    upLetters=true;
});
//password generator
document.addEventListener('keydown', (event) => {
    var keyPressed = event.code;
    if(keyPressed=="Enter")
    {
        if(document.getElementById("inputTile").value<8)
        {
            document.getElementById("inputTile").value=8;
        }
        else if(document.getElementById("inputTile").value>30)
        {
            document.getElementById("inputTile").value=30;
        }
    passlenght=document.getElementById("inputTile").value;
    document.getElementById("passTile").style.display="block";
    generatePass();
    }
  }, false);
const generate=document.getElementById("generate");
generate.addEventListener("click",e=>{
    if(document.getElementById("inputTile").value<8)
    {
        document.getElementById("inputTile").value=8;
    }
    else if(document.getElementById("inputTile").value>30)
    {
        document.getElementById("inputTile").value=30;
    }
    passlenght=document.getElementById("inputTile").value;
    document.getElementById("passTile").style.display="block";
    generatePass();

});
function generatePass()
{
    var letters="abcdefghijklmnopqrstuvwxyz0123456789", symb="!@#$%^&*", upLet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password=[passlenght];
    var symbPosition=Math.floor(Math.random() * passlenght);
    var upLetPosition=Math.floor(Math.random() * passlenght);
    while(upLetPosition==symbPosition)
    {
        upLetPosition=Math.floor(Math.random() * passlenght);
    }
    for (let i=0; i<passlenght; i++)
    {
        password[i]=letters.charAt(Math.floor(Math.random() * letters.length));
    }
    if(specialSymbols==true)
    {
        if(upLetters==true)
        {
            password[symbPosition]=symb.charAt(Math.floor(Math.random() * symb.length));
            password[upLetPosition]=upLet.charAt(Math.floor(Math.random() * upLet.length));
        }
        else
        {
            password[symbPosition]=symb.charAt(Math.floor(Math.random() * symb.length));
        }
    }
    else
    {
        if(upLetters==true)
        {
            password[upLetPosition]=upLet.charAt(Math.floor(Math.random() * upLet.length));
        }
    }
    document.getElementById("generatedPass").innerHTML=password.join('');
}
//copying password
const copyButton=document.getElementById("copyButton");
copyButton.addEventListener("click", e=>{
    window.navigator.clipboard.writeText(password.join(''));
});