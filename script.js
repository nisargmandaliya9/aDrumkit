window.addEventListener('keydown', (e) => {

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio); // Will return the audio element with corresponding keyCode

    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');

    if (!audio) return ; // Stop the function from running all together
    audio.currentTime = 0;
    audio.play();
    // console.log(e);
    // console.log(e.keyCode);

});

    let keys = document.querySelectorAll('.key'); // Selects all elements having class 'key'
    // console.log(keys);
    // keys.addEventListener('transitionend'); // We can't do that as we've an array of elements as keys you can't of all of them. We must have to loop over every single element.and So,

    keys.forEach(key => key.addEventListener('transitionend', (e) => {
        // console.log(e);
        if(e.propertyName === 'transform') return key.classList.remove('playing');
    }));
