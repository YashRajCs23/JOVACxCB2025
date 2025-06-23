fetch("https://api.github.com/users/YashRajCs23")
  .then(response => response.json())
  .then(data => {
    document.getElementById("profile").innerHTML = `
      <img src="${data.avatar_url}" width="100" height="100"/>
      <h2>${data.name || "No name listed"}</h2>
      <p>@${data.login}</p>
      <p>${data.bio || "No bio available"}</p>
      <p><strong>Public Repos:</strong> ${data.public_repos}</p>
      <a href="${data.html_url}" target="_blank">
        <button style="
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #238636;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        ">View GitHub Profile</button>
      </a>
    `;
  })
  .catch(err => {
    console.error(err);
    document.getElementById("profile").innerHTML = "<p>Failed to load profile.</p>";
  });
