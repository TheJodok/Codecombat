// Hunt for 4 yaks. Choose only the small ones.
// Small yak names contain a "bos" substring.


// Loop through all enemies.
var enemies = hero.findEnemies();
for (let e = 0; e < enemies.length; e++) {
    if (enemies[e].id.includes("bos")) {
        while(enemies[e].health > 0) {
            hero.attack(enemies[e]);
        }
    }
}
