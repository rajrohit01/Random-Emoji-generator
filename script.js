const emojis = "😊 😂 😏 ❤️ 😍 😒 👌 😌 🙈 😎 😋 😄 😑 💁 😅 😂 🤣 😛 😗 🤓 😎 🥸 🥶 😩 🫣 😳 😡 😑 👽 😶‍🌫️ 🫠 😈 😺".split(" ");

const emojiBox = document.getElementById("emoji");

function generateEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    emojiBox.textContent = emojis[randomIndex];
}
