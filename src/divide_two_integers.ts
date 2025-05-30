// https://leetcode.com/problems/divide-two-integers/description/

// help: https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/#expected-approach-using-bit-manipulation-ologa-time-and-o1-space

export function divide(dividend: number, divisor: number): number
{
  const upper_bound = Math.pow(2, 31) - 1
  const lower_bound = -Math.pow(2, 31)

  // Handle constraints
  if (divisor == 0) return 0
  if (dividend <= lower_bound) return 0
  if (divisor >= upper_bound) return 0

  // Should result be negative
  const is_negative = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0) ? true : false

  let a = Math.abs(dividend)
  const b = Math.abs(divisor)

  let quotient = 0

  while (a >= b)
  {
    a -= b
    quotient++
  }

  // Note: sadly this doesn't work due to this: https://www.w3schools.com/js/js_bitwise.asp
  // Efficient implementation using bit manipulation
  // Iterate from MSb to LSb (b == bit)
  /*   for (let bit = 31; bit >= 0; bit--)
  {
    if (b << bit <= a)
    {
      a -= b << bit
      quotient |= 1 << bit
    }
  } */

  if (is_negative) quotient = -quotient

  if (quotient > upper_bound) return upper_bound
  if (quotient < lower_bound) return lower_bound

  return quotient
}
