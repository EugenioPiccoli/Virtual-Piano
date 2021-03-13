document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        let sound = new Audio("white_keys/A.mp3");
        sound.play();
    } else if (event.code === "KeyS") {
        let sound = new Audio("white_keys/S.mp3");
        sound.play();
    } else if (event.code === "KeyD") {
        let sound = new Audio("white_keys/D.mp3");
        sound.play();
    } else if (event.code === "KeyF") {
        let sound = new Audio("white_keys/F.mp3");
        sound.play();
    } else if (event.code === "KeyG") {
        let sound = new Audio("white_keys/G.mp3");
        sound.play();
    } else if (event.code === "KeyH") {
        let sound = new Audio("white_keys/H.mp3");
        sound.play();
    } else if (event.code === "KeyJ") {
        let sound = new Audio("white_keys/J.mp3");
        sound.play();
    } else if (event.code === "KeyW") {
        let sound = new Audio("black_keys/W.mp3");
        sound.play();
    } else if (event.code === "KeyE") {
        let sound = new Audio("black_keys/E.mp3");
        sound.play();
    } else if (event.code === "KeyT") {
        let sound = new Audio("black_keys/T.mp3");
        sound.play();
    } else if (event.code === "KeyY") {
        let sound = new Audio("black_keys/Y.mp3");
        sound.play();
    } else if (event.code === "KeyU") {
        let sound = new Audio("black_keys/U.mp3");
        sound.play();
    } else {
        console.log("Warning! Key not available");
    }
    /*sound.pause();*/
    sound.load();

});

/* make the keyboard play sounds

let audio = new Audio("path/to/myAudio.mp3");
audio.play()

 */