panels=document.querySelectorAll('.panel');
//console.log(panels);
panels.forEach(panel => {
    panel.addEventListener('click',function(){
        this.classList.toggle('active-panel');
    });
});

