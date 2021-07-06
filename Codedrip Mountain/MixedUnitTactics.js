// Practice using modulo to loop over an array

// Choose the mix and order of units you want to summon by populating this array:
var summonTypes = ["soldier", "archer", "soldier", "archer", "soldier"]; 
var defendPointsS = [{"x":40, "y": 45},{"x":40, "y": 40},{"x":40, "y": 35},{"x": 40, "y": 30}, {"x": 40, "y": 25}];
var defendPointsA = [{"x":35, "y": 42},{"x":35, "y": 37},{"x":35, "y": 32}];

function commandArcher(archer) {
    var nearest = archer.findNearestEnemy();
    hero.command(archer, "attack", nearest);
}

function commandTroops(dude, indexofdude) {
    if (dude == "archer") {
       hero.command(dude, "defend", defendPointsA[indexofdude %3]); 
    } else {
        hero.command(dude, "defend", defendPointsS[indexofdude %5]); 
    }
    //var nearest = dude.findNearestEnemy();
    //hero.command(dude, "attack", nearest);
}

function summonTroops() {
    var type = summonTypes[hero.built.length % summonTypes.length];
    if(hero.gold >= hero.costOf(type)) {
        return type;
        //hero.summon(type);
    } else {
        return "skip";
    }
}


let action = "";

while(true) {
    var item = hero.findNearestItem();
    var flag = hero.findFlag("green");
    var enemies = hero.findEnemies();
    action = summonTroops();
    if (action != "skip" && enemies) {
        hero.summon(action);
        commandTroops(hero.built[hero.built.length - 1], hero.built.length - 1);
    }
    if (flag) {
        hero.move(flag.pos);
    } else {
        hero.move(item.pos);
    }
}   

