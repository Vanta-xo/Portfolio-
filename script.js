document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var n = document.getElementById("name").value.trim();
  var m = document.getElementById("email").value.trim();
  var t = document.getElementById("message").value.trim();
  var s = document.getElementById("status");
  if (!n || !m || !t) { s.textContent = "Fill in your name, email and message, then try again."; return; }
  var body = encodeURIComponent(t + "\n\nFrom: " + n + " (" + m + ")");
  window.location.href = "mailto:your.email@example.com?subject=" + encodeURIComponent("Portfolio message from " + n) + "&body=" + body;
  s.textContent = "Opening your email app to send the message.";
});
