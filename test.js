// Simulated user data (replace this with your actual user data)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];
  
  // Function to check if the entered username and password are valid
  function authenticate(username, password) {
    // Check if the username and password match any user in the 'users' array
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
      // Authentication successful
      console.log('Authentication successful');
      return true;
    } else {
      // Authentication failed
      console.log('Authentication failed');
      return false;
    }
  }
  
  // Example usage:
  const enteredUsername = 'user1'; // Replace with the entered username
  const enteredPassword = 'password1'; // Replace with the entered password
  
  authenticate(enteredUsername, enteredPassword);
  