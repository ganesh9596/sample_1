document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simulated user data (replace this with your actual user data)
    const users = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' }
    ];
  
    // Check if the entered username and password match any user in the 'users' array
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // Authentication successful
      document.getElementById('loginStatus').innerText = 'Login successful';
      // You might redirect to another page or perform other actions here after successful login
    } else {
      // Authentication failed
      document.getElementById('loginStatus').innerText = 'Invalid username or password';
    }
  });
  