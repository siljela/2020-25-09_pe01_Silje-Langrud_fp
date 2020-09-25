const yearContent = document.querySelector(".year-content");
document.querySelector(".year-dropdown").addEventListener("click", onClick);

function onClick() {
  if (yearContent.style.display === "block") {
    yearContent.style.display = "none";
  } else {
    yearContent.style.display = "block";
  }
}

const pastlaunch = "https://api.spacexdata.com/v4/launches/past";
const errorContainer = document.querySelector(".errorContainer");

fetch(pastlaunch)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    loadPastLaunch(json);
  })
  .catch(function (error) {
    console.log("An error occurred");
    errorContainer.innerHTML = "Oops! There seems to be an unknown error.";
  });

function loadPastLaunch(json) {
  const pastContainer = document.querySelector("#pastMissions");
  pastContainer.innerHTML = "";
  const results = json;

  for (var i = 0; i < results.length; i++) {
    const resultsContainer = document.createElement("div");
    pastContainer.appendChild(resultsContainer);

    const newDate = new Date(results[i].date_utc);
    const date = newDate.toDateString();
    const time = newDate.toTimeString();
    const year = newDate.getFullYear();

    let details = `${results[i].details}`;
    let reddit = `<a class="link" title="Discussion on reddit campaign" href="${results[i].links.reddit.campaign}">&rsaquo; Get involved on Reddit!</a>`;
    let stream = `<a class="link" title="Webcast on youtube" href="${results[i].links.webcast}">&rsaquo; Watch the launch on youtube</a>`;
    let article = `<a class="link" title="Article on launch" href="${results[i].links.article}">&rsaquo; Article: Read about ${results[i].name}.</a>`;
    let wiki = `<a class="link" title="Wikipediapage with information about launch" href="${results[i].links.wikipedia}">&rsaquo; Find more information on Wikipedia.</a>`;

    if (!results[i].name) {
      continue;
    }
    if (!results[i].details) {
      details = "There are no details for this shuttle.";
    }
    if (!results[i].links.reddit.campaign) {
      reddit = "";
    }
    if (!results[i].links.webcast) {
      stream = "";
    }
    if (!results[i].links.article) {
      article = "";
    }
    if (!results[i].links.wikipedia) {
      wiki = "";
    }

    let html = "";
    html += `
    <section class="mission-item" id="${year}" launch-name="${results[i].name}" launch-date="${date}">
        <p>Time: ${time} </p>
        <p>Flight number: ${results[i].flight_number}</p>
        <p>Details: ${details}</p>
        <h4>External links:</h4>
        ${stream}
        ${article}
        ${wiki}
        ${reddit}
    </section>
    `;

    resultsContainer.innerHTML = html;
  }
}
