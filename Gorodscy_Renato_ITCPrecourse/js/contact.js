const formId = document.getElementById("form")
const firstName = document.getElementById("first-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const contactType = document.getElementById("contact-type");
const submitButton = document.getElementById("submit-button")
submitButton.disabled = true

function checkForm () {
    if (firstName.value.length == 0 || email.value.length == 0 || phone.value.length == 0 || message.value.length == 0 || contactType.value != "phone" && contactType.value != "email") {
        submitButton.disabled = true
    } else { submitButton.disabled = false }
}


formId.addEventListener("keyup", (event) => {
    checkForm();
})

contactType.addEventListener("change", (event) => {
    checkForm();
})

document.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}