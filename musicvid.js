let beatTime;
let beat = 0;

// 625
function preload() {
  song = loadSound('assets/song.m4a');
  
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  if (song.isPlaying()) {
    difference = (millis() - beatTime);
    if (difference >= 625) {
      beatTime = beatTime + difference
      beat = beat + 1
    }

    // if (beat % 2 == 0) {
    //   background('red');
    // } else {
    //   background('green');
    // }

    if (beat < 3) {
      countdown = createImg('assets/gifs/countdown.gif')
      countdown.position(100, 110);
      countdown.size(600, AUTO);
    } 
    if (beat > 4 && beat < 8 ) {
      donaldsing = createImg('assets/gifs/donaldduckGIF.gif')
      donaldsing.position(0, 0);
      donaldsing.size(800, AUTO);
    }
     if (beat > 6 ) {
       thumper = createImg('assets/gifs/thumperGIF.gif')
       thumper.position(5, 280);
       thumper.size(300, AUTO);
     }
     if (beat > 7) {
       mmhug = createImg('assets/gifs/mickeyminniekissGIF.gif')
       mmhug.position(545, 415);
       mmhug.size(250, AUTO);
     }
     if (beat > 8) {
       tomeyes = createImg('assets/gifs/tomluveyesGIF.gif')
       tomeyes.position(4, 0);
       tomeyes.size(330, AUTO);
     }
     if (beat >9) {
       peterpan = createImg('assets/gifs/wendy&peterGIF.gif')
       peterpan.position(480, 0);
       peterpan.size(320, AUTO);
     }
     if (beat >10) {
       flintstones = createImg('assets/gifs/flintstonesGIF.gif')
       flintstones.position(270, 220);
       flintstones.size(320, AUTO);
     }
     if (beat >11) {
       smurfs = createImg('assets/gifs/smurfluvGIF.gif')
       smurfs.position(20, 150);
       smurfs.size(260, AUTO);
     }
     if (beat >12) {
       ilybug = createImg('assets/gifs/ilybugGIF.webp')
       ilybug.position(495, 213);
       ilybug.size(280, AUTO);
     }
      if (beat >13) {
       catkiss = createImg('assets/gifs/catkissGIF.webp')
       catkiss.position(245, 357);
       catkiss.size(320, AUTO);
      }  
      if (beat >14) {
       popeye = createImg('assets/gifs/popeyeluvGIF.gif')
       popeye.position(245, 20);
       popeye.size(320, AUTO);
      }
      if (beat >15) {
       poohbear = createImg('assets/gifs/pooluvGIF.gif')
       poohbear.position(0, 150);
       poohbear.size(320, AUTO)
      }
       if (beat >16) {
       penguin = createImg('assets/gifs/penguinloveGIF.webp')
       penguin.position(478, 214);
       penguin.size(320, AUTO);
       }
       if (beat >17) {
       minniekiss = createImg('assets/gifs/mickyminnieGIF.gif')
       minniekiss.position(245, 216);
       minniekiss.size(320, AUTO);
     }

  }
}

function mousePressed() {
  if (!song.isPlaying()) {
    song.play()
    beatTime = millis()
    beat = 1
  } else {
    song.stop()
  }
}