
document.getElementById('login').addEventListener('submitlogin', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const gender = document.getElementById('gender').value;
  
    // Simulated user data (replace this with your actual user data)
    const users = [
      { username: 'user1', password: 'password1', gender: 'male' },

      { username: 'user2', password: 'test@123', gender : 'female' }
    ];
  
    // Check if the entered username and password match any user in the 'users' array
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // Authentication successful
      document.getElementById('login').innerText = 'Login successful';
      // You might redirect to another page or perform other actions here after successful login
    } else {
      // Authentication failed
      document.getElementById('login').innerText = 'Invalid username or password';
    }
  });

   // Example usage:
   const Username = 'user'; // Replace with the entered username
   const Password = 'password'; // Replace with the entered password
   
   authenticate(Username, Password);