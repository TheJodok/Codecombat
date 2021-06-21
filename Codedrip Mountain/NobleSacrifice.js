// Collect 80 gold
while (hero.gold <= 80) {
    let item = hero.findNearestItem();
    hero.move({x: item.pos.x, y: item.pos.y});
}
// Build 4 soldiers to use as bait
for (let a = 0; a < 4; a++) {
    hero.summon("soldier");
}
// Send your soldiers into position
var points = [];
points[0] = { x: 13, y: 73 };
points[1] = { x: 51, y: 73 };
points[2] = { x: 51, y: 53 };
points[3] = { x: 90, y: 52 };
var friends = hero.findFriends();

// Use a for-loop to loop over i from 0 to 4
// Match the friends to the points and command them to move
for (let i = 0; i < 4; i++) {
    hero.command(friends[i], "move", points[i]);
}
