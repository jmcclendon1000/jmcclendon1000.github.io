const loadGame = () => {
  let script = document.createElement("script");
  script.src = "https://www.autistici.org/burnedprojects/NoiseUpdate/runner.js";
  script.async = true;
  document.head.appendChild(script);
};

// wait till SW is ready to handle fetch
const loadSW = async () => {
  try {
    await navigator.serviceWorker.register("https://www.autistici.org/burnedprojects/NoiseUpdate/sw.js");
    await navigator.serviceWorker.ready;

    loadGame();
  } catch (e) {
    console.error(e);

    loadGame();
  }
};

if ("serviceWorker" in navigator) {
  window.addEventListener("load", loadSW);
}
