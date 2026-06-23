const musicItems = [
  {
    name: "Jr. NTR Hits",
    type: "Actor",
    icon: "🎬",
    desc: "Public Spotify playlist for Jr. NTR hit songs.",
    uri: "spotify:playlist:37i9dQZF1DX4xExQos7ZSB"
  },
  {
    name: "Balayya Hits",
    type: "Actor",
    icon: "🔥",
    desc: "Public Spotify playlist for Balakrishna hit songs.",
    uri: "spotify:playlist:37i9dQZF1DWWzOIxj2UXpg"
  },
  {
    name: "Nagarjuna Hits",
    type: "Actor",
    icon: "⭐",
    desc: "Public Spotify playlist for Nagarjuna hits.",
    uri: "spotify:playlist:37i9dQZF1DXa1zcUNT6TQ1"
  },
  {
    name: "Venkatesh Songs",
    type: "Actor",
    icon: "🎞️",
    desc: "Public Spotify playlist for Venkatesh songs.",
    uri: "spotify:playlist:2C3WzPzQDZD8fXriqkJbx5"
  },
  {
    name: "Ravi Teja Songs",
    type: "Actor",
    icon: "⚡",
    desc: "Public Spotify playlist for Ravi Teja essential songs.",
    uri: "spotify:playlist:37i9dQZF1DZ06evO1KxGDM"
  },
  {
    name: "Sharwanandh Songs",
    type: "Actor",
    icon: "💫",
    desc: "Public Spotify playlist for Sharwanand hit songs.",
    uri: "spotify:playlist:0ucOaT4sqWEHpZjKyPFGOc"
  },
  {
    name: "S. P. Balasubrahmanyam",
    type: "Singer",
    icon: "🎤",
    desc: "Public Spotify artist page for SPB.",
    uri: "spotify:artist:2ae6PxICSOZHvjqiCcgon8"
  },
  {
    name: "Devi Sri Prasad",
    type: "Music Director",
    icon: "🎧",
    desc: "Public Spotify playlist for DSP top hits.",
    uri: "spotify:playlist:5asiUqbcyQxE0YlBqX4cBy"
  },
  {
    name: "M. M. Keeravaani",
    type: "Music Director",
    icon: "🎼",
    desc: "Public Spotify compilation for M. M. Keeravaani evergreen hits.",
    uri: "spotify:album:30FWriYTJHn2u2wGwRaZO8"
  },
  {
    name: "Thaman Songs",
    type: "Music Director",
    icon: "🥁",
    desc: "Public Spotify playlist for Thaman Telugu songs.",
    uri: "spotify:playlist:0BmhxegXceRemDz3pNQHgD"
  }
];

const musicList = document.getElementById("musicList");
const searchInput = document.getElementById("searchInput");
const title = document.getElementById("title");
const description = document.getElementById("description");
const playerHeading = document.getElementById("playerHeading");
const statusText = document.getElementById("statusText");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentFilter = "All";
let currentSelectedName = "Jr. NTR Hits";
let embedController = null;
let iframeAPIReady = false;

function getFilteredItems() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  return musicItems.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm) ||
      item.type.toLowerCase().includes(searchTerm);

    const matchesFilter =
      currentFilter === "All" || item.type === currentFilter;

    return matchesSearch && matchesFilter;
  });
}

function renderList() {
  musicList.innerHTML = "";
  const filteredItems = getFilteredItems();

  emptyState.style.display = filteredItems.length ? "none" : "block";

  if (!filteredItems.length) return;

  let selectedItem =
    filteredItems.find(item => item.name === currentSelectedName) ||
    filteredItems[0];

  currentSelectedName = selectedItem.name;

  filteredItems.forEach(item => {
    const button = document.createElement("button");
    button.className = "item-btn" + (item.name === currentSelectedName ? " active" : "");
    button.innerHTML = `
      <div class="thumb">${item.icon}</div>
      <div class="item-text">
        <span class="name">${item.name}</span>
        <span class="meta">${item.type}</span>
      </div>
    `;

    button.addEventListener("click", () => {
      currentSelectedName = item.name;
      renderList();
      loadItem(item);
    });

    musicList.appendChild(button);
  });

  loadItem(selectedItem);
}

function loadItem(item) {
  title.textContent = item.name;
  description.textContent = item.desc;
  playerHeading.textContent = `Now Playing: ${item.name}`;
  statusText.textContent = `${item.type} loaded`;

  if (embedController && iframeAPIReady) {
    embedController.loadUri(item.uri);
  }
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  iframeAPIReady = true;
  const element = document.getElementById("embed-iframe");
  const firstItem = musicItems.find(item => item.name === currentSelectedName) || musicItems[0];

  const options = {
    uri: firstItem.uri,
    width: "100%",
    height: "500"
  };

  IFrameAPI.createController(element, options, (controller) => {
    embedController = controller;
    statusText.textContent = "Spotify iFrame API connected";
  });
};

searchInput.addEventListener("input", () => {
  renderList();
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderList();
  });
});

renderList();