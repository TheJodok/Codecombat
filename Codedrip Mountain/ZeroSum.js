// Defeat the enemy hero in two minutes.

function compare(a, b) {
    if (a.value < b.value) return 1;
    if (b.value < a.value) return -1;
    return 0;
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
           var item = hero.findNearestItem();
           hero.moveXY(item.pos.x, item.pos.y);
      }
  }
  
  while(true) {
      var enemies = hero.findEnemies();
      var nearestEnemy = hero.findNearest(enemies);
      
      // Your hero can collect coins and summon troops.
      if (hero.gold > hero.costOf("soldier")) {
          hero.summon("soldier");
      }
      
      // She also commands your allies in battle.
      var friends = hero.findFriends();
      for (var friendIndex = 0; friendIndex < friends.length; ++friendIndex) {
          var friend = friends[friendIndex];
          hero.command(friend, "attack", friend.findNearest(enemies));
      }
      
      // Use your hero's abilities to turn the tide.
      if (hero.distanceTo(nearestEnemy) < 10) {
          hero.attack(nearestEnemy);
      } else {
          pickUpCoin();
      }
  }
  
  
  
  