function makeFriendsList(friends) {
  const ulElement = document.createElement('ul');
  for (let friend of friends) {
    const liElement = document.createElement('li');
    liElement.innerHTML = `${friend.firstName} ${friend.lastName}`;
    ulElement.appendChild(liElement);
  }
  return ulElement;
}
