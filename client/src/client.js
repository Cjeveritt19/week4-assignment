const guestForm = document.getElementById("guest-form");

guestForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(guestForm);
    const formValues = Object.fromEntries(formData)
    console.log(formValues)
    fetch ("https://week4-assignment-r3oo.onrender.com/add-guestbook", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({formValues}),
    });
}