function func(a, b) {
  a += 1;
  b.push(1);
}

const a = 0;
const b = [];

func(a, b);

console.log(a, b);
