
            // text
            var textY = [];
            var textX = [];


            // rgb colors
            var color1;

             var color2;

             var color3;




            function setup() {
                createCanvas(displayWidth, displayHeight);

               // SET text width and height to random
              for (let i = 0; i < 100; i++) {

                textY[i] = random(0,height);
                textX[i] = random(410,600);



              }

               // FILL TEXT GREEN
                fill(0,255,0);

            }

            function draw() {


                 background(255);
                // TEXT
              textAlign(LEFT);
              textSize(20);
              strokeWeight(1);




            // height increases
              for (let i = 0; i < textY.length; i++) {

                text("keysanity", textX[i] - 390, textY[i]); // draw text
                text("words", textX[i] - 200, textY[i]); // draw text
                text("keysanity", textX[i] - 50, textY[i]); // draw text
                text("words", textX[i] + 100 , textY[i]); // draw text
                // text("keysanity", textX[i], textY[i]); // draw text
                // text("words", textX[i], textY); // draw text
                // text("keysanity", textX[i], textY[i]); // draw text
                // text("words", textX[i], textY[i]); // draw text
                // text("keysanity", textX[i], textY[i]); // draw text
                // text("words", textX[i], textY[i]); // draw text


                textY[i]++; // text height increases by 1

                // if text is greater than the canvas height
                if (textY[i] > height) {

                  textY[i] = 0; // set text height to 0, reset height
                }
              }
            }























// function setup() {
//               noCanvas(); // get rids of canva
//             }


            document.getElementById("start").innerHTML = "Press your spacebar to start";

              function keyPressed() {
                if(keyCode == 32) { // when the user clicks their spacebar
                  location.replace("https://sanilac6459.github.io/sep11-freedom-project-typing-game/main/index.html")
                }
              }