'use strict'

import { test } from "../../../node_modules/tape";
import { fibonacci } from "./fibonacci";

test('testing my fincsi fibonacci sequence in gucci pulcsi:', (t: any) => {
  t.plan(3);
  t.equal(fibonacci(5), 5);
  t.equal(fibonacci(6), 8);
  t.equal(fibonacci(7), 13);
})

