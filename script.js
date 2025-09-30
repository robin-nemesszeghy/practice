let users = [];

function register(user) {
  let user = {
    username: username,
    email: email,
    password: password,
    subscriptionStatus: subscriptionStatus,
    discordId: discordId,
    lessonsCompleted: lessonsCompleted,
  };
  users.push(user);
}

register({
  username: "john_doe",
  email: "john@example.com",
  password: "password123",
  subscriptionStatus: "premium",
  discordId: "123456789",
  lessonsCompleted: [0, 1],
});

console.log(users);
