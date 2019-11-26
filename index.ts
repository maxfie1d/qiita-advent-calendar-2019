import {} from "ramda";
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
