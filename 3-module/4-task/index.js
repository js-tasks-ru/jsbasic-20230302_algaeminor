function showSalary(users, age) {
  const filteredUsers = users.filter(user => user.age <= age);
  return filteredUsers.map(user => `${user.name}, ${user.balance}`).join('\n');
}
