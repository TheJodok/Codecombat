// You now have the Ring of Flowers! You can do:
// toggleFlowers(true/false) - turns flowers on or off.
// setFlowerColor("random") - can also be "pink", "red", "blue", "purple", "yellow", or "white".

// Here are some functions for drawing shapes:
// x, y - center of the shape
// size - size of the shape (radius, side length)
hero.drawCircle = function(x, y, size) {
    var angle = 0;
    hero.toggleFlowers(false);
    while (angle <= Math.PI * 2) {
        var newX = x + (size * Math.cos(angle));
        var newY = y + (size * Math.sin(angle));
        hero.moveXY(newX, newY);
        hero.toggleFlowers(true);
        angle += 0.2;
    }
};

hero.drawSquare = function(x, y, size) {
    hero.toggleFlowers(false);
    var cornerOffset = size / 2;
    hero.moveXY(x - cornerOffset, y - cornerOffset);
    hero.toggleFlowers(true);
    hero.moveXY(x + cornerOffset, y - cornerOffset);
    hero.moveXY(x + cornerOffset, y + cornerOffset);
    hero.moveXY(x - cornerOffset, y + cornerOffset);
    hero.moveXY(x - cornerOffset, y - cornerOffset);
};

var redX = {x: 28, y: 36};
var whiteX = {x: 44, y: 36};

// Pick a color.
hero.setFlowerColor("red");
// Draw a size 10 circle at the redX.
hero.drawCircle(28,36,10);
// Change the color!
hero.setFlowerColor("blue");
// Draw a size 10 square at the whiteX.
hero.drawSquare(44, 36, 10);
// Now experiment with drawing whatever you want!
hero.drawCircle(37, 20 ,10);
