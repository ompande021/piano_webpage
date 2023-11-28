let pianokeys = document.querySelectorAll('.key');

function playSound(newURL){
    new Audio(newURL).play()
}

pianokeys.forEach((pianokey,i)=>{
    const newURL = '24/key'+(i+1)+'.mp3'

    pianokey.addEventListener('click',()=>playSound(newURL))
})