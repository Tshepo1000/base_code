(function () {
    // Initialize EmailJS with your user ID (replace with your actual user ID from EmailJS)
    emailjs.init("pLSheigHPKvw3i_2m");
})();

document.getElementById('form-submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Regular expression for validating the email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
        // Clear previous messages
        errorMessage.textContent = '';

        // Prepare the data to send to EmailJS
        const templateParams = {
            name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        };

        // Send the email via EmailJS
        emailjs.send("service_wb3mjqq", "template_i5juavo", templateParams)
            .then(function(response) {
                successMessage.textContent = "Message sent successfully!";
                successMessage.style.color = "green";
            }, function(error) {
                errorMessage.textContent = "Failed to send message. Please try again.";
                errorMessage.style.color = "red";
            });

    } else {
        successMessage.textContent = "";
        errorMessage.textContent = "Invalid email address. Please enter a valid email.";
        errorMessage.style.color = "red";
    }
});