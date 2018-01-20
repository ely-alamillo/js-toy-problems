/**
 *  Instructions from your teacher:
    Write a function findOverlap to find the rectangular intersection of two given rectangles. 

    They are defined as objects like this:

    const rectangle1 = {
    leftX: 1,
    bottomY: 5,
    width: 10,
    height: 4,
    };

    Your function should return an object in this format as well.

    In the case they don't overlap, all values should be null.
* 
*/

function findOverlap(rectangle1, rectangle2) {
    let xOverlap = findOver(rectangle1.leftX, rectangle1.width, rectangle2.leftX, rectangle2.width);
    let yOverlap = findOver(rectangle1.bottomY, rectangle1.height, rectangle2.bottomY, rectangle2.height);
    if (!xOverlap || !yOverlap) {
        return { leftX: null, bottomY: null, width: null, height: null };
    }
    return { leftX: xOverlap.start, bottomY: yOverlap.start,
             width: xOverlap.overlapLength,height: yOverlap.overlapLength };
}
  
const findOver = (point1,length1,point2,length2) => {
    let highestStart = Math.max(point1,point2);
    let lowestEnd = Math.min(point1+length1,point2+length2);
    if (highestStart >= lowestEnd) {
      return null;
    }
    let overlapLength = lowestEnd-highestStart;
    return { start: highestStart, overlapLength: overlapLength };
};
  
  const r1 = {
    leftX: 1,
    bottomY: 5,
    width: 15,
    height: 5,
  }
  
  const r2 = {
    leftX: 6,
    bottomY: 1,
    width: 10,
    height: 10,
  }
  
  findOverlap(r1, r2) // -> returns intersection