function validateLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('error');

  if (username === '' || password === '') {
    error.textContent = 'Please fill in all fields.';
    return false;
  }

  // Optional: Add a simple mock check
  if (username === 'sujal' && password === 'sujal123') {
    alert('Login successful! 👍');
    return true;
  } else {
    error.textContent = 'Invalid credentials!🤬';
    return false;
  }
}
