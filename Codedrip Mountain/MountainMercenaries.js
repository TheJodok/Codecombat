// Gather coins to summon soldiers and have them attack the enemy.

while(true) {
    // Move to the nearest coin.
    // Use move instead of moveXY so you can command constantly.
    let item = hero.findNearestItem();
    hero.moveXY(item.pos.x, item.pos.y);
    
    // If you have funds for a soldier, summon one.
    if (hero.gold > hero.costOf("soldier")) {
        //hero.say("I should summon something here!");
        hero.summon("soldier");
    }
    let enemy = hero.findNearest(hero.findEnemies());
    if (enemy) {
        
        let soldiers = hero.findFriends();
        // Loop over all your soldiers and order them to attack.
        for (let i = 0; i < soldiers.length; i++) {
            hero.command(soldiers[i], "attack", enemy);
        }
    }
}