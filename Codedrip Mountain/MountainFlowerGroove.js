// This level is a place for making flower art.
// The real goal is to experiment and have fun!
// If you draw something with at least 1000 flowers, you will "succeed" at the level.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  hero.setFlowerColor("red");
  hero.toggleFlowers(true);
  let targetPos = {};
  while (true) {
      let decider = getRandomInt(2);
      switch(decider) {
        case 0:
          targetPos = {
              x: hero.pos.x + Math.random(),
              y: hero.pos.x + Math.random()
          };
          break;
        case 1:
          targetPos = {
              x: hero.pos.x - Math.random(),
              y: hero.pos.x - Math.random()
          };
          break;
      }
      hero.move(targetPos);
  }
  