import "reflect-metadata";

// const plane = {
//   color: "red"
//   // note: "hi htere"
// };

// Reflect.defineMetadata("note", "hi there", plane, "color");
// Reflect.defineMetadata("height", 10, plane);

// const note = Reflect.getMetadata("note", plane, "color");
// const height = Reflect.getMetadata("height", plane);

// console.log(note, height);

@printMetadata
class Plane {
  color: string = "red";

  @markFunction("Hi THEREE")
  fly(): void {
    console.log("vrrrrrrrr");
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
