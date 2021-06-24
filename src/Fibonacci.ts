// This bad boy returns ints that can get *so* big!
export function fibonacci(n: bigint) {
  let result = 1n;
  for (let last = 0n, i = 0n; i < n; i++) {
    const current = result;
    result += last;
    last = current;
  }
  return result;
}