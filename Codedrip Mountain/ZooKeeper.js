// Protect the cage.
// Put a soldier at each X.
var points = [];
points[0] = {x: 33, y: 42};
points[1] = {x: 47, y: 42};
points[2] = {x: 33, y: 26};
points[3] = {x: 47, y: 26};

// 1. Collect 80 gold.
while (hero.gold <= 80) {
    let item = hero.findNearestItem();
    hero.move({x:item.pos.x,y: item.pos.y});
}
// 2. Build 4 soldiers.
for(let i=0; i < 4; i++) {
    hero.summon("soldier");
}

// 3. Send your soldiers into position.
while(true) {
    var friends = hero.findFriends();
    for(var j=0; j < friends.length; j++) {
        let point = points[j];
        let friend = friends[j];
        let enemy = friend.findNearestEnemy();
        if(enemy && enemy.team == "ogres" && friend.distanceTo(enemy) < 5) {
            // Command friend to attack.
            hero.command(friend, "attack", enemy);
        } else {
            // Command friend to move to point.
            hero.command(friend, "move", point);
        }
    }
}
