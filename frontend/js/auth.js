function validateForm() {
    let isValid = true;
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = ""; // Clear previous errors

    // Get form fields
    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate name (check if it's not empty and at least 3 characters)
    if (name.length < 3) {
        errorMessage.style.color = "red";
        errorMessage.innerHTML += "Name must be at least 3 characters. ";
        isValid = false;
    }

    // Validate number (check if it has 10 digits)
    if (!/^\d{10}$/.test(number)) {
        errorMessage.style.color = "red";
        errorMessage.innerHTML += "Contact number must be exactly 10 digits. ";
        isValid = false;
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage.style.color = "red";
        errorMessage.innerHTML += "Please enter a valid email address. ";
        isValid = false;
    }

    // Validate subject
    if (subject.length < 3) {
        errorMessage.style.color = "red";
        errorMessage.innerHTML += "Subject must be at least 3 characters. ";
        isValid = false;
    }

    // Validate message
    if (message.length < 10) {
        errorMessage.style.color = "red";
        errorMessage.innerHTML += "Message must be at least 5 characters. ";
        isValid = false;
    }

    return isValid;
}

function sendMail() {
    // Validate form before sending
    if (!validateForm()) {
        return; // Stop if form is invalid
    }

    var params = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_jl5ji6n";
    const templateID = "template_3o6z59q";

    emailjs.send(serviceID, templateID, params).then(
        res => {
            // Clear form fields and messages
            document.getElementById("emailForm").reset();
            document.getElementById("successMessage").style.color = "green";
            document.getElementById("successMessage").innerHTML = "Message sent successfully!";
            document.getElementById("errorMessage").innerHTML = "";
            console.log(res);
        }
    ).catch((err) => {
        document.getElementById("errorMessage").innerHTML = "Failed to send message. Please try again later.";
        console.log(err);
    });
}

function validateForm2() {
    let isValid = true;
    const errorMessage2 = document.getElementById("errorMessage-2");
    errorMessage2.innerHTML = ""; // Clear previous errors

    // Get form fields
    const name = document.getElementById("name2").value.trim();
    const number = document.getElementById("number2").value.trim();
    const email = document.getElementById("email2").value.trim();
    const subject = document.getElementById("mysubject").value.trim();
    const message = document.getElementById("message2").value.trim();

    // Validate name (check if it's not empty and at least 3 characters)
    if (name.length < 3) {
        errorMessage2.style.color = "red";
        errorMessage2.innerHTML += "Name must be at least 3 characters. ";
        isValid = false;
    }

    // Validate number (check if it has 10 digits)
    if (!/^\d{10}$/.test(number)) {
        errorMessage2.style.color = "red";
        errorMessage2.innerHTML += "Contact number must be exactly 10 digits. ";
        isValid = false;
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage2.style.color = "red";
        errorMessage2.innerHTML += "Email address must be valid. ";
        isValid = false;
    }

    // Validate subject
    if (subject.length < 3) {
        errorMessage2.style.color = "red";
        errorMessage2.innerHTML += "Subject must be at least 3 characters. ";
        isValid = false;
    }

    // Validate message
    if (message.length < 10) {
        errorMessage2.style.color = "red";
        errorMessage2.innerHTML += "Message must be at least 10 characters.";
        isValid = false;
    }

    return isValid;
}

function hireUsMail() {
    // Validate form before sending
    if (!validateForm2()) {
        return; // Stop if form is invalid
    }

    var params = {
        name: document.getElementById("name2").value,
        number: document.getElementById("number2").value,
        subject: document.getElementById("mysubject").value,
        email: document.getElementById("email2").value,
        message: document.getElementById("message2").value
    };

    const serviceID = "service_jl5ji6n";
    const templateID = "template_3o6z59q";

    emailjs.send(serviceID, templateID, params).then(
        res => {
            // Clear form fields and messages
            document.getElementById("emailForm").reset();
            document.getElementById("successMessage-2").style.color = "green";
            document.getElementById("successMessage-2").innerHTML = "Message sent successfully!";
            document.getElementById("errorMessage-2").innerHTML = "";
            console.log(res);
        }
    ).catch((err) => {
        document.getElementById("errorMessage-2").innerHTML = "Failed to send message. Please try again later.";
        console.log(err);
    });
}