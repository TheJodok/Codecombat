// Collect all the coins!
function commandPeasant(peasant, coins) {
    // Find the nearest coin to the `peasant` from the `coins` array,
    var nearest = peasant.findNearest(coins);
    if (nearest) {
        hero.command(peasant, "move", {
            x: nearest.pos.x,
            y: nearest.pos.y
        });
    }
}
var friends = hero.findFriends();
var peasants = {
    "Aurum": friends[0],
    "Argentum": friends[1],
    "Cuprum": friends[2]
};
while (true) {
    var items = hero.findItems();
    var goldCoins = [];
    var silverCoins = [];
    var bronzeCoins = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.value == 3) {
            goldCoins.push(item);
        } else if (item.value == 2) {
            silverCoins.push(item);
        } else if (item.value == 1) {
            bronzeCoins.push(item);
        }
    }
    commandPeasant(peasants.Aurum, goldCoins);
    commandPeasant(peasants.Argentum, silverCoins);
    commandPeasant(peasants.Cuprum, bronzeCoins);
}
