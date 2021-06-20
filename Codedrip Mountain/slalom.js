// Use object literals to walk the safe path and collect the gems.
// You cannot use moveXY() on this level! Use move() to get around.
let gems = hero.findItems();
let tarX = 0;
let tarY = 0;

function movetoxy(x, y) {
    while(hero.pos.x != x && hero.pos.y != y) {
       hero.move({
                'x': tarX,
                'y': tarY});
    }
}

// Get to the last couple of gems yourself!
for (let i = 0; i < gems.length; i++) {
    // for each gem you have to move x+5 and y+10 and x+5 and y-10
    //bc movexy is rescricted, move with object is to be used
    //move only does one step, therefore while needed
    tarX = hero.pos.x + 5
    tarY = hero.pos.y + 10
    movetoxy(tarX, tarY);
    tarX = hero.pos.x + 5
    tarY = hero.pos.y - 10
    movetoxy(tarX, tarY);
}

