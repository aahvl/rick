const keyIndicator = document.getElementById("key-indicator");
const keyName = document.getElementById("key-name");
const modal = document.getElementById("rickmodal");

const RICKROLL_AUDIO_URL = "https://www.myinstants.com/media/sounds/rickroll.mp3";
const rickAudio = new Audio(RICKROLL_AUDIO_URL);
rickAudio.loop = true;

let modalOpen = false;

document.addEventListener("keydown", (e) => {
    if (['Control', 'Shift', 'Alt', 'Meta', 'CapsLock', 'Tab'].includes(e.key)) return;

    if (e.key === 'Escape' && modalOpen) {
        ClsRick();
        return;
    }

    keyName.textContent = e.key === ' ' ? 'SPACEBAR' : e.key.toUpperCase();
    keyIndicator.classList.add("show");

    if (e.repeat && !modalOpen) {
        openRick();
    }
});

document.addEventListener("keyup", (e) => {
    keyIndicator.classList.remove("show");
    if (modalOpen) {
        ClsRick();
    }
});

function openRick() {
    modalOpen = true;
    rickAudio.currentTime = 0;
    rickAudio.play().catch(e => console.log("Audio play failed:", e));
    modal.classList.add("active");
}

function ClsRick() {
    modal.classList.remove("active");
    rickAudio.pause();
    modalOpen = false;
}
