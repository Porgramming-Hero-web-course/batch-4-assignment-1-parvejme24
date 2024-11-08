type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
  if (shape.shape === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }
  throw new Error("Invalid shape");
}

// functiona checking
// ========================

// input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 6 });

// output
console.log(circleArea);

// input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 3,
  height: 5,
});

// output checking
console.log(rectangleArea);
