'use strict'

import { test } from "../../../node_modules/tape";
import { countLetters } from "./count-letters";

test('Testing Lettercounting:', (t: any) => {
  t.plan(2);
  t.deepEqual(countLetters('azt'), {a: 1, z: 1, t: 1});
  t.deepEqual(countLetters('csocsi'), {c: 2, s: 2, o: 1, i: 1});
})

