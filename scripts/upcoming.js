const upcominglaunch = "https://api.spacexdata.com/v4/launches/upcoming";
const errorContainer = document.querySelector(".errorContainer");

fetch(upcominglaunch)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    loadUpcomingLaunch(json);
  })
  .catch(function (error) {
    console.log("An error occurred");
    errorContainer.innerHTML = "Oops! There seems to be an unknown error.";
  });

function loadUpcomingLaunch(json) {
  const upcomingContainer = document.querySelector("#upcomingMissions");
  upcomingContainer.innerHTML = "";
  const results = json;

  for (var i = 0; i < results.length; i++) {
    const resultsContainer = document.createElement("div");
    upcomingContainer.appendChild(resultsContainer);

    const newDate = new Date(results[i].date_utc);
    const date = newDate.toDateString();
    const time = newDate.toTimeString();

    let details;
    let stream;

    if (!results[i].details) {
      details = "Further details will be updated as soon as possible.";
    } else {
      details = `${results[i].details}`;
    }

    if (!results[i].links.webcast) {
      stream = `<p>Youtube: There is no stream for this event yet.</p>`;
    } else {
      stream = `<a class="link" title="webcast on youtube" href="${results[i].links.webcast}">&rsaquo; Upcoming stream on youtube</a>`;
    }

    let html = "";
    html += `
    <section class="mission-item" launch-name="${results[i].name}" launch-date="${date}">
        <p>Time: ${time}</p>
        <p>Flight number: ${results[i].flight_number}</p>
        <p>Details: ${details}</p>
        ${stream}
    </section>
    `;

    resultsContainer.innerHTML = html;
  }
}
