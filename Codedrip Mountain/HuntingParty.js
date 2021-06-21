// You can use findNearestEnemy() on your soldiers to get their nearest enemy instead of yours.
while (true) {
    let friends = hero.findFriends();
    // Use for-loop and for each friend:
    for (let i = 0; i < friends.length; i++) {
        // If they see an enemy then command to attack.
        let enemy = friends[i].findNearestEnemy();
        if (enemy) {
            hero.command(friends[i], "attack", enemy);
        } else {
        // Command to move east by small steps.
            hero.command(friends[i], "move", {
                                                x: friends[i].pos.x + 1,
                                                y: friends[i].pos.y});
        }
    }
}
