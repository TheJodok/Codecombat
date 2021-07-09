// Find the soldiers who break the circle.

// All soldiers should be on the circle with the radius:
var circleRadius = 20;

// The function checks if an unit is placed on the circle
// with the radius with the hero in the center.
function onCircle(unit, radius) {
    var distance = hero.distanceTo(unit);
    // We check the approximation.
    var inaccuracy = 2;
    var minDistance = radius - inaccuracy;
    var maxDistance = radius + inaccuracy;
    return distance <= maxDistance && distance >= minDistance;
}

while(true) {
    var soldiers = hero.findByType("soldier");
    for (var index = 0; index < soldiers.length; index++) {
        var soldier = soldiers[index];
        // Use onCircle function to find
        if (!(onCircle(soldier, circleRadius))) {
            hero.say(soldier.id);
        }
        // if the soldier is not on the circle:
            // Then say their name (`id`) to get rid of that one:
         
    }
}
