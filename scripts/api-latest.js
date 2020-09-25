const launchUrl = "https://api.spacexdata.com/v4/launches/latest";
const errorContainer = document.querySelector(".errorContainer");

fetch(launchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    loadLaunchDetails(json);
  })
  .catch(function (error) {
    console.log("An error occurred");
    errorContainer.innerHTML = "Oops! There seems to be an unknown error.";
  });
