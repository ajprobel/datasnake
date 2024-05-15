// use route /api/users/${searchquery} to search for users
const searchUser = async () => {
    const response = await fetch ('api/users/:query', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })

    if (response.ok) {
        document.location.replace('/');
    } else{
        alert('Oops! User not found.');
    }
};