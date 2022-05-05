const users = [
  {
    id: 0,
    name: "Joueur 1",
    avatar: "01.jpg",
  },
  {
    id: 1,
    name: "Joueur 2",
    avatar: "02.jpg",
  },
  {
    id: 2,
    name: "Joueur 3",
    avatar: "03.jpg",
  },
];

function getUsers() {
  return users;
}

function getUser() {
  return {};
}

function getAvatar(i) {
  const image = users[i].avatar;
  try {
    var url = require(`@/assets/avatar/${image}`);
  } catch (e) {
    url = "";
  }
  return url;
}

export { getUsers, getUser, getAvatar };
