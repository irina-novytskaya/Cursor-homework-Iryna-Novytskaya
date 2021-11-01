const keys = document.querySelectorAll('.key');
const audio = document.querySelectorAll('audio');
function play(e){
    stop();
    const key = document.querySelector(`div[id="${e.keyCode}"]`);
    audio.forEach((item) => {
        if (item.getAttribute("id") == e.keyCode) {
          item.play();
          key.classList.add("playing")}})
}
function stop() {
    audio.forEach((item) => {
        item.pause();
        item.currentTime = 0;
    });
}
document.addEventListener("keydown", play);
function click() {
    stop();
    const id = this.getAttribute("id");
    for (let i = 0; i < audio.length; i++) {
        if (audio[i].getAttribute("id") == id) {
            audio[i].play();
            this.classList.add("playing");
        }}}
keys.forEach(key => key.addEventListener("click", click));