const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2
  }

  get circumference() {
    return ( this.radius * 2 ) * pi
  }

  set circumference(circumference) {
    this.radius = circumference / ( pi * 2 )
  }

  get area() {
    return pi * ( this.radius * this.radius )
  }

  set area(area) {
    this.radius = Math.sqrt( area / pi )
  }
}

// class Square {
//   constructor(_sideLength) {
//     this._sideLength = _sideLength;
//   }
//   get area() {
//     return this._sideLength * this._sideLength;
//   }
//   set area(newArea) {
//     if (newArea > 0) {
//       this.__sideLength = Math.sqrt(newArea)
//     } else {
//       console.warn("Area cannot be less than 0");
//     }
//   }
// }
// let square           = new Square(5);
// square._sideLength; //=> 5
// square.area;       //=> 25
// square.area          = 64;
// square._sideLength; //=> 8
// square.area;       //=> 64