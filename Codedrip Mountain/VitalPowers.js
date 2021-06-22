// If the peasant is damaged, the flowers will shrink!

function summonSoldiers() {
    if (hero.gold >= hero.costOf("soldier")) {
        hero.summon("soldier");
    }
}

// Define the function: commandSoldiers
function commandSoldiers() {
    var friends = hero.findFriends();
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].type == "soldier") {
            if ( i % 2 === 0) {
                let ziel = friends[i].findNearestEnemy();
                hero.command(friends[i], "attack", ziel);
            } else {
                hero.command(friends[i], "defend", peasant);
            }
        }
    }
}

// Define the function: pickUpNearestCoin
function pickUpNearestCoin() {
    var items = hero.findItems();
    var nearestCoin = hero.findNearest(items);
    if(nearestCoin) {
        hero.move(nearestCoin.pos);
    }
}

var peasant = hero.findByType("peasant")[0];

while(true) {
    summonSoldiers();
    commandSoldiers();
    let enemy = hero.findNearest(hero.findEnemies());
    if (enemy) {
        if (hero.isReady("cleave") && hero.distanceTo(enemy) < 3) {
            hero.cleave(enemy);
        }
    }
    pickUpNearestCoin();
}
