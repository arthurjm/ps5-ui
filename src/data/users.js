const users = [
  {
    id: 0,
    name: "Nathan Drake",
    avatar: "01.jpg",
    psplus: true,
  },
  {
    id: 1,
    name: "Aloy",
    avatar: "02.jpg",
    psplus: true,
  },
  {
    id: 2,
    name: "Ratchet",
    avatar: "03.jpg",
    psplus: false,
  },
  {
    id: 3,
    name: "Clank",
    avatar: "04.jpg",
    psplus: true,
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
