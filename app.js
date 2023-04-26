var button = document.querySelector('button');
var text = document.querySelector('textarea');
button.addEventListener('click', ()=>{
    let utterance = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterance);
})