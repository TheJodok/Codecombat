while(true) {
    // Collect gold.
    let item = hero.findNearestItem();
    hero.moveXY(item.pos.x, item.pos.y);
    // If you have enough gold, summon a soldier.
    if (hero.gold > 20) {
        hero.summon("soldier");
    }
    // Use a for-loop to command each soldier.
    let friends = hero.findFriends();
    // For-loops have 3 parts, separated by semicolons.
    // for(initialization; condition; expression)
    // Initialization is done at the start of the first loop.
    // The loops continue while condition is true.
    for(var friendIndex = 0; friendIndex < friends.length; friendIndex++) {
        var friend = friends[friendIndex];
        if(friend.type == "soldier") {
            let enemy = friend.findNearestEnemy();
            // If there's an enemy, command her to attack.
            // Otherwise, move her to the right side of the map.
            if (enemy) {
                hero.command(friends[friendIndex], "attack", enemy);
            } else {
                hero.command(friends[friendIndex], "move", {'x':75, 'y':50});
            }
        }
    }
}
