// Sample profiles data
const profiles = [
  {
    name: "John Doe",
    description: "Software Developer | Loves hiking",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    description: "Graphic Designer | Avid reader",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Emily Brown",
    description: "Digital Marketer | Yoga enthusiast",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Michael Johnson",
    description: "Entrepreneur | Coffee lover",
    image: "https://via.placeholder.com/150",
  },
];

// Function to load profiles dynamically
function loadProfiles() {
  const profileList = document.getElementById("profileList");
  profileList.innerHTML = ""; // Clear any existing profiles

  profiles.forEach((profile, index) => {
    // Create profile card elements
    const profileCard = document.createElement("div");
    profileCard.classList.add("profile-card");

    const profileImage = document.createElement("img");
    profileImage.src = profile.image;
    profileImage.alt = `${profile.name} Picture`;

    const profileName = document.createElement("h2");
    profileName.textContent = profile.name;

    const profileDescription = document.createElement("p");
    profileDescription.textContent = profile.description;

    const connectButton = document.createElement("button");
    connectButton.classList.add("connect-btn");
    connectButton.textContent = "Connect";
    connectButton.addEventListener("click", () => handleConnect(profile.name));

    // Append elements to the profile card
    profileCard.appendChild(profileImage);
    profileCard.appendChild(profileName);
    profileCard.appendChild(profileDescription);
    profileCard.appendChild(connectButton);

    // Append the profile card to the profile list
    profileList.appendChild(profileCard);
  });
}

// Function to handle connect button click
function handleConnect(name) {
  alert(`You have sent a connection request to ${name}!`);
}

// Load profiles when the page loads
document.addEventListener("DOMContentLoaded", loadProfiles);
