const form = document.getElementById("searchForm");
const usernameInput = document.getElementById("usernameInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  if (username) {
    fetchGitHubProfile(username);
  }
});

async function fetchGitHubProfile(username) {
  const profileDiv = document.getElementById("profile");
  const reposDiv = document.getElementById("repos");
  reposDiv.innerHTML = "Loading...";
  profileDiv.classList.add("hidden");

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error("User not found");
    const user = await userRes.json();

    document.getElementById("avatar").src = user.avatar_url;
    document.getElementById("name").textContent = user.name || "No name provided";
    document.getElementById("username").textContent = `@${user.login}`;
    document.getElementById("location").textContent = user.location || "No location";
    document.getElementById("joined").textContent = `Joined: ${new Date(user.created_at).toLocaleDateString()}`;
    document.getElementById("followers").textContent = user.followers;
    document.getElementById("following").textContent = user.following;
    document.getElementById("reposCount").textContent = user.public_repos;

    const reposRes = await fetch(user.repos_url);
    const repos = await reposRes.json();

    const reposHTML = repos.slice(0, 5).map(repo => `
      <div class="repo">
        <a href="${repo.html_url}" target="_blank"><strong>${repo.name}</strong></a><br/>
        <small>${repo.language || 'No language info'}</small>
      </div>
    `).join("");

    reposDiv.innerHTML = `<h3>Top Repositories</h3>${reposHTML}`;
    profileDiv.classList.remove("hidden");

  } catch (error) {
    reposDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
