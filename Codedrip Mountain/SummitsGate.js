
function moveArmies(x, y, aktion) {
    for (var i = 0; i < aFriends.length; i++) {
        hero.command(aFriends[i], aktion, {
            'x': x,
            'y': y
        });
    }
}

function findAndKill(sType) {
    var topEnemy = hero.findNearest(hero.findByType(sType));
    if (topEnemy && topEnemy.health > 0) {
        hero.attack(topEnemy);
        return true;
    }
    return false;
}

// store first grup of Army
var aFriends = hero.findFriends();
// frist order, defend start position
moveArmies(hero.pos.x, hero.pos.y, "defend");

//#Gate 0.
// first destroy catapult
var catas = hero.findByType("catapult");
for (var cata in catas) {
    while (catas[cata].health > 0) {
        hero.attack(catas[cata]);
    }
}

// move army next
//moveArmies(121, 33);
moveArmies(80, 33, "move");

//Verschnaufpause und kill den rest
while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy.type != "door") {
        hero.attack(enemy);
    } else {
        hero.say("No Enemies");
        break;
    }
}

hero.moveXY(82, 33);

//how many enemies?
var checken = hero.findEnemies();
if (checken.length === 3) {
    hero.say("Room Clean");
    var tore = checken;
}

// Clean Room 1
hero.attack(tore[0]);

//move Back to kill enemies
hero.moveXY(70, 33);
moveArmies(60, 33, "defend");

//kill enemies
var enemies = hero.findEnemies();
for (var e in enemies) {
    if (enemies[e].type != "door" && enemies[e].type != "tower" && enemies[e].health > 0) {
        hero.attack(enemies[e]);
    }
    moveArmies(90, 33, "defend");
}

//Hero, Palas attack tower
var turme = hero.findByType("tower");
hero.say(turme + " test");
var palas = hero.findByType("paladin");
for (var t in turme) {
    while(turme[t].health > 0) {
        hero.attack(turme[t]);
        if (hero.health < 600) {
            for (var p in palas) {
                hero.command(palas[p], "attack", turme[t]);
            }
        }
    }
}

hero.say("Room is clean");
moveArmies(145, 33, "move");
for (var p in palas) {
    hero.command(palas[p], "cast", "heal", hero);
}

// Clean Room 2
while (tore[1].health > 0) {hero.attack(tore[1]);}
moveArmies(242, 33, "defend");
var enemies = hero.findEnemies();
for (var e in enemies) {
    if (enemies[e].type != "door" &&  enemies[e].health > 0) {
        hero.attack(enemies[e]);
    }
}

var palas = hero.findByType("paladin");
for (var p in palas) {
    hero.command(palas[p], "cast", "heal", hero);
}
var aFriends = hero.findFriends();
moveArmies(270, 35, "defend");
hero.moveXY(270, 33);

var warlos = hero.findByType("warlock");
for (var u in aFriends) { hero.command(aFriends[u], "attack", warlos[1]); }
while (warlos[0].health > 0) {
        hero.attack(warlos[0]);
    }
moveArmies(270, 35, "defend");
hero.moveXY(250, 33);
var palas = hero.findByType("paladin");
for (var p in palas) {
    hero.command(palas[p], "cast", "heal", hero);
}
var enemies = hero.findEnemies();
for (var e in enemies) {
    if (enemies[e].type != "door" && enemies[e].health > 0) {
        hero.attack(enemies[e]);
    }
}
while(true) {
    for (var p in palas) { hero.command(palas[p], "cast", "heal", hero);}
    moveArmies(3000, 35, "defend");
    var enemy = hero.findNearestEnemy();
    hero.attack(enemy);
}


