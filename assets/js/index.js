// JavaScript code to handle form submission and validation
document.getElementById("signup-button").addEventListener("click", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const checkbox = document.querySelector("input[type='checkbox']");

    if (!email || !password || !checkbox.checked) {
        alert("Please fill in all fields and agree to the terms.");
        event.preventDefault(); // Prevent the form from being submitted
    } 
    else {
        alert("Congratulations! Signup successful.");
        // You can remove the alert and submit the form or perform other actions here
    }
});