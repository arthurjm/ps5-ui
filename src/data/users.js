const users = [
  {
    id: 0,
    name: "Ajouter un utilisateur",
  },
  {
    id: 1,
    name: "Nathan Drake",
    avatar: "01.jpg",
  },
  {
    id: 2,
    name: "Aloy",
    avatar: "02.jpg",
  },
  {
    id: 3,
    name: "Ratchet",
    avatar: "03.jpg",
  },
  {
    id: 4,
    name: "Clank",
    avatar: "04.jpg",
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
