// Sign up a new user
async function signUpUser(email, password) {
    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        return data.message;
    } catch (err) {
        console.error('Error signing up:', err);
    }
}

async function loginUser(email, password) {
    try {
        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()
        return data.message;
    } catch (err){
        console.error('Error logging in:', err);
    }

}


export { getHome, signUpUser, loginUser };