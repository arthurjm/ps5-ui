const games = [
  {
    id: 0,
    name: "PlayStation Store",
    image: "ps-store.png",
    "app-type": null,
    version: "",
  },
  {
    id: 1,
    name: "Bloodborne 2",
    image: "bloodborne-2.jpg",
    "app-type": "game",
    version: "ps5",
  },
  {
    id: 2,
    name: "The Legend of Zelda: Breath of the Wild",
    image: "breath-of-the-wild.jpg",
    "app-type": "game",
    version: "ps4",
  },
  {
    id: 3,
    name: "The Elder Scrolls VI : Skyrim II",
    image: "skyrim-2.jpg",
    "app-type": "game",
    version: "ps5",
  },
];

function getImageURL(id, folder) {
  const image = games[id].image;
  try {
    var url = require(`@/assets/${folder}/${image}`);
  } catch (e) {
    url = "";
  }
  return url;
}

function getIconURL(id) {
  return getImageURL(id, "icons");
}

function getBackgroundURL(id) {
  return getImageURL(id, "backgrounds");
}

export { games, getIconURL, getBackgroundURL };
