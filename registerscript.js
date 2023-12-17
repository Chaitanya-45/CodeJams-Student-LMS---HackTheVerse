function registerUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic form validation
    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all the fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // TODO: Send registration data to the server for server-side processing

    alert('Registration successful!');
}
