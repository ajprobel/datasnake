const signupHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const first_name = document.querySelector('#first_name-signup').value.trim();
    const last_name = document.querySelector('#last_name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username && first_name && last_name && password){
        const response = await fetch('/api/users', {
            method: 'POST', 
            body: JSON.stringify({ username, first_name, last_name, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok){
            document.location.replace('/');
        } else{
            alert('Oops! Failed to sign up.');
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupHandler);