import "./styles/style.css"
import * as GithubAPI from "./api/githubAPI";
import * as ViewUpdater from "./view-updater";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search-button").addEventListener("click", () => {
    document.getElementById("search-result").innerHTML = "";
    document.getElementById("loading").style.display = "inline-block";
    const username = document.getElementById("username-input").value;
    GithubAPI.fetchUser(username,
      response => ViewUpdater.renderUserInformation(response),
      () => ViewUpdater.renderErrorMessage()
    );
  });
});
