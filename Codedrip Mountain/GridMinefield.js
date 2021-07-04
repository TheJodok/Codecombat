// The ogre formation is marching at the village.
// We have 90 seconds to build a minefield.
// We'll use their strict formation against them.

// Use nested loops to build the grid minefield.
// First iterate x coordinates from 12 to 60 with step 8.
for (var x = 12; x < 12 + 8 * 6; x += 8) {
    // For each x iterate y cordinates from 12 to 68 with step 8.
    for (var y = 12; y < 12 + 8 * 7; y += 8) {
        // For each point build "fire-trap" there.
        hero.buildXY("fire-trap", x, y);
    }
    // After each column, it's better to move right to avoid own traps.
    hero.moveXY(hero.pos.x + 8, hero.pos.y);
}

// Now wait and watch the coming ogres.
// When they are near (about 20 metres from the hero) blow mines with your hero.
// Just move at the nearest mine when it's the time.
while(true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    if (distance <= 20) {
        hero.moveXY(52, 55);
    }
}

