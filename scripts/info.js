function loadLaunchDetails(json) {
  const ytPlayer = document.querySelector("#ytplayer");
  const ytSectionContainer = document.querySelector(".yt-section");
  const flightNumberContainer = document.querySelector("#flightNumber");
  const logoIcon = document.querySelector("#logo");
  const shuttleTitleContainer = document.querySelector("#shuttleTitle");
  const shuttleTitleContainer2 = document.querySelector("#shuttleTitle_2");
  const dateContainer = document.querySelector("#date");
  const infoContainer = document.querySelector("#info");

  const name = json.name;
  const date = new Date(json.date_utc).toString();

  if (!json.links.youtube_id) {
    ytSectionContainer.remove();
  }
  if (!json.links.patch.small) {
    logoIcon.remove();
  }

  logoIcon.setAttribute("src", `${json.links.patch.small}`);
  flightNumberContainer.innerHTML = `
  <h2>${name} by Space X flight number</h2>
        <p class="flight-number">${json.flight_number}</p>`;
  shuttleTitleContainer.innerHTML = `${name}`;
  shuttleTitleContainer2.innerHTML = `${name}`;
  dateContainer.innerHTML = `${date}`;
  infoContainer.innerHTML = `${json.details}`;
  ytPlayer.setAttribute(
    "src",
    `https://www.youtube.com/embed/${json.links.youtube_id}?autoplay=0&loop=1&origin=http://example.com`
  );
}
