// The goal is to survive for 30 seconds, and keep the mines intact for at least 30 seconds.
function rideronside() {
    var enemies = hero.findEnemies();
    for (var i in enemies) {
        if (enemies[i].pos.x < 36) {
            return true; 
        } 
    }
}

function chooseStrategy() {
    var enemies = hero.findEnemies();
    if (hero.gold >= hero.costOf("griffin-rider")) {
        return "griffin-rider"; // If you can summon a griffin-rider, return "griffin-rider"
    } else if (rideronside()) {
        return "fight-back"; // If there is a fangrider on your side of the mines, return "fight-back"
    } else {
        return "collect-coins"; // Otherwise, return "collect-coins"
    }
        
}

function commandAttack() {
    // Command your griffin riders to attack ogres.
    var friends = hero.findFriends();
    var enemies = hero.findEnemies();
    for (var i in friends) {
        hero.command(friends[i], "defend", ({x: 58, y:42}));
    }
}

function compare(a, b) {
  if (a.value < b.value) return 1;
  if (b.value < a.value) return -1;
  return 0;
}

function pickUpCoin2() {
    var item = hero.findNearestItem();
    hero.move(item.pos);
}

function pickUpCoin() {
    // Collect coins
    var items = hero.findItems();
    var items_nah = [];
    for (var c in items) {
        if (hero.distanceTo(items[c]) < 10) {
            items_nah.push(items[c]);
        }
    }
    if (items_nah != []) {
         items_nah.sort(compare);
         if (items_nah[0]) {hero.moveXY(items_nah[0].pos.x, items_nah[0].pos.y);}
    } else {
        var item = hero.findNearestItem();
        hero.moveXY(item.pos.x, item.pos.y);
    }
}

function heroAttack() {
    // Your hero should attack fang riders that cross the minefield.
    var enemy = hero.findNearestEnemy();
    while(enemy.health > 0) {
        hero.attack(enemy);
    }
}


while(true) {
    var strategy = chooseStrategy();
    // Call a function, depending on what the current strategy is.
    // hero.say(strategy);
    if (strategy == "griffin-rider") {
        hero.summon("griffin-rider");
        commandAttack();
    } else if (strategy == "fight-back") {
        // hero.say("ok2");
         heroAttack();
    } else {
        // hero.say("ok3");
        pickUpCoin();
    }
}

