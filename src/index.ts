
import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";



const fn = (x: number) : boolean => x > 3 ? true : false;

const a = O.of(3)

const b = O.ap(a)(O.some(fn))

const f = (a: string) => (b: number) => ({ a, b })

const res = pipe(
  O.some(f),
  O.ap(O.some("hello")),
  O.ap(O.some(12)),
)

console.log(res);