// Complete the paladin rectangle to protect the village.

// This function finds the left-most unit.
function findMostLeft (units) {
    if (units.length === 0) {
        return null;
    }
    var mostLeft = units[0];
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        if (unit.pos.x < mostLeft.pos.x) {
            mostLeft = unit;
        }
    }
    return mostLeft;
}

// This function finds the bottom-most unit:
function findMostBottom (units) {
    if (units.length === 0) {
        return null;
    }
    var mostBottom = units[0];
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        if (unit.pos.y < mostBottom.pos.y) {
            mostBottom = unit;
        }
    }
    return mostBottom;
}

var paladins = hero.findByType("paladin");
// Find the top left paladin with findMostLeft function:
let topleftpala = findMostLeft (paladins);
// Find the bottom right paladin with findMostBottom function:
let botrightpala = findMostBottom (paladins);

// Use X coordinate from the top left paladin:
// and Y coordinate from the bottom right paladin:
let x_cor = topleftpala.pos.x;
let y_cor = botrightpala.pos.y;
// Move to the {X, Y} point from the previous step:
hero.moveXY(x_cor, y_cor);
// Continue to shield while the volcano is erupting:
while(true) {
    hero.shield();
}
