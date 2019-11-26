import * as R from "ramda";
import { maybe, Maybe, Result, result } from "folktale";

function trueOrFalse() {
  return false || true;
}

/**
 *  __  __             _            ____                 _ _
|  \/  | __ _ _   _| |__   ___  |  _ \ ___  ___ _   _| | |_
| |\/| |/ _` | | | | '_ \ / _ \ | |_) / _ \/ __| | | | | __|
| |  | | (_| | |_| | |_) |  __/ |  _ <  __/\__ \ |_| | | |_
|_|  |_|\__,_|\__, |_.__/ \___| |_| \_\___||___/\__,_|_|\__|
              |___/
 */

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

/**
 *  ___                           _        _     _
|_ _|_ __ ___  _ __ ___  _   _| |_ __ _| |__ | | ___
 | || '_ ` _ \| '_ ` _ \| | | | __/ _` | '_ \| |/ _ \
 | || | | | | | | | | | | |_| | || (_| | |_) | |  __/
|___|_| |_| |_|_| |_| |_|\__,_|\__\__,_|_.__/|_|\___|
 */

const array = [1, 2, 3];
// Mutable
array.push(4);

const array5 = R.append(5, array);
const array0 = R.prepend(0, array);

console.log(array5); // => [1, 2, 3, 4, 5]
console.log(array0); // => [0, 1, 2, 3, 4]

/**
 *   ____
 / ___|   _ _ __ _ __ _   _
| |  | | | | '__| '__| | | |
| |__| |_| | |  | |  | |_| |
 \____\__,_|_|  |_|   \__, |
                      |___/
 */

const add3 = (a: number, b: number, c: number) => a + b + c;
const curriedAdd = R.curry(add3);

console.log(add3(1, 2, 3)); // => 6
console.log(curriedAdd(1)(2, 3)); // => 6
console.log(curriedAdd(1, 2)(3)); // => 6
console.log(curriedAdd(1)(2)(3)); // => 6

/**
 *  ____  _            _ _
|  _ \(_)_ __   ___| (_)_ __   ___
| |_) | | '_ \ / _ \ | | '_ \ / _ \
|  __/| | |_) |  __/ | | | | |  __/
|_|   |_| .__/ \___|_|_|_| |_|\___|
        |_|
  ____                                _ _   _
 / ___|___  _ __ ___  _ __   ___  ___(_) |_(_) ___  _ __
| |   / _ \| '_ ` _ \| '_ \ / _ \/ __| | __| |/ _ \| '_ \
| |__| (_) | | | | | | |_) | (_) \__ \ | |_| | (_) | | | |
 \____\___/|_| |_| |_| .__/ \___/|___/_|\__|_|\___/|_| |_|
                     |_|
 */

type Fn = (xs: number[]) => number[];
const f: Fn = R.filter(x => x % 2 === 0);
const g: Fn = R.map(x => x * 2);
const h: Fn = R.filter(x => x > 5);
const numbers = R.range(1, 10);

const r1 = R.pipe(f, g, h)(numbers);
const r2 = R.compose(f, g, h)(numbers);

console.log(r1); // => [8, 12, 16]
console.log(r2); // => [12, 14, 16, 18]
