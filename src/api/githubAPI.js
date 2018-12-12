function httpGet(route, callback, error_callback) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.responseType = "json";
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
      document.getElementById("loading").style.display = "none";
      xmlHttp.status == 200
        ? callback(xmlHttp.response)
        : error_callback(xmlHttp.response);
    }
  };
  xmlHttp.open("GET", route, true);
  xmlHttp.send();
}

export function fetchUser(username, callback, error_callback) {
  httpGet(`https://api.github.com/users/${username}`, callback, error_callback);
};

export function fetchUserRepos(username, callback, error_callback) {
  httpGet(`https://api.github.com/users/${username}/repos`, callback, error_callback);
};
