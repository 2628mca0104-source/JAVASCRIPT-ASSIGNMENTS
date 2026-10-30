const nameInput = document.getElementById("name");
const email = document.getElementById("email"); 
const contact = document.getElementById("contact");
const form = document.getElementById("regForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("repassword");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let nameValue = nameInput.value.trim();
    let emailValue = email.value.trim();
    let contactValue = contact.value.trim();
    
  
    let passValue = password.value;
    let confirmPassValue = confirmPassword.value;
    
    //1. Name Validation
    if (nameValue.length < 3) {
        alert("Error: Name must contain at least 3 characters.");
        return;
    }
    // 2. Email Validation
    if (emailValue.includes("@") === false || emailValue.includes(".") === false) {
        alert("Error: Please enter a valid Email.");
        return; 
    }

    // 3. Contact Validation
    if (contactValue.length !== 10 || isNaN(contactValue) === true) {
        alert("Error: Please enter a valid 10-digit Contact number.");
        return; 
    }

    if (contactValue[0] === "0") {
        alert("Error: Mobile number cannot start with 0.");
        return; 
    }

    // 4. Password Validation (Naya aur Strong tareeka)
    // Pehle check karenge ki password khali toh nahi hai
    if (passValue === "" || confirmPassValue === "") {
        alert("Error: Password cannot be empty!");
        return;
    }

    // Phir check karenge ki dono match kar rahe hain ya nahi
    if (passValue !== confirmPassValue) {
        alert("Error: Passwords do not match! Please try again.");
        return; 
    } 
    
    alert("Success: Form submitted successfully!");
    form.reset(); 
});