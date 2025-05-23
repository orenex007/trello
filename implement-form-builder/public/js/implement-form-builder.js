let i;
let input;

class formBuilder {
    constructor(rootElement, config) {
        this.rootElement = rootElement;
        this.config = config;
        this.buildForm();
    }

    buildForm() {
        const form = document.createElement("form");

        if (this.config.title) {
            const title = document.createElement("h1");
            title.textContent = this.config.title;
            form.appendChild(title);
        }

        const fields = this.config.fields;
        for (i = 0; i < fields.length; i++) {
            const field = fields[i];
            const formGroup = document.createElement("div");
            formGroup.className = "mb-3";

            if (field.type !== "submit") {
                const label = document.createElement("label");
                label.textContent = field.label;
                label.className = "form-label";
                formGroup.appendChild(label);
            }


            if (field.type === "textarea") {
                input = document.createElement("textarea");
                input.className = "form-control";
            } else if (field.type === "submit") {
                input = document.createElement("button");
                input.type = "submit";
                input.textContent = field.label;
                input.className = "btn btn-primary";
            } else {
                input = document.createElement("input");
                input.type = field.label;
                input.className = "form-control";
            }

            input.name = field.name;
            if (field.required) {
                input.required = true;
            }
            formGroup.appendChild(input);
            form.appendChild(formGroup);
        }
        this.rootElement.appendChild(form);
    }

}







