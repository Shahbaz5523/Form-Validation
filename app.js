const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate();
})

const validate = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    
    // validate username
    if(usernameValue === ""){
        setErrorMessage(username,"Username cannot be blank")
    }else if(usernameValue.length<=2){
        setErrorMessage(username,"Username lenght must b grater then 2 characters")
    }else{
        setSuccessMessage(username);
    }

    const setErrorMessage = (input,error)=>{
        form.querySelector('form-control').classList.add('error');
    }
}