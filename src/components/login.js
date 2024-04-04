/*

// Function to handle the login process
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password match
    if (username === "test" && password === "test") {
        // Store the username in localStorage
        localStorage.setItem("loggedInUser", username);
        alert("Login successful!");
        // Redirect to the /popular page
        window.location.href = "/popular";
    } else {
        alert("Incorrect username or password!");
    }
}

// Function to check if the user is already logged in
function checkLoggedIn() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        // User is logged in, redirect to the /popular page
        window.location.href = "/popular";
    }
}

// Check if the user is already logged in
checkLoggedIn();

// Create and append login form elements
var form = document.createElement("form");
form.id = "loginForm";

var labelUsername = document.createElement("label");
labelUsername.textContent = "Username:";
form.appendChild(labelUsername);

var inputUsername = document.createElement("input");
inputUsername.type = "text";
inputUsername.id = "username";
form.appendChild(inputUsername);
form.appendChild(document.createElement("br"));

var labelPassword = document.createElement("label");
labelPassword.textContent = "Password:";
form.appendChild(labelPassword);

var inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.id = "password";
form.appendChild(inputPassword);
form.appendChild(document.createElement("br"));

var loginButton = document.createElement("button");
loginButton.textContent = "Login";
loginButton.type = "button";
loginButton.addEventListener("click", login);
form.appendChild(loginButton);

// Append the form to the body
document.body.appendChild(form);
*/