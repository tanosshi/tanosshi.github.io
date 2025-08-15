function preloadProjects() {
  if (preloaded) return;
  const container = document.getElementById("pp");
  fetchProjectswithFailDetection(
    "/projects.json",
    "https://tanos.is-a.dev/projects.json",
    true
  );
  preloaded = 1;
  setTimeout(() => {
    if (preloaded && container.innerHTML == "") {
      const h3 = document.createElement("h3");
      h3.textContent =
        "There seems to be a problem with the internet connection (projects.json couldnt be loaded), please refresh to load the newest site update.";
      h3.id = "projectid";

      container.appendChild(h3);
      document.getElementById("projectstext").innerHTML =
        "loading is taking a quite long time...";
    }
  }, 2000);
}
