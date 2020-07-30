var chin=""
function display(a) {
    password=document.getElementById('lock').value
    if (password == "") {
        document.getElementById('lock').value = a;
    }
    else if(password.length < 4){
        chin = document.getElementById('lock').value += a;
    }
}

function remove() {
    chin=document.getElementById('lock').value
    if (chin.length == 1) {
        document.getElementById('lock').value=""
    }
    else {
        chin = chin.slice(0, -1);
        document.getElementById('lock').value = chin;
    }
}


function checkpassword(){
    password=document.getElementById('lock')
    msg=document.getElementById('msg')
    password.classList.remove('error')
    if(password.value=="1802"){
        msg.style.color="green"
        document.getElementById('maincontainer').style.display="none"
        msg.innerHTML="PIN is correct !!!! Your phone has been unlocked"
        password.classList.remove('error')
    }
    else{
       password.classList.add('error')
       password.value=""
    }
}