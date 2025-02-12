function validateForm() {

    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
  
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let isValid = true;
  
   
    if (!validateEmail(email)) {
      document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
      isValid = false;
    }
  

    if (!validatePassword(password)) {
      document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters, with one uppercase letter, one lowercase letter, and one number.";
      isValid = false;
    }
  
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
      isValid = false;
    }

    return isValid;
  }
  
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
  
  function validatePassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
  }