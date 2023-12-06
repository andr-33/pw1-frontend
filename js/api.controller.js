const signInUser = () => {
    const username = document.getElementById("username-signin").value;
    const password = document.getElementById("password-signin").value;

    const body = {
        "username": username,
        "password": password
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch('http://localhost:8080/api/authentication/signin', options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            sessionStorage.setItem("token", data.accessToken);
        })
        .catch(err => console.log(err));
};


const signUpUser = () => {
    const username = document.getElementById("username-signup").value;
    const email = document.getElementById("email-signup").value;
    const password = document.getElementById("password-signup").value;
    const adminRole = document.getElementById("cb-admin");
    const userRole = document.getElementById("cb-user");
    const moderatorRole = document.getElementById("cb-moderator");

    const roles = [];

    if (adminRole.checked) {
        roles.push(adminRole.value);
    }

    if (userRole.checked) {
        roles.push(userRole.value);
    }

    if (moderatorRole.checked) {
        roles.push(moderatorRole.value);
    }

    const body = {
        "username": username,
        "email": email,
        "roles": roles,
        "password": password
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch('http://localhost:8080/api/user/signup', options)
        .then(res => {
            res.json();
            document.getElementById("toggleSignin").click();
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
};