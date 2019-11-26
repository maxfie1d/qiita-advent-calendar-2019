import * as R from "ramda";
import { maybe, Maybe, Nothing, Result, result } from "folktale";

function trueOrFalse() {
  return true;
}

const myMaybe: Maybe<number> = trueOrFalse()
  ? maybe.Just(123)
  : maybe.Nothing();

myMaybe.matchWith({
  Just: ({ value }) => {
    console.log(value); // => 123
  },
  Nothing: () => {
    console.log("値がないよ");
  }
});

const myResult: Result<string, number> = trueOrFalse()
  ? result.Ok(123)
  : result.Error("失敗だよ");

myResult.matchWith({
  Ok: ({ value }) => {
    console.log(value); // => 123
  },
  Error: ({ value }) => {
    console.log(value); // => 失敗だよ
  }
});

const array = [1, 2, 3];
// Mutable
array.push(4);

const array5 = R.append(5, array);
const array0 = R.prepend(0, array);

console.log(array5); // => [1, 2, 3, 4, 5]
console.log(array0); // => [0, 1, 2, 3, 4]
