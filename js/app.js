
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

    fetch('http://localhost:8090/api/authentication/signin', options)
        .then(res => res.json())
        .then(data => {
            sessionStorage.setItem("token", data.accessToken);
            loadPage('/pages/home.html');
        })
        .catch(err => {
            const showErrMessage = document.getElementById('signin-err-msg');
            showErrMessage.innerHTML = err;
        });
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

    fetch('http://localhost:8090/api/user/signup', options)
        .then(res => res.json())
        .then(data => {
            const showMessage = document.getElementById('signup-msg');
            showMessage.innerHTML = data.message;
            setTimeout(() => {
                document.getElementById("toggleSignin").click();
            }, 1500);
        })
        .catch(err => {
            const showErrMessage = document.getElementById('signup-err-msg');
            showErrMessage.innerHTML = err;
        });
};

const getAdminContent = () => {
    const token = sessionStorage.getItem('token');

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    };

    fetch('http://localhost:8090/api/test/admin', options)
        .then(res => res.text())
        .then(data => {
            const showContent = document.getElementById('home-msg');
            showContent.innerHTML = data;
        })
        .catch(err => {
            console.log(err)
            const showContent = document.getElementById('home-msg');
            showContent.innerHTML = err;
        });
};

const getModeratorContent = () => {
    const token = sessionStorage.getItem('token');

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    };

    fetch('http://localhost:8090/api/test/moderator', options)
        .then(res => res.text())
        .then(data => {
            const showContent = document.getElementById('home-msg');
            showContent.innerHTML = data;
        })
        .catch(err => {
            console.log(err)
            const showContent = document.getElementById('home-msg');
            showContent.innerHTML = err;
        });
};

const getUserContent = () => {
    const token = sessionStorage.getItem('token');

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    };

    fetch('http://localhost:8090/api/test/user', options)
        .then(res => res.text())
        .then(data => {
            const showContent = document.getElementById('home-msg');
            showContent.innerHTML = data;
        })
        .catch(err => {
            console.log(err)
            const showContent = document.getElementById('home-msg');
            showContent.innerHTML = err;
        });
};

const getPublicContent = () => {
    const token = sessionStorage.getItem('token');

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    };

    fetch('http://localhost:8090/api/test/all', options)
        .then(res => res.text())
        .then(data => {
            const showContent = document.getElementById('home-msg');
            showContent.innerHTML = data;
        })
        .catch(err => {
            console.log(err)
            const showContent = document.getElementById('home-msg');
            showContent.innerHTML = err;
        });
};

const toggleForms = () => {
    const formSignIn = document.getElementById("form-signin");
    const formSignUp = document.getElementById("form-signup");

    if (formSignIn.style.transform === 'translateY(100%)') {
        formSignIn.style.transform = 'translateY(0%)';
        formSignUp.style.transform = 'translateY(100%)';
    }
    else {
        formSignIn.style.transform = 'translateY(100%)';
        formSignUp.style.transform = 'translateY(0%)';
    }
};


const loadPage = (pageToLoad) => {
    fetch(pageToLoad)
        .then(res => {
            if (!res.ok) {
                throw new Error('Ups! Something went wrong loading the page');
            }
            return res.text();
        })
        .then(content => {
            const mainContainer = document.getElementById('main-body');
            mainContainer.innerHTML = content;
        })
        .catch(err => {
            console.log(err);
        });
};

const logOut = () => {
    sessionStorage.removeItem('token');
    location.reload();
};

document.addEventListener('DOMContentLoaded', () => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        loadPage('/pages/signIn.html');
        return;
    }

    loadPage('/pages/home.html');
});