// You only have 20 seconds until the ogre horde arrives!
// Grab as much gold as you can, then retreat to your base and wall it off!
while(hero.time < 19) {
    // Collect coins
    //hero.say("I should pick up a coin"); //uses time
    let item = hero.findNearestItem();
    hero.moveXY(item.pos.x, item.pos.y);
}

while(hero.pos.x > 16) {
    // Retreat behind the fence
    //hero.say("I should retreat"); //uses time
    hero.jumpTo({'x':15, 'y':38});
    hero.moveXY(15, 38);
}

// Build a fence to keep the ogres out.
hero.buildXY("fence", 21, 38);
hero.buildXY("fence", 21, 36);

