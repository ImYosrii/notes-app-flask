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

// Log in an existing user
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

// Creating a new note
async function createNote(note, user){
    try{
        const response = await fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({note, user})
        })
        const data = await response.json();
        return [data.message, data.noteId];
    } catch (err) {
        console.error('Error creating note:', err);
    }
}

// Get all notes for a user
async function getNotes(user) {
    try {
        const response = await fetch(`http://localhost:5000/?user=${user}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        return data.notes;
    } catch (err) {
        console.error('Error fetching notes:', err);
    }
}

export { signUpUser, loginUser, createNote, getNotes };