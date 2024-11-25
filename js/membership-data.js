const scriptURL = 'https://script.google.com/macros/s/AKfycbxDnb9bXD4vCxCUAgLLE1uJaQosfgpHHtatQXPFwbnzBWvyliE8urfr-1jkqu0Vy9il/exec'
const form = document.forms['membership-data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
