// Form the rectangle of units around the peasant.
// You need 2 archers and 2 soldiers.

// This function can be helpful.
function summonAndSend(type, x, y) {
    hero.summon(type);
    var unit = hero.built[hero.built.length-1];
    hero.command(unit, "move", {x: x, y: y});
}

// The rectangle should be formed around the peasant.
var centerUnit = hero.findNearest(hero.findFriends());
// It's the center of the rectangle.
var center = centerUnit.pos;
// Also you need the height and width.
var rectWidth = centerUnit.rectWidth;
var rectHeight = centerUnit.rectHeight;

// First "soldier" to the left bottom corner of the rectangle.
var leftBottomX = center.x - rectWidth / 2;
var leftBottomY = center.y - rectHeight / 2;
summonAndSend("soldier", leftBottomX, leftBottomY);

// An "archer" to the left top corner.
var leftTopX = center.x - rectWidth / 2;
var leftTopY = center.y + rectHeight / 2;
summonAndSend("archer", leftTopX, leftTopY);

// Summon and send a "soldier" to the right top corner.
var rightTopX = center.x + rectWidth / 2;
var rightTopY = center.y + rectHeight / 2;
summonAndSend("soldier", rightTopX, rightTopY);

// Summon and send an "archer" to the right bottom corner.
var rightBottomX = center.x + rectWidth / 2;
var rightBottomY = center.y - rectHeight / 2;
summonAndSend("archer", rightBottomX, rightBottomY);

// Now hide or fight.

