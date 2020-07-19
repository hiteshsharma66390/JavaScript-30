function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    document.querySelector(`div .key[data-key="${e.keyCode}"]`).classList.add("playing");

}
function removeTansition(e){
    if(e.propertyName!=='transform') return;
    this.classList.remove("playing");
}
const keys=document.querySelectorAll('.key');
keys.forEach(key=>{
    key.addEventListener('transitionend',removeTansition);
});
window.addEventListener('keydown',playSound);