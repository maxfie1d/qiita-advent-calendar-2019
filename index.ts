import {} from "ramda";
import { maybe, Maybe, Nothing } from "folktale";

const maybe1: Maybe<string> = maybe.Just("abc");
const maybe2: Maybe<string> = maybe.Nothing();
