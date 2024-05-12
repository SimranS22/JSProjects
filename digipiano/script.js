function playSound(note){
    var audio = new Audio("sounds/"+ note + ".mp3");
    audio.play();
}

// for the above function to work, you need to have mp3 files of all the notes (A.mp3, CC.mp3, etc.)