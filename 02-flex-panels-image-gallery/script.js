panels=document.querySelectorAll('.panel');
//console.log(panels);
panels.forEach(panel => {
    panel.addEventListener('click',function(){
        this.classList.toggle('active-panel');
    });
});
for click handling via phone
panels.forEach(panel => {
    panel.addEventListener('onclick',function(){
        this.classList.toggle('active-panel');
    });
});

