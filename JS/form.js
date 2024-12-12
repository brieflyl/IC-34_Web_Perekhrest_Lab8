const form = document.querySelector('.feedback-form');
const formData = {
    email: "",
    message: "",
};

const LOCAL_STORAGE_KEY = "feedback-form-state";

window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
});

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    formData.email = "";
    formData.message = "";
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    form.reset();
});
