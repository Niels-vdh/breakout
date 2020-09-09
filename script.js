/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
var balX = 50;
var balY = 50;
var speedX = 3;
var speedY = 3;
}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
    // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  fill(100, 100, 255);

  // teken een cirkel
  ellipse(balX,balY,80,80);

    balX = balX + speedY;
    if (balX >= 1240) {
        speedX = speedX * -1;
    }
    balX

    balY = balY + speedY;
    if (balY >= 680) {
        speedY = speedY * -1;
    }
    balY
}
