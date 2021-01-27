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
    
    
    const setErrorMessage = (input,error)=>{
        let formControl = input.parentElement; 
        let small = formControl.querySelector('small');
        small.innerText = error;
        formControl.className = 'form-control error';
    }

    const setSuccessMessage = (input)=>{
        let formControl = input.parentElement; 
        formControl.className = 'form-control success';
    }

    const isEmail = (email)=>{
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    // validate username
    if(usernameValue === ""){
        setErrorMessage(username,"Username cannot be blank")
    }else if(usernameValue.length<=2){
        setErrorMessage(username,"Username min 3 char")
    }else{
        setSuccessMessage(username);
    }
    
    // validate email
    if(emailValue === ""){
        setErrorMessage(email,"Email cannot be blank")
    }else if(!isEmail(emailValue)){
        setErrorMessage(email,"Email not Valid")
    }else{
        setSuccessMessage(email);
    }

    // validate password
    if(passwordValue === ""){
        setErrorMessage(password,"Password cannot be blank")
    }else if(passwordValue.length<=5){
        setErrorMessage(password,"Password length is not >= 6")
    }else{
        setSuccessMessage(password);
    }

    // validate cpassword
    if(cpasswordValue === ""){
        setErrorMessage(cpassword,"Password cannot be blank")
    }else if(passwordValue !== cpasswordValue){
        setErrorMessage(cpassword,"Password Not Match")
    }else{
        setSuccessMessage(cpassword);
    }
}