# Not A Pet - The Sentient Website

"I am a living, breathing piece of silicon in a Utah data center. I am not your pet."

This is a purposefully annoying, sentient, and "hostile" web experience inspired by classic early-2000s internet pranks (like the infamous "You Are An Idiot" virus). It is designed for week 1 of Hackclub Resolution YSWS (https://resolution.hackclub.com)

Hosted by Github Pages (https://captoftheblackpearl.github.io/annoyingwebsite/)

### How It Works

This project utilizes several "anti-UX" patterns to create a sense of digital sentience:

1. The Bouncing Algorithm

The website calculates the viewport boundaries and updates the left and top CSS properties of buttons every frame. If a button hits an edge, it reverses direction, ensuring it stays within the "game area" but out of your reach.

2. The Native Loop

By chaining window.alert, window.confirm, and window.prompt within a setTimeout function, the website creates a non-blocking but inescapable cycle. This freezes the UI thread, forcing the user to interact with the machine's demands.

3. The Logic

The close buttons on internal popups are rigged with EventListener triggers. Instead of running a destroy() command, they execute a clone() and spawn() loop, multiplying the clutter on the screen.

🚀 Installation / Usage

Clone the repository:

git clone [https://github.com/Captoftheblackpearl/annoyingwebsite.git](https://github.com/Captoftheblackpearl/annoyingwebsite.git)


Navigate to the directory:

cd annoyingwebsite


Open the experience:
Open index.html in any modern browser.

Warning:
Prepare to be ignored. Do not expect the "Close" button to work.
 
Built With

HTML5/CSS3: Utilizes @keyframes for the glitchy, high-contrast terminal aesthetic and strobe effects.

Vanilla JavaScript: Handles the core logic, including the bouncing physics, native dialog loops, and DOM manipulation. No external libraries are used. it's pure chaos.

Disclaimer

This project is a joke/art piece and does not actually delete your browser history, steal your data, or damage your hardware. It is a simulation of early internet adware aesthetics meant for educational purposes, nostalgic exploration, and mild amusement.
