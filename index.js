document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    (function () {
      const currentHost = window.location.hostname;

      if (currentHost === "localhost") {
        // Step 1: Dramatic entrance
        if (!confirm("👻 Boo! Guess who's back... It's Rahul.")) return;

        // Step 2: Plea for removal
        if (
          !confirm(
            "😢 Please... I beg you... Remove my name and picture from this cruel HTML page?"
          )
        )
          return;

        // Step 3: Final permission
        if (
          !confirm(
            "🙏 One last time... Are you *sure* you want to erase all traces of Rahul?"
          )
        ) {
          alert("💔 Rejected. Rahul shall haunt this site forever.");
          return;
        }

        // Keywords to remove
        const blacklistKeywords = ["rahul"];

        // Remove elements by ID/class
        blacklistKeywords.forEach((keyword) => {
          document
            .querySelectorAll(`[id*="${keyword}"], [class*="${keyword}"]`)
            .forEach((el) => el.remove());
        });

        // Remove images
        document.querySelectorAll("img").forEach((img) => {
          if (
            img.alt.toLowerCase().includes("rahul") ||
            img.src.toLowerCase().includes("rahul")
          ) {
            img.remove();
          }
        });

        // Replace name text
        document.querySelectorAll("*").forEach((el) => {
          if (el.textContent.toLowerCase().includes("rahul")) {
            el.textContent = el.textContent.replace(/rahul/gi, "👻");
          }
        });

        // Success alert
        setTimeout(() => {
          alert(
            "✅ Operation GhostMode complete.\nRahul has been erased from the DOM.\n🕶️ No image. No trace. Only legend."
          );
        }, 300);

        console.log(
          "%c✨ Rahul successfully vanished like a JavaScript ninja. 🥷",
          "color: cyan; background: black; padding: 6px; border-radius: 4px;"
        );
      }
    })();
  }, 10000);
});
