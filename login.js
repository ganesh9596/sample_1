document.getElementById('loginview').addEventListener('submit', function(event) {
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
      document.getElementById('loginview').innerText = 'Login successful';
      // You might redirect to another page or perform other actions here after successful login
    } else {
      // Authentication failed
      document.getElementById('loginview').innerText = 'Invalid username or password';
    }
  });

   // Example usage:
   const Username = 'user'; // Replace with the entered username
   const Password = 'password'; // Replace with the entered password
   
   authenticate(Username, Password);