
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const loveContent = document.getElementById('loveContent');
let noBtnSize = 16;

yesBtn.onclick = () => {
  loveContent.classList.remove('hidden');
};

noBtn.onclick = () => {
  noBtnSize -= 1;
  if (noBtnSize > 5) {
    noBtn.style.fontSize = noBtnSize + "px";
  } else {
    noBtn.innerText = "Say Yes 🥹";
  }
};

function countdown() {
  const countDate = new Date("June 26, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById('countdown').innerText =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(countdown, 1000);
