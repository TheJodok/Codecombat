// Defeat Yetis.

// The chosen one can stun yetis with a Shout.
var chosen = hero.findFriends()[0];

// The power of the Shout is equal to the area of a circle.
var radius = chosen.distanceTo(chosen.findNearestEnemy());
// The area of a circle can be calculated with the formula:
var area = radius * radius * Math.PI;
// Tell the area to the chosen one.
hero.say(area);
// Don't just stand there! Fight!
var targets = hero.findByType("yeti");
while(true) {
    hero.attack(hero.findNearest(hero.findByType("yeti")));
}

