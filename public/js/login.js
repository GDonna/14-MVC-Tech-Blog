const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('email-login').value.trim();
    const password = document.querySelector('password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstname = document.querySelector('#firstname').value.trim();
    const lastname = document.querySelector('#lastname').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (firstname && lastname && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };