const formConfiguration = {
    title: "Implement Form",
    fields: [
        {
            type: "text", label: "First Name", name: "firstName", required: true
        },
        {
            type: "email", label: "Email", name: "email", required: true
        },
        {
            type: "password", label: "Password", name: "password", required: true
        },
        {
            type: "password", label: "Password", name: "confirmPassword", required: true
        },
        {
            type: "textarea", label: "Message", name: "message"
        },
        {
            type: "submit", label: "Submit", name: "submit"
        }
    ]
};

new formBuilder(document.getElementById("form"), formConfiguration);