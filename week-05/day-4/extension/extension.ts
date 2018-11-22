'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  return Math.max(...arguments);
};

export function median(pool: number[]): number {
  return pool.reduce((a, b) => a + b) / pool.length;
}

export function isVowel(character: string): boolean {
  return (['a', 'u', 'o', 'e', 'i'].includes(character.toLowerCase()));
}

export function translate(hungarian: string): string {
  const hunArr = hungarian.split('');

  for (let i = 0; i < hunArr.length; i++) {
    if (isVowel(hunArr[i])) {
      hunArr.splice(i, 1, `${hunArr[i]}v${hunArr[i]}`);
    }
  }
  return hunArr.join('');
}