
const toggleForms = () =>{
    const formSignIn = document.getElementById("form-signin");
    const formSignUp = document.getElementById("form-signup");

    if(formSignIn.style.transform === 'translateY(100%)'){
        formSignIn.style.transform = 'translateY(0%)';
        formSignUp.style.transform = 'translateY(100%)';
    }
    else{
        formSignIn.style.transform = 'translateY(100%)';
        formSignUp.style.transform = 'translateY(0%)';
    }
};