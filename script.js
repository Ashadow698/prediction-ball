<script>
  const messages = [
    "You are kind and thoughtful.",
    "You have a great sense of humor!",
    "People love your positivity.",
    "You’re a loyal friend.",
    "You have a brilliant mind.",
    "You talk too much sometimes.",
    "You tend to be a bit forgetful.",
    "You have an unusual taste in music.",
    "You love to procrastinate.",
    "You’re sometimes awkward but that’s charming.",
    "You can be a bit stubborn.",
    "You’re sometimes a little lazy.",
    "You have a tendency to overthink.",
    "You occasionally hurt people’s feelings without meaning to.",
    "You’re a bit of a mess, but we love you anyway."
  ];

  const btn = document.getElementById("generateBtn");
  const messageDiv = document.getElementById("message");

  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageDiv.textContent = messages[randomIndex];
  });
</script>
