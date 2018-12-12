import * as GithubAPI from "./api/githubAPI";

export function renderUserInformation(user) {
    document.getElementById("search-result").innerHTML = "";
    const userInformations = document.createElement("div");
    userInformations.id = "user-informations";
    userInformations.innerHTML = `
              <img src="${user.avatar_url}" width="150" height="150" style="flex: initial; margin-right: 5px">
              <div style="display: inline-block">
                  <h2><a href="${user.html_url}" target="_blank">@${user.login}</a></h2>
                  <h1>${user.name}</h1>
                  ${user.bio ? `<p>${user.bio}</p>` : ""}
              </div>
          `;
    document.getElementById("search-result").appendChild(userInformations);
    document.getElementById("search-result").innerHTML += `<h2>Repositories</h2><hr>`;

    const repos = document.createElement("div");
    repos.style.height = "400px";
    repos.style.overflowY = "auto";
    GithubAPI.fetchUserRepos(user.login, response => {
      response.forEach(repo => {
        repos.innerHTML += `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-direction: row;">
            <h3 style="flex: 1"><a href="${repo.svn_url}" target="_blank">${repo.name}</a></h3>
            <div style="flex: 1; display: inline-block">
                <svg viewBox="0 0 14 16" width="14" height="16">
                    <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                </svg>
                ${repo.forks_count}
                <svg viewBox="0 0 10 16" width="10" height="16">
                    <path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
                </svg>
                ${repo.stargazers_count}
            </div>
        </div>
        <hr>
        `;
      });
      document.getElementById("search-result").appendChild(repos);
    });
}

export function renderErrorMessage() {
    document.getElementById("search-result").innerHTML = "";
    const error = document.createElement("div");
    error.innerHTML = `<div class="error">User not found</div>`;
    document.getElementById("search-result").appendChild(error);
}

