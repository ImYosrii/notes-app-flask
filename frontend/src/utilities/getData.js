async function getHome(pathname) {
    try {
        const response = await fetch(`http://localhost:5000${pathname}`);
        const data = await response.json();
        return data.message;
    } catch (err) {
        console.error('Error fetching data:', err);
        throw err; // Re-throw the error to handle it in the calling function
    }
}

export { getHome };