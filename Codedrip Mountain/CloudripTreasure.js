// Your goal is to collect coins / gems.
// This level is repeatable. If you win, the difficulty and rewards will increase.
// If you fail, you have to wait a day to resubmit.
// This level is an optional challenge level. You don't need to beat it to continue the campaign!

function summonTroops(){
    // These are just an example. Feel free to use griffin riders and/or other units!
    if (hero.gold >= 40){
        hero.summon("archer"); 
        //hero.summon("soldier");
    }
}

function compare(a, b) {
  if (a.value < b.value) return 1;
  if (b.value < a.value) return -1;
  return 0;
}

function pickUpCoin(unit) {
    // Collect coins
    var items = unit.findItems();
    var items_nah = [];
    for (var c in items) {
        if (unit.distanceTo(items[c]) < 10) {
            items_nah.push(items[c]);
        }
    }
    if (items_nah != []) {
        items_nah.sort(compare);
        if (items_nah[0]) {hero.command(unit, "move", {x:items_nah[0].pos.x, y:items_nah[0].pos.y});} else {
        var item = unit.findNearestItem();
        hero.command(unit, "move", item.pos);}
    }
}

while (true){
    summonTroops();
    var friends = hero.findFriends();
    // Iterate over all troops using a for loop. Make peasants collect coins. Combat troops fight. 
    for (let dude in friends) {
        // hero.say(friends[dude].type);
        if (friends[dude].type != "peasant") {
            hero.command(friends[dude], "defend", {x:77,y:59});
        } else {
            pickUpCoin(friends[dude]);
        }
    }
    if (hero.findNearestEnemy()) {      
        hero.attack(hero.findNearestEnemy());
    }
}

