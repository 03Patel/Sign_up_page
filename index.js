let  email=document.getElementById("email");
let pass=document.getElementById("pass");
let signUp=document.getElementById("submit");
let signIn=document.getElementById("Signin");
let p=document.getElementById("p");
let namef=document.getElementById("namef");
let h2=document.getElementById("h2");
let par=document.getElementById("par");


signIn.onclick=function(){
  namef.style.display="none";
  h2.innerText="Sign In";
  signIn.style.backgroundColor="blue";
  signUp.style.backgroundColor="white";
  signUp.style.color="black";
  signIn.style.color="white";
}

signUp.onclick=function(){
  h2.innerText="Sign Up";
  namef.style.display="block";
  signUp.style.backgroundColor="blue";
  signIn.style.backgroundColor="white";
  signIn.style.color="black";
  signUp.style.color="white";
}
