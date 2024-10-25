// emailJS parameters
function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        subject: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // template and service id
    const serviceID = "service_jl5ji6n";
    const templateID = "template_3o6z59q";

    emailjs.send(serviceID, templateID, params).then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("surname").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Message sent successfully");
        }
    )
    .catch((err) => console.log(err));
}