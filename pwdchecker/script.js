const pwd = document.getElementById("password");
const msg = document.getElementById("result");
const stren = document.getElementById("strength");
const submitbtn = document.querySelector("button");


pwd.addEventListener("input", function(){
    const pwdvalue = pwd.value;
    const regEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    console.log(pwdvalue);

    let strengthval = '';

    if(regEx.test(pwdvalue)){
        strengthval = "Valid"
    }
    else{
        strengthval = "Invalid"
    }

    stren.textContent = strengthval;
    msg.style.display = "block"
    
});

submitbtn.addEventListener("click",function(){
    const pwdtype = pwd.getAttribute('type');

    if(pwdtype === 'password'){
        pwd.setAttribute('type', 'text');
        submitbtn.innerHTML = '<i class="fa fa-eye-slash"></i>';

    }else{
        pwd.setAttribute('type','password');
        submitbtn.innerHTML = '<i class="fa fa-eye"></i>';
    }
});