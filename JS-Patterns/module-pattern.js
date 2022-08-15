// Module Pattern
// Used to keep pieces of code independents from other components

// 1. Create a module that allow the user to calculate the area and circumference of a circle

const Circle = (() => {
  const PI = 3.1416

  return {
    area: (r) => 2 * PI * r,
    circumference: (r) => PI * r * r,
  }
})()

console.log(Circle.area(10))
console.log(Circle.circumference(10))
