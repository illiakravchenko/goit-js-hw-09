document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    form.email.value = savedData.email;
    form.message.value = savedData.message;
  }

  form.addEventListener('input', () => {
    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

 
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.email.value.trim() === '' || form.message.value.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    form.reset();
  });
});
