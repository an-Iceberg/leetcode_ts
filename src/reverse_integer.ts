// https://leetcode.com/problems/reverse-integer/description/
export function reverse(x: number): number
{
  const is_negative = x < 0 ? true : false

  const x_rev = Math.abs(parseInt(
    x.toString()
      .split('')
      .reverse()
      .join(''),
  ))

  if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1)
  {
    return 0
  }

  return is_negative ? -x_rev : x_rev
}
