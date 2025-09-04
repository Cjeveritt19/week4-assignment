const guestFrom = document.getElementById("guest-form");

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(guestForm);
    const formValues = Object.fromEntries(formData)
    console.log(formValues)
    fetch ("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({formValues}),
    });
}