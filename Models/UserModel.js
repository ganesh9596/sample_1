// userModel.js

const bcrypt = require('bcrypt');

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.setPassword(password);
  }

  setPassword(password) {
    // Hash the password before storing it
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    this.password = hashedPassword;
  }

  // Method to check if a given password matches the stored hashed password
  checkPassword(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  }
}

module.exports = User;
