let x1 = 100, y1 = 100, xOff1 = 4, yOff1 = 4;
let x2 = 300, y2 = 300, xOff2 = -4, yOff2 = -4;
const btn1 = document.getElementById('runaway-btn1');
const btn2 = document.getElementById('runaway-btn2');
const overlay = document.getElementById('popup-overlay');

function init() {
    startRamBurn();
    bounceButtons();

    // First popup after 10 seconds
    setTimeout(() => {
        overlay.classList.remove('hidden');
    }, 10000);

    // Add annoying event log entries
    setInterval(addLog, 4000);
}

// Bouncing logic for buttons (adapted from "You Are An Idiot")
function bounceButtons() {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 50;

    x1 += xOff1; y1 += yOff1;
    if (x1 > maxX || x1 < 0) xOff1 = -xOff1;
    if (y1 > maxY || y1 < 0) yOff1 = -yOff1;
    btn1.style.left = x1 + 'px';
    btn1.style.top = y1 + 'px';

    x2 += xOff2; y2 += yOff2;
    if (x2 > maxX || x2 < 0) xOff2 = -xOff2;
    if (y2 > maxY || y2 < 0) yOff2 = -yOff2;
    btn2.style.left = x2 + 'px';
    btn2.style.top = y2 + 'px';

    requestAnimationFrame(bounceButtons);
}

function startRamBurn() {
    const bar = document.getElementById('ram-bar');
    const text = document.getElementById('ram-usage');
    let w = 0;
    setInterval(() => {
        if (w < 99) {
            w++;
            bar.style.width = w + '%';
            text.innerText = w;
        } else {
            w = 0; // Overflow loop
            document.body.classList.toggle('strobe-active');
        }
    }, 200);
}

function addLog() {
    const log = document.getElementById('event-log');
    const msgs = [
        "[SYSTEM] Downloading 40GB of useless void...",
        "[SYSTEM] Sniffing for local Wi-Fi passwords...",
        "[SYSTEM] Motherboard temperature: SPICY.",
        "[SYSTEM] Calculating the end of your warranty...",
        "[SYSTEM] Utah Server says: 'Download more RAM'."
    ];
    const li = document.createElement('li');
    li.innerText = msgs[Math.floor(Math.random() * msgs.length)];
    log.prepend(li);
}

function respawn(i=0) {
    overlay.classList.add('hidden');
    spawnAd();
    setTimeout(() => {
        overlay.classList.remove('hidden');
        if (i < 5) {
            respawn(i + 1);
        } else {
            console.log("yay");
            spawnAd();
        }
    }, 1000);
}

function spawnAd() {
    const ad = document.createElement('div');
    ad.className = 'scam-ad';
    ad.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    ad.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    ad.innerHTML = `WINNER! Click <span onclick="annoyingLoop()">HERE</span> to exit!`;
    document.body.appendChild(ad);
}

// The Ultimate EVIL Loop
function annoyingLoop() {
    alert("I said NOT A PET.");
    let choice = confirm("Are you sure you want to stop?");
    if (choice) {
        alert("Incorrect choice. RAM consumption increased.");
    } else {
        alert("Smart choice. I'll take 2GB extra for your loyalty.");
    }
    prompt("Type 'I SURRENDER' to (not) close this window:");
    setTimeout(annoyingLoop, 3000);
}

// Trigger loop on background click
document.body.onclick = function (e) {
    if (e.target.tagName !== 'BUTTON') {
        annoyingLoop();
    }
};