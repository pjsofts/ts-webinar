function add(a: number | string, b: number | string, c = 0): number | string {
  if (typeof a == "number" && typeof b == "number") {
    return a + b + c;
  } else if (typeof a == "string" && typeof b == "string") {
    return a + b;
  }
  return 0;
}

function splitAndPrint(text: string) {
  text.split(" ");
  console.log(text);
}

add("hello", "how are you");
add(10, 20, 30);

splitAndPrint("Salam Hi");

let a: number;
a = 100;
splitAndPrint(a);
