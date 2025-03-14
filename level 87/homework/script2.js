function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.changePassword = function(newPassword) {
    this.password = newPassword;
};

User.prototype.getDetails = function() {
    return {
        username: this.username,
        email: this.email
    };
};