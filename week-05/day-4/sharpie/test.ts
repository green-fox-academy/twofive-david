'use strict'

import { test } from "../../../node_modules/tape";
import { Sharpie } from "./sharpie";

test('Testing Sharpie use() method:', (t: any) => {
  const mySharpie = new Sharpie('red', 40);
  t.equal(mySharpie.inkAmount, 100);
  mySharpie.use()
  t.equal(mySharpie.inkAmount, 99);
  t.end();
})