(function () {
  const allowedDomains = ["clientdomain.com", "www.clientdomain.com"];
  const currentHost = window.location.hostname;

  if (!allowedDomains.includes(currentHost)) {
    document.body.innerHTML = `
      <style>
        body { 
          display: flex; align-items: center; justify-content: center; 
          height: 100vh; background: #111; color: #fff; font-family: sans-serif; 
          text-align: center; padding: 2rem;
        }
      </style>
      <div>
        <h1>🔒 License Violation</h1>
        <p>This site is not authorized to run on <strong>${currentHost}</strong>.</p>
        <p>Visit <a href="https://yourdomain.com" style="color:#0bf;">yourdomain.com</a> for a valid license.</p>
      </div>
    `;
    throw new Error("License check failed: unauthorized domain.");
  }
})();
