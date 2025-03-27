function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;

    this.getIntroduction = function() {
        return `ჩემის სახელია ${this.name}, ჩემი გვარია ${this.lastName}, ჩემი ტელეფონის ნომერია ${this.phoneNumber}, ჩემი ელფოსტაა ${this.email}.`;
    };

const user1 = new User("გიორგი", "მამალაძე", "555123456", "giorgi@example.com", "password123", "password123");
const user2 = new User("ნინო", "ქავთარაძე", "555654321", "nino@example.com", "mypassword", "mypassword");
const user3 = new User("ლაშა", "გოგოლაძე", "555987654", "lasha@example.com", "securepass", "securepass");

console.log(user1.getIntroduction());
console.log(user2.getIntroduction());
console.log(user3.getIntroduction());
}