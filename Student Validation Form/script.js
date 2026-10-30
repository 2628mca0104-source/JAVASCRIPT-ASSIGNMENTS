const form = document.getElementById("regForm");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("Email");
        const ageInput = document.getElementById("Age");
        const courseInput = document.getElementById("course");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("repassword");
        const termsCheckbox = document.getElementById("terms");

        // Radio buttons ko JS mein bula rahe hain
        const maleGender = document.getElementById("maleGender");
        const femaleGender = document.getElementById("femaleGender");
        const studyRegular = document.getElementById("studyRegular");
        const studyDistance = document.getElementById("studyDistance");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            let nameValue = nameInput.value.trim();
            let emailValue = emailInput.value.trim();
            let ageValue = ageInput.value.trim();
            let courseValue = courseInput.value;
            let passValue = passwordInput.value;
            let confirmPassValue = confirmPasswordInput.value;

            // 1. Name Validation
            if (nameValue.length < 3) {
                alert("Error: Name must contain at least 3 characters.");
                return;
            }

            // 2. Email Validation
            if (emailValue.includes("@") === false || emailValue.includes(".") === false) {
                alert("Error: Please enter a valid Email.");
                return;
            }

            // 3. Age Validation
            if (ageValue === "" || Number(ageValue) <= 0) {
                alert("Error: Please enter a valid Age.");
                return;
            }

            // 4. Gender Validation -> NAYI CONDITION
            // Check karega ki agar dono mein se koi bhi tick (checked) nahi hai
            if (maleGender.checked === false && femaleGender.checked === false) {
                alert("Error: Please select your Gender.");
                return;
            }

            // 5. Course Validation
            if (courseValue === "Select Course") {
                alert("Error: Please select a valid Course from the list.");
                return;
            }

            // 6. Study Mode Validation -> NAYI CONDITION
            if (studyRegular.checked === false && studyDistance.checked === false) {
                alert("Error: Please select a Study Mode.");
                return;
            }

            // 7. Password Validation
            if (passValue === "" || confirmPassValue === "") {
                alert("Error: Password cannot be empty!");
                return;
            }

            // 8. Password Match Validation
            if (passValue !== confirmPassValue) {
                alert("Error: Passwords do not match! Please try again.");
                return;
            }

            // 9. Terms Validation
            if (termsCheckbox.checked === false) {
                alert("Error: You must accept the Terms and Conditions.");
                return;
            }

            alert("Success: Registration Successful!");
            form.reset(); 
        });