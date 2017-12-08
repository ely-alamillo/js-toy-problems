// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's
// speed, integer > 0) and a lead g (integer > 0) how long will it take B to
// catch A?

// The result will be an array [hour, min, sec] which is the time needed
// in hours, minutes and seconds (don't worry for fractions of second).

// If v1 >= v2 then return null
//
// Examples
// race(720, 850, 70) => [0, 32, 18]
// race(80, 91, 37)   => [3, 21, 49]

const race = (v1, v2, g) => {

    const turtleOne = v1;
    const turtleTwo = v2;
    const lead = g;

    if (turtleOne >= turtleTwo) return null;

    const speedDiff = turtleTwo - turtleOne;
    const hour = Math.floor(lead / speedDiff);
    const min = Math.floor((lead % speedDiff) * 60 / speedDiff);
    const sec = Math.floor((((lead % speedDiff) * 60) % speedDiff) * 60 / speedDiff)

    return [hour, min, sec]
}

console.log(race(720, 850, 70))   //->, [0, 32, 18])
console.log(race(80, 91, 37)) //->, [3, 21, 49])
console.log(race(80, 100, 40))  //->, [2, 0, 0])
