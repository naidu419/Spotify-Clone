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
  },
  {
  name: "Karthik Telugu Hits",
  type: "Singer",
  icon: "🎙️",
  desc: "Voice of Karthik – Telugu hit songs sung by playback singer Karthik.",
  uri: "spotify:album:1VkCzTFLG3e4xmiMlTrYaJ"
},
{
  name: "Sunitha Telugu Songs",
  type: "Singer",
  icon: "🎼",
  desc: "Collection of Telugu songs sung by playback singer Sunitha.",
  uri: "spotify:playlist:5NIqOOGM6MC6LPwpiGjDMl"
},
{
  name: "Ram Miriyala Hits",
  type: "Singer",
  icon: "🔥",
  desc: "This Is Ram Miriyala – essential Telugu tracks by Ram Miriyala.",
  uri: "spotify:playlist:37i9dQZF1DZ06evO2Gr21P"
},
{
  name: "Anurag Kulkarni Hits",
  type: "Singer",
  icon: "🎧",
  desc: "This Is Anurag Kulkarni – essential Telugu songs by Anurag Kulkarni.",
  uri: "spotify:playlist:37i9dQZF1DZ06evO40d2L6"
},
{
  name: "Sid Sriram Telugu Hits",
  type: "Singer",
  icon: "🎵",
  desc: "Sid Sriram Telugu hits playlist curated on Spotify.",
  uri: "spotify:playlist:37i9dQZF1DXb5Hc9BmAT8t"
},
{
  name: "A. R. Rahman Telugu Hits",
  type: "Music Director",
  icon: "🎹",
  desc: "Rahman Telugu Hits – curated Telugu songs composed by A. R. Rahman.",
  uri: "spotify:playlist:37i9dQZF1DX695EFn59me7"
},{
  name: "K. S. Chithra Telugu Songs",
  type: "Singer",
  icon: "🌸",
  desc: "Chitra Telugu songs collection with classic melodies by K. S. Chithra.",
  uri: "spotify:playlist:7uxTgNtsgpIssJH5h5UqTT"
},
{
  name: "Shweta Mohan Hits",
  type: "Singer",
  icon: "🎤",
  desc: "This Is Shweta Mohan – essential tracks across Tamil, Telugu and other languages.",
  uri: "spotify:playlist:37i9dQZF1DZ06evO0Nd8oB"
},
{
  name: "Mani Sharma Top 100 Hits",
  type: "Music Director",
  icon: "🎛️",
  desc: "Mani Sharma Top 100 Telugu hits – all-time favourite compositions.",
  uri: "spotify:playlist:7HFppAZA5pylLyWV9KOWDV"
},
{
  name: "Adivi Sesh – G2 Songs",
  type: "Actor",
  icon: "🕵️",
  desc: "G2 (Goodachari 2) Telugu songs featuring Adivi Sesh.",
  uri: "spotify:playlist:7qBzifmpU00eeDfRE73Ims"
},
{
  name: "Vijay Deverakonda – Ranabaali Songs",
  type: "Actor",
  icon: "🎬",
  desc: "Ranabaali Telugu songs featuring Vijay Deverakonda and Rashmika Mandanna.",
  uri: "spotify:playlist:2yDWmIZyUpZHiL7Yw16WU8"
},
{
  name: "Gopi Sundar",
  type: "Music Director",
  icon: "🎶",
  desc: "Telugu and South Indian film songs composed by Gopi Sundar.",
  uri: "spotify:album:2YjU5LftLFtIiKDLa7cJ33" 
},
{
  name: "Anup Rubens",
  type: "Music Director",
  icon: "🎛️",
  desc: "Telugu film albums like Hello! and more composed by Anup Rubens.",
  uri: "spotify:album:4EwzylsrmL1GsCz00aL1ko"  
},

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