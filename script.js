// Prompt for user information
var userName = prompt("Enter your name:");
var phoneNumber = prompt("Enter your phone number:");
var email = prompt("Enter your email:");
var password = prompt("Enter your password:");
var confirmPassword = prompt("Confirm your password:");

// Check if any prompt is empty
if (userName === "" || phoneNumber === "" || email === "" || password === "" || confirmPassword === "") {
  alert("Error: Please fill in all the input fields.");
} else {
  // Check if passwords match
  if (password === confirmPassword) {
    alert("Congratulations! You are successfully registered.");
  } else {
    alert("Error: Passwords do not match. Please make sure the password and confirm password are the same.");
  }
}
