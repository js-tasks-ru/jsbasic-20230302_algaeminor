function showSalary(users, age) {
  let str = '';
  users = users.filter(user => user.age <= age);
  for (let i = 0; i < users.length; i++) {
    str += `${users[i].name}, ${users[i].balance}`;
    if (i + 1 < users.length) {
      str += '\n';
    }
  }
  return str;
}
