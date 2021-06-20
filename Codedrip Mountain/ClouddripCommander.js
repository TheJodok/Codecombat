// Summon some soldiers, then direct them to your base.

// Each soldier costs 20 gold.
let anzahl = hero.gold / 20;

for (let i = 0; i < anzahl; i++) {
    hero.summon("soldier");
}
    
let soldiers = hero.findFriends();

// Add a while loop to command all the soldiers.
for (let a = 0; a < soldiers.length; a++) {
    hero.command(soldiers[a], "move", {x: 50, y: 40});
}

// Go join your comrades!
hero.moveXY(50, 40);
