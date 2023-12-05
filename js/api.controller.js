const signInUser = () =>{
    const username = document.getElementById("username-signin").value;
    const password = document.getElementById("password-signin").value;

    const body = {
        "username": username,
        "password": password
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Content-Type': 'application/json'
        }
    };

    fetch('/login', options)
        .then(res=>{
            console.log(res.body);
        });
};


const signUpUser = () =>{
    const username = document.getElementById("username-signup").value;
    const email = document.getElementById("email-signup").value;
    const password = document.getElementById("password-signup").value;

    const body = {
        "username": username,
        "email": email,
        "password": password
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Content-Type': 'application/json'
        }
    };

    fetch('/signup', options)
        .then(res=>{
            console.log(res.body);
        });
};