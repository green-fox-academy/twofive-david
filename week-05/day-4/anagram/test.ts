'use strict'

import { test } from "../../../node_modules/tape";
import { anagram } from "./anagram"

test('Testing anagram function', (t: any) => {
  t.equal(anagram('restful', 'fluster'), true);
  t.end();
})