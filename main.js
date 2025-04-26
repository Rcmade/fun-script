document.addEventListener("DOMContentLoaded", function () {
(function () {
  const repo = "Rcmade/fun-script";
  const filePath = "index.js";

  fetch(
    `https://api.github.com/repos/${repo}/commits?path=${filePath}&per_page=1`,
    {
      headers: { "User-Agent": "fetch-latest-index" },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const latestHash = data[0].sha;
      const script = document.createElement("script");
      script.src = `https://cdn.jsdelivr.net/gh/${repo}@${latestHash}/${filePath}`;
      script.async = true;
      document.head.appendChild(script);
    })
    .catch((err) => {
      console.error("Could not fetch latest index.js", err);
    });
})();

});
