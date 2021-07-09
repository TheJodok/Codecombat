// Pender wants to test you on a series of trials. Use your boss star to clear off the ogres! Remember, you cannot move or attack in this level.
function summonTroops(){
    // These are just an example. Feel free to use griffin riders and/or other units!
    if (hero.gold >= 40){
        hero.summon("archer"); 
        hero.summon("soldier");
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
         if (items_nah[0]) {hero.command(unit, "move", {x:items_nah[0].pos.x, y:items_nah[0].pos.y});}
        var item = unit.findNearestItem();
        hero.command(unit, "move", {x:items_nah[0].pos.x, y:items_nah[0].pos.y});
    }
}

while (true){
    summonTroops();
    var friends = hero.findFriends();
    // Iterate over all troops using a for loop. Make peasants collect coins. Combat troops fight. 
    for (let dude in friends) {
        // hero.say(friends[dude].type);
        if (friends[dude].type != "peasant") {
            if (friends[dude].type == "soldier") {
                hero.command(friends[dude], "defend", {x:25,y:34});
            } else {
                hero.command(friends[dude], "defend", {x:20,y:34});
            }
        } else {
            pickUpCoin(friends[dude]);
        }
            
    }
}

