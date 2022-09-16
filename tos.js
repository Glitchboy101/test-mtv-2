
const form = document.getElementById('form');
const checkbox = document.getElementById('checkbox');
const message = document.getElementById('message');

form.addEventListener('submit', function validateCheckbox(e) {
    e.preventDefault();
    if (checkbox.checked === true) {
        message.innerHTML = 'Done';
        e.currentTarget.submit();
    }
    else {
        message.innerHTML = 'Please check the box to confirm you have read our terms of service!';
    }
})