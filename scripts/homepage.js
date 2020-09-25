function loadLaunchDetails(json) {
  const shuttleInfo = document.querySelector("#shuttleInfo");
  const resourcesContainer = document.querySelector("#resourcesContainer");
  let errorMessage = document.querySelector("#resourcesError");

  const date = new Date(json.date_utc).toDateString();
  const time = new Date(json.date_utc).toLocaleTimeString();
  const name = json.name;

  let redditCampaign = `<a class="link" title="Discussion on reddit campaign" href="${json.links.reddit.campaign}"><i class="fa fa-link" aria-hidden="true"></i> General discussion about ${name} &rsaquo;</a>`;
  let redditLaunch = `<a class="link" title="Discussion on reddit launch" href="${json.links.reddit.launch}"><i class="fa fa-link" aria-hidden="true"></i> Launch discussion about ${name} &rsaquo;</a>`;
  let redditMedia = `<a class="link" title="Reddit media threads" href="${json.links.reddit.media}"><i class="fa fa-link" aria-hidden="true"></i> Media thread and contest about ${name} &rsaquo;</a>`;

  if (!json.links.reddit.campaign) {
    redditCampaign = "";
  }
  if (!json.links.reddit.launch) {
    redditLaunch = "";
  }
  if (!json.links.reddit.media) {
    redditMedia = "";
  }
  if (
    json.links.reddit.campaign &&
    json.links.reddit.launch &&
    json.links.reddit.media
  ) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }

  shuttleInfo.innerHTML = `<h1>${name}</h1>
            <p><i class="fa fa-calendar" aria-hidden="true"></i> Date: ${date}</p>
            <p><i class="fa fa-clock-o" aria-hidden="true"></i> Local time: ${time}</p>
            `;
  resourcesContainer.innerHTML = `
                    ${redditCampaign}
                    ${redditLaunch}
                    ${redditMedia}
                    `;
}
